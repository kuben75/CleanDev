"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 500
                ? setIsVisible(true)
                : setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Wróć na górę strony"
            className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 rounded-sm shadow-lg cursor-pointer group transition-all duration-500 
                bg-slate-900 text-white hover:bg-slate-800 
                dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
    );
}