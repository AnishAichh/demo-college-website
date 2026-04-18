import Link from "next/link";

const departments = [
  { name: "Computer Science & Engineering", code: "CSE", icon: "💻", students: "1200+", labs: "12" },
  { name: "Information Science & Engineering", code: "ISE", icon: "📊", students: "800+", labs: "8" },
  { name: "Electronics & Communication", code: "ECE", icon: "📡", students: "950+", labs: "10" },
  { name: "Mechanical Engineering", code: "ME", icon: "⚙️", students: "700+", labs: "15" },
  { name: "Civil Engineering", code: "CV", icon: "🏗️", students: "500+", labs: "6" },
  { name: "Electrical & Electronics", code: "EEE", icon: "⚡", students: "600+", labs: "9" },
  { name: "Artificial Intelligence & ML", code: "AI&ML", icon: "🤖", students: "400+", labs: "5" },
  { name: "Data Science", code: "DS", icon: "💾", students: "350+", labs: "4" },
];

export default function DepartmentsPage() {
  return (
    <main className="pt-[112px]">
      {/* Page Hero */}
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920" alt="Departments" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Academic Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Technical Streams
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Departments</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-black text-[#071429] mb-8 tracking-tight uppercase italic underline decoration-blue-500 decoration-4 underline-offset-8">Dedicated to Specialized Learning</h2>
          <p className="text-gray-600 font-medium leading-relaxed text-lg italic">
            Explore our diverse array of academic departments, each a center of excellence equipped with state-of-the-art labs, renowned faculty, and industry-aligned research initiatives.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept) => (
              <div key={dept.code} className="group relative bg-[#f6f9ff] p-8 rounded-[2.5rem] border border-blue-50 hover:bg-[#071429] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/30">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-500">
                  {dept.icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2 group-hover:text-white/50">{dept.code}</div>
                <h3 className="text-xl font-black text-[#071429] mb-6 leading-tight tracking-tighter group-hover:text-white italic">{dept.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-100 group-hover:border-white/10">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white/30">Students</div>
                    <div className="text-sm font-black text-[#071429] group-hover:text-white">{dept.students}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white/30">Labs</div>
                    <div className="text-sm font-black text-[#071429] group-hover:text-white">{dept.labs}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="#" className="text-blue-500 font-black text-[10px] uppercase tracking-widest inline-flex items-center gap-2 group-hover:text-[#ffc107] transition-colors">
                    Explore Dept
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Banner */}
      <section className="py-24 px-6 bg-[#071429] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#ffc107] font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">Research & Labs</span>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter">
                State-of-the-Art <br /> <span className="text-blue-500">Academic Infrastructure</span>
              </h2>
              <p className="text-white/60 font-medium leading-relaxed mb-12 text-lg italic">
                Our departments are supported by 150+ specialized labs, 25 centers of excellence, and comprehensive digital resources to ensure hands-on mastery of technical concepts.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-[#ffc107]">150+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Total Labs</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#ffc107]">25</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Centres of Excellence</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl translate-y-8">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
