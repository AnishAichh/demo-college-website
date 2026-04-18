import Link from "next/link";

const clubs = [
  { name: "Robotics Club", category: "Technical", icon: "🤖" },
  { name: "Music Society", category: "Cultural", icon: "🎸" },
  { name: "Coding Ninjas", category: "Technical", icon: "💻" },
  { name: "Drama Club", category: "Cultural", icon: "🎭" },
  { name: "Astronomy Club", category: "Science", icon: "🔭" },
  { name: "Photography Club", category: "Creative", icon: "📸" },
];

export default function ClubsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=1920" alt="Clubs" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Student Communities</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Clubs & Societies
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/campus-life" className="hover:text-blue-500">Campus Life</Link>
            <span>/</span>
            <span className="text-white/80">Clubs</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <div key={club.name} className="p-12 rounded-[3.5rem] bg-[#f6f9ff] border border-blue-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all group">
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-700">{club.icon}</div>
                <div className="text-blue-500 font-black text-[9px] uppercase tracking-widest mb-2">{club.category}</div>
                <h3 className="text-2xl font-black text-[#071429] uppercase italic tracking-tighter mb-4">{club.name}</h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  Join a passionate group of students exploring {club.name.toLowerCase()} through workshops, sessions, and events.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
