import Link from "next/link";

const newsItems = [
  {
    date: "18 April",
    title: "Admissions Open for 2026 Academic Year",
    category: "Admissions",
    img: "https://images.unsplash.com/photo-1523050853064-dbad350c746b?auto=format&fit=crop&q=80&w=400"
  },
  {
    date: "15 April",
    title: "HSOE Ranks #1 in Placement Excellence",
    category: "Achievements",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400"
  },
  {
    date: "12 April",
    title: "New Robotics Center to be inaugurated by CM",
    category: "Campus",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400"
  },
  {
    date: "10 April",
    title: "International Conference on AI begins with Global Leaders",
    category: "Events",
    img: "https://images.unsplash.com/photo-1540575861501-7ad0582373f3?auto=format&fit=crop&q=80&w=400"
  },
  {
    date: "08 April",
    title: "HSOE Scholars bag 5 Patents for Sustainable Tech",
    category: "Research",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400"
  },
  {
    date: "05 April",
    title: "Inter-College Sports Fest 'AURA 2026' concludes",
    category: "Campus Life",
    img: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=400"
  }
];

export default function NewsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920" alt="News" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Pulse</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Latest News
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">News</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <article key={news.title} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-6 shadow-xl shadow-blue-900/5">
                   <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-6 left-6 bg-[#ffc107] text-[#071429] font-black text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                      {news.category}
                   </div>
                </div>
                <div className="px-2">
                   <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">{news.date}</div>
                   <h3 className="text-xl font-black text-[#071429] leading-tight tracking-tighter group-hover:text-blue-500 transition-colors uppercase italic mb-4">{news.title}</h3>
                   <Link href="#" className="text-[#071429]/40 font-black text-[10px] uppercase tracking-widest hover:text-blue-500 transition-colors inline-flex items-center gap-2">
                     Read Full Story
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
