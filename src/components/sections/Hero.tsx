"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, Loader2, CheckCircle2 } from "lucide-react";
import { sendEmailAction } from "@/actions/sendEmail";
import { proof } from "@/content/proof";
import { projectOptions } from "@/content/project.options";

export default function Hero() {
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setIsPending(true);
        setStatus("idle");

        const result = await sendEmailAction(new FormData(form));

        if (result?.error) {
            setErrorMessage(result.error);
            setStatus("error");
        } else {
            setStatus("success");
            form.reset();
        }
        setIsPending(false);
    }

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-12 pt-32 pb-20 lg:py-0">
                <div className="flex-1 text-left space-y-8">

                    <h1 className="heading-1">
                        Szybkie strony i systemy, które automatyzują biznes.
                    </h1>
                    <p className="text-body max-w-xl">
                        Projektuję autorskie rozwiązania webowe – od błyskawicznych wizytówek po dedykowane panele B2B, systemy rezerwacji i e-commerce. Bez gotowych szablonów i ukrytych abonamentów. Ty skupiasz się na firmie, ja dostarczam technologię.
                    </p>

                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        {proof?.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-sm bg-slate-900 dark:bg-white shrink-0" aria-hidden="true"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link href="#realizacje" className="btn-outline group md:!w-auto self-start">
                        Zobacz, co już zbudowałem
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="flex-1 w-full max-w-lg">
                    <div className="p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm shadow-sm">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center space-y-4 py-8" role="status">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full flex items-center justify-center mb-2">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Zapytanie dotarło</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Odpiszę w ciągu 24 godzin na podany adres e-mail.</p>
                                <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-bold border-b border-slate-900 dark:border-white text-slate-900 dark:text-white">
                                    Wyślij kolejne zapytanie
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h2 className="heading-2">Bezpłatna wycena</h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
                                        Zostaw kontakt. Wrócę z propozycją i wyceną w 24 godziny.
                                    </p>
                                </div>

                                <form className={`space-y-5 transition-opacity duration-300 ${isPending ? "opacity-50 pointer-events-none" : ""}`} onSubmit={handleFormSubmit}>
                                    <input type="hidden" name="subject" value="Szybkie zapytanie (Hero)" />
                                    <input type="hidden" name="message" value="Klient prosi o kontakt w celu wyceny projektu. (Brak dodatkowej wiadomości, zapytanie wysłane z sekcji Hero)." />
                                    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-0 h-0 opacity-0" />

                                    <div>
                                        <label htmlFor="hero-name" className="label-base">Imię</label>
                                        <input id="hero-name" type="text" name="name" required autoComplete="given-name" className="input-base" />
                                    </div>

                                    <div>
                                        <label htmlFor="hero-email" className="label-base">E-mail</label>
                                        <input id="hero-email" type="email" name="email" required autoComplete="email" className="input-base" />
                                    </div>

                                    <div>
                                        <label htmlFor="hero-type" className="label-base">Rodzaj projektu</label>
                                        <select
                                            id="hero-type"
                                            name="projectType"
                                            required
                                            className="input-base cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="text-slate-400">Wybierz...</option>
                                            {projectOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <input type="checkbox" id="rodo-hero" name="rodo" required className="mt-1 w-4 h-4 cursor-pointer border border-slate-300 rounded-sm" />
                                        <label htmlFor="rodo-hero" className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed cursor-pointer">
                                            Akceptuję <Link href="/polityka-prywatnosci" className="underline hover:text-slate-900 dark:hover:text-white">Politykę Prywatności</Link>.
                                        </label>
                                    </div>

                                    {status === "error" && (
                                        <p role="alert" className="text-red-600 dark:text-red-400 text-sm font-bold">{errorMessage}</p>
                                    )}

                                    <button disabled={isPending} className="btn-primary w-full mt-2">
                                        {isPending ? <>Wysyłanie... <Loader2 className="w-5 h-5 ml-1 animate-spin" /></> : <>Poproś o wycenę <Send className="w-5 h-5 ml-1" /></>}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}