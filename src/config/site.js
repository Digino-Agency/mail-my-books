const WA_NUMBER_SHIFTED = [69, 69, 72, 70, 68, 73, 74, 73, 73, 68, 74, 68];
const WA_SHIFT = 17;

function decodeWhatsAppNumber() {
  return WA_NUMBER_SHIFTED.map((code) => String.fromCharCode(code - WA_SHIFT)).join('');
}

function buildWhatsAppUrl() {
  const number = decodeWhatsAppNumber();
  const message = 'Hi, I want to get my tax sorted with Mail My Books';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const SITE_CONTACT = {
  whatsappUrl: buildWhatsAppUrl(),
  email: 'hello@mailmybooks.co.uk',
};

export const SERVICE_SCOPE = {
  vat: false,
  payroll: false,
  limitedCompanies: false,
};
