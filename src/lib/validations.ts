
import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, "Podaj prawidłowe imię."),
    email: z.email("Podaj prawidłowy adres e-mail."),
    subject: z.string().min(2, "Brak tematu."),
    message: z.string().optional(),
    projectType: z.string().min(2, "Wybierz rodzaj projektu.")
});