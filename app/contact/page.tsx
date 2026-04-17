'use client';

import { FormEvent, useState } from 'react';

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
      setMessage('Your enquiry has been sent. We will contact you soon.');
    } catch (error) {
      setStatus('error');
      setMessage('Unable to send enquiry. Please try again later.');
    }
  }

  return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <p className="section__title">Contact Admissions</p>
          <p className="section__subtitle">
            Reach us for program details, campus visits, and application support.
          </p>
          <div style={{ display: 'grid', gap: '32px' }}>
            <div className="card" style={{ padding: '32px' }}>
              <p>
                <strong>Phone:</strong> +91 98805 34935
              </p>
              <p>
                <strong>Email:</strong> admissions@newhorizonindia.edu
              </p>
              <p>
                <strong>Address:</strong> New Horizon Knowledge Park, Bellandur Main
                Road, Bengaluru 560103
              </p>
              <p style={{ marginTop: '20px', lineHeight: 1.8 }}>
                Submit the form below to save your enquiry in Neon and receive a
                prompt follow-up from the admissions team.
              </p>
            </div>

            <form className="card" style={{ padding: '32px' }} onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gap: '18px' }}>
                <label style={{ display: 'grid', gap: '10px' }}>
                  Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    style={{ padding: '14px 16px', borderRadius: '14px', border: '1px solid #dce4f2' }}
                  />
                </label>
                <label style={{ display: 'grid', gap: '10px' }}>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="example@mail.com"
                    required
                    style={{ padding: '14px 16px', borderRadius: '14px', border: '1px solid #dce4f2' }}
                  />
                </label>
                <label style={{ display: 'grid', gap: '10px' }}>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    required
                    style={{ padding: '14px 16px', borderRadius: '14px', border: '1px solid #dce4f2' }}
                  />
                </label>
                <label style={{ display: 'grid', gap: '10px' }}>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your course interests"
                    required
                    style={{ padding: '14px 16px', borderRadius: '14px', border: '1px solid #dce4f2', resize: 'vertical' }}
                  />
                </label>
                <button
                  type="submit"
                  className="hero__button"
                  style={{ width: 'max-content' }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Submit enquiry'}
                </button>
                {message ? (
                  <p style={{ margin: 0, color: status === 'error' ? '#d64545' : '#1141a8' }}>
                    {message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
