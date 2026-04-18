import Link from "next/link";

const programDetails = [
  {
    title: "Bachelor of Technology (B.E.)",
    subtitle: "Undergraduate programs with industry-focused curricula.",
    items: [
      "Computer Science & Engineering",
      "Information Science & Engineering",
      "Electronics & Communication Engineering",
      "Mechanical Engineering",
      "Electrical & Electronics Engineering",
      "Civil Engineering"
    ],
    icon: "🏗️",
    color: "blue"
  },
  {
    title: "Master of Technology (M.Tech)",
    subtitle: "Advanced postgraduate engineering specializations.",
    items: [
      "Computer Science & Engineering",
      "Digital Communication & Networking",
      "Machine Design",
      "Power Systems",
      "Structural Engineering"
    ],
    icon: "🔬",
    color: "indigo"
  },
  {
    title: "Management & Applications",
    subtitle: "Professional postgraduate degree programs.",
    items: [
      "Master of Business Administration (MBA)",
      "Master of Computer Applications (MCA)"
    ],
    icon: "💼",
    color: "cyan"
  },
  {
    title: "PhD & MSc (Engg)",
    subtitle: "Research programs for academic and professional growth.",
    items: [
      "Full-time Research",
      "Part-time Research",
      "Industry-sponsored Research"
    ],
    icon: "🏛️",
    color: "amber"
  }
];

export default function ProgramsPage() {
  return (
    <main className="pt-[112px]">
      {/* Page Hero */}
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" alt="Programs" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Academic Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Engineering Programs
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Programs</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programDetails.map((program) => (
              <article key={program.title} className="bg-[#f6f9ff] p-12 rounded-[3rem] border border-blue-50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shrink-0">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[#071429] mb-4 uppercase tracking-tighter">{program.title}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-8 leading-relaxed italic">{program.subtitle}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {program.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-[11px] font-black uppercase tracking-wider text-[#071429] opacity-70">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12 pt-8 border-t border-blue-100 flex justify-between items-center">
                      <Link href="#" className="bg-blue-500 text-white font-black text-[10px] px-6 py-3 rounded-xl hover:bg-blue-600 transition-all uppercase tracking-widest">
                        View Curriculum
                      </Link>
                      <Link href="/admissions" className="text-blue-500 font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                        Apply Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Banner */}
      <section className="py-16 px-6 bg-[#f6f9ff] border-t border-blue-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 opacity-40">
          {["NBA Accredited", "NAAC 'A' Grade", "VTU Affiliated", "AICTE Approved", "UGC Recognized"].map((stat) => (
            <div key={stat} className="text-[10px] font-black uppercase tracking-[0.4em] text-[#071429]">
              {stat}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
