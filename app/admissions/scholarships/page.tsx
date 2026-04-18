import Link from "next/link";

export default function ScholarshipsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" alt="Scholarships" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Merit Recognition</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Financial Aid & Scholarships
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/admissions" className="hover:text-blue-500">Admissions</Link>
            <span>/</span>
            <span className="text-white/80">Scholarships</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              { title: "Chairman's Scholarship", desc: "Awarded to top performers in national level entrance exams." },
              { title: "Merit Scholarship", desc: "For students with outstanding academic records in 10+2." },
              { title: "Sports Scholarship", desc: "Recognizing state and national level athletes." },
              { title: "Financial Aid", desc: "Need-based assistance for deserving students from economically weaker sections." },
            ].map((s, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50">
                 <h3 className="text-2xl font-black text-[#071429] uppercase italic tracking-tighter mb-3">{s.title}</h3>
                 <p className="text-gray-500 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
