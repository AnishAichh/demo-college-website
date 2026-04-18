'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get('name')?.toString() ?? '',
      email: data.get('email')?.toString() ?? '',
      phone: data.get('phone')?.toString() ?? '',
      message: data.get('message')?.toString() ?? '',
    };

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
      form.reset();
      setMessage('Your enquiry has been successfully sent. Our team will contact you shortly.');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again or call our admissions desk directly.');
    }
  }

  return (
    <main className="pt-[112px]">
      {/* Page Hero */}
      <section className="bg-[#071429] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1516387080203-ac83c14d8721?auto=format&fit=crop&q=80&w=1920" alt="Contact Us" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block italic">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 italic">
            Admissions Desk
          </h1>
          <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <span className="text-white/80">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">Connect With Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#071429] mb-12 leading-tight tracking-tighter italic">We're Here to <br /><span className="text-blue-500">Guide Your Path</span></h2>
              
              <div className="space-y-8 mb-16">
                <div className="flex gap-6 p-8 bg-[#f6f9ff] rounded-[2rem] border border-blue-50">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Campus Address</h4>
                    <p className="text-sm font-black text-[#071429] leading-relaxed">
                      3rd Cross road Agara Village HSR Layout Bengaluru
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 bg-[#f6f9ff] rounded-[2rem] border border-blue-50">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Admissions Helpline</h4>
                    <p className="text-sm font-black text-[#071429] leading-relaxed">
                      +01 99678 98979
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 bg-[#f6f9ff] rounded-[2rem] border border-blue-50">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Email Inquiries</h4>
                    <p className="text-sm font-black text-[#071429] leading-relaxed">
                      admissions@hsoe.edu | info@hsoe.edu
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.388812345678!2d77.6851!3d12.924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzI2LjQiTiA3N8KwNDEnMDUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#071429] p-12 md:p-16 rounded-[4rem] text-white">
              <h3 className="text-3xl font-black mb-8 tracking-tighter uppercase italic">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="mail@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 0000 000 000"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your interests..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-blue-500 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#ffc107] text-[#071429] font-black text-xs py-5 rounded-2xl hover:scale-105 transition-all uppercase tracking-widest disabled:opacity-50"
                >
                  {status === 'loading' ? 'Encrypting & Sending...' : 'Submit Inquiry'}
                </button>
                {message ? (
                  <div className={`p-4 rounded-xl text-xs font-black uppercase tracking-wider text-center ${status === 'error' ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>
                    {message}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
