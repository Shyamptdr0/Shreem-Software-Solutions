// src/app/layout.js
import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fredoka, Poppins, Varela_Round } from "next/font/google";

// ------------------
// SEO Metadata
// ------------------
export const metadata = {
    metadataBase: new URL("https://shreemsoftwaresolutions.com"),
    title: {
        default: "Shreem Software Solutions | IT Services & Web Development",
        template: "%s | Shreem Software Solutions",
    },
    description:
        "Shreem Software Solutions is an IT company offering web development, mobile app development, and custom software services. We turn your ideas into intelligent digital solutions.",
    keywords: [
        "IT company in Indore",
        "IT company in Khargone",
        "web development India",
        "Shreem Software Solutions",
        "mobile apps",
        "software services",
        "custom software",
        "digital solutions",
        "IT consulting",
        "app development",
        "website design",
    ],
    authors: [{ name: "Shreem Software Solutions", url: "https://shreemsoftwaresolutions.com" }],
    creator: "Shreem Software Solutions",
    publisher: "Shreem Software Solutions",
    openGraph: {
        title: "Shreem Software Solutions | Web & IT Services",
        description:
            "Professional IT solutions: web development, app development, and software services in India. Trusted by businesses to deliver scalable, modern platforms.",
        url: "https://shreemsoftwaresolutions.com",
        siteName: "Shreem Software Solutions",
        images: [
            {
                url: "/shreemlogo.png", // 512x512 logo in /public
                width: 1200,
                height: 830,
                alt: "Shreem Software Solutions - IT Services & Web Development",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shreem Software Solutions | IT Services",
        description:
            "Custom apps, scalable platforms, and IT services. Turning your ideas into intelligent digital solutions.",
        images: ["/shreem_logo.png"],
        creator: "@ShreemSoftware", // update if you make Twitter account
    },
    icons: {
        icon: "/shreem_logo.png", // classic favicon
        shortcut: "/shreem_logo.png",
        apple: "/shreem_logo.png", // 180x180 for Apple devices
    },
    manifest: "/site.webmanifest", // optional: for PWA
    category: "technology",
    alternates: {
        canonical: "https://shreemsoftwaresolutions.com",
    },
};

// ------------------
// Load Google Fonts
// ------------------
const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-fredoka",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500"],
    variable: "--font-poppins",
});

const varela = Varela_Round({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-varela",
});

// ------------------
// Layout Component
// ------------------
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${fredoka.variable} ${poppins.variable} ${varela.variable} font-sans bg-white text-gray-900`}
        >
        {/* Site Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* JSON-LD Structured Data (SEO for Google Rich Results) */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Shreem Software Solutions",
                    url: "https://shreemsoftwaresolutions.com",
                    logo: "https://shreemsoftwaresolutions.com/shreem_logo.png",
                    sameAs: [
                        "https://facebook.com/shreemsoftwaresolutions",
                        "https://linkedin.com/company/shreemsoftwaresolutions",
                        "https://twitter.com/ShreemSoftware",
                    ],
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+91-9876543210", // replace with real business number
                        contactType: "customer service",
                        areaServed: "IN",
                        availableLanguage: "English",
                    },
                }),
            }}
        />
        </body>
        </html>
    );
}
