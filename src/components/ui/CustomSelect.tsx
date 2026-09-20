"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import {ICustomSelectProps, IOption} from "@/types/custom.select";


export default function CustomSelect({ name, id, options, required, placeholder = "Wybierz..." }: ICustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<IOption | null>(null);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && focusedIndex >= 0 && listboxRef.current) {
            const listItems = listboxRef.current.querySelectorAll("li");
            const target = listItems[focusedIndex];
            if (target) {
                target.scrollIntoView({ block: "nearest" });
            }
        }
    }, [focusedIndex, isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isOpen) {
            if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                e.preventDefault();
                setIsOpen(true);
                setFocusedIndex(selected ? options.findIndex(o => o.value === selected.value) : 0);
            }
            return;
        }

        switch (e.key) {
            case "Escape":
                setIsOpen(false);
                break;
            case "ArrowDown":
                e.preventDefault();
                setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
                break;
            case "ArrowUp":
                e.preventDefault();
                setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
                break;
            case "Enter":
            case " ":
                e.preventDefault();
                if (focusedIndex >= 0 && focusedIndex < options.length) {
                    setSelected(options[focusedIndex]);
                    setIsOpen(false);
                }
                break;
        }
    };

    return (
        <div className="relative" ref={dropdownRef} onKeyDown={handleKeyDown}>
            <input type="hidden" name={name} id={id} value={selected?.value || ""} required={required} />

            <button
                type="button"
                onClick={() => {
                    setIsOpen(!isOpen);
                    setFocusedIndex(selected ? options.findIndex(o => o.value === selected.value) : 0);
                }}
                className="input-base flex items-center justify-between w-full text-left bg-white dark:bg-slate-950 focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className={selected ? "text-slate-900 dark:text-white" : "text-slate-400"}>
                    {selected ? selected.label : placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <ul
                    ref={listboxRef}
                    className="absolute z-50 w-full mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm shadow-xl max-h-60 overflow-auto outline-none"
                    role="listbox"
                >
                    {options.map((option, index) => (
                        <li
                            key={option.value}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => setFocusedIndex(index)}
                            className={`cursor-pointer px-5 py-3 text-sm flex items-center justify-between transition-colors ${
                                focusedIndex === index
                                    ? "bg-slate-100 dark:bg-slate-800"
                                    : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                            } ${
                                selected?.value === option.value
                                    ? "text-slate-900 dark:text-white font-bold"
                                    : "text-slate-600 dark:text-slate-400"
                            }`}
                            role="option"
                            aria-selected={selected?.value === option.value}
                        >
                            {option.label}
                            {selected?.value === option.value && <Check className="w-4 h-4 text-slate-900 dark:text-white" />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}