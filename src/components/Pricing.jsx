import { CheckCircleIcon, PoundIcon } from './Icons';

const pricingCards = [
  {
    title: 'One-off Tax Return',
    price: '£149',
    points: [
      'Last year sorted',
      'CIS deductions included',
      'Clear list of what we need',
      'Submitted to HMRC',
    ],
  },
  {
    title: 'Memory Insurance',
    price: '£10/month',
    points: ['Keep this year tidy', 'Monthly check-in', 'Avoid the January panic', 'Starts from each tax year'],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-36 bg-brand-alt py-16 sm:py-20">
      <div className="container-site">
        <h2 className="section-title">Pricing</h2>
        <p className="mt-3 max-w-2xl text-brand-muted">
          Fair pricing, no mystery invoices, and no nonsense.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pricingCards.map((card, index) => (
            <article
              key={card.title}
              className={
                index === 0
                  ? 'rounded-2xl border border-brand-primary bg-brand-primary p-6 text-white shadow-soft'
                  : 'rounded-2xl border border-brand-border bg-white p-6 shadow-sm'
              }
            >
              <h3 className={index === 0 ? 'text-2xl font-extrabold text-white' : 'text-2xl font-extrabold text-brand-text'}>
                {card.title}
              </h3>
              <p
                className={
                  index === 0 ? 'mt-2 text-3xl font-extrabold text-white' : 'mt-2 text-3xl font-extrabold text-brand-primary'
                }
              >
                {card.price}
              </p>
              <ul className={index === 0 ? 'mt-5 space-y-2 text-emerald-50' : 'mt-5 space-y-2 text-brand-muted'}>
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircleIcon className={index === 0 ? 'mt-0.5 h-4 w-4 text-brand-accent' : 'mt-0.5 h-4 w-4 text-brand-primary'} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-extrabold text-amber-800">
            <PoundIcon className="h-5 w-5" />
            Refer a friend: get £20 cash after full payment or 6 monthly payments.
          </p>
          <p className="mt-1 text-sm font-semibold text-amber-900">No limits. Endless rewards. Ask us for your referral code.</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
