import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please enter all information" },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { success: false, message: "inpunt is very long" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter valid email" },
        { status: 400 }
      );
    }


    const { EMAIL_USER, EMAIL_PASS, CONTACT_TO } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !CONTACT_TO) {
      throw new Error("Email environment variables are missing.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    return NextResponse.json({
      success: true,
      message: "Your massage successfully send",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Your massage not sand. Try agin letar",
      },
      { status: 500 }
    );
  }
}