// src/app/layout.js
import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fredoka, Poppins, Varela_Round } from "next/font/google";

export const metadata = {
    title: "Shreem Software Solutions | IT Services & Web Development",
    description:
        "Turning ideas into intelligent digital solutions. Custom apps, scalable platforms & IT services by Shreem Software Solutions",
    keywords: [
        "IT company",
        "web development",
        "Shreem Software Solutions",
        "mobile apps",
        "software services",
    ],
};

// load fonts
const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // available weights
    variable: "--font-fredoka",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500"], // only weight 500 is needed
    variable: "--font-poppins",
});

const varela = Varela_Round({
    subsets: ["latin"],
    weight: ["400"], // only one weight available
    variable: "--font-varela",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${fredoka.variable} ${poppins.variable} ${varela.variable} font-sans bg-white`}
        >
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
