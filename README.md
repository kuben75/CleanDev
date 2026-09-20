# Automatyzuj.it – Portfolio & Software House ⚡

A modern B2B digital business card and portfolio focused on conversion. Built from scratch with performance, minimalist editorial design, and lead generation in mind, utilizing integrated meeting scheduling systems.

## Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (with full Dark/Light Mode support)
* **Icons:** Lucide React
* **Infrastructure:** Resend (email notifications), Cal.com (booking system)

##  Key Features

* **Performance:** Static rendering and optimized assets (Next/Image).
* **Editorial Design:** Minimalist interface based on sharp typography and solid borders, free of unnecessary shadows.
* **Lead Generation:** Seamless built-in contact forms and direct integration with a meeting scheduling widget.
* **Dynamic Portfolio:** Scalable project grid divided into featured case studies (Home) and a full archive (`/realizacje`).

##  Local Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/kuben75/CleanDev.git](https://github.com/kuben75/CleanDev.git)
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables by creating a .env.local file in the root directory:
    ```bash
      RESEND_API_KEY=re_YourResendKey
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
The application will be available at http://localhost:3000.

## License
All rights reserved. Automatyzuj.it (2026).
