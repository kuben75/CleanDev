import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polityka Prywatności | Automatyzuj.it",
    description: "Zasady przetwarzania danych osobowych i polityka plików cookies.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-32">
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-12 uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Wróć na stronę główną
                    </Link>
                    <h1 className="heading-1 mb-6">Polityka Prywatności i Cookies</h1>
                    <p className="text-body">
                        Ostatnia aktualizacja: wrzesień 2026 r.
                    </p>
                </div>
            </section>

            <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">

                <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Administrator Danych Osobowych</h2>
                        <p>
                            Administratorem Twoich danych osobowych przekazywanych za pośrednictwem strony internetowej jest <strong>Jakub Ławniczak (Niezależny Inżynier Oprogramowania)</strong>, działający pod marką <strong>Automatyzuj.it</strong>.
                            W sprawach związanych z przetwarzaniem danych możesz kontaktować się pod adresem e-mail: <strong>automatyzuj.it@gmail.com</strong>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Jakie dane przetwarzam i w jakim celu?</h2>
                        <p className="mb-4">Twoje dane przetwarzam wyłącznie w niezbędnym zakresie, w następujących celach:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
                            <li><strong>Obsługa zapytań (Formularz kontaktowy):</strong> Przetwarzam Twoje imię i nazwisko, adres e-mail oraz treść wiadomości, aby móc odpowiedzieć na Twoje zapytanie. Podstawą prawną jest podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit. b RODO).</li>
                            <li><strong>Rezerwacja spotkań (Google Meet / Cal.com):</strong> Przetwarzam Twój adres e-mail w celu automatycznego wygenerowania linku do spotkania oraz wysłania zaproszenia.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Odbiorcy danych (Narzędzia zewnętrzne)</h2>
                        <p className="mb-4">W celu zapewnienia najwyższej jakości usług, Twoje dane mogą być powierzane sprawdzonym podmiotom trzecim (procesorom):</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
                            <li><strong>Resend:</strong> system do bezpiecznej obsługi wysyłki e-maili z formularza kontaktowego.</li>
                            <li><strong>Cal.com / Google:</strong> narzędzia obsługujące kalendarz rezerwacji oraz generujące wideo-rozmowy.</li>
                            <li><strong>Useme:</strong> w przypadku nawiązania współpracy, dane niezbędne do wystawienia faktury VAT oraz zawarcia umowy o dzieło przekazywane są do platformy rozliczeniowej Useme.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Okres przechowywania danych</h2>
                        <p className="mb-4">Twoje dane przetwarzam tylko tak długo, jak to konieczne:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
                            <li><strong>Zapytania z formularza:</strong> do czasu zakończenia komunikacji, a następnie w celach archiwalnych przez maksymalnie 1 rok.</li>
                            <li><strong>Dane z rezerwacji (Cal.com):</strong> zgodnie z historią spotkań kalendarza.</li>
                            <li><strong>Dokumentacja księgowa:</strong> w przypadku nawiązania współpracy, dane z faktur przechowywane są przez 5 lat od końca roku kalendarzowego, w którym upłynął termin płatności podatku (wymóg prawny).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Przekazywanie danych poza EOG</h2>
                        <p>
                            W związku z korzystaniem z nowoczesnych narzędzi technologicznych (takich jak usługi Google, system pocztowy Resend czy kalendarz Cal.com), Twoje dane mogą być przekazywane do serwerów zlokalizowanych poza Europejskim Obszarem Gospodarczym (głównie w USA). Dostawcy ci gwarantują odpowiedni poziom ochrony danych poprzez certyfikację w ramach programu <strong>Data Privacy Framework</strong> lub stosowanie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Twoje prawa</h2>
                        <p className="mb-4">Zgodnie z przepisami RODO masz pełne prawo do:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
                            <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
                            <li>sprostowania (poprawiania) swoich danych,</li>
                            <li>usunięcia danych (prawo do bycia zapomnianym),</li>
                            <li>ograniczenia przetwarzania danych,</li>
                            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Pliki Cookies (Ciasteczka)</h2>
                        <p>
                            Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania serwisu (ciasteczka niezbędne) oraz funkcjonowania osadzonego widżetu kalendarza Cal.com. Nie używam agresywnych skryptów śledzących, pikseli marketingowych czy narzędzi profilujących (jak Facebook Pixel).
                            Korzystając ze strony, zgadzasz się na użycie niezbędnych plików cookies.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}