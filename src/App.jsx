import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import MTDSection from './components/MTDSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-background text-brand-text">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <MTDSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;