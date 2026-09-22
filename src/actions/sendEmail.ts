"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { formSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = new Map<string, { count: number; time: number }>();
const RATE_LIMIT_COUNT = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

export async function sendEmailAction(formData: FormData) {
    const ip = (await headers()).get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const userRate = rateLimit.get(ip);

    if (userRate && now - userRate.time < RATE_LIMIT_WINDOW) {
        if (userRate.count >= RATE_LIMIT_COUNT) {
            return { error: "Wysłano zbyt wiele zapytań. Spróbuj ponownie później lub zadzwoń." };
        }
        userRate.count += 1;
    } else {
        rateLimit.set(ip, { count: 1, time: now });
    }

    const website = formData.get("website") as string;


    if (website && website.length > 0) {
        return { success: true };
    }

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        projectType: formData.get("projectType"),
    };

    const parsed = formSchema.safeParse(data);

    if (!parsed.success) {
        return { error: parsed.error.issues[0]?.message || "Błąd walidacji danych." };
    }

    const { name, email, subject, message, projectType } = parsed.data;

    try {
        const { error: sendError } = await resend.emails.send({
            from: "Formularz Automatyzuj.it <onboarding@resend.dev>",
            to: "automatyzuj.it@gmail.com",
            replyTo: email,
            subject: `Nowe zapytanie: ${subject} (${projectType})`,
            text: `Wiadomość z portfolio:\n\nImię: ${name}\nE-mail: ${email}\nTyp projektu: ${projectType}\nTemat: ${subject}\n\nWiadomość:\n${message || 'Brak wiadomości dodatkowej.'}`,
        });

        if (sendError) {
            return { error: "Nie udało się wysłać wiadomości. Spróbuj użyć adresu e-mail lub zadzwonić." };
        }

        return { success: true };
    } catch {
        return { error: "Wystąpił błąd serwera. Spróbuj użyć adresu e-mail lub zadzwonić." };
    }
}