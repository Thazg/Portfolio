import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const myEmail = process.env.EMAIL_ADDRESS;

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
        from: "Portfolio Contact <onboarding@resend.dev>", // Resend testing domain
        to: myEmail,
        subject: `[Portfolio] ${subject}`,
        html: `
          <h2>New Message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
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
