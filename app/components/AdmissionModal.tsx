"use client";

import { useState, useEffect } from "react";

interface AdmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
    const [activeTab, setActiveTab] = useState("UG");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Overlay */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500"
                onClick={onClose}
            />
            
            {/* Modal Box */}
            <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col md:flex-row">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-[#071429] transition-colors shadow-lg"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Side: Form */}
                <div className="flex-1 p-8 md:p-12">
                    <h2 className="text-3xl font-black text-[#071429] mb-8 tracking-tighter uppercase italic text-center md:text-left">
                        Admission <span className="text-blue-500">Enquiry Form</span>
                    </h2>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-8 bg-gray-100 p-1.5 rounded-2xl">
                        <button 
                            onClick={() => setActiveTab("UG")}
                            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === "UG" ? "bg-[#071429] text-white shadow-lg" : "text-gray-400 hover:text-[#071429]"}`}
                        >
                            Admission For UG
                        </button>
                        <button 
                            onClick={() => setActiveTab("PG")}
                            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === "PG" ? "bg-[#071429] text-white shadow-lg" : "text-gray-400 hover:text-[#071429]"}`}
                        >
                            Admission For PG
                        </button>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                           <input type="text" placeholder="Enter your name" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-xs font-bold focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                               <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                               <input type="email" placeholder="mail@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-xs font-bold focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="space-y-1.5">
                               <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                               <input type="tel" placeholder="+91 000 0000" className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-xs font-bold focus:outline-none focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Choose Program</label>
                           <select className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-xs font-bold focus:outline-none focus:border-blue-500 appearance-none">
                              <option>— Please choose an option —</option>
                              <option>Computer Science & Engineering</option>
                              <option>Information Science & Engineering</option>
                              <option>Electronics & Communication</option>
                           </select>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                           <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                           <label htmlFor="terms" className="text-[10px] font-medium text-gray-400 leading-none">
                             I agree to the <span className="text-[#071429] font-bold underline">Terms</span> and <span className="text-[#071429] font-bold underline">Privacy Policy</span>
                           </label>
                        </div>
                        <button className="w-full bg-[#071429] text-white font-black text-xs py-4 rounded-xl hover:bg-blue-500 transition-all uppercase tracking-widest shadow-xl shadow-blue-900/10">
                            Submit Request
                        </button>
                    </form>
                </div>

                {/* Right Side: Visual */}
                <div className="hidden lg:block w-[340px] bg-[#f6f9ff] relative overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply" />
                    <div className="relative z-10 p-8 text-center bg-blue-500 text-white rounded-tl-[4rem]">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">Join the Batch of 2026</p>
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter">Your Future Starts Here</h4>
                    </div>
                    {/* Placeholder for student image - using a relevant unsplash image */}
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                      alt="Student" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
