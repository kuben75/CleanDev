import React from "react";
import { GraduationCap, Code2, MonitorCheck } from "lucide-react";

export default function About() {
    return (
        <section id="o-mnie" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-[2px] bg-slate-900 dark:bg-white"></span>
                            <span className="font-mono text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                O mnie
                            </span>
                        </div>
                        <h2 className="heading-1 leading-tight">
                            Zamiast agencji.<br/>
                            <span className="text-slate-500 dark:text-slate-400">Rozmawiasz <br className="hidden lg:block"/>z twórcą.</span>
                        </h2>
                        <p className="text-body leading-relaxed max-w-md pt-4">
                            Pracuję samodzielnie. To oznacza bezpośredni kontakt, brak "głuchego telefonu" przez menedżerów projektu i brak opłat za utrzymanie biura agencji. Rozmawiasz z osobą, która faktycznie pisze Twój kod.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4 lg:pt-12">

                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm flex items-center justify-center mb-6 shadow-sm">
                                <Code2 className="w-6 h-6 text-slate-900 dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Od pasji do wdrożeń</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                Nazywam się Jakub. Programuję od 9 lat. Zaczynałem z pasji, później uczyłem się komercyjnych standardów na stażach, aż w końcu zacząłem budować systemy dla klientów z polecenia. Moim celem jest po prostu pisanie kodu, który automatyzuje nudne zadania i pomaga firmom rosnąć.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm flex items-center justify-center mb-6 shadow-sm">
                                <GraduationCap className="w-6 h-6 text-slate-900 dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Techniczne wykształcenie</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                Jestem inżynierem informatyki, w trakcie studiów magisterskich. Doświadczenie zawodowe poparte teorią pozwala mi pisać nowoczesne oprogramowanie, które jest przede wszystkim bezpieczne i nie psuje się pod wpływem większego ruchu.
                            </p>
                        </div>

                        <div className="space-y-4 md:col-span-2 mt-4 p-8 sm:p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-900 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <MonitorCheck className="w-6 h-6 text-slate-900 dark:text-white" />
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">Kod szyty na miarę</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                Unikam gotowych kreatorów stron. Tworzę aplikacje od zera, więc nie mamy żadnych sztucznych ograniczeń technicznych. Zaprojektuję i wdrożę dokładnie to, czego wymaga Twój biznes – czy to będzie szybka firmowa strona, czy dedykowany system B2B.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}