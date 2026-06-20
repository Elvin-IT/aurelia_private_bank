import { useState, useEffect } from "react";
import { Menu, X, Lock, ChevronRight, Compass } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenLogin: () => void;
}

export default function Header({ currentPage, onNavigate, onOpenLogin }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Private Banking", id: "private-banking" },
    { label: "Wealth Management", id: "wealth-management" },
    { label: "Lending & Credit", id: "lending-credit" },
    { label: "Family Office & Advisory", id: "family-office" },
    { label: "Insights", id: "insights" },
    { label: "About", id: "about" },
    { label: "Our Offices", id: "offices" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="global-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isSticky
          ? "bg-charcoal-800 border-white/10 py-4 shadow-2xl"
          : "bg-charcoal-900 border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="logo-button"
          onClick={() => handleNavItemClick("home")}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative w-8 h-8 flex items-center justify-center border border-gold-500 rounded-none bg-[#0a0a0a] overflow-hidden transition-all duration-300">
            <span className="font-serif text-lg text-gold-500 font-normal leading-none select-none">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm tracking-[0.3em] text-white font-light leading-none">
              AURELIA
            </span>
            <span className="text-[7.5px] uppercase tracking-[0.25em] text-gold-500/80 font-mono mt-1">
              Private Bank
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-3">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className={`nav-item px-3 py-1.5 text-[10px] uppercase tracking-widest transition-colors duration-300 font-sans relative ${
                  isActive
                    ? "text-gold-500 font-medium"
                    : "text-white/70 hover:text-gold-500"
                }`}
              >
                <span className="relative inline-block">
                  {item.label}
                  <span className={`nav-underline ${isActive ? 'w-full' : ''}`}></span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Header CTA Button */}
        <div className="hidden xl:flex items-center gap-6">
          <button
            id="desktop-login"
            onClick={onOpenLogin}
            className="px-5 py-2 border border-gold-500 text-[#C5A059] text-[10px] uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300 rounded-none font-sans font-medium"
          >
            Client Login
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="xl:hidden flex items-center gap-3">
          <button
            id="mobile-login"
            onClick={onOpenLogin}
            className="p-2 border border-gold-500/20 rounded-sm text-gold-400 hover:text-gold-300 transition-colors"
            title="Client Login"
          >
            <Lock className="w-4 h-4" />
          </button>
          
          <button
            id="hamburger-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border border-charcoal-700 rounded-sm text-gold-100 hover:text-gold-400 transition-all"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform" />
            ) : (
              <Menu className="w-5 h-5 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-x-0 top-[71px] bottom-0 bg-charcoal-900 border-t border-gold-500/10 z-40 xl:hidden flex flex-col justify-between overflow-y-auto"
        >
          <div className="p-8 flex flex-col gap-6">
            <span className="text-[10px] font-mono tracking-widest text-gold-500/60 uppercase">
              Bespoke Stewardship Navigation
            </span>
            
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavItemClick(item.id)}
                    className="flex items-center justify-between py-2 text-left border-b border-charcoal-800/60"
                  >
                    <span
                      className={`text-sm tracking-wider ${
                        isActive
                          ? "text-gold-300 font-medium"
                          : "text-charcoal-100"
                      }`}
                    >
                      {item.label}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-gold-500 rotate-90" : "text-charcoal-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-8 border-t border-charcoal-800/80 bg-charcoal-950 flex flex-col gap-4">
            <button
              id="mobile-drawer-login"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-gold-800/60 to-gold-700/60 border border-gold-500/50 hover:from-gold-700/80 hover:to-gold-600/80 text-xs uppercase tracking-widest font-mono text-gold-100 rounded-sm transition-all"
            >
              <Lock className="w-3.5 h-3.5" />
              Access Private Workspace
            </button>

            <p className="text-[10px] text-charcoal-400 text-center uppercase tracking-wider font-mono">
              Secure 256-Bit Encrypted Session
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
