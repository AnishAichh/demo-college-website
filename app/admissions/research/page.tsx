import Link from "next/link";

export default function ResearchAdmissionsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920" alt="Research" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Scholarly Innovation</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            PhD & Research Programs
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/admissions" className="hover:text-blue-500">Admissions</Link>
            <span>/</span>
            <span className="text-white/80">Research</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">Research Opportunities</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-12 text-lg">
            HSOE offers PhD programs in various engineering and science disciplines. Our research centers are recognized internationally, providing a fertile ground for innovation and discovery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <div className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50">
               <h3 className="text-xl font-black text-[#071429] mb-4 uppercase italic tracking-tighter">Full-Time PhD</h3>
               <p className="text-xs text-gray-400 font-medium">For dedicated scholars looking to pursue deep research with university fellowship.</p>
             </div>
             <div className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50">
               <h3 className="text-xl font-black text-[#071429] mb-4 uppercase italic tracking-tighter">Part-Time PhD</h3>
               <p className="text-xs text-gray-400 font-medium">For industry professionals looking to advance their technical expertise while working.</p>
             </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#071429] text-white font-black text-xs px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
            Enquire for Research
          </Link>
        </div>
      </section>
    </main>
  );
}
