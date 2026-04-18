import Link from "next/link";

export default function AccreditationPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920" alt="Accreditation" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Quality Assurance</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Accreditation & Approvals
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <span>/</span>
            <span className="text-white/80">Accreditation</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "NBA", desc: "National Board of Accreditation for all engineering programs." },
              { title: "NAAC", desc: "Grade 'A' Accreditation by National Assessment and Accreditation Council." },
              { title: "AICTE", desc: "Approved by All India Council for Technical Education." },
              { title: "VTU", desc: "Permanently Affiliated to Visvesvaraya Technological University." },
            ].map((a, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50 text-center">
                 <h3 className="text-3xl font-black text-blue-500 mb-4 tracking-tighter">{a.title}</h3>
                 <p className="text-sm text-gray-500 font-medium">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
