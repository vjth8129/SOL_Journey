// Site settings (formerly the editable props of the design component).
export const config = {
  // Concierge
  whatsappNumber: '918921219545',
  phoneDisplay: '+91 89212 19545',
  // Inquiry form submissions are emailed here (via formsubmit.co).
  inquiryEmail: 'curate@soljourneys.in',
  // Copied on every inquiry email (comma-separated for several).
  inquiryCc: 'vjthprivate@gmail.com',
  // Public contact address shown to visitors on the site.
  contactEmail: 'curate@soljourneys.in',
  // Social profiles shown in the footer. Replace with the real profile URLs;
  // leave a value empty ('') to hide that icon.
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: '',
  },
  // Page loader
  showLoader: true,
  introSpeed: 'Standard', // 'Calm' | 'Standard' | 'Brisk'
  // Hero slideshow, in seconds (min 3)
  slideSeconds: 6,
};

export const introSpeedFactor = { Calm: 1.4, Standard: 1, Brisk: 0.65 }[config.introSpeed] ?? 1;

export const slideSeconds = Math.max(3, Number(config.slideSeconds ?? 6));

const waNumber = String(config.whatsappNumber ?? '').replace(/\D/g, '');
export const inquiryEndpoint = `https://formsubmit.co/ajax/${config.inquiryEmail}`;
export const telHref = `tel:+${waNumber}`;
export const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello SOL Journeys, I would like to plan a journey.')}`;
