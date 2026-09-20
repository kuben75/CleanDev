import { MonitorSmartphone, ShoppingCart, LayoutTemplate, DatabaseZap } from "lucide-react";
import { IServices } from "@/types/services";

export const services: IServices[] = [
    {
        icon: <MonitorSmartphone className="w-6 h-6" />,
        title: "Strony i Wizytówki Firmowe",
        description: "Szybkie i nowoczesne strony, które od razu zachęcają do kontaktu. Zbudowane tak, by ładowały się błyskawicznie na każdym telefonie komórkowym.",
        modules: ["Szybkie ładowanie", "Nowoczesny design", "Skuteczne formularze", "Integracja z mapami", "Gotowe pod SEO"]
    },
    {
        icon: <ShoppingCart className="w-6 h-6" />,
        title: "Sklepy Internetowe",
        description: "Platformy sprzedażowe bez ograniczeń abonamentowych. Ty decydujesz, jak dokładnie ma wyglądać koszyk, rabaty i metody wysyłki.",
        modules: ["Płatności online (BLIK)", "Integracje z kurierami", "Indywidualne promocje", "Zarządzanie magazynem", "Odzyskiwanie koszyków"]
    },
    {
        icon: <LayoutTemplate className="w-6 h-6" />,
        title: "Portale i Blogi",
        description: "Bezpieczne serwisy z wygodnym panelem do samodzielnego zarządzania treścią. Odporne na ataki, z którymi często zmagają się starsze systemy.",
        modules: ["Prosty panel edycji", "Wielojęzyczność", "Kategoryzacja treści", "Integracja newslettera", "Konta redaktorów"]
    },
    {
        icon: <DatabaseZap className="w-6 h-6" />,
        title: "Dedykowane Systemy B2B",
        description: "Aplikacje rozwiązujące konkretne problemy operacyjne Twojej firmy. Od zautomatyzowanych kalendarzy rezerwacji po panele dla pracowników.",
        modules: ["Automatyzacja procesów", "Bezpieczne logowanie", "Generowanie raportów", "Czat na żywo", "Integracje z AI"]
    }
];