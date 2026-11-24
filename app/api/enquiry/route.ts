import { NextResponse } from "next/server";
import { sendEnquiryEmails, type EnquiryPayload } from "@/lib/mail";

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
      message: "Enquiry submitted successfully and confirmation emails dispatched.",
      ...result,
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
