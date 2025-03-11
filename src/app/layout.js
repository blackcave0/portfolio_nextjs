import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

import Footer from "@/components/Footer/Footer";
// import { Geist, Geist_Mono } from "next/font/google";
import MouseCursor from "./MouseCursor";
import "./globals.css";

import AOSInitializer from "@/components/AOSInitializer";

import {
  Open_Sans,
  Montserrat,
  Roboto,
  Poppins,
  Inter,
  Lato,
  Raleway,
  Sigmar,
  Arsenal_SC,
} from "next/font/google";
// import Navbar04Page from "@/components/navbar-04/navbar-04";
import Navbar from "@/components/navbar/Navbar";

const arsenal = Arsenal_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const sigmar = Sigmar({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] }); // Added weight: 400 and 700
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] }); // Added weight: 400 and 700
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] }); // Added weight: 400 and 700
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata = {
  title: "Daksh Srivastava | Full Stack Developer | MERN & React Specialist",
  description:
    "Professional full stack developer specializing in MERN stack, React.js, and Next.js. Building scalable web applications and mobile apps with modern technologies.",
  keywords: [
    "Daksh Srivastava",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Expert",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "UI/UX Design",
    "E-commerce Development",
    "Mobile App Development",
    "JavaScript Expert",
    "MongoDB Developer",
    "Tailwind CSS Expert",
  ],
  authors: [{ name: "Daksh Srivastava" }],
  creator: "Daksh Srivastava",
  publisher: "Daksh Srivastava",
  metadataBase: new URL("https://imdaksh.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daksh Srivastava - Full Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing MERN stack, React.js, and Next.js development projects",
    url: "https://imdaksh.vercel.app",
    siteName: "Daksh Srivastava Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Daksh Srivastava Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  /* twitter: {
    card: "summary_large_image",
    title: "Daksh Srivastava | Full Stack Developer",
    description:
      "MERN stack and React.js expert building modern web applications",
    creator: "@yourtwitterhandle",
    images: ["/twitter-image.png"],
  }, */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
  <link rel="manifest" href="/manifest.json" />
        {/* Additional meta tags */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <link rel="canonical" href="https://your-portfolio-domain.com" />
        <link rel="me" href="mailto:your@professional.email" />
        <link rel="author" href="https://linkedin.com/in/yourprofile" />
      </head>
      <body
        className={` ${openSans.className} ${montserrat.className} ${roboto.className} ${poppins.className} ${inter.className} ${lato.className} ${raleway.className} ${sigmar.className} ${arsenal.className} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {/* <Navbar04Page /> */}
          <MouseCursor />
          <AOSInitializer />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
