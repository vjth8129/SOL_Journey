import { useEffect } from 'react';
import Emblem from './Emblem.jsx';

const A = 'sol-anim';

// Full-screen intro: the emblem draws itself, then the loader zooms out.
// Click anywhere to skip.
export default function Loader({ speed, onDone }) {
  const t = (s) => (s * speed).toFixed(2) + 's';
  const out = t(4.5);

  useEffect(() => {
    const id = setTimeout(onDone, 5600 * speed);
    return () => clearTimeout(id);
  }, [speed, onDone]);

  return (
    <div
      className={A} role="presentation" onClick={onDone}
      style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--color-bg)', display: 'grid', placeItems: 'center', cursor: 'pointer', animation: `solLoaderOut ${t(1)} ease-in ${out} forwards` }}
    >
      <div className={A} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, width: 'min(76vw, 400px)', animation: `solLoaderZoom ${t(1)} cubic-bezier(.6,0,.4,1) ${out} forwards` }}>
        <Emblem speed={speed} />
        <div className={A} style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 'clamp(22px, 5vw, 34px)', letterSpacing: '0.26em', color: '#16261f', whiteSpace: 'nowrap', marginRight: '-0.26em', animation: `solFadeUp ${t(1)} ease-out ${t(2.6)} both` }}>
          SOL JOURNEYS
        </div>
        <div className={A} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '80%', animation: `solFadeUp ${t(1)} ease-out ${t(3)} both` }}>
          <span style={{ flex: 1, height: 2, borderRadius: 2, background: '#c9853f' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#b8742c' }} />
          <span style={{ flex: 1, height: 2, borderRadius: 2, background: '#c9853f' }} />
        </div>
        <div className={A} style={{ fontFamily: "'Tenor Sans', sans-serif", fontSize: 'clamp(11px, 2.4vw, 14px)', letterSpacing: '0.3em', color: '#16261f', whiteSpace: 'nowrap', marginRight: '-0.3em', animation: `solFadeUp ${t(1)} ease-out ${t(3.3)} both` }}>
          TRAVEL, DESIGNED AROUND YOU
        </div>
      </div>
    </div>
  );
}
