import { useState } from 'react';
import { ChatIcon, SendIcon } from './Icons';
import { SERVICE_SCOPE, SITE_CONTACT } from '../config/site';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scopeText = `CIS-only service. ${SERVICE_SCOPE.vat ? 'VAT available.' : 'No VAT,'} ${SERVICE_SCOPE.payroll ? 'payroll available.' : 'no payroll,'} ${SERVICE_SCOPE.limitedCompanies ? 'limited companies available.' : 'no limited companies.'}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      setSubmitted(false);
      setSubmitError('Something went wrong sending your message. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-36 bg-brand-alt py-16 sm:py-20">
      <div className="container-site grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Get started</h2>
          <p className="mt-3 text-brand-muted">
            Send a few details and we will tell you exactly what we need next. Dead simple.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              <ChatIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-5 text-sm text-brand-muted">{scopeText}</p>
          <p className="mt-2 text-sm text-brand-muted">
            We only use your details to respond about your bookkeeping. No spam.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
          {submitted ? (
            <div className="rounded-xl bg-brand-alt p-5">
              <p className="text-lg font-bold text-brand-primary">Nice one. Message received.</p>
              <p className="mt-2 text-brand-muted">We will be in touch shortly to get your books sorted.</p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              action="/"
              netlify
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Do not fill this out if you are human: <input name="bot-field" />
                </label>
              </p>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-brand-text">Full name *</span>
                <input name="full-name" required className="w-full rounded-xl border border-brand-border px-3 py-2" />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-brand-text">Mobile number *</span>
                <input name="mobile" required className="w-full rounded-xl border border-brand-border px-3 py-2" />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-brand-text">Email *</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-brand-border px-3 py-2"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-brand-text">Are you CIS?</span>
                <select name="is-cis" className="w-full rounded-xl border border-brand-border px-3 py-2">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-brand-text">Rough annual income band</span>
                <select name="income-band" className="w-full rounded-xl border border-brand-border px-3 py-2">
                  <option>Under 30k</option>
                  <option>30-50k</option>
                  <option>50k+</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-brand-text">Message</span>
                <textarea name="message" rows="4" className="w-full rounded-xl border border-brand-border px-3 py-2" />
              </label>

              {submitError && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700" role="alert">
                  {submitError}
                </p>
              )}

              {/* Optional Netlify reCAPTCHA block
              <div data-netlify-recaptcha="true"></div>
              */}

              <button
                type="submit"
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
              >
                <span className="inline-flex items-center gap-2">
                  <SendIcon className="h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
