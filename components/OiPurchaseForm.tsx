"use client";

import { useState } from "react";

const RAZORPAY_LINK = "https://pages.razorpay.com/pl_TamZPGaKwpokpp/view";
const ALLOWED = ["image/png", "image/jpeg", "image/jpg", "image/webp", "application/pdf"];
const MAX_BYTES = 5 * 1024 * 1024;

type Proof = { dataUrl: string; filename: string; contentType: string; size: number };

export function OiPurchaseForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [paidOpened, setPaidOpened] = useState(false);
  const [proof, setProof] = useState<Proof | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const detailsOk = name.trim().length >= 2 && email.includes("@") && mobile.replace(/\D/g, "").length >= 10;

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!ALLOWED.includes(file.type)) return setError("Proof must be a PNG, JPG, WEBP image or a PDF.");
    if (file.size > MAX_BYTES) return setError("Proof must be under 5 MB.");
    const reader = new FileReader();
    reader.onerror = () => setError("Could not read the file. Please try again.");
    reader.onload = () => setProof({ dataUrl: String(reader.result), filename: file.name, contentType: file.type, size: file.size });
    reader.readAsDataURL(file);
  }

  async function submit() {
    setError(null);
    if (!detailsOk) return setError("Please fill your name, a valid email and mobile number.");
    if (!proof) return setError("Please upload your payment proof to complete the purchase.");
    try {
      setLoading(true);
      const res = await fetch("/api/oi-purchase", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), mobile: mobile.trim(), proof: proof.dataUrl, filename: proof.filename }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setDone(true);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const input = "w-full rounded-xl border border-outline bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none";
  const label = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/60";

  if (done) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-emerald/30 bg-emerald/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-2xl text-white">✓</div>
        <h3 className="text-xl font-bold text-navy">Purchase received</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/70">
          Thank you, {name.split(" ")[0] || "there"}! We&apos;ve received your details and payment proof.
          Our team will verify your payment and contact you at <b>{email}</b> / <b>{mobile}</b> with your
          license key and installation help.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-xl space-y-6">
      {/* Step 1 — your details */}
      <div className="rounded-3xl border border-outline bg-white/80 p-6 shadow-glass">
        <h3 className="text-lg font-bold text-navy">1. Your details</h3>
        <p className="mt-1 text-sm text-navy/60">We use these only to record your purchase and to contact you.</p>
        <div className="mt-5 space-y-4">
          <div><label className={label}>Full name</label><input className={input} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rahul Sharma" /></div>
          <div><label className={label}>Email address</label><input className={input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></div>
          <div><label className={label}>Mobile number</label><input className={input} value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="10-digit mobile" /></div>
        </div>
      </div>

      {/* Step 2 — pay */}
      <div className="rounded-3xl border border-outline bg-white/80 p-6 shadow-glass">
        <h3 className="text-lg font-bold text-navy">2. Pay the platform fee</h3>
        <p className="mt-1 text-sm text-navy/60">Pay securely on Razorpay (opens in a new tab), then upload the receipt below.</p>
        <button
          type="button"
          disabled={!detailsOk}
          onClick={() => { setPaidOpened(true); window.open(RAZORPAY_LINK, "_blank", "noopener,noreferrer"); }}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy shadow-[0_8px_24px_rgba(224,168,30,0.35)] transition hover:bg-gold-light disabled:opacity-50"
        >
          Pay on Razorpay ↗
        </button>
        {!detailsOk && <p className="mt-2 text-xs text-navy/50">Fill your details above to enable payment.</p>}
      </div>

      {/* Step 3 — proof */}
      <div className="rounded-3xl border border-outline bg-white/80 p-6 shadow-glass">
        <h3 className="text-lg font-bold text-navy">3. Upload payment proof</h3>
        <p className="mt-1 text-sm text-navy/60">Screenshot or PDF of the Razorpay receipt. PNG, JPG, WEBP or PDF · max 5 MB.</p>
        {!proof ? (
          <label className={`mt-4 flex cursor-pointer flex-col items-center gap-1 rounded-2xl border-2 border-dashed p-6 text-center transition ${paidOpened ? "border-gold text-gold-ink" : "border-outline text-navy/60"}`}>
            <input type="file" accept="image/png,image/jpeg,image/webp,application/pdf" onChange={onFile} hidden />
            <span className="text-2xl">⇪</span>
            <span className="text-sm font-semibold">Upload payment proof</span>
          </label>
        ) : (
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald/40 bg-emerald/5 p-3">
            {proof.contentType.startsWith("image/") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={proof.dataUrl} alt="Payment proof" className="h-12 w-12 rounded-lg object-cover" />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">PDF</div>
            )}
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-navy">{proof.filename}</div>
              <div className="text-xs font-semibold text-emerald">{(proof.size / 1024).toFixed(0)} KB · attached</div>
            </div>
            <button type="button" onClick={() => setProof(null)} className="rounded-lg border border-outline px-3 py-1 text-sm text-navy/60 hover:text-navy" aria-label="Remove file">✕</button>
          </div>
        )}
      </div>

      {error && <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

      <button
        type="button"
        disabled={loading || !detailsOk || !proof}
        onClick={submit}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-semibold text-white transition hover:bg-navy/90 disabled:opacity-50"
      >
        {loading ? "Submitting…" : "Complete purchase"}
      </button>
      <p className="text-center text-xs leading-relaxed text-navy/50">
        Your payment is processed by Razorpay. After we verify it, we&apos;ll send your license key and help you
        install the OI Pulse Dashboard on your PC. The app runs locally with your own broker credentials.
      </p>
    </div>
  );
}
