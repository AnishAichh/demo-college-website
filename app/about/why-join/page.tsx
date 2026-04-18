import Link from "next/link";

export default function WhyJoinPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" alt="Why Join" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Choice</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Why Join HSOE?
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <span>/</span>
            <span className="text-white/80">Why Join</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Legacy of Excellence", desc: "Decades of experience in technical education and research." },
              { title: "Industry Immersion", desc: "Regular interactions with leaders from global tech giants." },
              { title: "Smart Campus", desc: "State-of-the-art infrastructure and digital learning environments." },
              { title: "Global Opportunities", desc: "International exchange programs and research collaborations." },
              { title: "100% Placements", desc: "A dedicated cell ensuring career success for every student." },
              { title: "Innovation Culture", desc: "Centers of Excellence focusing on AI, Robotics, and more." },
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50 hover:border-blue-500 transition-all">
                <div className="text-blue-500 font-black text-2xl mb-4 italic">#{i+1}</div>
                <h3 className="text-xl font-black text-[#071429] uppercase italic tracking-tighter mb-4">{item.title}</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
