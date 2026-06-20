import { Shield, Users, Globe, Award, CheckCircle } from "lucide-react";

interface AboutViewProps {
  onRequestConsultation: () => void;
}

export default function AboutView({ onRequestConsultation }: AboutViewProps) {
  const leadershipValues = [
    {
      title: "Generational Patience",
      desc: "Capital compound returns require decades of calm structural allocation. We are not driven by immediate fee incentives or public pressure.",
      icon: Award,
    },
    {
      title: "Geographical Agility",
      desc: "Our sovereign clients operate across London, Zurich, and Dubai daily. We match their mobility with seamless multi-jurisdictional administration.",
      icon: Globe,
    },
    {
      title: "Strict Privacy Compliance",
      desc: "Absolute confidentiality under Swiss banking code guarantees protection against arbitrary overreaches and structural interference.",
      icon: Shield,
    },
  ];

  return (
    <div id="about-page-root" className="w-full bg-ivory text-charcoal-900 select-text">
      {/* 1. Page Header */}
      <section className="relative py-24 md:py-36 bg-[#0a0a0a] text-gold-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000"
            alt="Minimal Swiss Architecture"
            className="w-full h-full object-cover filter brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="w-12 h-[1.5px] bg-[#C5A059] mb-4"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold-500 block mb-2">
            Core Heritage View
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-normal">
            Our Heritage & Ethos
          </h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-3xl font-light font-sans mt-4">
            Aurelia Private Bank represents a century of quiet defense of private wealth, integrating traditional Swiss custody principles with modern programmatic multi-currency safety.
          </p>
        </div>
      </section>

      {/* 2. Structured Copy Block: Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059]">
              The Aurelia Mandate
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 leading-tight">
              Quiet stewards of concentrated global assets.
            </h2>
            <div className="w-16 h-[1.5px] bg-gold-500 mt-2" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-xs md:text-sm text-black/60 leading-relaxed font-sans font-light">
            <p>
              Founded in Zurich as a boutique private wealth clearinghouse, Aurelia Private Bank has evolved into an elite multi-jurisdictional financial partner. We operate on a debt-free balance sheet, completely independent of commercial banking groups or public hedge operations, ensuring our goals align exclusively with yours.
            </p>
            <p>
              We believe that true capital protection requires more than asset allocation tables. It requires absolute spatial agility — distributing custody across global nodes, integrating real-time physical gold vault conversions, and designing bespoke Trust mechanisms that guarantee seamless corporate and inheritance governance transition.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Team Experience Grid */}
      <section className="py-20 bg-white border-t border-b border-charcoal-200/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-3 mb-16 text-left">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] block">
              Leadership Framework
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#121212] font-normal">
              Core Principles of Stewardship
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {leadershipValues.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="p-8 border border-charcoal-150 rounded-none flex flex-col gap-4 bg-[#FAF9F6] hover:border-gold-500/50 transition-all">
                  <Icon className="w-6 h-6 text-[#C5A059]" />
                  <h4 className="font-serif text-lg text-[#121212] font-normal">{val.title}</h4>
                  <p className="text-xs text-black/60 leading-relaxed font-sans font-light">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3B. Advisory Desk structure */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          <div className="relative rounded-none overflow-hidden border border-charcoal-200/40 shadow-none">
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1200"
              alt="Elite meeting board table"
              className="w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059]">
              Personalized Advisory Desks
            </span>
            <h3 className="font-serif text-2xl text-charcoal-900 leading-tight">
              A single point of contact for complex requirements.
            </h3>
            
            <p className="text-xs md:text-sm text-black/60 leading-relaxed font-sans font-light">
              Every client partner is paired with a dedicated advisory desk led by a senior managing partner based in the client’s geographic region. Our advisory desks do not operate call centres — they are directly accessible via secure digital communication hotlines 24 hours a day, providing instant response for critical international credit lines, multicurrency movements, and discretionary allocation requests.
            </p>

            <button
              onClick={onRequestConsultation}
              className="px-6 py-3 bg-[#121212] text-gold-500 text-xs tracking-widest uppercase font-mono rounded-none hover:bg-gold-500 hover:text-black transition-all mt-2 w-fit"
            >
              Consult an advisory Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
