import { IProject } from "@/types/project";

export const projects: IProject[] = [
    {
        id: "mindcare",
        title: "Psychologia Odbicia",
        subtitle: "Dedykowany System Zarządzania Gabinetem",
        description: "Aplikacja łącząca prosty kalendarz rezerwacji dla pacjentów z rozbudowanym panelem dla właściciela gabinetu. Całkowicie automatyzuje proces płatności i eliminuje problem pustych okienek w grafiku.",
        businessImpact: "Likwidacja strat finansowych wywoływanych przez nieopłacone wizyty. Pełna niezależność od zewnętrznych portali z kalendarzami, które pobierają wysokie abonamenty.",
        techStack: ["Next.js", "TypeScript", "Stripe API", "PostgreSQL", "NextAuth", "Editor.js", "Prisma ORM", "Tailwind CSS", "Framer Motion"],
        imagePath: "/img/mindcare/1.png",
        reversed: false,
        status: "Wdrożenie",
        statusMessage: "System jest w pełni funkcjonalny. Obecnie przechodzi finalne testy akceptacyjne i oczekuje na ostateczną decyzję klienta przed publicznym udostępnieniem domeny.",
        story: {
            problem: "Gabinet tracił czas i pieniądze przez pacjentów, którzy rezerwowali terminy, ale nie pojawiali się na wizytach. Dodatkowo, specyfika branży (pomoc psychologiczna w kryzysie) wymagała, aby proces zapisu był maksymalnie dyskretny i nie zmuszał do zakładania kont czy zapamiętywania haseł.",
            solution: "Wdrożyłem rezerwację opartą na jednorazowych linkach wysyłanych na e-mail i zintegrowałem obowiązkowe przedpłaty przez system Stripe (BLIK, karty, Apple Pay). Zbudowałem również prywatny panel, w którym właścicielka zarządza grafikiem, finansami i edytuje stronę internetową bez pomocy informatyka.",
            result: "Automat sam pilnuje wpłat – jeśli pacjent nie opłaci wizyty w 15 minut, termin wraca do puli dla innych. Z kolei funkcja 'Listy Rezerwowej' pozwala gabinetowi szybko załatać ewentualne luki w kalendarzu chętnymi pacjentami."
        },
        highlights: [
            {
                title: "Rezerwacja bez barier",
                description: "Zamiast frustrującego panelu logowania, system używa bezpiecznych tokenów. Pacjent podaje tylko podstawowe dane, opłaca wizytę i otrzymuje na maila unikalny link uprawniający do zarządzania swoim spotkaniem."
            },
            {
                title: "Kreator wizytówki i edytor treści",
                description: "Właścicielka może swobodnie zmieniać teksty i zdjęcia na stronie głównej, widząc efekt na żywo jeszcze przed publikacją. Wbudowany edytor bloga sam zapisuje szkice w tle, chroniąc przed utratą napisanego tekstu."
            },
            {
                title: "Zarządzanie pacjentami i statystyki",
                description: "System tworzy spójną kartotekę pacjenta, grupując wszystkie jego rezerwacje. W module finansowym na bieżąco generowane są wykresy przychodów z możliwością eksportu danych dla księgowości."
            },
            {
                title: "Bezpieczeństwo i Audit Log",
                description: "Każda kluczowa akcja w systemie jest zapisywana w dzienniku zdarzeń. Administrator widzi próby logowania, a dodatkowa weryfikacja dwuetapowa chroni prywatne notatki z wywiadów medycznych przed wyciekiem."
            },
            {
                title: "Ergonomia pracy",
                description: "Z myślą o wielogodzinnej pracy przed ekranem, cały panel administracyjny zaprojektowano z natywnym wsparciem trybu ciemnego. Zwiększa to czytelność interfejsu i drastycznie redukuje zmęczenie wzroku podczas wieczornego uzupełniania dokumentacji."
            }
        ],
        customCta: {
            title: "Chcesz zautomatyzować swój biznes?",
            description: "Zbuduję system, który przejmie na siebie powtarzalne obowiązki, pilnowanie płatności i obieg dokumentów."
        },
        systemModules: [
            {
                name: "Moduł Pacjenta",
                features: [
                    "Błyskawiczna rezerwacja z weryfikacją danych",
                    "Zintegrowane płatności i automatyczne faktury",
                    "Zapisy na listę oczekujących",
                    "Dostęp przez jednorazowy link"
                ]
            },
            {
                name: "Panel Administratora",
                features: [
                    "Panel ze statystykami i szybkim grafikiem na dziś",
                    "CRM: Karta pacjenta z prywatnymi notatkami z sesji",
                    "Autorski CMS: Edycja sekcji strony bez edycji kodu",
                    "Centrum Bezpieczeństwa z rejestrem prób logowania"
                ]
            }
        ],
        desktopGallery: [
            "/img/mindcare/3.png",
            "/img/mindcare/9.png",
            "/img/mindcare/11.png",
            "/img/mindcare/18.png",
            "/img/mindcare/20.png",
            "/img/mindcare/22.png",
            "/img/mindcare/13.png",
            "/img/mindcare/23.png"
        ],
        mobileGallery: [
            "/img/mindcare/1-mobile.png",
            "/img/mindcare/2-mobile.png",
            "/img/mindcare/3-mobile.png",
            "/img/mindcare/4-mobile.png",
            "/img/mindcare/5-mobile.png",
            "/img/mindcare/6-mobile.png",
        ]
    },
    {
        id: "cleandaw",
        title: "CleanDaw",
        subtitle: "Wizytówka Firmowa B2C",
        description: "Szybka strona dla lokalnej firmy detailingowej. Zoptymalizowana pod wytyczne wyszukiwarki Google oraz wysoki wskaźnik konwersji (zamiana odwiedzającego w kontakt telefoniczny).",
        businessImpact: "Maksymalizacja wydajności (wyniki w ścisłej czołówce – tzw. zielona strefa 90-100 punktów w Google PageSpeed), co ułatwia pozycjonowanie na lokalnym rynku.",
        techStack: ["Next.js", "Tailwind CSS", "React Leaflet", "SEO"],
        imagePath: "/img/cleandaw/2.png",
        reversed: true,
        status: "Live",
        liveUrl: "https://cleandaw.pl",
        story: {
            problem: "Lokalny usługodawca potrzebował strony internetowej, która szybko się ładuje na telefonach komórkowych i od razu zachęca do kontaktu.",
            solution: "Zaprojektowałem stronę w ciemnej kolorystyce, dostosowaną do branży motoryzacyjnej. Do obsługi map wykorzystałem otwarte biblioteki Leaflet, aby uniknąć konieczności podpinania płatnych API zewnętrznych dostawców.",
            result: "Strona regularnie osiąga maksymalne noty (95-100 punktów) w audytach Google Lighthouse. Kod HTML został wzbogacony o ustrukturyzowane dane (JSON-LD), co pomaga algorytmom zrozumieć lokalny zasięg działalności firmy."
        },
        highlights: [
            {
                title: "Wydajność Core Web Vitals",
                description: "Dzięki statycznemu generowaniu w Next.js oraz optymalizacji formatów zdjęć, strona ładuje się w niespełna sekundę nawet na słabszych połączeniach 3G."
            },
            {
                title: "Dostępność i nawigacja",
                description: "Zachowano odpowiedni kontrast elementów (zgodnie z WCAG) oraz wdrożono bezproblemową nawigację, która skupia uwagę klienta na głównym celu: wykonaniu połączenia telefonicznego."
            }
        ],
        customCta: {
            title: "Potrzebujesz szybkiej strony?",
            description: "Zaprojektuję wizytówkę, która ładuje się błyskawicznie i zamienia ruch z Google na kontakty biznesowe."
        },
        desktopGallery: [
            "/img/cleandaw/1.png",
            "/img/cleandaw/8.png",
            "/img/cleandaw/2.png",
            "/img/cleandaw/3.png",
            "/img/cleandaw/5.png",
        ],
        mobileGallery: [
            "/img/cleandaw/6.png",
            "/img/cleandaw/7.png",
            "/img/cleandaw/9.png"
        ]
    },
    {
        id: "medisure",
        title: "Medisure",
        subtitle: "Projekt Inżynierski (SaaS)",
        description: "Platforma do wyboru i zakupu pakietów medycznych. Łączy prosty kalkulator ofert dla klientów z panelem obsługi, pozwalając na załatwienie wszystkich formalności w jednym miejscu.",
        businessImpact: "Skrócenie czasu zakupu ubezpieczenia. Klient samodzielnie dobiera pakiet, opłaca go i natychmiast otrzymuje gotową polisę w formacie PDF.",
        techStack: [".NET 8", "React", "PostgreSQL", "Docker", "SignalR", "GitHub Actions"],
        imagePath: "/img/medisure/1.png",
        reversed: false,
        status: "Środowisko testowe",
        statusMessage: "Rozbudowany projekt inżynierski przetestowany w zamkniętym środowisku. Gotowy do podpięcia pod prawdziwych operatorów płatności i usług medycznych.",
        story: {
            problem: "Wybór odpowiedniego ubezpieczenia zdrowotnego często wymaga analizy wielu skomplikowanych ofert i wymiany maili z doradcą. Zależało mi na zbudowaniu jednego, czytelnego procesu obsługi.",
            solution: "Zaprojektowałem platformę, w której użytkownik odpowiada na kilka pytań, a system sam dobiera optymalny pakiet. Cały proces – od wyceny, przez ewentualny czat z doradcą, aż po wygenerowanie certyfikatu – odbywa się płynnie na jednym ekranie.",
            result: "Powstał stabilny system przetestowany w warunkach obciążeniowych. Dzięki testom automatycznym, platforma jest przygotowana na dalszą rozbudowę bez ryzyka awarii."
        },
        highlights: [
            {
                title: "Solidne fundamenty (.NET)",
                description: "Zamiast szybkiego, trudnego w łataniu kodu, system oparto na stabilnych rozwiązaniach architektonicznych. Dzięki temu dodawanie nowych funkcji w przyszłości będzie proste i nie zepsuje obecnie działających mechanizmów."
            },
            {
                title: "Obsługa klienta na żywo",
                description: "Wdrożono zaawansowany moduł powiadomień. Doradca i klient mogą rozmawiać na wewnętrznym czacie w czasie rzeczywistym, bez konieczności ciągłego odświeżania strony internetowej."
            },
            {
                title: "Bezpieczne aktualizacje",
                description: "Każda zmiana w kodzie przechodzi przez zautomatyzowane środowisko testowe. Gwarantuje to, że nowa aktualizacja nie wywoła nagłej awarii systemu u aktywnych użytkowników."
            }
        ],
        customCta: {
            title: "Planujesz budowę własnej aplikacji?",
            description: "Koduję dedykowane systemy oraz panele klienta. Porozmawiajmy o technologii, która najlepiej sprawdzi się w Twojej firmie."
        },
        systemModules: [
            {
                name: "Moduł Użytkownika",
                features: [
                    "Kalkulator ofert dopasowujący pakiety",
                    "Panel transakcyjny z automatycznym generowaniem PDF",
                    "Historia posiadanych umów i modyfikacja profilu",
                    "Możliwość wyboru subskrypcji i automatycznych płatności cyklicznych"
                ]
            },
            {
                name: "Panel Administratora",
                features: [
                    "Zarządzanie cennikiem i dostępnością pakietów",
                    "Skrzynka odbiorcza i czat na żywo z klientami",
                    "Dziennik zdarzeń monitorujący kluczowe akcje w systemie",
                    "Zarządzanie użytkownikami i ich uprawnieniami"
                ]
            }
        ],
        desktopGallery: [
            "/img/medisure/1.png",
            "/img/medisure/4.png",
            "/img/medisure/5.png",
            "/img/medisure/7.png",
            "/img/medisure/9.png",
            "/img/medisure/11.png",
            "/img/medisure/12.png",
            "/img/medisure/13.png",
            "/img/medisure/15.png"
        ],
        mobileGallery: [
            "/img/medisure/1-mobile.png",
            "/img/medisure/2-mobile.png",
            "/img/medisure/3-mobile.png",
            "/img/medisure/4-mobile.png",
        ]
    },
    {
        id: "hatsumi",
        title: "Hatsumi",
        subtitle: "Dedykowana Platforma E-Commerce",
        description: "Autorski sklep internetowy napisany od zera, bez użycia gotowych systemów typu WordPress. Zapewnia błyskawiczne ładowanie, pełną niezależność technologiczną oraz moduły automatyzujące sprzedaż.",
        businessImpact: "Całkowity brak prowizji dla zewnętrznych platform e-commerce oraz drastyczne skrócenie czasu obsługi paczek dzięki automatycznej integracji z systemami kurierskimi.",
        techStack: ["PHP 8 (OOP)", "MariaDB", "Stripe API", "InPost ShipX API", "JavaScript", "SCSS"],
        imagePath: "/img/hatsumi/1.png",
        reversed: true,
        status: "Live",
        liveUrl: "https://hatsumiscissors.pl",
        statusMessage: "Sklep obsługuje prawdziwych klientów. Wyposażony w rygorystyczne zabezpieczenia i autorski system logowania zdarzeń chroniący dane kupujących.",
        story: {
            problem: "Właściciel marki potrzebował sklepu do sprzedaży asortymentu premium. Gotowe rozwiązania rynkowe były zbyt ociężałe, narzucały ograniczenia wizualne i generowałyby dodatkowe koszty utrzymania zewnętrznych wtyczek.",
            solution: "Zaprojektowałem i wdrożyłem w 100% autorski silnik e-commerce. Zintegrowałem bezpieczne płatności Stripe, system błyskawicznego logowania przez Google oraz rozbudowany kreator kodów rabatowych.",
            result: "Powstała lekka, niezawodna platforma. Sklep ładuje się natychmiastowo, a proces zarządzania logistyką został zautomatyzowany, pozwalając właścicielowi skupić się wyłącznie na rozwoju marki i marketingu."
        },
        highlights: [
            {
                title: "Zoptymalizowana ścieżka zakupowa (UX)",
                description: "Zamiast zmuszać do zakładania konta, klient może kupić produkt jako gość. Inteligentna wyszukiwarka na żywo (Live Search) oraz psychologiczne wskaźniki dostępności (np. 'ostatnie sztuki') naturalnie przyspieszają decyzję o zakupie."
            },
            {
                title: "Automatyzacja logistyki (InPost)",
                description: "Z poziomu panelu administratora system automatycznie generuje pliki wsadowe dla kurierów i paczkomatów. Zdejmuje to z właściciela żmudny obowiązek ręcznego przepisywania danych adresowych klientów."
            },
            {
                title: "Autorski silnik promocyjny",
                description: "Zbudowałem elastyczny moduł kodów rabatowych. Administrator może tworzyć zniżki kwotowe lub procentowe, precyzyjnie przypisując je do całego koszyka, konkretnych kategorii, lub pojedynczych produktów."
            },
            {
                title: "Bezpieczeństwo i blokada Brute-Force",
                description: "Panel administracyjny jest chroniony przed atakami – po 5 nieudanych próbach system blokuje dostęp i wysyła alert bezpieczeństwa na e-mail administratora. Każda akcja jest skrupulatnie monitorowana."
            }
        ],
        customCta: {
            title: "Potrzebujesz niezawodnego sklepu?",
            description: "Zbuduję szybką platformę e-commerce, która zautomatyzuje Twoją logistykę i uwolni Cię od drogich abonamentów."
        },
        systemModules: [
            {
                name: "Moduł Klienta",
                features: [
                    "Błyskawiczne zakupy wariantu 'Gość' bez rejestracji",
                    "Dynamiczna wyszukiwarka produktów w czasie rzeczywistym",
                    "System zweryfikowanych opinii po zakupie",
                    "Integracja z płatnościami Stripe i mapą Paczkomatów"
                ]
            },
            {
                name: "Panel Administratora",
                features: [
                    "Zarządzanie asortymentem i dynamiczne tworzenie kategorii",
                    "Moduł CMS do personalizacji strony głównej (Hero Slider)",
                    "Pełne zarządzanie statusem zamówień i zwrotami",
                    "Centralny Rejestr Zdarzeń (Audit Log) dla administratora"
                ]
            }
        ],
        desktopGallery: [
            "/img/hatsumi/1.png",
            "/img/hatsumi/3.png",
            "/img/hatsumi/4.png",
            "/img/hatsumi/5.png",
            "/img/hatsumi/2.png",
            "/img/hatsumi/6.png",
            "/img/hatsumi/7.png",
            "/img/hatsumi/8.png",
            "/img/hatsumi/9.png"
        ],
        mobileGallery: []
    }
];