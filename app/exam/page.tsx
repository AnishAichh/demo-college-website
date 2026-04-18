import Link from "next/link";

export default function ExamPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1434031211660-84c11e031c84?auto=format&fit=crop&q=80&w=1920" alt="Exams" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Academic Assessment</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Examination Cell
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Examination</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="p-12 rounded-[3.5rem] bg-[#f6f9ff] border border-blue-50">
              <h2 className="text-3xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">Current Notifications</h2>
              <ul className="space-y-6">
                {[
                  "Odd Semester End Examination Timetable released",
                  "Last date for Exam Fee payment: 25th April 2026",
                  "Special Supplementary exams scheduled for June",
                  "Guidelines for Semester End Theory Examinations",
                ].map((note, i) => (
                  <li key={i} className="flex gap-4 group cursor-pointer">
                    <div className="text-blue-500 font-black italic">→</div>
                    <span className="text-gray-600 font-bold hover:text-blue-500 transition-colors">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-[#071429] text-white">
              <h2 className="text-3xl font-black mb-8 uppercase italic tracking-tighter text-blue-500">Quick Downloads</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Exam Form PDF",
                  "Transcript Request",
                  "Syllabus Copy",
                  "Grading Policy",
                  "Hall Ticket Login",
                  "Result Portal",
                ].map((link) => (
                  <Link key={link} href="#" className="p-5 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-blue-500 transition-all text-[11px] font-black uppercase tracking-widest">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
