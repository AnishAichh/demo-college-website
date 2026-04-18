"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AdmissionModal from "./components/AdmissionModal";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920",
    title: "Engineering Excellence with Global Impact",
    subtitle: "Welcome to HSOE Hohai School of Engineering, a premier destination for innovation and leadership in technical education."
  },
  {
    image: "https://images.unsplash.com/photo-1523050853064-dbad350c746b?auto=format&fit=crop&q=80&w=1920",
    title: "Shape the Future of Innovation",
    subtitle: "Join a community where research meets real-world application, fostering the next generation of global engineers."
  }
];

const coreValues = [
  { icon: "🎓", title: "Top Ranked", desc: "Recognized among the best technical institutions globally." },
  { icon: "🔬", title: "R&D Focus", desc: "State-of-the-art labs fostering breakthrough innovations." },
  { icon: "🤝", title: "Industry Connect", desc: "Strong partnerships with Fortune 500 companies." },
  { icon: "🌍", title: "Global Network", desc: "Study abroad programs and international collaborations." },
];

const departments = [
  { title: "Computer Science", code: "CSE", color: "blue", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" },
  { title: "Information Science", code: "ISE", color: "indigo", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
  { title: "Electronics & Comm", code: "ECE", color: "cyan", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" },
  { title: "Mechanical Engg", code: "ME", color: "orange", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400" },
];

const stats = [
  { value: "100%", label: "Placement Track Record" },
  { value: "450+", label: "Leading Recruiters" },
  { value: "50+", label: "Foreign Collaborations" },
  { value: "25+", label: "Centers of Excellence" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    const modalTimer = setTimeout(() => setShowModal(true), 2000);
    return () => {
        clearInterval(timer);
        clearTimeout(modalTimer);
    };
  }, []);

  return (
    <main className="pt-[112px]">
      {showModal && <AdmissionModal isOpen={showModal} onClose={() => setShowModal(false)} />}
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[650px] overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#071429]/95 via-[#071429]/40 to-transparent z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center px-6">
              <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-white transform transition-all duration-700 translate-y-0 opacity-100">
                  <span className="inline-block bg-[#ffc107] text-[#071429] font-black text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-sm mb-6 shadow-lg shadow-yellow-400/20">
                    Engineering Excellence
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter italic">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-medium italic">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/admissions" className="bg-[#ffc107] text-[#071429] font-black text-xs px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
                      Admission 2026-27
                    </Link>
                    <Link href="/programs" className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs px-8 py-4 rounded-xl hover:bg-white/20 transition-all uppercase tracking-widest">
                      View Programs
                    </Link>
                  </div>
                </div>

                {/* News Box */}
                <div className="hidden lg:block w-[350px] shrink-0 bg-[#071429]/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative group">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-black text-xs uppercase tracking-[0.3em]">Latest News</h3>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    </div>
                  </div>
                  <div className="relative h-[280px]">
                    <div className="absolute inset-0 space-y-6 animate-marquee">
                      {[
                        { date: "18 April", title: "Admissions Open for 2026 Academic Year" },
                        { date: "15 April", title: "HSOE Ranks #1 in Placement Excellence" },
                        { date: "12 April", title: "New Robotics Center to be inaugurated" },
                        { date: "10 April", title: "International Conference on AI starts next week" },
                        { date: "08 April", title: "Scholarship applications now being accepted" },
                      ].map((news, i) => (
                        <div key={i} className="group/item cursor-pointer border-b border-white/5 pb-4 hover:border-white/20 transition-colors">
                          <div className="text-[#ffc107] font-black text-[9px] uppercase tracking-widest mb-1">{news.date}</div>
                          <div className="text-white/80 font-bold text-[13px] leading-tight group-hover/item:text-white transition-colors uppercase tracking-tight italic">{news.title}</div>
                        </div>
                      ))}
                      {/* Duplicate for seamless scroll */}
                      {[
                        { date: "18 April", title: "Admissions Open for 2026 Academic Year" },
                        { date: "15 April", title: "HSOE Ranks #1 in Placement Excellence" },
                      ].map((news, i) => (
                        <div key={i + 'dup'} className="group/item cursor-pointer border-b border-white/5 pb-4 hover:border-white/20 transition-colors">
                          <div className="text-[#ffc107] font-black text-[9px] uppercase tracking-widest mb-1">{news.date}</div>
                          <div className="text-white/80 font-bold text-[13px] leading-tight group-hover/item:text-white transition-colors uppercase tracking-tight italic">{news.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href="/news" className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#071429] to-transparent text-[#ffc107] font-black text-[10px] uppercase tracking-widest text-center">
                    View All News
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-10 md:left-24 z-30 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1.5 transition-all rounded-full ${idx === currentSlide ? "bg-[#ffc107] w-20" : "bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#071429] py-12 px-6 relative z-40 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-5xl font-black text-[#ffc107] mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="President" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl max-w-xs hidden md:block">
                <p className="text-[#071429] font-bold text-lg mb-2 italic">"Empowering minds and shaping futures through innovation and integrity."</p>
                <p className="text-blue-500 font-black text-xs uppercase tracking-widest">— President's Message</p>
              </div>
            </div>
            <div>
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">About the Institution</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#071429] mb-8 leading-tight tracking-tighter">
                Fostering Excellence in Engineering for Decades
              </h2>
              <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                <p>
                  HSOE Hohai School of Engineering is an Autonomous College permanently affiliated to Visvesvaraya Technological University, approved by AICTE & UGC. Our institution stands at the forefront of technical education, combining rigorous academic standards with practical innovation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  {coreValues.map((v) => (
                    <div key={v.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-xl shrink-0">
                        {v.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#071429] mb-1">{v.title}</h4>
                        <p className="text-[12px] leading-snug opacity-80">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12">
                <Link href="/about" className="inline-flex items-center gap-3 bg-blue-500 text-white font-black text-xs px-8 py-4 rounded-lg hover:bg-blue-600 hover:shadow-xl transition-all uppercase tracking-widest">
                  Discover More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Slider / Grid */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Departments</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#071429] leading-tight tracking-tighter">
                Explore Our Technical Streams
              </h2>
            </div>
            <Link href="/departments" className="text-blue-500 font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              All Departments
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div key={dept.code} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-xl shadow-gray-200">
                  <img src={dept.img} alt={dept.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071429] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80 group-hover:opacity-100">{dept.code}</div>
                    <div className="text-lg font-black leading-tight tracking-tighter">{dept.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="py-24 px-6 bg-[#071429] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#ffc107] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Placements</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter text-white">
                Launch Your Career with Global Leaders
              </h2>
              <p className="text-white/70 font-medium leading-relaxed mb-10 text-lg">
                Our placement cell works tirelessly to ensure that our graduates find their place in the world's most innovative companies. With 100% placement track record and partnerships with 450+ recruiters.
              </p>
              <div className="flex flex-wrap gap-6 mb-12">
                {["L&T", "TCS", "Accenture", "Microsoft", "Google", "Amazon"].map((p) => (
                  <div key={p} className="h-12 bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-lg flex items-center justify-center font-bold text-xs uppercase tracking-widest text-white/50">{p}</div>
                ))}
              </div>
              <Link href="/placements" className="inline-flex items-center gap-3 bg-[#ffc107] text-[#071429] font-black text-xs px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
                Explore Placement Stats
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem] shadow-3xl">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-4xl font-black text-[#ffc107] mb-1">50 LPA</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Highest Package</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#ffc107] mb-1">8.5 LPA</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Average CTC</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#ffc107] mb-1">1200+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Offers in 2025</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#ffc107] mb-1">200+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Fortune 500 Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 px-6 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/40">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter">
                Register Today for Admissions 2026-27
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium mb-12 leading-relaxed">
                Be a part of a legacy of engineering excellence. Admissions are now open for all undergraduate and postgraduate programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/admissions" className="bg-white text-blue-600 font-black text-xs px-10 py-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
                  Apply Online Now
                </Link>
                <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xs px-10 py-5 rounded-xl hover:bg-white/20 transition-all uppercase tracking-widest">
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}