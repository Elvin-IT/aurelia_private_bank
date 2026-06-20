import { ArrowRight, ChevronRight, BookOpen, MapPin, Shield, HelpCircle, UserPlus, FileText } from "lucide-react";
import { clientProfiles, services, philosophyPillars, insightsArticles, offices } from "../data";

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onOpenLogin: () => void;
  onSelectArticle: (id: string) => void;
  onRequestConsultation: () => void;
}

export default function HomeView({
  onNavigate,
  onOpenLogin,
  onSelectArticle,
  onRequestConsultation,
}: HomeViewProps) {
  return (
    <div id="homepage-root" className="w-full">
      {/* ================= 1. HERO SECTION ================= */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center bg-[#0a0a0a] border-b border-white/10 overflow-hidden pt-20"
      >
        {/* Background Imagery & Ambient Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Minimal Luxury Architectural Steel Interior"
            className="w-full h-full object-cover opacity-15 filter brightness-50 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-transparent z-10" />
          <div className="absolute top-20 right-[-100px] w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full py-20 text-left">
          <div className="max-w-xl flex flex-col gap-6">
            <div className="w-12 h-[1.5px] bg-gold-500"></div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.15] font-light tracking-tight text-white">
              Private banking for <br/>
              <span className="text-gold-500 font-serif italic text-4xl md:text-5.5xl lg:text-6.5xl">quiet achievers.</span>
            </h1>
            
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light font-sans max-w-lg mt-2">
              Aurelia Private Bank provides discreet, highly personalised banking and wealth management for individuals and families whose ambitions and responsibilities span continents.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <button
                id="hero-cta-consultation"
                onClick={onRequestConsultation}
                className="px-8 py-4 bg-gold-500 text-charcoal-900 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-all rounded-none"
              >
                Request Consultation
              </button>
              
              <button
                id="hero-cta-login"
                onClick={onOpenLogin}
                className="text-xs uppercase tracking-widest text-white/50 hover:text-white border-b border-gold-500/30 hover:border-gold-500 pb-1 transition-all font-mono"
              >
                Client Portal
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic abstract line decoration */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:flex items-center justify-center pointer-events-none select-none opacity-20">
          <div className="w-[1px] h-3/4 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-gold-500/40 rotate-45 bg-[#0a0a0a]" />
          </div>
        </div>
      </section>

      {/* ================= 2. WHO WE SERVE SECTION ================= */}
      <section
        id="who-we-serve-section"
        className="py-24 md:py-32 bg-ivory text-[#121212] border-b border-charcoal-200/40"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] block">
                Who we serve
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#121212] leading-tight font-normal">
                For those who think in generations, not quarters.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <p className="text-xs md:text-sm text-black/60 leading-relaxed font-sans max-w-2xl font-light">
                Our partners are global custodians. We support entrepreneurs who transform business horizons, corporate leaders with multi-jurisdictional estates, and family structures that steward strategic resources spanning multiple generations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientProfiles.map((partner, index) => (
              <div
                key={partner.title}
                id={`serve-card-${index}`}
                className="bg-white border border-[#C5A059]/20 p-8 md:p-10 rounded-none hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-[0.4em] text-gold-500 mb-6 block">
                    Profile 0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#121212] mb-4 font-normal">
                    {partner.title}
                  </h3>
                  <p className="text-xs text-black/60 leading-relaxed mb-6 font-sans font-light">
                    {partner.description}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[11px] font-sans text-[#C5A059] block pt-1 italic text-left w-fit"
                >
                  Learn more &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. OUR SERVICES SECTION ================= */}
      <section
        id="services-section"
        className="py-24 md:py-32 bg-[#FAF9F6] text-[#121212] border-b border-[#C5A059]/20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="flex flex-col gap-3 mb-16">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] block">
              What we do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#121212] font-normal">
              A complete view of your wealth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-teaser-${service.id}`}
                className="bg-white border border-[#121212]/5 p-8 md:p-12 rounded-none hover:border-[#C5A059]/40 transition-all duration-500 flex flex-col justify-between group min-h-[300px]"
              >
                <div>
                  <h3 className="font-serif text-2xl text-[#121212] mb-4 font-normal">
                    {service.title}
                  </h3>
                  <p className="text-xs text-black/60 leading-relaxed mb-8 max-w-xl font-light">
                    {service.shortDescription}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#121212]/5">
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {service.focusAreas.slice(0, 2).map((focus) => (
                      <span key={focus} className="text-[9px] uppercase tracking-widest font-mono text-gold-600">
                        • {focus}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onNavigate(service.id)}
                    className="text-[10px] text-[#C5A059] block italic hover:text-[#AF8B44] transition-colors"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. OUR PHILOSOPHY SECTION ================= */}
      <section
        id="philosophy-section"
        className="py-24 md:py-32 bg-ivory text-[#121212] border-b border-charcoal-200/40"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="max-w-3xl flex flex-col gap-3 mb-20">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] mb-4 block">
              Our philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#121212] leading-tight font-normal">
              Preserve. Grow. Protect.
            </h2>
            <p className="text-sm text-black/50 leading-relaxed max-w-sm italic font-serif mt-2">
              &ldquo;For those who think in generations, not quarters.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophyPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                id={`philosophy-pillar-${index}`}
                className="flex items-start gap-4 border-l border-[#C5A059]/20 pl-6 md:pl-8"
              >
                <span className="text-[10px] text-gold-500 font-mono mt-1 font-semibold">0{index + 1}</span>
                <div className="flex flex-col">
                  <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-1 text-[#121212]">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-black/50 font-light leading-snug">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. INSIGHTS TEASER SECTION ================= */}
      <section
        id="insights-teaser-section"
        className="py-24 md:py-32 bg-[#121212] text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold-500 block">
                Insights
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
                Clarity in a crowded narrative.
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate("insights")}
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#E2C48C] transition-all flex items-center gap-1 shrink-0 pb-1 border-b border-gold-500/25"
            >
              Browse complete bibliography
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsArticles.map((article) => (
              <div
                key={article.id}
                id={`insight-card-teaser-${article.id}`}
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-none hover:border-[#C5A059]/30 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
                onClick={() => onSelectArticle(article.id)}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 text-[9px] font-mono text-gold-500">
                    <span className="uppercase tracking-widest bg-gold-500/5 px-2 py-0.5 border border-[#C5A059]/20">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="font-serif text-lg text-white/90 leading-snug mb-4 group-hover:text-gold-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-xs text-white/40 leading-relaxed font-sans mb-8">
                    {article.excerpt}
                  </p>
                </div>
                
                <span className="text-xs font-mono uppercase tracking-wider text-gold-500 group-hover:text-gold-400 transition-colors flex items-center gap-1.5 mt-auto pt-4 border-t border-white/5">
                  Read full analysis
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. GLOBAL REACH SECTION ================= */}
      <section
        id="global-reach-section"
        className="py-24 md:py-32 bg-ivory text-[#121212] border-b border-charcoal-200/40"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold-600 block">
                Global reach
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#121212] font-normal">
                Rooted in key financial centres.
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate("offices")}
              className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#C5A059] hover:text-[#AF8B44] transition-all flex items-center gap-1 shrink-0"
            >
              View office directories
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                id={`reach-card-${office.city.toLowerCase()}`}
                className="bg-white border border-charcoal-200/60 p-6 rounded-none flex flex-col justify-between group hover:border-[#C5A059]/40 hover:shadow-md transition-all duration-300 min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-xl text-[#121212] group-hover:text-gold-500 transition-colors">
                      {office.city}
                    </span>
                    <MapPin className="w-4 h-4 text-gold-500/60" />
                  </div>
                  <p className="text-xs text-black/50 leading-relaxed font-sans mb-4">
                    {office.details.substring(0, 110)}...
                  </p>
                </div>
                
                <div className="pt-3 border-t border-charcoal-100/80 text-[10px] font-mono text-[#A8A8A8]">
                  {office.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. FINAL CALL TO ACTION SECTION ================= */}
      <section
        id="final-cta-section"
        className="py-28 md:py-36 bg-[#0a0a0a] text-gold-100 border-b border-white/10 relative"
      >
        {/* Abstract metallic graphic background */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=2000"
            alt="Cinematic metallic details architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <div className="w-12 h-[1.5px] bg-[#C5A059]"></div>
          
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-gold-500 block">
            Initiate Contact
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
            A conversation, not a formality.
          </h2>
          
          <p className="text-sm text-white/60 leading-relaxed max-w-2xl font-light font-sans mt-2">
            We invite you to experience privacy in wealth management. Connect with our senior partners across Zurich, London, Dubai, or Johannesburg structures to plan your transition roadmap.
          </p>

          <button
            id="final-cta-consultation-btn"
            onClick={onRequestConsultation}
            className="px-8 py-4 bg-gold-500 text-charcoal-900 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-all rounded-none mt-4"
          >
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
