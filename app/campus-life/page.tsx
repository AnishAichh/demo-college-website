import Link from "next/link";

const clubs = [
  { name: "Technical Club", icon: "💻", desc: "For coding enthusiasts and hardware hackers." },
  { name: "Dance & Culture", icon: "💃", desc: "Showcasing the vibrant cultural heritage of HSOE." },
  { name: "Sports Society", icon: "🏃", desc: "Promoting physical fitness and competitive spirit." },
  { name: "Eco Warriors", icon: "🌿", desc: "Leading sustainability initiatives on campus." },
  { name: "Entrepreneurship", icon: "🚀", desc: "Fostering startup culture and innovation." },
  { name: "Art & Media", icon: "🎨", desc: "Expression through digital and traditional media." }
];

export default function CampusLifePage() {
  return (
    <main className="pt-[112px]">
      {/* Page Hero */}
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1920" alt="Campus Life" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#ffc107] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Vibrant Community</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Experience HSOE
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Campus Life</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl translate-y-8">
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">Living the Dream</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#071429] mb-8 leading-tight tracking-tighter italic">
                A Second Home for <br /><span className="text-blue-500">Innovation & Growth</span>
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-10 text-lg italic">
                Campus life at HSOE is meticulously designed to foster holistic development. From high-energy cultural fests to late-night innovation hackathons, there's always something happening.
              </p>
              <div className="space-y-6">
                {[
                  "Green, eco-friendly campus environment",
                  "24/7 Security and specialized support staff",
                  "Modern hostels with premium amenities",
                  "Multi-cuisine cafeteria and food courts"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-[10px] font-black">✓</div>
                    <span className="text-sm font-black uppercase tracking-widest text-[#071429]/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-24 px-6 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#071429] mb-4 tracking-tight uppercase italic underline decoration-blue-500 decoration-4 underline-offset-8">Student Communities</h2>
            <p className="text-gray-500 font-medium uppercase tracking-[0.2em] text-[10px]">60+ Active Clubs & Societies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <div key={club.name} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{club.icon}</div>
                <h3 className="text-xl font-black text-[#071429] mb-4 uppercase tracking-tighter italic">{club.name}</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-8">{club.desc}</p>
                <Link href="#" className="text-blue-500 font-black text-[10px] uppercase tracking-widest inline-flex items-center gap-2 hover:translate-x-2 transition-transform">
                  Join Community
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Carousel Placeholder */}
      <section className="py-24 px-6 bg-[#071429] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <span className="text-[#ffc107] font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">World Class Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter italic">Built for the <span className="text-blue-500">Modern Engineer</span></h2>
            </div>
            <Link href="#" className="text-[#ffc107] font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-transform">
              Virtual Tour
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Central Library", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400" },
              { title: "Sports Complex", img: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=400" },
              { title: "Innovation Lab", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" }
            ].map((facility) => (
              <div key={facility.title} className="group relative aspect-square rounded-[3rem] overflow-hidden">
                <img src={facility.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071429] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-xl font-black uppercase tracking-tighter italic">{facility.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
