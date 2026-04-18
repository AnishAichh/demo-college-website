import Link from "next/link";

const faculty_eee = [
  { name: "Dr. Prabhakar", role: "Professor & HOD", specialization: "Power Systems" },
  { name: "Mrs. Shanthi", role: "Associate Professor", specialization: "Control Systems" },
  { name: "Mr. Satish", role: "Assistant Professor", specialization: "Renewable Energy" },
];

export default function EEEDepartmentPage() {
  return (
    <main className="pt-[112px]">
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1549421263-549176317b9b?auto=format&fit=crop&q=80&w=1920" alt="EEE" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Powering the Future</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Electrical &<br />Electronics Engineering
          </h1>
          <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link href="/departments" className="hover:text-blue-500">Departments</Link>
            <span>/</span>
            <span className="text-white/80">EEE</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-4xl font-black text-[#071429] mb-8 uppercase italic tracking-tighter">Department Overview</h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 text-lg">
                The EEE department focuses on power generation, transmission, and distribution, along with modern electronics. We are committed to developing sustainable energy solutions and smart grid technologies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 rounded-2xl bg-[#f6f9ff] border border-blue-50">
                   <div className="text-3xl font-black text-blue-500 mb-1">10+</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Power Labs</div>
                 </div>
                 <div className="p-6 rounded-2xl bg-[#f6f9ff] border border-blue-50">
                   <div className="text-3xl font-black text-blue-500 mb-1">100%</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Internship Offers</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
