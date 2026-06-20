import React, { useState } from "react";
import { Send, CheckCircle, ShieldAlert, Key, Globe, User, Phone, Mail } from "lucide-react";

interface ContactViewProps {
  initialOffice?: string;
}

export default function ContactView({ initialOffice = "" }: ContactViewProps) {
  const [fullName, setFullName] = useState("");
  const [contactMethod, setContactMethod] = useState("secure_call");
  const [preferredPhone, setPreferredPhone] = useState("");
  const [preferredEmail, setPreferredEmail] = useState("");
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [briefContext, setBriefContext] = useState("");
  const [officeHub, setOfficeHub] = useState(initialOffice || "Zurich");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !countryOfResidence.trim() || !briefContext.trim()) {
      setError("Please complete all required fields to validate cryptographic signature.");
      return;
    }

    if (contactMethod === "secure_call" && !preferredPhone.trim()) {
      setError("Please provide your preferred secure phone number.");
      return;
    }

    if (contactMethod === "encrypted_email" && !preferredEmail.trim()) {
      setError("Please provide your preferred encrypted transition email.");
      return;
    }

    setIsSubmitting(true);

    // Simulate elite secure transmission protocol
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Generate a structured secure tracking ticket ID
      const number = Math.floor(1000 + Math.random() * 9000);
      setTicketId(`AURELIA-STWD-${number}`);
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setContactMethod("secure_call");
    setPreferredPhone("");
    setPreferredEmail("");
    setCountryOfResidence("");
    setBriefContext("");
    setOfficeHub("Zurich");
  };

  return (
    <div id="contact-page-root" className="w-full bg-ivory text-charcoal-900 select-text">
      {/* 1. Page Header */}
      <section className="relative py-24 md:py-36 bg-[#0a0a0a] text-gold-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
            alt="Cinematic macro black marble pattern"
            className="w-full h-full object-cover filter brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="w-12 h-[1.5px] bg-gold-505 bg-[#C5A059] mb-4"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold-500 block mb-2">
            Secure Channels
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-normal">
            Initiate a Private Consultation
          </h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-3xl font-light font-sans mt-4">
            All submission data is encrypted instantly before leaving your browser container. Complete the requested fields below to receive priority advisory contact.
          </p>
        </div>
      </section>

      {/* 2. Main Form Content */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Security details checklist sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059]">
              Technical Guarantees
            </span>
            <h2 className="font-serif text-2xl text-charcoal-900 leading-tight mb-2">
              Transmission Integrity Standards
            </h2>

            <div className="flex flex-col gap-5 text-xs text-black/60 leading-relaxed font-sans">
              <div className="flex gap-4 border-l-2 border-[#C5A059] pl-4 py-1">
                <div>
                  <h4 className="font-bold text-[#121212] mb-1">Zero-Trust Routing</h4>
                  <p className="font-light">
                    Your request enters our closed private intranet, isolated from commercial metrics or trackers completely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-[#C5A059] pl-4 py-1">
                <div>
                  <h4 className="font-bold text-[#121212] mb-1">Mandatory Senior Review</h4>
                  <p className="font-light">
                    Intake manifests are audited directly by managing partners across Zurich, London, Dubai, or JNB, never outsourced.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-[#C5A059] pl-4 py-1">
                <div>
                  <h4 className="font-bold text-[#121212] mb-1">No Trace Database Storage</h4>
                  <p className="font-light">
                    No persistent public cloud logs remain. Communications are processed through secure hardware-bonded channels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Form Panel */}
          <div className="lg:col-span-7 bg-white border border-charcoal-200/50 p-8 md:p-10 rounded-none shadow-none">
            {submitted ? (
              /* Success State */
              <div className="flex flex-col items-center justify-center py-12 gap-6 text-center">
                <CheckCircle className="w-16 h-16 text-gold-600" />
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#C5A059]">
                    TRANSMISSION SEALED
                  </span>
                  <h3 className="font-serif text-2xl text-[#121212] font-normal">
                    Sovereign Request Logged Successfully
                  </h3>
                  <p className="text-xs text-black/60 max-w-sm leading-relaxed font-sans mt-1">
                    Your mandate interest has been cryptographically compiled and allocated. A senior managing partner will contact you directly via your specified communication terminal.
                  </p>
                </div>

                <div className="p-4 bg-ivory rounded-none border border-gold-500/10 font-mono text-xs text-center">
                  <span className="text-[9px] text-[#A8A8A8] uppercase tracking-widest block mb-1">
                    Secure Cleared Ticket ID
                  </span>
                  <span className="text-gold-700 font-bold tracking-wider">{ticketId}</span>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#121212] text-gold-500 hover:bg-gold-500 hover:text-black text-xs tracking-widest uppercase font-mono rounded-none transition-all"
                >
                  Initiate Alternative Query
                </button>
              </div>
            ) : (
              /* Actual Editable Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <span className="text-[9px] text-gold-600 font-mono uppercase tracking-[0.4em] block mb-1">
                    Secure Registration
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#121212] font-normal">
                    Pre-Intake Mandate Registry
                  </h3>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-500/20 rounded-none text-xs text-red-700 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#121212] font-mono font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Sovereign Partner Name"
                        className="w-full bg-[#FAF9F6] border border-charcoal-200/50 rounded-none py-2.5 pl-10 pr-4 text-xs font-sans text-[#121212] focus:outline-none focus:border-gold-500/80"
                      />
                    </div>
                  </div>

                  {/* Country of Residence */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#121212] font-mono font-medium">
                      Country of Residence *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
                      <input
                        type="text"
                        required
                        value={countryOfResidence}
                        onChange={(e) => setCountryOfResidence(e.target.value)}
                        placeholder="Switzerland, UK, UAE, etc."
                        className="w-full bg-[#FAF9F6] border border-charcoal-200/50 rounded-none py-2.5 pl-10 pr-4 text-xs font-sans text-[#121212] focus:outline-none focus:border-gold-500/80"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Select Hub Office */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#121212] font-mono font-medium">
                      Preferred Advisor desk
                    </label>
                    <select
                      value={officeHub}
                      onChange={(e) => setOfficeHub(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-charcoal-200/50 rounded-none py-2.5 px-3 text-xs font-sans text-[#121212] focus:outline-none focus:border-gold-500/80"
                    >
                      <option value="Zurich">Zurich Switzerland Desk</option>
                      <option value="London">London UK Desk</option>
                      <option value="Dubai">Dubai Middle East Desk</option>
                      <option value="Johannesburg">Johannesburg Sub-Saharan Desk</option>
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#121212] font-mono font-medium">
                      Preferred Contact Method
                    </label>
                    <select
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-charcoal-200/50 rounded-none py-2.5 px-3 text-xs font-sans text-[#121212] focus:outline-none focus:border-gold-500/80"
                    >
                      <option value="secure_call">Secure Encrypted Phone Line</option>
                      <option value="encrypted_email">Encrypted Email Handshake</option>
                      <option value="in_person">In-person Rendezvous</option>
                    </select>
                  </div>
                </div>

                {/* Conditional Contact input depending on select */}
                {contactMethod === "secure_call" && (
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#121212] font-mono font-medium">
                      Preferred Secure Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
                      <input
                        type="tel"
                        required
                        value={preferredPhone}
                        onChange={(e) => setPreferredPhone(e.target.value)}
                        placeholder="+41 44 123 4567"
                        className="w-full bg-[#FAF9F6] border border-charcoal-200/50 rounded-none py-2.5 pl-10 pr-4 text-xs font-sans text-[#121212] focus:outline-none focus:border-gold-500/80"
                      />
                    </div>
                  </div>
                )}

                {contactMethod === "encrypted_email" && (
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#121212] font-mono font-medium">
                      Preferred Encrypted Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
                      <input
                        type="email"
                        required
                        value={preferredEmail}
                        onChange={(e) => setPreferredEmail(e.target.value)}
                        placeholder="private@stewardship.com"
                        className="w-full bg-[#FAF9F6] border border-charcoal-200/50 rounded-none py-2.5 pl-10 pr-4 text-xs font-sans text-[#121212] focus:outline-none focus:border-gold-500/80"
                      />
                    </div>
                  </div>
                )}

                {/* Brief Context */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#121212] font-mono font-medium">
                    Brief Context of Mandate *
                  </label>
                  <textarea
                    required
                    value={briefContext}
                    onChange={(e) => setBriefContext(e.target.value)}
                    rows={4}
                    placeholder="Describe legacy requirements, treasury volumes, multi-generational advisory goals, or international mortgage queries discreetly..."
                    className="w-full bg-[#FAF9F6] border border-charcoal-200/50 rounded-none py-2.5 px-4 text-xs font-sans text-[#121212] placeholder-charcoal-400 focus:outline-none focus:border-gold-500/80 resize-none"
                  />
                  <div className="text-[10px] text-[#A8A8A8] font-mono mt-1">
                    *Avoid transmitting bank card PIN credentials or high-risk active password phrases on this panel.
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold-500 text-[#121212] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-black hover:text-gold-500 transition-all rounded-none flex items-center justify-center gap-2.5 border border-gold-500"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? "TRANSMITTING SIGNED..." : "TRANSMIT ENCRYPTED RESERVATION"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
