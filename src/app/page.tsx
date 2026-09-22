import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import {Analytics} from "@vercel/analytics/vue";
import {SpeedInsights} from "@vercel/speed-insights/vue";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <About/>
            <Portfolio/>
            <Services />
            <Process/>
            <FAQ/>
            <Contact />
            <Analytics/>
            <SpeedInsights/>
        </main>
    );
}