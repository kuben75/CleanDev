"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/content/navbar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors">
                            Automatyzuj.it
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <ThemeToggle />

                        <Link
                            href="/#kontakt"
                            className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-sm border border-slate-900 dark:border-white hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                        >
                            Darmowa wycena
                        </Link>
                    </nav>

                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
                            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-base font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 rounded-sm transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#kontakt"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 px-5 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-sm transition-colors"
                        >
                            Darmowa wycena
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}