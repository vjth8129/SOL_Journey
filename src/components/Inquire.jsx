import { useState } from 'react';
import { config, inquiryEndpoint, waHref } from '../config.js';
import { MessageCircle } from './Icons.jsx';

function Field({ id, label, full, children }) {
  return (
    <div className={`field${full ? ' field-full' : ''}`}>
      <label htmlFor={id} className="field-label">{label}</label>
      {children}
    </div>
  );
}

// The inquiry form, shared by the Inquire section and the itinerary popup.
// `journey` (optional) is the itinerary the visitor opened, sent with the inquiry.
export function InquiryForm({ idPrefix = 'f', journey }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const sent = status === 'sent';

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return; // bot filled the hidden field
    setStatus('sending');
    try {
      const res = await fetch(inquiryEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `New inquiry: ${data.Name}${data.Destination ? ` · ${data.Destination}` : ''}`,
          _replyto: data.Email,
          ...(config.inquiryCc ? { _cc: config.inquiryCc } : {}),
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || res.statusText);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return sent ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 0' }}>
      <h3 className="font-cinzel" style={{ fontWeight: 500, fontSize: 24, letterSpacing: '0.06em', margin: 0 }}>Thank You</h3>
      <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0 }}>Your inquiry has reached SOL JOURNEYS. We will be in touch shortly.</p>
      <button type="button" onClick={() => setStatus('idle')} className="arrow-link">Send another inquiry →</button>
    </div>
  ) : (
    <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '22px 20px' }}>
      <Field id={`${idPrefix}-name`} label="Full Name">
        <input id={`${idPrefix}-name`} name="Name" className="input field-input" required autoComplete="name" placeholder="Your name" />
      </Field>
      <Field id={`${idPrefix}-email`} label="Email">
        <input id={`${idPrefix}-email`} name="Email" type="email" className="input field-input" required autoComplete="email" placeholder="you@example.com" />
      </Field>
      <Field id={`${idPrefix}-phone`} label="Phone Number">
        <input id={`${idPrefix}-phone`} name="Phone" type="tel" inputMode="tel" className="input field-input" required autoComplete="tel" placeholder="+91 XXXXX XXXXX" />
      </Field>
      <Field id={`${idPrefix}-whatsapp`} label="WhatsApp Number">
        <input id={`${idPrefix}-whatsapp`} name="WhatsApp" type="tel" inputMode="tel" className="input field-input" autoComplete="off" placeholder="+91 XXXXX XXXXX" />
      </Field>
      <Field id={`${idPrefix}-dest`} label="Destination">
        <input id={`${idPrefix}-dest`} name="Destination" className="input field-input" defaultValue={journey} placeholder="Where would you like to go?" />
      </Field>
      <Field id={`${idPrefix}-dates`} label="Travel Dates">
        <input id={`${idPrefix}-dates`} name="Travel Dates" className="input field-input" placeholder="e.g. December 2026, 10 nights" />
      </Field>
      <Field id={`${idPrefix}-msg`} label="Tell Us About Your Journey" full>
        <textarea id={`${idPrefix}-msg`} name="Message" className="input field-input" rows={4} placeholder="Travelers, interests, the pace you enjoy" />
      </Field>
      {journey && <input type="hidden" name="Journey" value={journey} />}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
      <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
        <button type="submit" className="pill-primary" disabled={status === 'sending'} style={{ fontSize: 13, padding: '17px 34px', opacity: status === 'sending' ? 0.7 : 1 }}>
          {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
        </button>
        {status === 'error' && (
          <p role="alert" style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: '#A45534' }}>
            Sorry, your inquiry could not be sent. Please try again, email us at{' '}
            <a href={`mailto:${config.contactEmail}`} style={{ color: 'inherit' }}>{config.contactEmail}</a>{' '}
            or <a href={waHref} target="_blank" rel="noopener" style={{ color: 'inherit' }}>message us on WhatsApp</a>.
          </p>
        )}
      </div>
    </form>
  );
}

export default function Inquire() {
  return (
    <section id="inquire" data-screen-label="Inquire" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px, 10vw, 136px) clamp(20px, 4vw, 48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 480 }}>
        <span className="kicker">Inquire</span>
        <h2 className="section-title">Begin Your Journey</h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0, textWrap: 'pretty' }}>
          Share a few details and a SOL JOURNEYS planner will be in touch within one working day, by call or WhatsApp if you prefer.
        </p>
        <a href={waHref} target="_blank" rel="noopener" className="wa-link">
          <MessageCircle />
          Message on WhatsApp →
        </a>
      </div>

      <div style={{ background: 'var(--color-surface)', borderRadius: 32, padding: 'clamp(24px, 4vw, 44px)' }}>
        <InquiryForm />
      </div>
    </section>
  );
}
