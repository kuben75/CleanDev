import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About"), {
    loading: () => <div className="min-h-[28rem]" />,
});

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), {
    loading: () => <div className="min-h-[34rem]" />,
});

const Services = dynamic(() => import("@/components/sections/Services"), {
    loading: () => <div className="min-h-[26rem]" />,
});

const Process = dynamic(() => import("@/components/sections/Process"), {
    loading: () => <div className="min-h-[28rem]" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
    loading: () => <div className="min-h-[24rem]" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
    loading: () => <div className="min-h-[36rem]" />,
});

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Process />
            <FAQ />
            <Contact />
        </main>
    );
}