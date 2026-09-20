import { faqs } from "@/content/faq";

export default function FAQ() {
    return (
        <section id="faq" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-12 text-center md:text-left">
                    <h2 className="heading-1">
                        Częste pytania.
                    </h2>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group border-b border-slate-200 dark:border-slate-800 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex items-center justify-between cursor-pointer py-6 md:py-8 font-bold text-lg md:text-xl text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                {faq.question}
                                <span className="ml-6 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="pb-8 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>

            </div>
        </section>
    );
}