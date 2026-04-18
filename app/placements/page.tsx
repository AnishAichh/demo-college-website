import Link from "next/link";

const recruiters = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
];

export default function PlacementsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920" alt="Placements" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Career Success</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Placement Excellence
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Placements</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
            {[
              { label: "Placement Percentage", value: "100%", sub: "For the year 2024-25" },
              { label: "Highest Package", value: "50 LPA", sub: "International Offer" },
              { label: "Average CTC", value: "8.5 LPA", sub: "Top 100 Students" },
              { label: "Recruiters", value: "450+", sub: "Across all sectors" },
            ].map((stat) => (
              <div key={stat.label} className="p-10 rounded-[3rem] bg-[#f6f9ff] border border-blue-50">
                <div className="text-4xl font-black text-blue-500 mb-2">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#071429] mb-1">{stat.label}</div>
                <div className="text-[11px] font-medium text-gray-400 italic">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-black text-[#071429] mb-12 text-center tracking-tight uppercase italic decoration-blue-500 decoration-4 underline underline-offset-8">Our Top Recruiters</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
              {recruiters.map((r) => (
                <div key={r.name} className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all group">
                   <img src={r.logo} alt={r.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
