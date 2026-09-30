import { useEffect, useState } from 'react';
import { slides } from '../data.js';
import { slideSeconds } from '../config.js';
import Photo from './Photo.jsx';
import { ChevronLeft, ChevronRight } from './Icons.jsx';

const n = slides.length;

// Auto-advancing destination slideshow. Changing `restartKey` jumps back to
// the first slide (used when the intro loader finishes).
export default function Hero({ restartKey }) {
  const [idx, setIdx] = useState(0);
  const [timerEpoch, setTimerEpoch] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % n), slideSeconds * 1000);
    return () => clearInterval(id);
  }, [timerEpoch]);

  const go = (next) => {
    setIdx(next);
    setTimerEpoch((e) => e + 1);
  };

  useEffect(() => go(0), [restartKey]);

  return (
    <section data-screen-label="Hero" className="hero">
      <div className="hero-frame">
        {slides.map((s, i) => {
          const on = i === idx;
          return (
            <div key={s.id} style={{ position: 'absolute', inset: 0, background: s.tone, opacity: on ? 1 : 0, pointerEvents: on ? 'auto' : 'none', transition: 'opacity 1.6s ease' }}>
              <div style={{ position: 'absolute', inset: 0, transform: `scale(${on ? 1.07 : 1})`, transition: 'transform 9s ease-out' }}>
                <Photo src={s.src} alt={s.placeholder} style={{ background: 'transparent' }} />
              </div>
            </div>
          );
        })}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to top, rgba(14, 24, 18, 0.86) 0%, rgba(14, 24, 18, 0.4) 38%, rgba(14, 24, 18, 0) 62%), linear-gradient(to right, rgba(14, 24, 18, 0.5) 0%, rgba(14, 24, 18, 0) 55%), linear-gradient(to bottom, rgba(14, 24, 18, 0.45) 0%, rgba(14, 24, 18, 0) 22%)' }} />

        <div className="hero-top">
          <div className="glass hero-place-pill">
            <span style={{ flex: 'none', width: 10, height: 10, borderRadius: '50%', background: '#f0a836', boxShadow: '0 0 0 4px rgba(240, 168, 54, 0.25)' }} />
            <span key={idx} className="hero-place sol-anim" style={{ animation: 'solFadeIn 0.8s ease both' }}>
              {slides[idx].place}
            </span>
          </div>
        </div>

        <div className="hero-body">
          <div className="hero-intro" style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 680, pointerEvents: 'auto' }}>
            <span className="font-tenor" style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#fbf4e8' }}>
              <span style={{ width: 40, height: 2, borderRadius: 2, background: '#f0a836' }} />Private Journeys
            </span>
            <h1 className="font-cinzel" style={{ fontWeight: 500, fontSize: 'clamp(30px, 5vw, 68px)', lineHeight: 1.1, letterSpacing: '0.045em', margin: 0, color: '#fbf4e8', textWrap: 'balance' }}>
              Curated Private Holidays &amp; Bespoke Itineraries
            </h1>
            <p style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', lineHeight: 1.6, margin: 0, maxWidth: 480, color: '#fbf4e8', textWrap: 'pretty' }}>
              Travel, designed around you. Unhurried discovery for the independent traveler.
            </p>
            <div className="hero-ctas">
              <a href="#inquire" className="pill-primary" style={{ fontSize: 13, padding: '17px 32px' }}>Plan a Journey</a>
              <a href="#itineraries" className="pill-glass glass">View Itineraries →</a>
            </div>
          </div>

          <div className="glass hero-slide-card">
            <div style={{ display: 'grid' }}>
              {slides.map((s, i) => {
                const on = i === idx;
                return (
                  <div key={s.id} aria-hidden={!on} style={{ gridArea: '1 / 1', display: 'flex', flexDirection: 'column', gap: 10, opacity: on ? 1 : 0, transform: `translateY(${on ? '0px' : '14px'})`, pointerEvents: on ? 'auto' : 'none', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
                    <span className="font-tenor" style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f6c983' }}>{s.place}</span>
                    <h2 className="font-cinzel" style={{ fontWeight: 500, fontSize: 'clamp(22px, 2.1vw, 28px)', lineHeight: 1.25, letterSpacing: '0.06em', margin: 0, color: '#fbf4e8' }}>{s.title}</h2>
                    <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: '#fbf4e8', textWrap: 'pretty' }}>{s.line}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ flex: 1, display: 'flex', gap: 8 }}>
                {slides.map((s, i) => {
                  const on = i === idx;
                  return (
                    <button key={s.id} type="button" onClick={() => go(i)} aria-label={`Show ${s.title}`} style={{ flex: 1, background: 'none', border: 0, padding: '12px 0', cursor: 'pointer' }}>
                      <span style={{ display: 'block', height: 3, borderRadius: 3, background: 'rgba(251, 244, 232, 0.3)', overflow: 'hidden' }}>
                        <span style={{ display: 'block', height: '100%', borderRadius: 3, background: '#fbf4e8', width: on ? '100%' : '0%', transition: on ? `width ${slideSeconds}s linear` : 'none' }} />
                      </span>
                    </button>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" onClick={() => go((idx - 1 + n) % n)} aria-label="Previous destination" className="round-btn round-btn-outline">
                  <ChevronLeft />
                </button>
                <button type="button" onClick={() => go((idx + 1) % n)} aria-label="Next destination" className="round-btn round-btn-solid">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
