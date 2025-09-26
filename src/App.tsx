import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const MainPage = () => (
  <>
    <Header />
    <main className="pt-16">
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
