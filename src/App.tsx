import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import UtilityBar from './components/UtilityBar';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CaregiversPage from './pages/CaregiversPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import SkilledNursingPage from './pages/SkilledNursingPage';
import PersonalCarePage from './pages/PersonalCarePage';
import AdvancedCarePage from './pages/AdvancedCarePage';
import PostHospitalPage from './pages/PostHospitalPage';
import RespiteCarePage from './pages/RespiteCarePage';
import LegalDocumentPage from './pages/LegalDocumentPage';
import ResourceArticlePage from './pages/ResourceArticlePage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import NotFoundPage from './pages/NotFoundPage';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <UtilityBar />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/skilled-nursing" element={<SkilledNursingPage />} />
            <Route path="/services/personal-care" element={<PersonalCarePage />} />
            <Route path="/services/24-7-care" element={<AdvancedCarePage />} />
            <Route path="/services/post-hospital-recovery" element={<PostHospitalPage />} />
            <Route path="/services/respite-care" element={<RespiteCarePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/caregivers" element={<CaregiversPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ResourceArticlePage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/privacy-policy" element={<LegalDocumentPage document="privacy" />} />
            <Route path="/terms-and-conditions" element={<LegalDocumentPage document="terms" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCallButton />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
