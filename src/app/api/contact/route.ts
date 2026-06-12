import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      "new-store": "New Store Opening",
      renovation: "Store Renovation",
      purchase: "Display Case Purchase Only",
      design: "Design Services Only",
    };

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #c9a96e; border-bottom: 2px solid #c9a96e; padding-bottom: 10px;">
          New Inquiry from DG Display Showcase
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone/WhatsApp</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Company</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Service</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${service ? serviceLabels[service] || service : "—"}</td>
          </tr>
        </table>
        ${
          message
            ? `
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #c9a96e;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px 0;">Message:</p>
            <p style="margin: 0; line-height: 1.6; color: #333;">${message}</p>
          </div>`
            : ""
        }
        <p style="margin-top: 30px; font-size: 12px; color: #999;">
          Sent from DG Display Showcase Website Inquiry Form
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "DG Display Showcase <inquiry@degreedisplay.com>",
      to: [process.env.RESEND_TO_EMAIL || "info@degreefurniture.com"],
      subject: `New Inquiry from ${name || "Website Visitor"} — DG Display Showcase`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully! We will contact you soon.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
