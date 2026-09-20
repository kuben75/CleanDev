import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { getStatusBadges } from "@/content/Badges";

export const metadata: Metadata = {
    title: "Wszystkie realizacje | Portfolio",
    description: "Przegląd moich projektów B2B, systemów SaaS, sklepów internetowych i zaawansowanych stron wizytówkowych. Zobacz, jak rozwiązuję problemy biznesowe.",
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-24 md:pb-32">
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link
                        href="/#realizacje"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-10 group"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Wróć do strony głównej
                    </Link>

                    <div className="font-mono text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-slate-900 dark:bg-white"></span>
                        Baza projektów
                    </div>
                    <h1 className="heading-1 mb-6">Wszystkie realizacje</h1>
                    <p className="text-body max-w-2xl">
                        Od prostych wizytówek po dedykowane systemy zarządzania (ERP) i sklepy e-commerce.
                        Pełen przekrój rozwiązań technologicznych, które wdrożyłem dla moich klientów.
                    </p>
                </div>
            </section>

            <section className="pt-16 md:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project) => {
                        const badge = getStatusBadges(project.status);
                        return (
                            <Link
                                href={`/realizacje/${project.id}`}
                                key={project.id}
                                className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm hover:border-slate-400 dark:hover:border-slate-500 transition-colors duration-300 h-full"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                                    <Image
                                        src={project.imagePath}
                                        alt={`Podgląd projektu ${project.title}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-4">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold border tracking-wider ${badge.color}`}>
                                             {project.status}
                                        </span>
                                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                            {project.subtitle}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-8">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span key={tech} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-1.5 py-0.5 rounded-sm bg-slate-50 dark:bg-slate-950/50">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 px-1.5 py-0.5">
                                                +{project.techStack.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-auto border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between text-sm font-bold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                                        Zobacz więcej
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}