import { NextResponse } from "next/server";
import { sendEnquiryEmails, getSmtpCredentials, type EnquiryPayload } from "@/lib/mail";

/**
 * Diagnostic GET endpoint: Visit /api/enquiry in browser to verify Vercel environment variables live!
 */
export async function GET() {
  const creds = getSmtpCredentials();
  return NextResponse.json({
    status: creds.isConfigured ? "SMTP Ready" : "SMTP Missing Credentials",
    isConfigured: creds.isConfigured,
    checks: {
      hasUser: Boolean(creds.user),
      user: creds.user ? `${creds.user.slice(0, 3)}***@${creds.user.split("@")[1] || ""}` : null,
      hasPass: Boolean(creds.pass),
      passLength: creds.pass ? creds.pass.length : 0,
      host: creds.host,
      port: creds.port,
      secure: creds.secure,
    },
    help: !creds.pass
      ? "SMTP_PASS is empty in Vercel. In Vercel, when you edit a locked/secret variable, the Value field is cleared for security. You must re-paste your 16-digit Google App Password into the Value box and click Save."
      : "SMTP is ready to send emails.",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, email, service, location, message } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!mobile || typeof mobile !== "string" || !mobile.trim()) {
      return NextResponse.json(
        { success: false, error: "Mobile number is required" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required to receive confirmation" },
        { status: 400 }
      );
    }

    const payload: EnquiryPayload = {
      name: name.trim(),
      mobile: mobile.trim(),
      email: email.trim().toLowerCase(),
      service: service?.trim() || "General Enquiry",
      location: location?.trim() || "",
      message: message?.trim() || "",
    };

    const result = await sendEnquiryEmails(payload);

    return NextResponse.json({
      ...result,
      message: result.message || "Enquiry submitted successfully and confirmation emails dispatched.",
    });
  } catch (error: any) {
    console.error("[api/enquiry] Error processing enquiry submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process enquiry. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
