import { useEffect, useRef } from 'react';
import { InquiryForm } from './Inquire.jsx';
import Photo from './Photo.jsx';
import { Close } from './Icons.jsx';

// Story popup for "Explore Itinerary" and "View Journey Notes": a short sensory
// story, then the inquiry form beneath it. Uses a native <dialog> for focus and Esc.
// `itinerary` needs { id, src, placeholder, kicker, title, story }.
export default function ItineraryModal({ itinerary, formTitle = 'Design This Journey With Us', onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    // No close() in cleanup: unmounting removes the dialog anyway, and a
    // programmatic close would fire onClose (StrictMode re-runs this effect).
    const dialog = ref.current;
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('.itin-modal-inner').scrollTop = 0;
  }, []);

  const titleId = `itin-${itinerary.id}-title`;

  return (
    <dialog
      ref={ref}
      className="itin-modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="itin-modal-inner">
        <div className="itin-modal-close-bar">
          <button type="button" className="round-btn round-btn-solid itin-modal-close" aria-label="Close" onClick={onClose}>
            <Close size={18} />
          </button>
        </div>
        <div className="itin-modal-photo">
          <Photo src={itinerary.src} alt={itinerary.placeholder} className="washed" />
        </div>

        <div className="itin-modal-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="kicker">{itinerary.kicker}</span>
            <h2 id={titleId} className="section-title" style={{ textWrap: 'balance' }}>{itinerary.title}</h2>
          </div>

          <div className="itin-story">
            {itinerary.story.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="itin-modal-form">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kicker">Your Version</span>
              <h3 className="font-cinzel" style={{ fontWeight: 500, fontSize: 22, letterSpacing: '0.06em', margin: 0 }}>{formTitle}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>
                Tell us how you would like to travel it, and a SOL JOURNEYS planner will call or WhatsApp you within one working day.
              </p>
            </div>
            <InquiryForm idPrefix={`m-${itinerary.id}`} journey={itinerary.title} />
          </div>
        </div>
      </div>
    </dialog>
  );
}
