"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { IProjectGalleryProps } from "@/types/project.gallery";


export default function ProjectGallery({ desktopGallery, mobileGallery = [], title }: IProjectGalleryProps) {
    const [index, setIndex] = useState(-1);

    const allImages = [...desktopGallery, ...mobileGallery];
    const slides = allImages.map((src) => ({ src }));

    const openLightbox = (isMobile: boolean, localIndex: number) => {
        if (isMobile) {
            setIndex(desktopGallery.length + localIndex);
        } else {
            setIndex(localIndex);
        }
    };

    return (
        <div className="space-y-16">

            {desktopGallery.length > 0 && (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <span className="w-6 h-[2px] bg-blue-600"></span>
                        Widoki Desktop
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {desktopGallery.map((imgSrc, idx) => (
                            <div
                                key={`desktop-${idx}`}
                                onClick={() => openLightbox(false, idx)}
                                className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md cursor-pointer group bg-slate-100 dark:bg-slate-900"
                            >
                                <Image
                                    src={imgSrc}
                                    alt={`Desktop Screen ${title} - ${idx + 1}`}
                                    fill
                                    quality={90}
                                    priority={idx === 0}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-slate-900 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                        Powiększ
                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {mobileGallery.length > 0 && (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <span className="w-6 h-[2px] bg-blue-600"></span>
                        Widoki Mobilne
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {mobileGallery.map((imgSrc, idx) => (
                            <div
                                key={`mobile-${idx}`}
                                onClick={() => openLightbox(true, idx)}
                                className="relative w-full aspect-[9/16] overflow-hidden rounded-[2rem] border-[6px] border-slate-800 dark:border-slate-900 shadow-xl cursor-pointer group bg-slate-100 dark:bg-slate-900"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-slate-800 dark:bg-slate-900 rounded-b-xl z-20"></div>

                                <Image
                                    src={imgSrc}
                                    alt={`Mobile Screen ${title} - ${idx + 1}`}
                                    fill
                                    quality={90}
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                                />
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 flex items-center justify-center z-30">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-slate-900 text-xs font-bold px-3 py-2 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                        Powiększ
                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Zoom]}
                animation={{ swipe: 250 }}
            />
        </div>
    );
}