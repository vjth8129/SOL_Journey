// Lucide icons, stroke-width 2.75 per the design system.
function Icon({ size, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const ChevronLeft = ({ size = 18 }) => <Icon size={size}><path d="m15 18-6-6 6-6" /></Icon>;
export const ChevronRight = ({ size = 18 }) => <Icon size={size}><path d="m9 18 6-6-6-6" /></Icon>;
export const Menu = ({ size = 20 }) => <Icon size={size}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
export const Close = ({ size = 20 }) => <Icon size={size}><path d="M18 6 6 18M6 6l12 12" /></Icon>;
export const MessageCircle = ({ size = 16 }) => <Icon size={size}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></Icon>;
export const Compass = ({ size = 15 }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
  </Icon>
);
export const Instagram = ({ size = 18 }) => (
  <Icon size={size}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </Icon>
);
export const Facebook = ({ size = 18 }) => <Icon size={size}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></Icon>;
export const Youtube = ({ size = 18 }) => (
  <Icon size={size}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </Icon>
);
export const Phone = ({ size = 16 }) => <Icon size={size}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></Icon>;
