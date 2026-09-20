import Link from "next/link";
import { seoCities } from "@/content/seo-cities";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
                    <div className="md:col-span-6 lg:col-span-5">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors">
                            Automatyzuj.it
                        </Link>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed max-w-sm">
                            Niezależny inżynier oprogramowania. Projektuję i wdrażam dedykowane systemy B2B, e-commerce oraz szybkie platformy internetowe.
                        </p>
                    </div>

                    <div className="md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row justify-between gap-12">
                        <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400">
                            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-2 text-xs">Nawigacja</h4>
                            <Link href="/#realizacje" className="hover:text-slate-900 dark:hover:text-white transition-colors">Case Studies</Link>
                            <Link href="/#oferta" className="hover:text-slate-900 dark:hover:text-white transition-colors">Oferta technologiczna</Link>
                            <Link href="/#proces" className="hover:text-slate-900 dark:hover:text-white transition-colors">Proces współpracy</Link>
                        </div>

                        <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400">
                            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-2 text-xs">Wsparcie</h4>
                            <Link href="/#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">Częste pytania (FAQ)</Link>
                            <Link href="/#kontakt" className="hover:text-slate-900 dark:hover:text-white transition-colors">Kontakt i wycena</Link>
                            <Link href="/polityka-prywatnosci" className="hover:text-slate-900 dark:hover:text-white transition-colors">Polityka Prywatności</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
                        &copy; {currentYear} Automatyzuj.it. Wszelkie prawa zastrzeżone.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/kuben75"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/jlawniczak1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-500 transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800/50">
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-6">
                        Model 100% Zdalny (Cała Polska)
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {seoCities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/tworzenie-stron/${city.slug}`}
                                className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors"
                            >
                                Tworzenie stron {city.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}