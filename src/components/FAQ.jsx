import { useId, useState } from 'react';
import { QuestionIcon } from './Icons';

const faqs = [
  {
    question: 'What do you need from me?',
    answer: 'Basic details, your CIS statements, receipts, mileage, and anything HMRC has sent you.',
  },
  {
    question: 'How do I send my docs?',
    answer: 'Send by WhatsApp, email, or upload. Whatever is easiest on your phone after a long day.',
  },
  {
    question: 'How long does it take?',
    answer: 'Usually quick once we have everything. Timings depend on how complete your docs are.',
  },
  {
    question: 'Do you deal with VAT, payroll, or limited companies?',
    answer: 'No. We do not do VAT, payroll, or limited companies. This service is CIS sole trader only.',
  },
  {
    question: "Can you help if I've lost receipts?",
    answer: 'Yes. We will work with what you have and help rebuild your records sensibly.',
  },
  {
    question: 'Mileage or vehicle expenses - which one do I use?',
    answer:
      'Usually it is one method per vehicle for a period, not both together. We will organise what you send and submit based on your records and HMRC rules.',
  },
  {
    question: 'Will I get a rebate?',
    answer: 'It depends on your circumstances. We calculate based on your records and submit correctly.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  const panelId = useId();

  return (
    <article className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-bold text-brand-text"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          {faq.question}
          <span className="text-brand-primary" aria-hidden="true">
            {isOpen ? '-' : '+'}
          </span>
        </button>
      </h3>
      <div id={panelId} className={isOpen ? 'block px-5 pb-5 text-brand-muted' : 'hidden px-5 pb-5 text-brand-muted'}>
        {faq.answer}
      </div>
    </article>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-36 bg-gradient-to-b from-brand-alt to-white py-16 sm:py-20">
      <div className="container-site">
        <h2 className="section-title flex items-center gap-2">
          <QuestionIcon className="h-7 w-7 text-brand-primary" />
          FAQ
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
