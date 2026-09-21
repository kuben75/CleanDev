import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import {siteConfig} from "@/config/site";
import React from "react";
// import {Analytics} from "@vercel/analytics/vue";
// import {SpeedInsights} from "@vercel/speed-insights/vue";

const inter = Inter({
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl" className="scroll-smooth scroll-pt-24" suppressHydrationWarning={true}>
        <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false}>
            <Navbar />
            <div className="pt-20">
                {children}
            </div>
            <Footer />
            <ScrollToTop />
            <CookieBanner/>
            {/*<Analytics />*/}
            {/*<SpeedInsights/>*/}
        </ThemeProvider>
        </body>
        </html>
    );
}