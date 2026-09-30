import { useEffect, useState } from 'react';
import { config, telHref, waHref } from '../config.js';
import { Close, Compass, Facebook, Instagram, Menu, MessageCircle, Phone, Youtube } from './Icons.jsx';

const socials = [
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'youtube', label: 'YouTube', Icon: Youtube },
].filter(({ key }) => config.social?.[key]);

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'color-mix(in srgb, var(--color-bg) 88%, transparent)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
      <nav className="nav-bar">
        <a href="#top" aria-label="SOL JOURNEYS home" className="nav-brand-link" onClick={close}>
          <img src="/assets/sol-emblem.png" alt="" />
          <span className="nav-brand-words">
            <span className="nav-brand-text">SOL JOURNEYS</span>
            <span className="nav-brand-tagline">Travel, designed around you</span>
          </span>
        </a>
        <button type="button" className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
          {open ? <Close /> : <Menu />}
        </button>
        <div id="site-menu" className={`nav-links${open ? ' open' : ''}`}>
          <a href="#philosophy" className="nav-link" onClick={close}>Philosophy</a>
          <a href="#itineraries" className="nav-link" onClick={close}>Itineraries</a>
          <a href="#stays" className="nav-link" onClick={close}>Curated Stays</a>
          <a href="#inquire" className="pill-primary" style={{ fontSize: 12, padding: '12px 22px' }} onClick={close}>Inquire</a>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  const heading = { fontSize: 11, letterSpacing: '0.3em' };
  return (
    <footer style={{ background: 'var(--color-surface)', borderRadius: '48px 48px 0 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px clamp(20px, 4vw, 48px) 40px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
          <img src="/assets/sol-logo-transparent.png" alt="SOL JOURNEYS — Travel, designed around you" style={{ width: 190, height: 'auto', display: 'block', margin: '-24px 0 -24px -18px' }} />
          <div style={{ display: 'flex', gap: '48px 72px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span className="kicker" style={heading}>Explore</span>
              <a href="#philosophy" className="footer-link">Philosophy</a>
              <a href="#itineraries" className="footer-link">Itineraries</a>
              <a href="#stays" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Compass />
                Curated Stays
              </a>
              <a href="#inquire" className="footer-link">Inquire</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span className="kicker" style={heading}>Contact</span>
              <a href={waHref} target="_blank" rel="noopener" className="footer-link">WhatsApp Concierge</a>
              <a href={telHref} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone />
                {config.phoneDisplay}
              </a>
              {socials.length > 0 && (
                <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                  {socials.map(({ key, label, Icon }) => (
                    <a key={key} href={config.social[key]} target="_blank" rel="noopener" aria-label={`SOL JOURNEYS on ${label}`} className="social-link">
                      <Icon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="font-tenor" style={{ paddingTop: 24, borderTop: '1px solid color-mix(in srgb, var(--color-text) 14%, transparent)', fontSize: 12, letterSpacing: '0.14em', color: 'var(--color-text)', display: 'flex', justifyContent: 'space-between', gap: '12px 32px', flexWrap: 'wrap' }}>
          <span>© 2026 SOL Journeys. All rights reserved.</span>
          <span style={{ letterSpacing: '0.06em' }}>Sample photographs via Wikimedia Commons (CC BY / CC BY-SA)</span>
        </div>
      </div>
    </footer>
  );
}

// Appears once the visitor scrolls past the top of the hero, so it never sits
// on top of the slideshow controls on first view.
export function ConciergeButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href={waHref} target="_blank" rel="noopener" aria-label="Chat with the SOL JOURNEYS concierge on WhatsApp" className={`concierge-fab${visible ? ' visible' : ''}`}>
      <MessageCircle size={20} />
      <span className="fab-label">Concierge</span>
    </a>
  );
}
