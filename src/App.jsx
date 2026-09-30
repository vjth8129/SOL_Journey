import { useCallback, useState } from 'react';
import { config, introSpeedFactor } from './config.js';
import Loader from './components/Loader.jsx';
import Hero from './components/Hero.jsx';
import { Philosophy, Itineraries, Stays } from './components/Sections.jsx';
import Inquire from './components/Inquire.jsx';
import { Header, Footer, ConciergeButton } from './components/Layout.jsx';

export default function App() {
  const [loading, setLoading] = useState(config.showLoader);
  const endLoader = useCallback(() => setLoading(false), []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
      {loading && <Loader speed={introSpeedFactor} onDone={endLoader} />}
      <Header />
      <main id="top">
        <Hero restartKey={loading} />
        <Philosophy />
        <Itineraries />
        <Stays />
        <Inquire />
      </main>
      <Footer />
      <ConciergeButton />
    </div>
  );
}
