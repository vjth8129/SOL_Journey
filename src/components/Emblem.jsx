const A = 'sol-anim';
const cx = 228;
const cy = 190;
const arch = 'M20 350 V200 A180 180 0 0 1 380 200 V350 Z';
const origin = { transformBox: 'view-box', transformOrigin: `${cx}px ${cy}px` };

const rays = Array.from({ length: 36 }, (_, i) => {
  const a = (i / 36) * Math.PI * 2;
  const long = i % 2 === 0;
  const r0 = 72;
  const r1 = r0 + (long ? (i % 4 === 0 ? 70 : 52) : 30);
  return (
    <line
      key={i}
      x1={cx + Math.cos(a) * r0} y1={cy + Math.sin(a) * r0}
      x2={cx + Math.cos(a) * r1} y2={cy + Math.sin(a) * r1}
      stroke={long ? '#eea23a' : '#f4bf5c'} strokeWidth={long ? 3 : 2} strokeLinecap="round"
    />
  );
});

function wavePath(y, a) {
  let d = `M-200 ${y} q25 ${-a} 50 0`;
  for (let i = 0; i < 15; i++) d += ' t50 0';
  return d + ' L600 400 L-200 400 Z';
}

function Wave({ y, a, fill, dur, reverse }) {
  return (
    <g className={A} style={{ animation: `solWave ${dur}s linear infinite${reverse ? ' reverse' : ''}` }}>
      <path d={wavePath(y, a)} fill={fill} stroke="#fbf4e8" strokeWidth={3} />
    </g>
  );
}

// Animated SOL emblem: the sun rising over mountains beside a sailing boat.
export default function Emblem({ speed = 1 }) {
  const t = (s) => (s * speed).toFixed(2) + 's';

  return (
    <svg
      viewBox="0 0 400 360" role="img"
      aria-label="SOL JOURNEYS emblem: the sun rising over mountains beside a sailing boat"
      style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
    >
      <defs>
        <clipPath id="solArchClip"><path d={arch} /></clipPath>
        <radialGradient id="solSun" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#ffd65a" />
          <stop offset="55%" stopColor="#f59a23" />
          <stop offset="100%" stopColor="#d8521f" />
        </radialGradient>
        <linearGradient id="solDawn" x1={0} y1={0} x2={0} y2={1}>
          <stop offset="0%" stopColor="#f6d7b8" />
          <stop offset="100%" stopColor="#eea56e" />
        </linearGradient>
        <linearGradient id="solTerra" x1={0} y1={0} x2={1} y2={1}>
          <stop offset="0%" stopColor="#7d9bbd" />
          <stop offset="100%" stopColor="#3f5f86" />
        </linearGradient>
        <linearGradient id="solGreen" x1={0} y1={0} x2={1} y2={1}>
          <stop offset="0%" stopColor="#355a84" />
          <stop offset="100%" stopColor="#16294a" />
        </linearGradient>
      </defs>

      <g clipPath="url(#solArchClip)">
        <rect x={0} y={0} width={400} height={360} fill="#fbf4e8" />
        <rect x={0} y={0} width={400} height={360} fill="url(#solDawn)" className={A} style={{ opacity: 0.16, animation: `solSky ${t(3.4)} ease-out ${t(0.3)} both` }} />
        <g className={A} style={{ animation: `solRise ${t(2.8)} cubic-bezier(.22,.7,.2,1) ${t(0.5)} both` }}>
          <g className={A} style={{ ...origin, animation: `solRays ${t(1.4)} ease-out ${t(2.4)} both` }}>
            <g className={A} style={{ ...origin, animation: 'solSpin 140s linear infinite' }}>{rays}</g>
          </g>
          <circle cx={cx} cy={cy} r={70} fill="#f7b54a" opacity={0.22} />
          <circle cx={cx} cy={cy} r={58} fill="url(#solSun)" />
        </g>
        <path d="M92 360 L150 205 L172 150 L196 198 L212 224 L230 206 L300 360 Z" fill="url(#solTerra)" stroke="#fbf4e8" strokeWidth={4} strokeLinejoin="round" />
        <path d="M4 360 L66 286 L126 206 L148 232 L168 246 L194 264 L214 258 L276 360 Z" fill="url(#solGreen)" stroke="#fbf4e8" strokeWidth={4} strokeLinejoin="round" />
        <path d="M40 360 L126 256 L150 286 L232 360 Z" fill="#0f1d33" opacity={0.45} />
        <Wave y={312} a={4} fill="#6fa8a0" dur={9} reverse />
        <Wave y={324} a={5} fill="#2f7c7f" dur={7} />
        <g transform="translate(282 304)">
          <g className={A} style={{ animation: `solBoatIn ${t(1.6)} cubic-bezier(.2,.7,.2,1) ${t(1.5)} both` }}>
            <g className={A} style={{ transformBox: 'fill-box', transformOrigin: '50% 100%', animation: 'solBob 4.6s ease-in-out infinite' }}>
              <path d="M48 -60 L48 18 L82 18 Z" fill="#f4cf7a" stroke="#e0ae55" strokeWidth={1.2} strokeLinejoin="round" />
              <path d="M42 -44 L42 18 L14 18 Z" fill="#f4cf7a" stroke="#e0ae55" strokeWidth={1.2} strokeLinejoin="round" />
              <line x1={45} y1={-66} x2={45} y2={22} stroke="#141c26" strokeWidth={3.2} strokeLinecap="round" />
              <path d="M0 22 L90 22 L76 38 L12 38 Z" fill="#141c26" stroke="#fbf4e8" strokeWidth={2} strokeLinejoin="round" />
            </g>
          </g>
        </g>
        <Wave y={338} a={5} fill="#1d5b66" dur={6} />
      </g>

      <path
        d={arch} fill="none" stroke="#111820" strokeWidth={7} strokeLinejoin="round"
        pathLength={1} strokeDasharray={1} className={A}
        style={{ strokeDashoffset: 0, animation: `solDraw ${t(1.6)} cubic-bezier(.6,0,.2,1) 0s both` }}
      />
    </svg>
  );
}
