import { ArrowRightIcon, CameraIcon, ChatIcon, CheckCircleIcon, SendIcon } from './Icons';
import { SITE_CONTACT } from '../config/site';

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-hover py-16 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_35%)]" />
      <div className="container-site relative animate-fadeUp">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              CIS tax and bookkeeping. Snap it. Send it. Sorted.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-emerald-50">
              We help UK tradies under CIS get their rebate sorted fast, and keep their books tidy all year.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-emerald-50">
              <li className="flex items-center gap-2">
                <CameraIcon className="h-5 w-5 text-brand-accent" />
                Receipt photos from site to sorted records
              </li>
              <li className="flex items-center gap-2">
                <SendIcon className="h-5 w-5 text-brand-accent" />
                Send docs by WhatsApp, email, or upload
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-brand-accent" />
                We chase deadlines so you do not have to
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-brand-primary transition hover:bg-brand-alt focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
              >
                Get Started
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href={SITE_CONTACT.whatsappUrl} className="btn-accent inline-flex items-center gap-2" target="_blank" rel="noreferrer">
                <ChatIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-emerald-100">UK-based. Straight-talking. No faff.</p>
          </div>

          <div className="rounded-2xl border border-emerald-700/70 bg-white/10 p-3 backdrop-blur-sm">
            <img
              src="/tradie-taking-photos.png"
              alt="Tradie taking photos of receipts and CIS statements for bookkeeping"
              className="h-auto w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
