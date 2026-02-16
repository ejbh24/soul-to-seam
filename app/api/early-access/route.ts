import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  source: z.string().optional(),
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

    if (company && company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.EARLY_ACCESS_TO;
    const from = process.env.EARLY_ACCESS_FROM;

    if (!apiKey || !to || !from) {
      return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Soul to Seam — Early Access Signup${source ? ` (${source})` : ""}`,
      html: `
        <p><strong>New early access signup</strong></p>
        <p>Email: ${email}</p>
        ${source ? `<p>Source: ${source}</p>` : ""}
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ ok: false, error: "resend_error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("Server error:", e);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

