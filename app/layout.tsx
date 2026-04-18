import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "HSOE Hohai School of Engineering",
  description: "A premier engineering institution fostering innovation, research, and excellence.",
};

function Footer() {
  return (
    <footer className="bg-[#071429] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex flex-col mb-8">
              <span className="text-white font-black text-2xl leading-none tracking-tighter">
                HSOE
              </span>
              <span className="text-[#ffc107] font-bold text-[10px] uppercase tracking-[0.2em] leading-tight">
                Hohai School of Engineering
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              An Autonomous College permanently affiliated to Visvesvaraya Technological University, approved by AICTE & UGC. Dedicated to engineering excellence since inception.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <div key={social} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">{social.slice(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold text-white/40">
              {["Admissions", "Departments", "Research", "Campus Life", "Placements", "Events"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#ffc107] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Important Links</h3>
            <ul className="flex flex-col gap-4 text-sm font-bold text-white/40">
              {["NIRF", "ARIIA", "Examination", "Academic Council", "Mandatory Disclosure", "Career"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#ffc107] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-[#ffc107] font-black text-lg">📍</div>
                <div className="text-sm font-medium text-white/50 leading-relaxed">
                  3rd Cross road Agara Village HSR Layout Bengaluru
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#ffc107] font-black text-lg">📞</div>
                <div className="text-sm font-bold text-white/80">
                  +01 99678 98979
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#ffc107] font-black text-lg">✉️</div>
                <div className="text-sm font-bold text-white/80 hover:text-[#ffc107] transition-colors">
                  admissions@hsoe.edu
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            © 2026 HSOE HOHAI SCHOOL OF ENGINEERING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f6f9ff] text-[#0b1f3a] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}