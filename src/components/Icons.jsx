function iconProps(className) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    'aria-hidden': 'true',
  };
}

export function CameraIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 8l1.2-2h3.6L15 8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SendIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 11.5 20 4l-5.5 16-3.1-6.2L3 11.5Z" stroke="currentColor" strokeWidth="2" />
      <path d="M20 4 11.4 13.8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CheckCircleIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="m8.5 12.2 2.4 2.4 4.8-5.1" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ShieldIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 3 5 6v6c0 4.8 3.1 7.7 7 9 3.9-1.3 7-4.2 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="2" />
      <path d="m9.3 12.2 1.8 1.8 3.6-3.9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function QuestionIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M9.7 9.3a2.4 2.4 0 1 1 4.5 1.3c-.4.8-1.1 1-1.8 1.5-.6.4-1 1-.9 1.9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="16.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function ChatIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-5 4v-4H6a2 2 0 0 1-2-2V6Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PoundIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M13.8 8.5a2.4 2.4 0 0 0-4.7.8v6.2h5.4" stroke="currentColor" strokeWidth="2" />
      <path d="M8.3 11.7h4.8M8.3 13.6h4.8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ArrowRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" />
      <path d="m13 7 5 5-5 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
