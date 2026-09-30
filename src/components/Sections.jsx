import { itineraries, stays } from '../data.js';
import Photo from './Photo.jsx';

const pillars = [
  { num: 'I', title: 'Designed Around You', body: 'Your pace, your interests, your dates. Nothing is packaged.' },
  { num: 'II', title: 'Unhurried Pace', body: 'Fewer stops, longer stays and time left open for discovery.' },
  { num: 'III', title: 'One Planner', body: 'A single point of contact from first call to journey home.' },
];

export function Philosophy() {
  return (
    <section id="philosophy" data-screen-label="Philosophy" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px, 10vw, 136px) clamp(20px, 4vw, 48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 'clamp(32px, 6vw, 96px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span className="kicker">Philosophy</span>
        <h2 className="section-title" style={{ textWrap: 'balance' }}>The SOL JOURNEYS Approach</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, maxWidth: 600 }}>
        <p style={{ fontSize: 18, lineHeight: 1.7, margin: 0, textWrap: 'pretty' }}>
          SOL JOURNEYS plans private holidays for travelers who would rather go slowly and go well. Every itinerary starts with a conversation about how you like to travel, then is built day by day around it.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))', gap: 28 }}>
          {pillars.map((p) => (
            <div key={p.num} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="font-cinzel" style={{ fontSize: 15, letterSpacing: '0.14em', color: '#8a4529' }}>{p.num}</span>
              <h3 className="font-cinzel" style={{ fontWeight: 500, fontSize: 18, letterSpacing: '0.08em', margin: 0 }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Itineraries() {
  return (
    <section id="itineraries" data-screen-label="Itineraries" style={{ background: 'var(--color-surface)', borderRadius: '48px 48px 0 0' }}>
      <div className="section-stack" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px, 10vw, 128px) clamp(20px, 4vw, 48px)', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div className="section-head" style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 640 }}>
          <span className="kicker">Itineraries</span>
          <h2 className="section-title">Signature Journeys</h2>
        </div>
        <div className="card-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '32px 28px' }}>
          {itineraries.map((it) => (
            <article key={it.id} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5' }}>
                <Photo src={it.src} alt={it.placeholder} radius={28} className="washed" />
              </div>
              <span className="kicker" style={{ letterSpacing: '0.26em' }}>{it.kicker}</span>
              <h3 className="font-cinzel" style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.3, letterSpacing: '0.06em', margin: 0 }}>{it.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>{it.body}</p>
              <a href="#inquire" className="arrow-link">Explore Itinerary →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stays() {
  return (
    <section id="stays" data-screen-label="Curated Stays" style={{ background: 'var(--color-surface)' }}>
      <div className="section-stack" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px) clamp(80px, 11vw, 144px)', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div className="section-head" style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 640 }}>
          <span className="kicker">Curated Stays</span>
          <h2 className="section-title">Sanctuaries We Recommend</h2>
        </div>
        <div className="card-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px 32px' }}>
          {stays.map((st) => (
            <article key={st.id} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4' }}>
                <Photo src={st.src} alt={st.placeholder} mask="inset(0 round 999px 999px 28px 28px)" className="washed" />
              </div>
              <span className="kicker" style={{ letterSpacing: '0.26em', marginTop: 8 }}>{st.place}</span>
              <h3 className="font-cinzel" style={{ fontWeight: 500, fontSize: 21, lineHeight: 1.3, letterSpacing: '0.06em', margin: 0 }}>{st.name}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>{st.body}</p>
              <a href="#inquire" className="arrow-link">View Journey Notes →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
