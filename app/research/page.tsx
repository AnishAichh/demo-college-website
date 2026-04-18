import Link from "next/link";

const researchCenters = [
  {
    title: "Center for Artificial Intelligence",
    desc: "Focusing on machine learning, natural language processing, and computer vision for industrial solutions.",
    icon: "🤖",
    projects: "15+"
  },
  {
    title: "Sustainable Water Resources",
    desc: "Advanced research in flood modeling, irrigation systems, and climate change resilience.",
    icon: "💧",
    projects: "12+"
  },
  {
    title: "Advanced Materials Lab",
    desc: "Development of high-strength composites and sustainable building materials for modern infrastructure.",
    icon: "🧪",
    projects: "20+"
  },
  {
    title: "Renewable Energy Systems",
    desc: "Innovating in solar photovoltaics, wind energy conversion, and smart grid technologies.",
    icon: "☀️",
    projects: "18+"
  }
];

export default function ResearchPage() {
  return (
    <main className="pt-[112px]">
      {/* Page Hero */}
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920" alt="Research" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Innovation Hub</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Discovery & Impact
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Research</span>
          </div>
        </div>
      </section>

      {/* Main Research Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
            <div className="lg:w-1/2">
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#071429] mb-8 leading-tight tracking-tighter">
                Pushing the Boundaries of <span className="text-blue-500">Technical Knowledge</span>
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 text-lg">
                At HSOE, research is not just an academic pursuit; it's a commitment to solving real-world challenges. From autonomous systems to sustainable infrastructure, our researchers are leading the way in creating a better future.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#f6f9ff] px-6 py-4 rounded-2xl border border-blue-50">
                  <div className="text-3xl font-black text-[#071429]">400+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Patents Published</div>
                </div>
                <div className="bg-[#f6f9ff] px-6 py-4 rounded-2xl border border-blue-50">
                  <div className="text-3xl font-black text-[#071429]">2800+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Journals Indexed</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#ffc107] p-8 rounded-[2rem] shadow-xl max-w-[200px] hidden md:block">
                <div className="text-4xl font-black text-[#071429] mb-2">12M+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#071429]/60">Research Grants (INR)</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-[#071429] mb-4 tracking-tight uppercase italic underline decoration-blue-500 decoration-4 underline-offset-8">Research Centers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchCenters.map((center) => (
              <div key={center.title} className="bg-[#f6f9ff] p-10 rounded-[2.5rem] border border-blue-50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{center.icon}</div>
                <h4 className="text-lg font-black text-[#071429] mb-4 uppercase tracking-tighter leading-tight italic">{center.title}</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-10">{center.desc}</p>
                <div className="text-blue-500 font-black text-[10px] uppercase tracking-widest flex items-center justify-between">
                  <span>Ongoing Projects: {center.projects}</span>
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 px-6 bg-[#071429] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#ffc107] font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">Scholarly Impact</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-none tracking-tighter">
                Global Recognition in <br /><span className="text-blue-500">Scopus & Web of Science</span>
              </h2>
              <p className="text-white/60 font-medium leading-relaxed mb-12 text-lg italic">
                Our faculty and research scholars consistently publish in high-impact international journals. We maintain a strong presence in global research databases, reflecting our commitment to academic rigor.
              </p>
              <Link href="#" className="inline-flex items-center gap-3 bg-[#ffc107] text-[#071429] font-black text-xs px-8 py-4 rounded-xl hover:scale-105 transition-all uppercase tracking-widest">
                Download Research Report
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { label: "Q1 Ranked Journals", value: "150+" },
                { label: "International Conferences", value: "300+" },
                { label: "Book Chapters", value: "80+" }
              ].map((pub) => (
                <div key={pub.label} className="flex justify-between items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <span className="text-sm font-black uppercase tracking-widest text-white/60">{pub.label}</span>
                  <span className="text-3xl font-black text-[#ffc107]">{pub.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
