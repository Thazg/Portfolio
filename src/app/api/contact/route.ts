import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") ?? 0);
    if (contentLength > 10_000) {
      return NextResponse.json({ error: "Request is too large" }, { status: 413 });
    }

    const result = contactFormSchema.safeParse(await req.json());
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    const resendApiKey = process.env.RESEND_API_KEY;
    const myEmail = process.env.EMAIL_ADDRESS;
    const fromEmail = process.env.EMAIL_FROM ?? "Portfolio Contact <onboarding@resend.dev>";

    if (!resendApiKey || !myEmail) {
      console.error("Missing RESEND_API_KEY or EMAIL_ADDRESS environment variables.");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: myEmail,
        subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, " ")}`,
        text: [
          "New portfolio message",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Subject: ${subject}`,
          "",
          message,
        ].join("\n"),
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
