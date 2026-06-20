import { Mail, Phone, MapPin, Landmark } from "lucide-react";
import { offices } from "../data";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="global-footer" className="bg-charcoal-900 text-charcoal-300 pt-20 pb-12 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand & Ethos */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border border-gold-500 rounded-none bg-[#0a0a0a]">
              <span className="font-serif text-sm text-gold-500 font-normal">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm tracking-[0.3em] text-white font-light leading-none">
                AURELIA
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.25em] text-gold-500/80 font-mono mt-0.5">
                Private Bank
              </span>
            </div>
          </div>
          
          <p className="text-xs text-charcoal-400 leading-relaxed font-sans mt-2">
            Aurelia Private Bank provides discreet, highly personalised banking and wealth management for individuals and families whose ambitions and responsibilities span continents.
          </p>

          <div className="flex flex-col gap-2 mt-4 text-xs">
            <div className="flex items-center gap-2.5 text-charcoal-400">
              <Phone className="w-3.5 h-3.5 text-gold-500/70" />
              <span className="hover:text-gold-200 transition-colors">+41 (0) 44 212 9000</span>
            </div>
            <div className="flex items-center gap-2.5 text-charcoal-400">
              <Mail className="w-3.5 h-3.5 text-gold-500/70" />
              <span className="hover:text-gold-200 transition-colors">stewardship@aureliaprivate.com</span>
            </div>
          </div>
        </div>

        {/* Global Offices Directory */}
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-mono font-medium">
            Principal Offices
          </span>
          <div className="flex flex-col gap-4">
            {offices.map((office) => (
              <div key={office.city} className="group">
                <button
                  onClick={() => handleLinkClick("offices")}
                  className="text-xs text-gold-100 group-hover:text-gold-400 transition-colors duration-300 font-serif font-medium flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-gold-500/60" />
                  {office.city}, {office.country}
                </button>
                <p className="text-[11px] text-charcoal-400 leading-tight mt-1">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Portals & Capabilities */}
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-mono font-medium">
            Stewardship Services
          </span>
          <nav className="flex flex-col gap-3 text-xs">
            <button
              onClick={() => handleLinkClick("private-banking")}
              className="text-left hover:text-gold-300 transition-colors duration-300 text-charcoal-400"
            >
              Private Banking & Treasury
            </button>
            <button
              onClick={() => handleLinkClick("wealth-management")}
              className="text-left hover:text-gold-300 transition-colors duration-300 text-charcoal-400"
            >
              Global Wealth Management
            </button>
            <button
              onClick={() => handleLinkClick("lending-credit")}
              className="text-left hover:text-gold-300 transition-colors duration-300 text-charcoal-400"
            >
              Custom Lending & Leverage Credit
            </button>
            <button
              onClick={() => handleLinkClick("family-office")}
              className="text-left hover:text-gold-300 transition-colors duration-300 text-charcoal-400"
            >
              Family Office Advisory & Trust
            </button>
            <button
              onClick={() => handleLinkClick("about")}
              className="text-left hover:text-gold-300 transition-colors duration-300 text-charcoal-400"
            >
              Our Heritage & Philosophy
            </button>
          </nav>
        </div>

        {/* Insights & Bulletins */}
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-mono font-medium">
            Insights & Regulatory
          </span>
          <div className="flex flex-col gap-4 text-xs text-charcoal-400">
            <button
              onClick={() => handleLinkClick("insights")}
              className="text-left hover:text-gold-200 transition-colors leading-relaxed group"
            >
              <span className="text-gold-300 block text-[11px] font-mono uppercase tracking-[0.1em] mb-1">Latest Intelligence</span>
              &ldquo;Navigating liquidity events without losing focus on your legacy.&rdquo;
            </button>

            <div className="pt-2 border-t border-charcoal-800 flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5 text-gold-500/50" />
              <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-mono">
                FINMA Registered Institution
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Disclosure & Legal boilerplate */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 text-[10px] text-white/30 leading-relaxed grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p>
            Regulatory Disclosure: Aurelia Private Bank (Switzerland) Ltd is authorized by the Swiss Financial Market Supervisory Authority (FINMA) as a bank and securities dealer. Aurelia Private Bank (UK) Ltd is authorized by the Prudential Regulation Authority (PRA) and regulated by the Financial Conduct Authority (FCA). Aurelia Private Bank (DIFC) Ltd is regulated by the Dubai Financial Services Authority (DFSA).
          </p>
          <p className="mt-2">
            The values of investments may go down as well as up. Past performance is not a reliable indicator of future returns. Dynamic currency fluctuations can impact holdings. This document is provided for informational structures only and does not constitute a solicitation or strategic investment advice.
          </p>
        </div>
        <div className="flex flex-col lg:items-end justify-between gap-4">
          <div className="flex gap-4 text-white/40">
            <a href="#privacy" className="hover:text-gold-500 transition-all underline">Privacy Protocol</a>
            <a href="#terms" className="hover:text-gold-500 transition-all underline">Terms of Mandate</a>
            <a href="#disclosures" className="hover:text-gold-500 transition-all underline">MIFID Regulatory</a>
          </div>
          <p className="text-[9.5px] font-mono tracking-wider uppercase text-white/30">
            &copy; {currentYear} Aurelia Private Bank. All rights reserved. Stewardship spanning generations.
          </p>
        </div>
      </div>

      {/* Global Desk Tracker Panel */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0a0a0a]/50 p-6 rounded-none">
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-[#C5A059]"></span>
            <span className="text-[9px] uppercase tracking-widest text-white/40">Zurich</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-[#C5A059]"></span>
            <span className="text-[9px] uppercase tracking-widest text-white/40">London</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-[#C5A059]"></span>
            <span className="text-[9px] uppercase tracking-widest text-white/40">Dubai</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-[#C5A059]"></span>
            <span className="text-[9px] uppercase tracking-widest text-white/40">Johannesburg</span>
          </div>
        </div>
        <div className="text-[9px] text-white/30 uppercase tracking-tight">
          Aurelia Intercontinental Desks | Secure Intranet Enabled
        </div>
      </div>
    </footer>
  );
}
