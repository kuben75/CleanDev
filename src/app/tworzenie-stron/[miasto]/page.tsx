import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seoCities } from "@/content/seo-cities";
import { services } from "@/content/Services";
import FAQ from "@/components/sections/FAQ";

export const dynamicParams = false;

export function generateStaticParams() {
    return seoCities.map((c) => ({ miasto: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ miasto: string }> }): Promise<Metadata> {
    const { miasto } = await params;
    const city = seoCities.find((c) => c.slug === miasto);

    if (!city) return {};

    return {
        title: `Strony internetowe dla firm ${city.preposition} ${city.locative} | Automatyzuj.it`,
        description: `Szukasz wykonawcy strony ${city.preposition} ${city.locative}? Buduję szybkie strony dla małych firm usługowych, systemy rezerwacji online i sklepy internetowe.`,
    };
}

export default async function CityPage({ params }: { params: Promise<{ miasto: string }> }) {
    const { miasto } = await params;
    const city = seoCities.find((c) => c.slug === miasto);

    if (!city) return notFound();

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-20">

            <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-slate-900 dark:bg-white"></span>
                        Lokalny partner, zdalna praca
                    </div>

                    <h1 className="heading-1 mb-8">
                        Strony internetowe dla firm <br className="hidden md:block" />
                        <span className="text-slate-500 dark:text-slate-400">
                            {city.preposition} {city.locative} i okolicach.
                        </span>
                    </h1>

                    <div className="text-body max-w-2xl mb-10 space-y-4">
                        <p>{city.intro}</p>
                        <p>
                            Buduję szybkie strony dla warsztatów, gabinetów i firm usługowych. Zapewniam czysty kod bez szablonów, polską fakturę VAT i bezpośredni kontakt z wykonawcą.
                        </p>
                    </div>

                    <div className="flex">
                        <Link href="/#kontakt" className="btn-primary">
                            Porozmawiajmy o projekcie
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="heading-2 mb-12">Co mogę dla Ciebie zbudować?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-300 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800/50">
                                <div className="text-slate-900 dark:text-white">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{s.title}</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <FAQ />
        </main>
    );
}