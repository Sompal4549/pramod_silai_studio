import nodemailer from "nodemailer";
import { siteConfig } from "@/data/siteConfig";

export interface EnquiryPayload {
  name: string;
  mobile: string;
  email?: string;
  service: string;
  location?: string;
  message?: string;
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  );
}

function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends both Admin notification and Customer confirmation emails.
 */
export async function sendEnquiryEmails(data: EnquiryPayload) {
  if (!isSmtpConfigured()) {
    console.warn("[mail.ts] SMTP credentials are not configured in environment variables. Skipping real email dispatch.");
    return {
      success: true,
      simulated: true,
      message: "SMTP not configured, simulated success.",
    };
  }

  const transporter = getTransporter();
  const fromName = process.env.SMTP_FROM_NAME || siteConfig.name;
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const cleanMobile = data.mobile.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${cleanMobile.startsWith("91") ? cleanMobile : "91" + cleanMobile}?text=Namaste%20${encodeURIComponent(data.name)},%20thank%20you%20for%20contacting%20${encodeURIComponent(siteConfig.name)}.`;

  // 1. Email to Admin
  const adminSubject = `🚨 New Customer Enquiry: ${data.name} - ${data.service}`;
  const adminHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f3ef; color: #2C2420; margin: 0; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5d8cc; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
      .header { background: #6E0D25; color: #ffffff; padding: 24px; text-align: center; }
      .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
      .header p { margin: 6px 0 0; color: #fde8e9; font-size: 13px; }
      .content { padding: 24px; }
      .badge { display: inline-block; background: #FFF4E5; color: #8A4800; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; margin-bottom: 16px; border: 1px solid #FFE2B8; }
      .field-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
      .field-table td { padding: 10px 12px; border-bottom: 1px solid #f0e6dd; font-size: 14px; }
      .field-label { width: 35%; font-weight: 600; color: #6E0D25; background: #fdfaf8; }
      .field-value { width: 65%; color: #2C2420; }
      .message-box { background: #FCF8F4; border-left: 4px solid #6E0D25; padding: 14px; margin: 18px 0; border-radius: 0 8px 8px 0; font-style: italic; color: #4A3B32; font-size: 14px; }
      .btn { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 24px; font-weight: 600; font-size: 13px; margin-top: 12px; }
      .footer { background: #fdfaf8; padding: 16px; text-align: center; font-size: 12px; color: #8C7B70; border-top: 1px solid #f0e6dd; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>New Customer Enquiry</h1>
        <p>${siteConfig.name} — ${siteConfig.subtitle}</p>
      </div>
      <div class="content">
        <span class="badge">🔔 Received on: ${now} (IST)</span>
        <table class="field-table">
          <tr>
            <td class="field-label">Customer Name</td>
            <td class="field-value"><strong>${data.name}</strong></td>
          </tr>
          <tr>
            <td class="field-label">Mobile Number</td>
            <td class="field-value"><a href="tel:${data.mobile}" style="color: #6E0D25; text-decoration: none; font-weight: 600;">${data.mobile}</a></td>
          </tr>
          ${data.email ? `
          <tr>
            <td class="field-label">Email</td>
            <td class="field-value"><a href="mailto:${data.email}" style="color: #6E0D25;">${data.email}</a></td>
          </tr>
          ` : ""}
          <tr>
            <td class="field-label">Service Required</td>
            <td class="field-value"><span style="background: #fde8e9; color: #6E0D25; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${data.service}</span></td>
          </tr>
          ${data.location ? `
          <tr>
            <td class="field-label">Location / City</td>
            <td class="field-value">${data.location}</td>
          </tr>
          ` : ""}
        </table>

        ${data.message ? `
        <p style="margin: 18px 0 6px; font-weight: 600; color: #6E0D25; font-size: 14px;">Customer Message / Special Requirements:</p>
        <div class="message-box">"${data.message}"</div>
        ` : ""}

        <div style="text-align: center; margin: 24px 0 10px;">
          <a href="${whatsappLink}" class="btn" target="_blank">💬 Open WhatsApp Chat with Customer</a>
        </div>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} ${siteConfig.name} • ${siteConfig.city}, ${siteConfig.state}
      </div>
    </div>
  </body>
  </html>
  `;

  // Send Admin Mail
  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: adminEmail,
    replyTo: data.email || fromEmail,
    subject: adminSubject,
    html: adminHtml,
  });

  // 2. Email to Customer (if email is provided)
  if (data.email) {
    const customerSubject = `Thank you for contacting ${siteConfig.name} - We received your enquiry!`;
    const customerHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f3ef; color: #2C2420; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5d8cc; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .header { background: #6E0D25; color: #ffffff; padding: 28px 24px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; font-family: Georgia, serif; }
        .header p { margin: 6px 0 0; color: #fde8e9; font-size: 13px; letter-spacing: 0.5px; }
        .content { padding: 28px 24px; }
        .greeting { font-size: 18px; font-weight: 600; color: #6E0D25; margin-bottom: 14px; }
        .text { font-size: 14px; line-height: 1.6; color: #4A3B32; margin-bottom: 16px; }
        .summary-card { background: #FCF8F4; border: 1px solid #f0e4d7; border-radius: 8px; padding: 18px; margin: 20px 0; }
        .summary-title { font-weight: 700; color: #6E0D25; font-size: 14px; margin-bottom: 10px; border-bottom: 1px solid #e8dcce; padding-bottom: 6px; }
        .summary-item { font-size: 13px; margin-bottom: 6px; color: #4A3B32; }
        .highlight { font-weight: 600; color: #2C2420; }
        .next-steps { background: #fff8f0; border-left: 4px solid #d48b38; padding: 12px 16px; border-radius: 0 6px 6px 0; margin: 20px 0; font-size: 13px; color: #664319; }
        .btn-call { display: inline-block; background: #6E0D25; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 24px; font-weight: 600; font-size: 13px; margin: 10px 6px; }
        .btn-wa { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 24px; font-weight: 600; font-size: 13px; margin: 10px 6px; }
        .footer { background: #fdfaf8; padding: 20px; text-align: center; font-size: 12px; color: #8C7B70; border-top: 1px solid #f0e6dd; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${siteConfig.name}</h1>
          <p>Complete Ladies Tailoring Solutions • ${siteConfig.subtitle}</p>
        </div>
        <div class="content">
          <div class="greeting">Namaste ${data.name},</div>
          <p class="text">
            Thank you for reaching out to <strong>${siteConfig.name}</strong>! We have received your tailoring enquiry and our team will be in touch with you shortly.
          </p>

          <div class="summary-card">
            <div class="summary-title">Your Enquiry Details:</div>
            <div class="summary-item">• Service: <span class="highlight">${data.service}</span></div>
            <div class="summary-item">• Mobile Number: <span class="highlight">${data.mobile}</span></div>
            ${data.location ? `<div class="summary-item">• Location: <span class="highlight">${data.location}</span></div>` : ""}
            ${data.message ? `<div class="summary-item">• Requirements: <span class="highlight">${data.message}</span></div>` : ""}
          </div>

          <div class="next-steps">
            <strong>What happens next?</strong><br>
            Master Tailor ${siteConfig.founder} and our team will review your requirements. We will contact you at <strong>${data.mobile}</strong> to discuss measurements, fabric choice, and fitting details.
          </div>

          <p class="text" style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
            Need urgent assistance or have fabric questions?
          </p>
          <div style="text-align: center;">
            <a href="tel:${siteConfig.phone}" class="btn-call">📞 Call Us: ${siteConfig.phoneDisplay}</a>
            <a href="${siteConfig.whatsappUrl}" class="btn-wa">💬 WhatsApp Chat</a>
          </div>
        </div>
        <div class="footer">
          <strong>${siteConfig.name}</strong><br>
          ${siteConfig.address}<br>
          Working Hours: ${siteConfig.hours}<br>
          Phone: ${siteConfig.phoneDisplay} | Email: ${siteConfig.email}
        </div>
      </div>
    </body>
    </html>
    `;

    try {
      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: data.email,
        subject: customerSubject,
        html: customerHtml,
      });
    } catch (custErr) {
      console.error("[mail.ts] Failed to send customer confirmation email:", custErr);
      // We don't fail the whole request if customer email fails, since admin got the alert
    }
  }

  return { success: true };
}
