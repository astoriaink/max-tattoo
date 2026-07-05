'use client';

import { FormEvent, useState } from 'react';
import SiteShell from '../components/site-shell';

const bookingEmail = 'admin@astoriaink.co.nz';

export default function BookNowPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const request = [
      'Gia tattoo booking',
      `Name: ${name}`,
      `Email: ${data.get('email')}`,
      `Placement: ${data.get('placement')}`,
      `Approx size: ${data.get('size')}`,
      `Style: ${data.get('style')}`,
      `Timing: ${data.get('timing')}`,
      `Idea: ${data.get('idea')}`,
      `References: ${data.get('references') || 'Reference images to be attached'}`,
    ].join('\n');

    const subject = encodeURIComponent(`Gia tattoo booking${name ? ` - ${name}` : ''}`);
    const body = encodeURIComponent(`${request}\n\nPlease attach any reference images before sending.`);

    setStatus('Opening your email app with the tattoo booking request filled in.');
    window.location.href = `mailto:${bookingEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <SiteShell>
      <section className="hero booking-hero">
        <div className="container booking-layout">
          <div className="hero-card booking-intro">
            <span className="eyebrow">Book tattoo</span>
            <h1>Book a tattoo with Gia.</h1>
            <p>
              Fill out the tattoo booking form and it will open as an email to Astoria Ink.
              Attach reference images before sending.
            </p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>Placement</span>
                <input name="placement" type="text" placeholder="Forearm, ribs, ankle..." required />
              </label>
              <label className="field">
                <span>Approx size</span>
                <input name="size" type="text" placeholder="5cm, palm size, half sleeve..." required />
              </label>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>Style</span>
                <select name="style" required defaultValue="">
                  <option value="" disabled>
                    Select a style
                  </option>
                  <option>Fine line</option>
                  <option>Micro realism</option>
                  <option>Black & grey</option>
                  <option>Lettering</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="field">
                <span>Timing</span>
                <select name="timing" required defaultValue="">
                  <option value="" disabled>
                    Select timing
                  </option>
                  <option>As soon as available</option>
                  <option>This month</option>
                  <option>Next 1-2 months</option>
                  <option>Flexible</option>
                </select>
              </label>
            </div>

            <label className="field">
              <span>Tattoo idea</span>
              <textarea
                name="idea"
                placeholder="Describe the subject, mood, details, meaning, and anything you want avoided."
                required
              />
            </label>

            <label className="field">
              <span>Reference notes</span>
              <textarea
                name="references"
                placeholder="Mention any reference images, existing tattoos nearby, or inspiration you will send through."
              />
            </label>

            <div className="booking-actions">
              <button className="btn btn-primary" type="submit">
                Send tattoo booking
              </button>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Astoria%20Ink%20270%20St%20Asaph%20Street%20Christchurch"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                View location
              </a>
            </div>
            {status ? <p className="form-note booking-status">{status}</p> : null}
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
