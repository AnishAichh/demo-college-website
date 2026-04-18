"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
    {
        label: "About",
        href: "/about",
        dropdown: [
            { label: "Overview", href: "/about" },
            { label: "Why Join HSOE", href: "/about/why-join" },
            { label: "Leadership", href: "/about/leadership" },
            { label: "Governance", href: "/about/governance" },
            { label: "Accreditation", href: "/about/accreditation" },
            { label: "Achievements", href: "/about/achievements" },
        ]
    },
    {
        label: "Programs",
        href: "/programs",
        dropdown: [
            { label: "Undergraduate", href: "/admissions/undergraduate" },
            { label: "Postgraduate", href: "/admissions/postgraduate" },
            { label: "PhD & MSc", href: "/admissions/research" },
            { label: "Scholarships", href: "/admissions/scholarships" },
        ]
    },
    {
        label: "Departments",
        href: "/departments",
        dropdown: [
            { label: "Computer Science", href: "/departments/cse" },
            { label: "Information Science", href: "/departments/ise" },
            { label: "Electronics & Comm", href: "/departments/ece" },
            { label: "Mechanical Engg", href: "/departments/me" },
            { label: "Electrical & Electronics", href: "/departments/eee" },
            { label: "Applied Sciences", href: "/departments/basic-sciences" },
        ]
    },
    {
        label: "Admissions",
        href: "/admissions",
    },
    {
        label: "Campus Life",
        href: "/campus-life",
        dropdown: [
            { label: "Events", href: "/events" },
            { label: "Clubs", href: "/campus-life/clubs" },
            { label: "Infrastructure", href: "/campus-life/infrastructure" },
            { label: "Hostels", href: "/campus-life/hostels" },
            { label: "Sports", href: "/campus-life/sports" },
        ]
    },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "translate-y-[-40px]" : "translate-y-0"}`}>
            {/* Top Utility Bar */}
            <div className="bg-[#071429] text-white py-2 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-6 text-[11px] font-medium tracking-wide">
                        <a href="tel:+019967898979" className="hover:text-[#ffc107] transition-colors flex items-center gap-1.5">
                            <span className="opacity-60">Call:</span> +01 99678 98979
                        </a>
                        <a href="mailto:admissions@hsoe.edu" className="hover:text-[#ffc107] transition-colors flex items-center gap-1.5">
                            <span className="opacity-60">Enquiry:</span> admissions@hsoe.edu
                        </a>
                    </div>
                    <div className="hidden md:flex items-center gap-5 text-[10px] uppercase font-bold tracking-widest leading-none">
                        <Link href="/news" className="hover:text-[#ffc107] transition-colors">News</Link>
                        <Link href="/events" className="hover:text-[#ffc107] transition-colors">Events</Link>
                        <Link href="/placements" className="hover:text-[#ffc107] transition-colors">Placements</Link>
                        <Link href="/exam" className="hover:text-[#ffc107] transition-colors">Examination</Link>
                        <Link href="/nirf" className="hover:text-[#ffc107] transition-colors">NIRF</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={`bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col shrink-0 group">
                        <span className="text-[#071429] font-black text-xl leading-none tracking-tighter">
                            HSOE
                        </span>
                        <span className="text-[#3b82f6] font-bold text-[10px] uppercase tracking-[0.2em] leading-tight">
                            Hohai School of Engineering
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navigation.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`px-3 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1 ${activeDropdown === item.label ? "text-[#3b82f6]" : "text-[#071429] hover:text-[#3b82f6]"}`}
                                >
                                    {item.label}
                                    {item.dropdown && (
                                        <svg className={`w-3 h-3 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Mega Dropdown */}
                                {item.dropdown && (
                                    <div className={`absolute top-full left-0 pt-4 w-60 transition-all duration-200 transform origin-top ${activeDropdown === item.label ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                                        <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden py-3">
                                            {item.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    className="block px-6 py-2.5 text-[12px] font-semibold text-[#071429] hover:bg-gray-50 hover:text-[#3b82f6] transition-colors"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admissions"
                            className="hidden sm:inline-flex bg-[#ffc107] text-[#071429] font-black text-xs px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95 transition-all uppercase tracking-widest"
                        >
                            Apply Now
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <span className={`block w-5 h-0.5 bg-[#071429] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-[#071429] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-5 h-0.5 bg-[#071429] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-[200] transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
                <div className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl transition-transform duration-300 transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <span className="font-bold uppercase tracking-widest text-[#071429]">Menu</span>
                        <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className="p-6 overflow-y-auto max-h-[calc(100vh-80px)]">
                        {navigation.map((item) => (
                            <div key={item.label} className="mb-4">
                                <Link
                                    href={item.href}
                                    onClick={() => !item.dropdown && setMenuOpen(false)}
                                    className="text-lg font-bold text-[#071429] hover:text-[#3b82f6] transition-colors flex items-center justify-between"
                                >
                                    {item.label}
                                </Link>
                                {item.dropdown && (
                                    <div className="mt-2 pl-4 border-l-2 border-gray-100 flex flex-col gap-2">
                                        {item.dropdown.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="text-sm font-medium text-gray-500 hover:text-[#3b82f6]"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}