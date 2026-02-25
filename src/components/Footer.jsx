function Footer() {
  return (
    <footer className="border-t border-emerald-700 bg-brand-primary py-8">
      <div className="container-site flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src="/mail-my-books-logo.png" alt="Mail My Books" className="h-8 w-auto rounded bg-white p-1" />
          <p className="text-sm text-emerald-100">Mail My Books | CIS bookkeeping support</p>
        </div>
        <p className="text-xs text-emerald-200">Copyright {new Date().getFullYear()} Mail My Books. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
