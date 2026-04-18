import Link from "next/link";

export default function GovernancePage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920" alt="Governance" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Framework</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Governance & Ethics
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <span>/</span>
            <span className="text-white/80">Governance</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {[
              { title: "Transparency", desc: "Open communication and clear policies governing institutional decisions." },
              { title: "Academic Freedom", desc: "Empowering faculty and students to pursue research and innovation without constraints." },
              { title: "Ethical Standards", desc: "Maintaining the highest integrity in academic and administrative processes." },
              { title: "Strategic Oversight", desc: "A robust board of governors ensuring long-term institutional growth." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="text-4xl font-black text-blue-500 italic shrink-0">0{i+1}</div>
                 <div>
                    <h3 className="text-2xl font-black text-[#071429] uppercase italic tracking-tighter mb-3">{item.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
