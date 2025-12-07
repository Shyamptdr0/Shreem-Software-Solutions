"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo new .png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        setScrolled(window.scrollY > 0);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
	    <header
		    className="fixed top-0 left-0 right-0 z-50  py-4 px-5 md:px-10 "
	    >
		    <div
			    className="mx-auto flex justify-between items-center px-6 md:px-12
        py-2 bg-white rounded-2xl  border-2 shadow-md"
		    >
			    {/* Logo */}
			    <div className="flex items-center">
				    <Link href="/">
					    <Image src={logo} alt="Shreem Logo" className="h-14 w-auto" />
				    </Link>
			    </div>

			    {/* Desktop Navigation */}
			    <nav className="hidden md:flex items-center space-x-8 text-black text-lg inter inter-500 font-bold">
				    {[
					    { href: "/", label: "Home" },
					    { href: "/About", label: "About" },
					    { href: "/Service", label: "Service" },
					    { href: "/Portfolio", label: "Portfolio" },
				    ].map((link) => (
					    <Link
						    key={link.href}
						    href={link.href}
						    className={`relative hover:text-sky-600 transition ${
							    pathname === link.href ? "text-sky-600" : ""
						    }`}
					    >
						    {link.label}
						    {pathname === link.href && (
							    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 rounded-full"></span>
						    )}
					    </Link>
				    ))}
			    </nav>

			    {/* Get In Touch Button */}
			    <div className="hidden md:block inter inter-500">
				    <Link
					    href="/Contact"
					    className=" bg-sky-500 text-white px-6 py-3 rounded-full font-medium
                hover:bg-sky-700 transition"
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
			    <div className="md:hidden bg-white shadow-lg mt-2 rounded-xl px-6 py-4">
				    <nav className="flex flex-col items-start space-y-4 text-black">
					    <Link href="/" onClick={() => setMobileOpen(false)}>
						    Home
					    </Link>
					    <Link href="/About" onClick={() => setMobileOpen(false)}>
						    About
					    </Link>
					    <Link href="/Service" onClick={() => setMobileOpen(false)}>
						    Service
					    </Link>
					    <Link href="/Portfolio" onClick={() => setMobileOpen(false)}>
						    Portfolio
					    </Link>
					    <Link
						    href="/Contact"
						    onClick={() => setMobileOpen(false)}
						    className="bg-sky-700 text-white px-5 py-2 rounded-full font-medium hover:bg-sky-500 transition"
					    >
						    Get In Touch
					    </Link>
				    </nav>
			    </div>
		    )}
	    </header>

    );
}
