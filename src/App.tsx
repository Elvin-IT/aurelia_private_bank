/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import ServicesDetailPages from "./components/ServicesDetailPages";
import AboutView from "./components/AboutView";
import OfficesView from "./components/OfficesView";
import ContactView from "./components/ContactView";
import InsightsView from "./components/InsightsView";
import LoginModal from "./components/LoginModal";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string>("");
  const [initialOfficeSelection, setInitialOfficeSelection] = useState<string>("");
  const [showToTop, setShowToTop] = useState<boolean>(false);

  // Monitor scroll height to show a subtle "Back to top" high-contrast button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedArticleId("");
    setInitialOfficeSelection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentPage("insights");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactOffice = (city: string) => {
    setInitialOfficeSelection(city);
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal-900 overflow-x-hidden selection:bg-gold-200 selection:text-charcoal-950 font-sans">
      {/* Dynamic Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Main Screen Router with Staggered Transition Viewports */}
      <main className="flex-grow pt-[72px] md:pt-[84px] transition-all duration-300">
        {currentPage === "home" && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenLogin={() => setIsLoginOpen(true)}
            onSelectArticle={handleSelectArticle}
            onRequestConsultation={() => handleNavigate("contact")}
          />
        )}

        {(currentPage === "private-banking" ||
          currentPage === "wealth-management" ||
          currentPage === "lending-credit" ||
          currentPage === "family-office") && (
          <ServicesDetailPages
            serviceId={currentPage}
            onNavigateHome={() => handleNavigate("home")}
            onNavigateTo={handleNavigate}
            onRequestConsultation={() => handleNavigate("contact")}
          />
        )}

        {currentPage === "insights" && (
          <InsightsView
            selectedArticleId={selectedArticleId}
            onSelectArticle={setSelectedArticleId}
            onClearArticle={() => setSelectedArticleId("")}
          />
        )}

        {currentPage === "about" && (
          <AboutView onRequestConsultation={() => handleNavigate("contact")} />
        )}

        {currentPage === "offices" && (
          <OfficesView onContactOffice={handleContactOffice} />
        )}

        {currentPage === "contact" && (
          <ContactView initialOffice={initialOfficeSelection} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Certified Login Portal Dialog */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Floating Back to Top control tailored to premium minimal style */}
      {showToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-charcoal-900 hover:bg-charcoal-800 border border-gold-500/30 text-gold-400 hover:text-gold-200 shadow-xl rounded-sm transition-all duration-300 transform translate-y-0 group"
          title="Back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}

