import Link from "next/link";

const faculty = [
  { name: "Dr. Arvind S.", role: "Professor & HOD", specialization: "Machine Learning" },
  { name: "Mrs. Deepa R.", role: "Associate Professor", specialization: "Cyber Security" },
  { name: "Mr. Kiran Kumar", role: "Assistant Professor", specialization: "Cloud Computing" },
];

export default function CSEDepartmentPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920" alt="CSE" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Center of Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Computer Science &<br />Engineering
          </h1>
          <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/departments" className="hover:text-blue-500">Departments</Link>
            <span>/</span>
            <span className="text-white/80">CSE</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-4xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">Department Overview</h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 text-lg">
                The Department of Computer Science and Engineering offers a comprehensive curriculum that blends theoretical foundations with hands-on practice. We prepare students for careers in software development, AI, data science, and more.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 rounded-2xl bg-[#f6f9ff] border border-blue-50">
                   <div className="text-3xl font-black text-blue-500 mb-1">12+</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Research Labs</div>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#f6f9ff] border border-blue-50">
                   <div className="text-3xl font-black text-blue-500 mb-1">100%</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Placement Record</div>
                 </div>
              </div>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-3xl font-black text-[#071429] mb-12 text-center uppercase italic tracking-tighter decoration-blue-500 decoration-4 underline underline-offset-8">Distinguished Faculty</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((f) => (
              <div key={f.name} className="p-10 rounded-[2.5rem] bg-[#f6f9ff] border border-blue-50 hover:bg-[#071429] hover:text-white transition-all group">
                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-2">{f.name}</h4>
                <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-4">{f.role}</p>
                <div className="text-xs font-medium text-gray-400 group-hover:text-white/60">Expertise: {f.specialization}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
