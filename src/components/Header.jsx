"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/image/Shreem logo 2.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight);
        };

        if (pathname === "/") {
            // reset when landing on home
            setScrolled(window.scrollY > window.innerHeight);

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setScrolled(true); // other pages always white
        }
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-lg py-2" : "py-0"
            }`}
        >
            <div className="mx-auto flex justify-between items-center px-6 md:px-10">
                {/* Logo + Name + Nav Links wrapper */}
                <div
                    className={`flex items-center gap-6 rounded-full px-0 py-2 transition ${
                        scrolled
                            ? "bg-white/100 backdrop-blur-0"
                            : "bg-white/30 backdrop-blur-md"
                    }`}
                >
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image src={logo} alt="Shreem Logo" className="h-10 w-auto" />
                        <span className="font-sans text-2xl font-semibold text-black">
              Shreem
            </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="border border-black rounded-full hidden md:flex items-center space-x-6 text-black text-lg p-4">
                        <Link href="/" className="hover:text-sky-600">Home</Link>
                        <Link href="/About" className="hover:text-sky-600">About</Link>
                        <Link href="/Service" className="hover:text-sky-600">Service</Link>
                        <Link href="/Portfolio" className="hover:text-sky-600">Portfolio</Link>
                        <Link href="/Blog" className="hover:text-sky-600">Blog</Link>
                    </nav>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/Contact"
                        className="bg-cyan-500 text-white px-5 py-2 rounded-full font-medium hover:bg-cyan-600 transition"
                    >
                        Get In Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-start px-6 py-4 space-y-4 text-black">
                        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                        <Link href="/About" onClick={() => setMobileOpen(false)}>About</Link>
                        <Link href="/Service" onClick={() => setMobileOpen(false)}>Service</Link>
                        <Link href="/Portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>
                        <Link href="/Blog" onClick={() => setMobileOpen(false)}>Blog</Link>
                        <Link
                            href="/Contact"
                            onClick={() => setMobileOpen(false)}
                            className="bg-cyan-500 text-white px-5 py-2 rounded-full font-medium hover:bg-cyan-600 transition"
                        >
                            Get In Touch
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
