import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;