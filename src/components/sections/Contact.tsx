"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Globe, Send, CheckCircle2, Loader2, Copy, Check } from "lucide-react";
import { sendEmailAction } from "@/actions/sendEmail";
import CalButton from "@/components/ui/CalButton";
import { projectOptions } from "@/content/project.options";

export default function Contact() {
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [copied, setCopied] = useState<"email" | "phone" | null>(null);

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setIsPending(true);
        setStatus("idle");

        const result = await sendEmailAction(new FormData(form));

        if (result?.error) {
            setStatus("error");
            setErrorMessage(result.error);
        } else {
            setErrorMessage("");
            setStatus("success");
            form.reset();
        }
        setIsPending(false);
    }

    const handleCopy = (text: string, type: "email" | "phone") => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="kontakt" className="py-24 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 border-t border-slate-200 dark:border-slate-800 pt-16">

                    <div className="space-y-8 lg:pr-12">
                        <div>
                            <h2 className="heading-1 mb-6">
                                Rozpocznijmy <br /> współpracę.
                            </h2>
                            <p className="text-body">
                                Opisz krótko swój problem lub wybierz termin rozmowy. Odpowiadam w ciągu 24 godzin z konkretnym planem działania i wstępną wyceną.
                            </p>
                        </div>

                        <div className="space-y-4 pt-8">

                            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm flex items-center justify-between group transition-colors hover:border-slate-400 dark:hover:border-slate-600">
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="hidden sm:flex w-12 h-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">E-mail</p>
                                        <a href="mailto:automatyzuj.it@gmail.com" className="font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                            automatyzuj.it@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleCopy("automatyzuj.it@gmail.com", "email")}
                                    className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-sm transition-colors shrink-0"
                                    title="Skopiuj e-mail do schowka"
                                >
                                    {copied === "email" ? <Check className="w-5 h-5 text-green-600 dark:text-green-400" /> : <Copy className="w-5 h-5" />}
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm flex items-center justify-between group transition-colors hover:border-slate-400 dark:hover:border-slate-600">
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="hidden sm:flex w-12 h-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Telefon</p>
                                        <a href="tel:+48669829607" className="font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                            +48 669 829 607
                                        </a>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleCopy("+48669829607", "phone")}
                                    className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-sm transition-colors shrink-0"
                                    title="Skopiuj numer do schowka"
                                >
                                    {copied === "phone" ? <Check className="w-5 h-5 text-green-600 dark:text-green-400" /> : <Copy className="w-5 h-5" />}
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm flex items-center gap-4 sm:gap-6">
                                <div className="hidden sm:flex w-12 h-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm items-center justify-center shrink-0">
                                    <Globe className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Model współpracy</p>
                                    <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">100% Zdalnie (Cała Polska)</p>
                                </div>
                            </div>

                        </div>

                        <div className="pt-8">
                            <CalButton />
                            <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 text-center">
                                Kliknij, aby wybrać termin. Link do Google Meet zostanie wygenerowany automatycznie.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm h-fit">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Wiadomość wysłana!</h3>
                                <p className="text-slate-600 dark:text-slate-400">Dziękuję za kontakt. Odezwię się do Ciebie w ciągu 24 godzin.</p>
                                <button onClick={() => setStatus("idle")} className="mt-8 text-sm font-bold border-b border-slate-900 dark:border-white text-slate-900 dark:text-white">
                                    Wyślij kolejną wiadomość
                                </button>
                            </div>
                        ) : (
                            <form className={`space-y-5 transition-opacity duration-300 ${isPending ? "opacity-50 pointer-events-none" : ""}`} onSubmit={handleFormSubmit}>
                                <input type="hidden" name="subject" value="Pełne zapytanie z podstrony Kontakt" />
                                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-0 h-0 opacity-0" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="contact-name" className="label-base">Imię i nazwisko</label>
                                        <input id="contact-name" type="text" name="name" required className="input-base" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="label-base">E-mail</label>
                                        <input id="contact-email" type="email" name="email" required className="input-base" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-type" className="label-base">Rodzaj projektu</label>
                                    <select
                                        id="contact-type"
                                        name="projectType"
                                        required
                                        className="input-base appearance-none cursor-pointer"
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

                                <div>
                                    <label htmlFor="contact-message" className="label-base">Wiadomość (opcjonalnie)</label>
                                    <textarea id="contact-message" name="message" rows={5} className="input-base resize-none"></textarea>
                                </div>

                                <div className="flex items-start gap-3 mt-4">
                                    <input type="checkbox" id="rodo-contact" name="rodo" required className="mt-1 w-4 h-4 text-slate-900 bg-white border-slate-300 rounded-sm focus:ring-slate-900 cursor-pointer" />
                                    <label htmlFor="rodo-contact" className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed cursor-pointer">
                                        Akceptuję <Link href="/polityka-prywatnosci" className="underline hover:text-slate-900 dark:hover:text-white">Politykę Prywatności</Link> i wyrażam zgodę na przetwarzanie danych.
                                    </label>
                                </div>

                                {status === "error" && (
                                    <p className="text-red-500 text-xs font-bold">{errorMessage}</p>
                                )}

                                <button
                                    disabled={isPending}
                                    type="submit"
                                    className="btn-primary w-full mt-2"
                                >
                                    {isPending ? (
                                        <>Wysyłanie... <Loader2 className="w-5 h-5 ml-1 animate-spin" /></>
                                    ) : (
                                        <>Wyślij wiadomość <Send className="w-5 h-5 ml-1" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}