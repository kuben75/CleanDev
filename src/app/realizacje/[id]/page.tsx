import { getStatusBadges } from "@/content/Badges";
import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) return { title: "Projekt nieznaleziony" };

    return {
        title: `${project.title} - ${project.subtitle}`,
        description: project.description,
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    const statusStyle = getStatusBadges(project.status);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-32">

            <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-12 group uppercase tracking-widest" href="/#realizacje">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                        Powrót do strony głównej
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
                        <div>
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="font-mono text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                    {project.subtitle}
                                </span>
                                <span className={`inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm border ${statusStyle.color}`}>
                                    {project.status}
                                </span>
                            </div>
                            <h1 className="heading-1">
                                {project.title}
                            </h1>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    Zobacz na żywo <ExternalLink className="w-4 h-4"/>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                                    Kod źródłowy <GitBranch className="w-4 h-4"/>
                                </a>
                            )}
                        </div>
                    </div>

                    {project.statusMessage && (
                        <div className="p-5 mb-10 bg-slate-50 dark:bg-slate-900 border-l-4 border-slate-900 dark:border-white text-slate-700 dark:text-slate-300 text-sm md:text-base rounded-r-sm">
                            <strong>Status techniczny:</strong> {project.statusMessage}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-slate-800">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs font-mono font-bold rounded-sm border border-slate-200 dark:border-slate-800 uppercase tracking-wider">
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <h2 className="heading-2">Zrzuty ekranu</h2>
                </div>

                <ProjectGallery
                    desktopGallery={project.desktopGallery}
                    mobileGallery={project.mobileGallery}
                    title={project.title}
                />
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-24">
                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        Przejście do problemu
                    </p>
                    <h3 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white tracking-[-0.04em]">
                        Technologia ma przede wszystkim zarabiać i oszczędzać czas. Zobacz, przed jakim wyzwaniem stał klient i jak to zautomatyzowałem.
                    </h3>
                </div>
            </section>

            <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mt-6">

                    <div className="md:col-span-5 md:pr-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 pb-12 md:pb-0">
                        <h3 className="heading-2 mb-6">
                            Problem biznesowy
                        </h3>
                        <p className="text-body">
                            {project.story.problem}
                        </p>
                    </div>

                    <div className="md:col-span-7 md:pl-8 space-y-16">
                        <div>
                            <h3 className="heading-2 mb-6">
                                Rozwiązanie architektoniczne
                            </h3>
                            <p className="text-body">
                                {project.story.solution}
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-900 border-l-2 border-slate-900 dark:border-white shadow-sm rounded-r-sm">
                            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                                Rezultat
                            </h4>
                            <p className="text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                                {project.story.result}
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {project.highlights && project.highlights.length > 0 && (
                <section className="py-24 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-8">
                            <h3 className="heading-2 flex items-center gap-4">
                                <span className="w-8 h-[2px] bg-slate-900 dark:bg-white"></span>
                                Szczegóły wdrożenia
                            </h3>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
                                Kluczowe decyzje technologiczne zastosowane w tym projekcie.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm"
                                >
                                    <div className="font-mono font-bold text-slate-400 dark:text-slate-500 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 inline-block">
                                        0{idx + 1}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            )}

            {project.systemModules && project.systemModules.length > 0 && (
                <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-8">
                        <h3 className="heading-2 flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-slate-900 dark:bg-white"></span>
                            Architektura Funkcjonalna
                        </h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
                            Szczegółowy podział wdrożonych modułów z perspektywy ról systemowych.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {project.systemModules.map((module, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 md:p-10 border border-slate-200 dark:border-slate-800 rounded-sm">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/50 uppercase tracking-wider">
                                    {module.name}
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {module.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-sm bg-slate-900 dark:bg-white shrink-0"></div>
                                            <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
                <h2 className="heading-2 mb-6">
                    {project.customCta ? project.customCta.title : "Potrzebujesz solidnego oprogramowania?"}
                </h2>
                <p className="text-body mb-10">
                    {project.customCta ? project.customCta.description : "Zaprojektuję i wdrożę system dopasowany do specyfiki Twojego biznesu."}
                </p>
                <div className="flex justify-center">
                    <Link className="btn-primary" href="/#kontakt">
                        Porozmawiajmy o projekcie
                    </Link>
                </div>
            </section>

        </main>
    )
}