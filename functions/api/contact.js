export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const serviceLabels = {
      "new-store": "New Store Opening",
      renovation: "Store Renovation",
      purchase: "Display Case Purchase Only",
      design: "Design Services Only",
    };

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
<h2 style="color:#c9a96e;border-bottom:2px solid #c9a96e;padding-bottom:10px">New Inquiry from DG Display Showcase</h2>
<table style="width:100%;border-collapse:collapse;margin-top:20px">
<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#555">Name</td><td style="padding:10px;border-bottom:1px solid #eee">${name || "—"}</td></tr>
<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#555">Email</td><td style="padding:10px;border-bottom:1px solid #eee">${email}</td></tr>
<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#555">Phone</td><td style="padding:10px;border-bottom:1px solid #eee">${phone || "—"}</td></tr>
<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#555">Company</td><td style="padding:10px;border-bottom:1px solid #eee">${company || "—"}</td></tr>
<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#555">Service</td><td style="padding:10px;border-bottom:1px solid #eee">${service ? serviceLabels[service] || service : "—"}</td></tr>
</table>
${message ? `<div style="margin-top:20px;padding:15px;background:#f9f9f9;border-left:4px solid #c9a96e"><p style="font-weight:bold;color:#555;margin:0 0 8px 0">Message:</p><p style="margin:0;line-height:1.6;color:#333">${message}</p></div>` : ""}
<p style="margin-top:30px;font-size:12px;color:#999">Sent from DG Display Showcase Website</p>
</body>
</html>`;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL || "DG Display Showcase <inquiry@degreedisplay.com>",
        to: [env.RESEND_TO_EMAIL || "info@degreefurniture.com"],
        subject: `New Inquiry from ${name || "Website Visitor"} — DG Display Showcase`,
        html,
        reply_to: email,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend error:", resendData);
      return new Response(
        JSON.stringify({ error: "Failed to send email. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your inquiry has been sent successfully! We will contact you soon.",
        id: resendData.id,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
