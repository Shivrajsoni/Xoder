import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();
    if (!email || !message) {
      return NextResponse.json({ success: false, error: "Email and message are required." }, { status: 400 });
    }
    // Here you could save to a database, send an email, etc.
    console.log("Support request received:", { email, message });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }
}
