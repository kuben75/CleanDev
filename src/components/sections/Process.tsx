import { steps } from "@/content/process";

export default function Process() {
    return (
        <section id="proces" className="bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-slate-200 dark:border-slate-800">

                <div className="lg:w-1/3">
                    <div className="sticky top-40">
                        <h2 className="heading-1">
                            Krok <br className="hidden lg:block"/>
                            <span className="text-slate-500 dark:text-slate-400">po kroku.</span>
                        </h2>
                        <p className="text-body mt-8">
                            Proces jest przejrzysty, bezpieczny i legalny. Od pierwszej rozmowy do wdrożenia, wiesz dokładnie, na jakim etapie jest Twój projekt.
                        </p>
                    </div>
                </div>

                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
                        {steps.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="font-mono text-2xl font-bold text-slate-400 dark:text-slate-600">
                                        {item.step}
                                    </span>
                                    <div className="flex-grow h-[2px] bg-slate-900 dark:bg-white"></div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}