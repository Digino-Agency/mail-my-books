import { ChatIcon } from './Icons';
import { SITE_CONTACT } from '../config/site';

const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#mtd', label: 'MTD' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="container-site py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-3" aria-label="Mail My Books home">
            <img src="/mail-my-books-logo.png" alt="Mail My Books" className="h-10 w-auto sm:h-12" />
          </a>

          <a
            href={SITE_CONTACT.whatsappUrl}
            className="btn-accent shrink-0 px-4 py-2 text-sm inline-flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <ChatIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <nav aria-label="Primary navigation" className="mt-3 overflow-x-auto pb-1">
          <ul className="flex min-w-max items-center gap-4 text-sm font-semibold text-brand-text sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-brand-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
