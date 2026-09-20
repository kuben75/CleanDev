
export const getStatusBadges = (status: string) => {
    switch (status) {
        case "Live":
            return {  color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" };
        case "Wdrożenie":
            return { color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800" };
        case "Środowisko testowe":
            return { color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800" };
        default:
            return { color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400" };
    }
}