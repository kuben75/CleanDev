import { ILogoProps } from "@/types/logo";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ withText = false, className = "" }: ILogoProps) {
    return (
        <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
            <Image
                src="/logo.svg"
                alt={withText ? "Logo" : "Automatyzuj.it"}
                width={200}    
                height={48}
                className="h-12 w-auto dark:invert"
            />
            {withText && (
                <span className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white">
                    Automatyzuj.it
                </span>
            )}
        </Link>
    );
}