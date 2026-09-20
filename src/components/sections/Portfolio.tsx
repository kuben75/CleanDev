import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Grid3X3 } from "lucide-react";
import { projects } from "@/content/projects";
import { getStatusBadges } from "@/content/Badges";

const order = ["mindcare", "hatsumi", "medisure", "cleandaw"];
const ordered = [...projects].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

const featuredProjects = ordered.slice(0, 4);

export default function Portfolio() {
    return (
        <section id="realizacje" className="py-24 md:py-32 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 md:mb-24 border-b border-slate-200 dark:border-slate-800 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="heading-1">Wybrane realizacje</h2>
                        <p className="text-body mt-6 max-w-2xl">
                            Flagowe systemy i aplikacje, które rozwiązują realne problemy biznesowe.
                        </p>
                    </div>
                    <Link href="/realizacje" className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-900 dark:border-white hover:text-slate-600 dark:hover:text-slate-400 hover:border-slate-600 transition-colors shrink-0 mb-2">
                        Zobacz wszystkie projekty →
                    </Link>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {featuredProjects.map((project, index) => {
                        const badge = getStatusBadges(project.status);
                        return (
                            <div
                                key={project.id}
                                className={`flex flex-col gap-12 md:gap-16 relative group items-center ${index % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}
                            >
                                <div className="w-full md:w-1/2 relative z-10">
                                    <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                                        <Image
                                            src={project.imagePath}
                                            alt={`Podgląd projektu ${project.title}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col justify-center relative z-20">
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-bold border ${badge.color}`}>
                                             {project.status}
                                        </span>
                                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{project.subtitle}</span>
                                    </div>

                                    <h3 className="heading-2 mb-4">{project.title}</h3>
                                    <p className="text-body mb-8">{project.description}</p>

                                    <div className="mb-8 pl-4 border-l-2 border-slate-900 dark:border-white">
                                        <p className="text-sm font-bold text-slate-500 mb-1">Co to daje</p>
                                        <p className="text-base text-slate-900 dark:text-slate-200 font-medium leading-relaxed">{project.businessImpact}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <Link href={`/realizacje/${project.id}`} className="btn-outline self-start group/btn">
                                        Zobacz szczegóły
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-24 md:mt-32 flex justify-center border-t border-slate-200 dark:border-slate-800 pt-16">
                    <Link href="/realizacje" className="btn-primary group flex items-center gap-2">
                        <Grid3X3 className="w-5 h-5" />
                        Zobacz pełne portfolio
                        <span className="text-xs ml-2 opacity-80 font-normal">({projects.length} projektów)</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}