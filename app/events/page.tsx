import Link from "next/link";

const events = [
  {
    title: "AURA 2026: Cultural Extravaganza",
    date: "25-27 May 2026",
    location: "Main Auditorium",
    type: "Cultural",
    img: "https://images.unsplash.com/photo-1514525253344-991c0e37456d?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "International AI Symposium",
    date: "12 May 2026",
    location: "Conference Hall 1",
    type: "Technical",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Placement Boot Camp 2026",
    date: "05 May 2026",
    location: "Training Block",
    type: "Career",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Alumni Meet 'Homecoming'",
    date: "20 April 2026",
    location: "Campus Lawns",
    type: "Alumni",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400"
  }
];

export default function EventsPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1920" alt="Events" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">What's Happening</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Events Calendar
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Events</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {events.map((event) => (
              <div key={event.title} className="group relative flex flex-col md:flex-row gap-8 bg-[#f6f9ff] p-8 rounded-[3rem] border border-blue-50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all">
                <div className="w-full md:w-64 h-48 rounded-[2rem] overflow-hidden shrink-0">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-500 text-white font-black text-[8px] uppercase tracking-widest px-2 py-1 rounded-md">{event.type}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{event.date}</span>
                   </div>
                   <h3 className="text-2xl font-black text-[#071429] mb-4 tracking-tighter uppercase italic">{event.title}</h3>
                   <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-8">
                      <span className="flex items-center gap-1.5 italic">📍 {event.location}</span>
                   </div>
                   <div className="mt-auto">
                      <Link href="#" className="bg-[#071429] text-white font-black text-[10px] px-6 py-3 rounded-xl hover:bg-blue-500 transition-all uppercase tracking-widest">
                        Register Now
                      </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
