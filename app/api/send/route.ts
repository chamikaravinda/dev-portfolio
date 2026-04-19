import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type RequestBody = {
    name: string;
    email: string;
    message: string;
};

export async function POST(req: Request) {
    try {
        const body: RequestBody = await req.json();

        const { name, email, message } = body;

        const data = await resend.emails.send({
            from: "Zigmatron Hub Contact <onboarding@resend.dev>",
            to: ["chamikaravinda@gmail.com"],
            subject: `[Zigmatron Hub] - Message From ${name}`,
            replyTo: email,
            text: `
                Name: ${name}
                Email: ${email}
                
                Message:
                ${message}
            `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : "Unknown error";

        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}