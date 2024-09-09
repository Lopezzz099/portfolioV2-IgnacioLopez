// app/api/sendemail/route.tsx

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configura tu transportador de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // Email del usuario
      to: process.env.EMAIL_RECEIVER, // Tu dirección de email
      subject: `Mensaje de ${name}`,
      text: message,
    };

    // Envía el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
