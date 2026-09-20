"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Video } from "lucide-react";

export default function CalButton() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", {
                styles: { branding: { brandColor: "#2563eb" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <button
            data-cal-link="https://cal.com/automatyzuj-oy1qys/30min"
            data-cal-config='{"layout":"month_view"}'
            className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-0.5"
        >
            <Video className="w-5 h-5" />
            Zarezerwuj wideo-rozmowę
        </button>
    );
}