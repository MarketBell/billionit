import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongo";
import { sendEmail } from "@/lib/brevo";

export const runtime = "nodejs";

const OWNER_EMAIL = process.env.OWNER_EMAIL || "billionitwealth@gmail.com";
const ALLOWED = ["image/png", "image/jpeg", "image/jpg", "image/webp", "application/pdf"];
const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const mobile = String(body.mobile || "").trim();
    const proof = String(body.proof || "");
    const filename = String(body.filename || "payment-proof").replace(/[^\w.\- ]/g, "").slice(0, 120) || "payment-proof";

    if (!name || name.length < 2) return NextResponse.json({ ok: false, error: "Please enter your full name." }, { status: 400 });
    if (!email || !email.includes("@")) return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    if (!mobile || mobile.replace(/\D/g, "").length < 10) return NextResponse.json({ ok: false, error: "Please enter a valid mobile number." }, { status: 400 });

    const m = proof.match(/^data:([\w.+/-]+);base64,([A-Za-z0-9+/=\s]+)$/);
    if (!m) return NextResponse.json({ ok: false, error: "Please upload a valid payment proof (image or PDF)." }, { status: 400 });
    const contentType = m[1].toLowerCase();
    const b64 = m[2].replace(/\s/g, "");
    if (!ALLOWED.includes(contentType)) return NextResponse.json({ ok: false, error: "Proof must be a PNG, JPG, WEBP image or a PDF." }, { status: 400 });
    const size = Buffer.from(b64, "base64").length;
    if (size <= 0) return NextResponse.json({ ok: false, error: "The proof file is empty." }, { status: 400 });
    if (size > MAX_BYTES) return NextResponse.json({ ok: false, error: "Proof must be under 5 MB." }, { status: 400 });

    const db = await getDb();
    const inserted = await db.collection("oi_purchases").insertOne({
      product: "OI Pulse Dashboard",
      name, email, mobile,
      proof: `data:${contentType};base64,${b64}`,
      filename, contentType, size,
      status: "pending",
      created_at: new Date(),
    });
    const ref = String(inserted.insertedId);

    // Best-effort emails (skipped cleanly if BREVO_API_KEY is not set yet).
    await sendEmail({
      to: OWNER_EMAIL,
      toName: "Billionit Wealth",
      subject: `New OI Pulse purchase — ${name}`,
      html: `<p>A new OI Pulse Dashboard purchase was submitted.</p>
        <ul><li><b>Name:</b> ${name}</li><li><b>Email:</b> ${email}</li>
        <li><b>Mobile:</b> ${mobile}</li><li><b>Reference:</b> ${ref}</li></ul>
        <p>Payment proof is attached. Verify the payment, then issue a license key from the license
        server and share it with the buyer.</p>`,
      attachments: [{ content: b64, name: filename }],
    });
    const buyer = await sendEmail({
      to: email,
      toName: name,
      subject: "We received your OI Pulse Dashboard purchase",
      html: `<p>Hi ${name},</p>
        <p>Thank you — we've received your details and payment proof for the <b>OI Pulse Dashboard</b>.
        Our team will verify your payment and contact you shortly at this email or on ${mobile} with
        your license key and installation help.</p>
        <p>Reference: ${ref}</p>
        <p>— Billionit Wealth</p>`,
    });

    return NextResponse.json({ ok: true, ref, emailed: buyer.sent });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}
