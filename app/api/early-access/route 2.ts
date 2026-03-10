import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  source: z.string().optional(),
  // honeypot: keep empty (bots tend to fill it)
  company: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = BodySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    const { email, source, company } = parsed.data;

    // Honeypot triggered — pretend success to avoid teaching bots
    if (company && company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const to = process.env.EARLY_ACCESS_TO;
    const from = process.env.EARLY_ACCESS_FROM;

    if (!process.env.RESEND_API_KEY || !to || !from) {
      return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
    }

    await resend.emails.send({
      from,
      to,
      subject: `Soul to Seam — Early Access Signup${source ? ` (${source})` : ""}`,
      html: `
        <p><strong>New early access signup</strong></p>
        <p>Email: ${email}</p>
        ${source ? `<p>Source: ${source}</p>` : ""}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

