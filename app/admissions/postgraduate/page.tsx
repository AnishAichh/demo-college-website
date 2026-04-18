import Link from "next/link";

export default function PostgraduateAdmissionsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" alt="Postgraduate" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Advanced Specialization</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Postgraduate Admissions
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/admissions" className="hover:text-blue-500">Admissions</Link>
            <span>/</span>
            <span className="text-white/80">Postgraduate</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">M.Tech & MBA Eligibility</h2>
            <div className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50">
               <ul className="space-y-6">
                 {[
                   "Bachelor's degree in Engineering/Technology for M.Tech with 50% marks.",
                   "Qualifying score in PGCET / GATE for M.Tech programs.",
                   "Bachelor's degree in any discipline for MBA with 50% marks.",
                   "Qualifying score in KMAT / CMAT / MAT / PGCET for MBA.",
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <span className="text-blue-500 font-black">0{i+1}</span>
                     <span className="text-gray-600 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ffc107] text-[#071429] font-black text-xs px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
              Apply for PG Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
