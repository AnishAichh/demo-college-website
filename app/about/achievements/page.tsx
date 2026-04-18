import Link from "next/link";

export default function AchievementsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1920" alt="Achievements" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Pride</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Milestones & Achievements
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <span>/</span>
            <span className="text-white/80">Achievements</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {[
              { year: "2025", title: "Global Innovation Award", desc: "Recognized as the most innovative private engineering college in the region." },
              { year: "2024", title: "100% Placement Record", desc: "Achieved perfect placement for the 5th consecutive year." },
              { year: "2023", title: "World-Class Lab Setup", desc: "Inaugurated 5 new Centers of Excellence in AI and Robotics." },
              { year: "2022", title: "Top NIRF Ranking", desc: "Ranked among the top 100 engineering institutions in India." },
            ].map((a, i) => (
              <div key={i} className="flex gap-8 items-center p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50">
                 <div className="text-5xl font-black text-blue-500 italic shrink-0">{a.year}</div>
                 <div>
                    <h3 className="text-2xl font-black text-[#071429] uppercase italic tracking-tighter mb-2">{a.title}</h3>
                    <p className="text-gray-500 font-medium">{a.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
