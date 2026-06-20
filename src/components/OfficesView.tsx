import { MapPin, Phone, Mail, Clock, ShieldAlert, CheckCircle, Languages, Compass } from "lucide-react";
import { offices, OfficeLocation } from "../data";

interface OfficesViewProps {
  onContactOffice: (city: string) => void;
}

export default function OfficesView({ onContactOffice }: OfficesViewProps) {
  return (
    <div id="offices-page-root" className="w-full bg-ivory text-charcoal-900 select-text">
      {/* 1. Page Header */}
      <section className="relative py-24 md:py-36 bg-[#0a0a0a] text-gold-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000"
            alt="International financial skyline at night"
            className="w-full h-full object-cover filter brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="w-12 h-[1.5px] bg-[#C5A059] mb-4"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold-500 block mb-2">
            Global Footprint
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-normal">
            Rooted in key financial centres
          </h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-3xl font-light font-sans mt-4">
            Our physical presence across Zurich, London, Dubai, and Johannesburg ensures your assets are compliant, responsive, and close to critical regulatory conduits.
          </p>
        </div>
      </section>

      {/* 2. Office Directory Rows */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {offices.map((office, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={office.city}
              id={`office-row-${office.city.toLowerCase()}`}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-b border-charcoal-200/40 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-charcoal-200/40 shadow-none">
                  <img
                    src={office.image}
                    alt={`${office.city} Office Building`}
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 py-1 px-3 bg-[#0a0a0a] border border-[#C5A059]/40 text-[9px] font-mono text-gold-400 uppercase tracking-widest rounded-none">
                    {office.country}
                  </div>
                </div>
              </div>

              {/* Specs Column */}
              <div
                className={`lg:col-span-7 text-left flex flex-col gap-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-gold-600">
                    Principal hub
                  </span>
                  <h2 className="font-serif text-2xl lg:text-3.5xl text-[#121212] leading-tight font-normal">
                    Aurelia {office.city}
                  </h2>
                </div>

                <p className="text-xs md:text-sm text-black/60 leading-relaxed font-sans font-light">
                  {office.details}
                </p>

                {/* Direct office directory table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-charcoal-200/40">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-charcoal-700">
                      <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="font-medium">Address:</span>
                    </div>
                    <span className="text-[11.5px] text-black/50 font-sans pl-6 font-light">
                      {office.address}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-charcoal-700">
                      <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="font-medium">Direct Hotline:</span>
                    </div>
                    <span className="text-[11.5px] text-black/50 font-mono pl-6 font-light">
                      {office.phone}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-charcoal-700">
                      <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="font-medium">Hours of Mandate:</span>
                    </div>
                    <span className="text-[11.5px] text-black/50 font-sans pl-6 font-light">
                      {office.hours}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-charcoal-700">
                      <Languages className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="font-medium">Languages Served:</span>
                    </div>
                    <span className="text-[11.5px] text-black/50 font-sans pl-6 font-light">
                      {office.languages.join(", ")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onContactOffice(office.city)}
                  className="px-6 py-3 bg-[#121212] text-gold-500 text-xs tracking-widest uppercase font-mono rounded-none hover:bg-gold-500 hover:text-black transition-all mt-2 w-fit"
                >
                  Direct connection with {office.city} Desk
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
