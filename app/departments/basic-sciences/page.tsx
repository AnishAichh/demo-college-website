import Link from "next/link";

export default function BasicSciencesPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920" alt="Basic Sciences" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Scientific Foundation</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Applied Sciences
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/departments" className="hover:text-blue-500">Departments</Link>
            <span>/</span>
            <span className="text-white/80">Applied Sciences</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 font-medium leading-relaxed mb-12 text-center max-w-3xl mx-auto text-lg">
            The Applied Sciences department provides the fundamental scientific and mathematical foundation required for all engineering disciplines. We offer courses in Physics, Chemistry, and Mathematics, emphasizing their practical applications in engineering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Engineering Physics", icon: "⚛️" },
              { title: "Engineering Chemistry", icon: "🧪" },
              { title: "Mathematics", icon: "📊" },
            ].map((s) => (
              <div key={s.title} className="p-12 rounded-[3.5rem] bg-[#f6f9ff] border border-blue-50 text-center">
                <div className="text-5xl mb-6">{s.icon}</div>
                <h3 className="text-2xl font-black text-[#071429] uppercase italic tracking-tighter">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
