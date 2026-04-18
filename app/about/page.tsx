import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-[112px]">
      {/* Page Hero */}
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Journey</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            HSOE Heritage
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-[#071429] mb-8 tracking-tight">Introduction</h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              HSOE Hohai School of Engineering, established with a vision to provide quality technical education, has grown into a premier institution. We are an Autonomous College permanently affiliated to Visvesvaraya Technological University, approved by AICTE & UGC.
            </p>
            <p className="text-gray-600 font-medium leading-relaxed mb-12">
              Our campus, set amidst halcyon surroundings, enveloped by fresh air and greenery on the outer ring road of Bangalore, provides the perfect environment for meaningful learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
              <div className="bg-[#f6f9ff] p-10 rounded-3xl border border-blue-100 italic">
                <div className="text-3xl mb-6">👁️</div>
                <h3 className="text-xl font-black text-[#071429] mb-4 uppercase tracking-wider">Vision</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                  To be a globally recognized institution of excellence in engineering education, research, and innovation, fostering sustainable development and technological advancement for the benefit of society.
                </p>
              </div>
              <div className="bg-[#f6f9ff] p-10 rounded-3xl border border-blue-100 italic">
                <div className="text-3xl mb-6">🎯</div>
                <h3 className="text-xl font-black text-[#071429] mb-4 uppercase tracking-wider">Mission</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                  To empower students with a strong academic foundation, technical skills, and real-world exposure for high-impact careers through state-of-the-art infrastructure and industry-aligned curriculum.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-[#071429] mb-8 tracking-tight">Core Values</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0">
              {[
                "Academic Integrity & Excellence",
                "Innovation & Creativity",
                "Social Responsibility",
                "Diversity & Inclusivity",
                "Continuous Learning",
                "Global Perspective"
              ].map((val) => (
                <li key={val} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#071429]">{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-[#071429] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Years of Legacy", value: "30+" },
              { label: "Expert Faculty", value: "250+" },
              { label: "Research Scholars", value: "150+" },
              { label: "Global Alumni", value: "15,000+" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-black text-[#ffc107] mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
