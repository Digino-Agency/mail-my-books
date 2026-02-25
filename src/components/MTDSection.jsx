import { ShieldIcon } from './Icons';

const timeline = [
  {
    date: 'From April 2026',
    threshold: 'Qualifying income over £50k',
    detail: 'Current position as of 25 February 2026: MTD for Income Tax is expected to apply above £50,000.',
  },
  {
    date: 'From April 2027',
    threshold: 'Qualifying income over £30k',
    detail: 'The threshold is expected to expand to qualifying income above £30,000.',
  },
  {
    date: 'From April 2028',
    threshold: 'Qualifying income £20k+',
    detail: 'Government intent is to include qualifying income from £20,000 and above (subject to legislation).',
  },
];

function MTDSection() {
  return (
    <section id="mtd" className="scroll-mt-36 bg-brand-primary py-16 text-white sm:py-20">
      <div className="container-site">
        <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          <ShieldIcon className="h-8 w-8 text-brand-accent" />
          MTD for Income Tax (Making Tax Digital)
        </h2>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.15fr,1fr]">
          <div className="order-2 space-y-4 rounded-2xl border border-emerald-700 bg-brand-primary-hover p-5 shadow-soft sm:p-6 lg:order-1">
            <p className="text-emerald-50">
              MTD for Income Tax means keeping records digitally and sending summary updates to HMRC during the year.
            </p>
            <p className="text-emerald-50">
              In plain English: less end-of-year panic, more regular check-ins, then a final year-end declaration to
              confirm everything.
            </p>
            <p className="text-emerald-50">
              Quarterly updates are mainly for tracking. CIS rebates are usually finalised after year-end submission,
              not paid automatically each quarter.
            </p>
            <p className="rounded-xl border-l-4 border-brand-accent bg-white/95 p-4 text-sm font-semibold text-brand-text">
              We do not provide tax advice. We provide bookkeeping and submission support based on information you give us.
            </p>
          </div>

          <div className="order-1 rounded-2xl border border-emerald-700 bg-brand-primary-hover p-5 shadow-soft sm:p-6 lg:order-2">
            <h3 className="text-xl font-extrabold text-white">Rollout timeline</h3>
            <ol className="relative mt-4 space-y-3 pl-5 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-emerald-700/80">
              {timeline.map((item) => (
                <li key={item.date} className="relative rounded-xl border border-emerald-700/70 bg-brand-primary p-4">
                  <span
                    className="absolute -left-[18px] top-5 h-3 w-3 rounded-full border border-emerald-700 bg-brand-accent"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-extrabold uppercase tracking-wide text-brand-accent">{item.date}</p>
                  <p className="mt-1 text-lg font-extrabold text-white">{item.threshold}</p>
                  <p className="mt-1 max-w-prose text-sm text-emerald-50">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MTDSection;
