import Link from "next/link";

const leaders = [
  { name: "Dr. Mohan Manghnani", role: "Chairman", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. Prashanth CSR", role: "Principal", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Mrs. Renuka Manghnani", role: "Vice Chairperson", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
];

export default function LeadershipPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920" alt="Leadership" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Pillar</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Council & Leadership
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <span>/</span>
            <span className="text-white/80">Leadership</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader) => (
              <div key={leader.name} className="group relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl shadow-blue-900/10">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black text-[#071429] uppercase italic tracking-tighter mb-2">{leader.name}</h3>
                  <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.2em]">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
