import Link from "next/link";

export default function AdmissionsOverviewPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523050853064-dbad350c746b?auto=format&fit=crop&q=80&w=1920" alt="Admissions" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Gateway to Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Admissions 2026
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Admissions</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Undergraduate", href: "/admissions/undergraduate", desc: "B.E. programs in 6+ engineering streams." },
              { title: "Postgraduate", href: "/admissions/postgraduate", desc: "M.Tech and MBA specializations." },
              { title: "Research (PhD)", href: "/admissions/research", desc: "Recognized research centers for deep exploration." },
            ].map((p) => (
              <Link key={p.title} href={p.href} className="p-12 rounded-[3.5rem] bg-[#f6f9ff] border border-blue-50 hover:bg-[#071429] hover:text-white transition-all group">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{p.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-white/50 mb-8">{p.desc}</p>
                <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest group-hover:text-white">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
