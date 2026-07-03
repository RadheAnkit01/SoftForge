import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const countryCode =
        body.countryCode === "other"
            ? body.customCountryCode
            : body.countryCode;

    const variables = {
        sender_name: body.name,
        sender_email: body.email,
        sender_phone: `${countryCode} ${body.phone}`,
        sender_company: body.company || "Not provided",
        service: body.service,
        budget: body.budget,
        project_details: body.message,
        submitted_at: new Date().toLocaleString("en-IN", {
            dateStyle: "long",
            timeStyle: "short",
            timeZone: "Asia/Kolkata",
        }),
    };
    await resend.emails.send({
        from: "SoftForge <notification@softforge.site>",
        to: process.env.CONTACT_EMAIL!,
        subject: `New Inquiry from ${body.name}`,

        template: {
        id: process.env.RESEND_NOTIFICATION_TEMPLATE!,
        variables,
        },
    });
    await resend.emails.send({
        from: "SoftForge <inquiry@softforge.site>",
        to: body.email,
        subject: "We've received your inquiry",

        template: {
            id: process.env.RESEND_CONFIRMATION_TEMPLATE!,
            variables,
        },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}