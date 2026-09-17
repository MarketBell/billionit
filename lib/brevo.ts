// Minimal Brevo (transactional email) helper via the HTTP API. No SDK needed.
// Safe to call without an API key — it simply reports { sent: false } so the
// purchase flow keeps working until BREVO_API_KEY is configured.

type Attachment = { content: string; name: string };

export async function sendEmail(opts: {
  to: string;
  toName?: string;
  subject: string;
  html: string;
  attachments?: Attachment[];
}): Promise<{ sent: boolean; reason?: string }> {
  const key = process.env.BREVO_API_KEY;
  const senderEmail = process.env.SENDER_EMAIL || "billionitwealth@gmail.com";
  if (!key) return { sent: false, reason: "no_api_key" };
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": key, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: { email: senderEmail, name: "Billionit Wealth" },
        to: [{ email: opts.to, name: opts.toName || opts.to }],
        subject: opts.subject,
        htmlContent: opts.html,
        ...(opts.attachments && opts.attachments.length ? { attachment: opts.attachments } : {}),
      }),
    });
    if (!res.ok) return { sent: false, reason: `brevo_${res.status}` };
    return { sent: true };
  } catch (e) {
    return { sent: false, reason: (e as Error).message };
  }
}
