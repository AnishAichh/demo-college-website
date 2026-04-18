import Link from "next/link";

export default function UndergraduateAdmissionsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523050853064-dbad350c746b?auto=format&fit=crop&q=80&w=1920" alt="Admissions" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Future Engineers</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Undergraduate Admissions
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/admissions" className="hover:text-blue-500">Admissions</Link>
            <span>/</span>
            <span className="text-white/80">Undergraduate</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">Eligibility Criteria</h2>
            <div className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50">
               <ul className="space-y-6">
                 {[
                   "Pass in 10+2 with Physics and Mathematics as compulsory subjects.",
                   "Minimum 45% marks in PCM (40% for SC/ST/OBC).",
                   "Qualifying score in KCET / COMEDK / JEE Main / HSOE Entrance.",
                   "Original documents verification during counseling."
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
            <h2 className="text-3xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">Admission Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {[
                 { step: "Step 01", title: "Online Registration", desc: "Fill the application form through our portal." },
                 { step: "Step 02", title: "Entrance Exam", desc: "Appear for JEE/KCET or University Entrance." },
                 { step: "Step 03", title: "Counseling", desc: "Seat allotment based on merit and preference." },
               ].map((s) => (
                 <div key={s.step} className="p-8 rounded-[2.5rem] bg-white shadow-xl shadow-blue-900/5 border border-gray-100">
                    <div className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">{s.step}</div>
                    <h4 className="text-lg font-black text-[#071429] mb-3 uppercase italic tracking-tighter">{s.title}</h4>
                    <p className="text-xs text-gray-400 font-medium">{s.desc}</p>
                 </div>
               ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#ffc107] text-[#071429] font-black text-xs px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
              Join the 2026 Batch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
