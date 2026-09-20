"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            if (!localStorage.getItem("cookieConsent")) {
                setIsVisible(true);
            }
        } catch (e) {
        }
    }, []);

    const acceptCookies = () => {
        try {
            localStorage.setItem("cookieConsent", "true");
        } catch (e) {}
        setIsVisible(false);
    };

    if (!mounted || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-4xl text-center sm:text-left">
                Ta strona wykorzystuje pliki cookies do prawidłowego działania funkcjonalności (np. kalendarza rezerwacji). Szczegóły w{" "}
                <Link href="/polityka-prywatnosci" className="font-bold underline text-slate-900 dark:text-white">
                    Polityce Prywatności
                </Link>.
            </p>

            <button
                onClick={acceptCookies}
                className="w-full sm:w-auto px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-sm border border-slate-900 dark:border-white hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex-shrink-0"
            >
                Akceptuję
            </button>
        </div>
    );
}