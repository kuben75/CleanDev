"use client";

import { services } from "@/content/Services";
import { Info } from "lucide-react";

export default function Services() {
    return (
        <section id="oferta" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 md:mb-24 border-b border-slate-200 dark:border-slate-800 pb-12">
                    <h2 className="heading-1 mb-6">
                        Co mogę dla <br className="hidden sm:block" />
                        Ciebie zbudować?
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center justify-between">
                        <p className="text-body max-w-xl">
                            Nie korzystam z gotowych szablonów. Koduję infrastrukturę na zamówienie, co daje Ci pełną wolność w skalowaniu biznesu.
                        </p>

                        <div className="inline-flex items-start sm:items-center gap-4 px-6 py-5 bg-white dark:bg-slate-900 border-l-4 border-slate-900 dark:border-white shadow-sm max-w-md">
                            <Info className="w-6 h-6 text-slate-900 dark:text-white flex-shrink-0" />
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                                <strong className="font-bold text-slate-900 dark:text-white">Architektura modułowa:</strong> Systemy można dowolnie łączyć. Możemy zintegrować zaawansowany moduł rezerwacji z Twoją wizytówką.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800/50">
                                <div className="w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white rounded-sm border border-slate-200 dark:border-slate-800">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.modules?.map((mod, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 text-xs font-bold font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm"
                                    >
                                        {mod}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}