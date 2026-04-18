import Link from "next/link";

export default function NIRFPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1454165833767-1330069bc921?auto=format&fit=crop&q=80&w=1920" alt="NIRF" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">National Institutional Ranking Framework</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            NIRF Data & Ranking
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">NIRF</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-[3.5rem] bg-[#f6f9ff] border border-blue-50">
             <h2 className="text-3xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">Ranking Reports</h2>
             <div className="space-y-4">
               {[
                 "NIRF 2025 - Engineering Category",
                 "NIRF 2024 - Overall Category",
                 "NIRF 2023 - Innovation Rankings",
                 "Institutional Data Submission 2025",
               ].map((report) => (
                 <Link key={report} href="#" className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all group">
                    <span className="text-lg font-bold text-[#071429] group-hover:text-blue-500">{report}</span>
                    <span className="text-blue-500 font-black italic">Download PDF</span>
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
