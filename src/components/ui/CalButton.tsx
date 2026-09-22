"use client";

import { useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Video } from "lucide-react";

export default function CalButton() {
    const [isLoaded, setIsLoaded] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (typeof window === "undefined" || isLoaded) return;

        const node = buttonRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (!entry?.isIntersecting) return;

                setIsLoaded(true);
                observer.disconnect();

                getCalApi({})
                    .then((cal) => {
                        cal("ui", {
                            styles: { branding: { brandColor: "#2563eb" } },
                            hideEventTypeDetails: false,
                            layout: "month_view"
                        });
                    })
                    .catch((error) => {
                        console.error("Failed to initialize Cal.com", error);
                    });
            },
            { rootMargin: "200px" }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [isLoaded]);

    return (
        <button
            ref={buttonRef}
            data-cal-link="automatyzuj-oy1qys/30min"
            data-cal-config='{"layout":"month_view"}'
            className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 py-4 px-6 rounded-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
            <Video className="w-5 h-5"/>
            Zarezerwuj wideo-rozmowę
        </button>
    );
}
