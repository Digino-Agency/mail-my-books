import { CameraIcon, CheckCircleIcon, SendIcon } from './Icons';

const steps = [
  {
    title: 'Snap it',
    detail: 'Take photos of receipts, CIS statements, and mileage while the kettle is boiling.',
    Icon: CameraIcon,
    cardClass: 'bg-emerald-50 border-emerald-200',
    iconClass: 'bg-white text-brand-primary',
  },
  {
    title: 'Send it',
    detail: 'WhatsApp, email, or upload. However you get it to us, we will take it from there.',
    Icon: SendIcon,
    cardClass: 'bg-amber-50 border-amber-200',
    iconClass: 'bg-white text-amber-700',
  },
  {
    title: 'Sorted',
    detail: 'We organise the lot, prep your figures, and submit your return without drama.',
    Icon: CheckCircleIcon,
    cardClass: 'bg-brand-primary border-brand-primary text-white',
    iconClass: 'bg-white/15 text-brand-accent',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-36 bg-white py-16 sm:py-20">
      <div className="container-site">
        <h2 className="section-title">How it works</h2>
        <p className="mt-3 max-w-2xl text-brand-muted">
          Keep your effort low. You send the bits. We handle the admin mess and keep it moving.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, idx) => (
            <article
              key={step.title}
              className={`relative rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${step.cardClass}`}
            >
              <div className={`inline-flex rounded-xl p-2 shadow-sm ${step.iconClass}`}>
                <step.Icon className="h-5 w-5" />
              </div>
              <p className={`mt-4 text-sm font-bold ${idx === 2 ? 'text-emerald-100' : 'text-brand-primary'}`}>
                Step {idx + 1}
              </p>
              <h3 className={`mt-2 text-2xl font-extrabold ${idx === 2 ? 'text-white' : 'text-brand-text'}`}>{step.title}</h3>
              <p className={`mt-3 ${idx === 2 ? 'text-emerald-50' : 'text-brand-muted'}`}>{step.detail}</p>
              {idx < steps.length - 1 && (
                <span
                  className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-primary shadow md:flex"
                  aria-hidden="true"
                >
                  {'->'}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
