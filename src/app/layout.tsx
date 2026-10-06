import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: "./fonts/BricolageGrotesque.woff2",
  weight: "200 800",
  variable: "--font-sans",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

// El sitio es estático (output: "export"), así que la política va como <meta>.
// Next inyecta scripts en línea al exportar; sin servidor no hay nonce posible.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

export const metadata: Metadata = {
  title: "jotapol_ · estudio de software",
  description: "JOTAPOL DEV: productos propios y proyectos de software para clientes. Shiplog, LLAVES y lo que sigue.",
  openGraph: {
    title: "jotapol_ · estudio de software",
    description: "Productos propios y proyectos para clientes. Este sitio es nuestro changelog.",
    type: "website",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6FB" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0A1F" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        {/* Aplica el tema guardado antes de pintar, para que no parpadee. */}
        <script dangerouslySetInnerHTML={{ __html: 'try{var t=localStorage.getItem("tema");if(t)document.documentElement.dataset.theme=t}catch(e){}' }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
