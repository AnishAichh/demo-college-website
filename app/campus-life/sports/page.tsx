import Link from "next/link";

const facilities = [
  { name: "Gymnasium", icon: "🏋️‍♂️", desc: "State-of-the-art fitness center." },
  { name: "Cricket Ground", icon: "🏏", desc: "Professional standard cricket field." },
  { name: "Basketball Court", icon: "🏀", desc: "International standard wooden flooring." },
  { name: "Volleyball Court", icon: "🏐", desc: "Outdoor courts with night lighting." },
  { name: "Indoor Games", icon: "♟️", desc: "Table tennis, Chess, and Carrom rooms." },
  { name: "Track & Field", icon: "🏃", desc: "400m athletic track for students." },
];

export default function SportsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1920" alt="Sports" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Athletic Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Sports & Fitness
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/campus-life" className="hover:text-blue-500">Campus Life</Link>
            <span>/</span>
            <span className="text-white/80">Sports</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f) => (
              <div key={f.name} className="p-12 rounded-[3.5rem] bg-[#f6f9ff] border border-blue-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-700">{f.icon}</div>
                <h3 className="text-2xl font-black text-[#071429] uppercase italic tracking-tighter mb-4">{f.name}</h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
