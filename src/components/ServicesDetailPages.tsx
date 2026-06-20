import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Sliders, ShieldCheck, DollarSign, Award, ChevronRight } from "lucide-react";
import { services, ServiceDetail } from "../data";

interface ServicePageProps {
  serviceId: string;
  onNavigateHome: () => void;
  onNavigateTo: (id: string) => void;
  onRequestConsultation: () => void;
}

export default function ServicesDetailPages({
  serviceId,
  onNavigateHome,
  onNavigateTo,
  onRequestConsultation,
}: ServicePageProps) {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-32 max-w-7xl mx-auto px-6 text-center select-text">
        <h2 className="font-serif text-2xl text-gold-500 mb-4">Mandate Not Located</h2>
        <button onClick={onNavigateHome} className="text-sm underline text-charcoal-400">
          Return to Global Reception
        </button>
      </div>
    );
  }

  // Interaction logic for specific services
  return (
    <div id={`service-detail-wrapper-${serviceId}`} className="w-full bg-ivory scroll-mt-20 text-charcoal-900 select-text hero-pt">
      {/* 1. Header Banner */}
      <section className="relative py-24 md:py-36 bg-[#0a0a0a] text-gold-100 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter grayscale blur-[1.5px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-left">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A059] hover:text-white transition-all mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </button>

          <div className="w-12 h-[1.5px] bg-[#C5A059] mb-4"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] block mb-2">
            Principal Mandate View
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-normal">
            {service.title}
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-3xl font-light font-sans mt-4">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 2. Structured Copy Block & Imagery */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059]">
              Mandate Specifications
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#121212] leading-tight font-normal">
              Discreet. Seamless. Tailored.
            </h2>
            <p className="text-xs md:text-sm text-black/60 leading-relaxed font-sans font-light">
              {service.longDescription}
            </p>
          </div>

          {/* Strategic Focus Bullet Lists */}
          <div className="bg-white border border-charcoal-200/50 p-6 md:p-8 rounded-none">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] block mb-4">
              Structural Deliverables
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.focusAreas.map((focus) => (
                <div key={focus} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-xs text-charcoal-700 font-sans leading-relaxed">
                    {focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Image & Quote */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative aspect-[4/3] w-full rounded-none overflow-hidden shadow-none border border-charcoal-200/40">
            <img
              src={service.image}
              alt={`${service.title} architectural abstract`}
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
          </div>

          <div className="p-6 bg-[#121212] text-gold-100 rounded-none border-l-2 border-[#C5A059]">
            <p className="font-serif text-xs italic text-white/70 leading-relaxed">
              &ldquo;True discretion does not mean hidden metrics. It means setting absolute standards of structural safety so completely that confidentiality remains natural.&rdquo;
            </p>
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-mono mt-3 block">
              — Aurelia Compliance Board
            </span>
          </div>
        </div>
      </section>

      {/* 3. Interactive Component (Interactive value calculations!) */}
      <section className="py-16 md:py-24 bg-[#121212] text-gold-100 border-t border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          {serviceId === "private-banking" && <PrivateBankingCalc />}
          {serviceId === "wealth-management" && <WealthManagementAlloc />}
          {serviceId === "lending-credit" && <LendingBrokerage />}
          {serviceId === "family-office" && <FamilyAssessment />}
        </div>
      </section>

      {/* 4. Service Specific CTA Navigation */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h3 className="font-serif text-2xl text-charcoal-900 font-normal">
          Explore alternative global options.
        </h3>
        <p className="text-xs text-charcoal-600 max-w-lg leading-relaxed font-sans font-light">
          Your personal wealth transition should address every liquidity angle. Connect with other dedicated private banker structures today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          {services
            .filter((s) => s.id !== serviceId)
            .map((alt) => (
              <button
                key={alt.id}
                onClick={() => onNavigateTo(alt.id)}
                className="px-4 py-2 border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all text-xs text-gold-900 font-sans tracking-wide"
              >
                {alt.title}
              </button>
            ))}
        </div>

        <button
          onClick={onRequestConsultation}
          className="mt-8 px-8 py-3.5 bg-[#121212] text-[#C5A059] border border-[#C5A059]/40 hover:bg-gold-500 hover:text-black hover:border-gold-500 text-xs tracking-widest font-mono uppercase transition-all rounded-none"
        >
          Request Private Consultation
        </button>
      </section>
    </div>
  );
}

/* ================= 1. PRIVATE BANKING MULTI-CURRENCY CALCULATOR ================= */
function PrivateBankingCalc() {
  const [balance, setBalance] = useState("10000000");
  const [currency, setCurrency] = useState("CHF");
  const val = parseFloat(balance) || 0;

  // Custom yield parameters per currency (very realistic private parameters)
  const yields: Record<string, { rate: number; bonus: string }> = {
    CHF: { rate: 0.015, bonus: "Backed by physical gold reserves" },
    EUR: { rate: 0.0185, bonus: "Securitized treasury liquidity notes" },
    USD: { rate: 0.0325, bonus: "Short-term sovereign certificates" },
    GBP: { rate: 0.0275, bonus: "Mayfair property collateral yields" },
  };

  const currentYield = yields[currency];
  const projectedEarnings = val * currentYield.rate;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 flex flex-col gap-4 text-left">
        <span className="text-xs uppercase font-mono tracking-widest text-gold-500">
          Treasury Estimator
        </span>
        <h3 className="font-serif text-2xl text-gold-100 leading-tight">
          Configure Your Cash Yield Mandate
        </h3>
        <p className="text-xs text-charcoal-400 leading-relaxed font-sans font-light">
          Aurelia operates separate-account multi-currency pools. Use this calculator to estimate the annual yield projection depending on chosen principal treasury currency and size.
        </p>
      </div>

      <div className="lg:col-span-7 bg-charcoal-950/80 border border-charcoal-800 p-6 md:p-8 rounded-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-2 text-left">
            <label className="text-[11px] uppercase tracking-wider text-charcoal-400 font-mono">
              Proposed Cash balance
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-gold-500 font-mono">
                {currency}
              </span>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                placeholder="25,000,000"
                className="w-full bg-charcoal-900 border border-charcoal-700 py-2.5 pl-12 pr-4 text-xs font-mono text-gold-100 placeholder-charcoal-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label className="text-[11px] uppercase tracking-wider text-charcoal-400 font-mono">
              Primary Currency Reserve
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full bg-charcoal-900 border border-charcoal-700 py-2.5 px-4 text-xs font-mono text-gold-100 focus:outline-none"
            >
              <option value="CHF">CHF — Swiss Franc</option>
              <option value="USD">USD — US Dollar</option>
              <option value="EUR">EUR — Euro</option>
              <option value="GBP">GBP — Sterling Pound</option>
            </select>
          </div>
        </div>

        <div className="pt-6 border-t border-charcoal-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div>
            <span className="text-[10px] text-charcoal-400 block font-mono">ESTIMATED ANNUAL COUNTERPARTY YIELD</span>
            <span className="font-serif text-2xl text-gold-300 font-light block mt-1">
              {currency} {projectedEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-charcoal-400 block font-mono">CUSTODY CLASS SECURITY</span>
            <span className="text-xs text-gold-100 block mt-1.5 font-medium">
              {(currentYield.rate * 100).toFixed(2)}% APY — {currentYield.bonus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= 2. WEALTH MANAGEMENT DISCRETIONARY RISK ALLOCATOR ================= */
function WealthManagementAlloc() {
  const [riskTier, setRiskTier] = useState<"defensive" | "balanced" | "dynastic">("balanced");

  const portfolioMix = {
    defensive: { equities: 15, privateEquity: 10, realAssets: 15, fixedIncome: 45, liquidCash: 15, expectedRisk: "Very Conservative" },
    balanced: { equities: 45, privateEquity: 15, realAssets: 20, fixedIncome: 15, liquidCash: 5, expectedRisk: "Standard Preservation" },
    dynastic: { equities: 65, privateEquity: 25, realAssets: 10, fixedIncome: 0, liquidCash: 0, expectedRisk: "Active Growth Focus" },
  };

  const mix = portfolioMix[riskTier];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 flex flex-col gap-4 text-left">
        <span className="text-xs uppercase font-mono tracking-widest text-gold-500">
          discretionary mandates
        </span>
        <h3 className="font-serif text-2xl text-gold-100 leading-tight">
          Select Your Generational Risk Focus
        </h3>
        <p className="text-xs text-charcoal-400 leading-relaxed font-sans font-light">
          Aurelia does not believe in static portfolios. We adjust allocations based on structural risk metrics. Click between the presets to inspect asset allocation percentages.
        </p>

        <div className="flex gap-2.5 mt-2">
          {(["defensive", "balanced", "dynastic"] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => setRiskTier(tier)}
              className={`px-4 py-2 border text-[11px] font-mono uppercase tracking-wider rounded-sm transition-colors ${
                riskTier === tier
                  ? "bg-gold-500 text-charcoal-950 border-gold-500 font-bold"
                  : "bg-charcoal-900 text-gold-100 border-charcoal-800 hover:border-gold-500/20"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 bg-charcoal-950/80 border border-charcoal-800 p-8 rounded-sm">
        <span className="text-[10px] text-charcoal-400 uppercase tracking-widest font-mono block mb-4">
          Allocated Reserve mix (Risk PROFILE: {mix.expectedRisk})
        </span>

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gold-200">Global Blue-Chip Equities</span>
              <span className="font-mono text-gold-500">{mix.equities}%</span>
            </div>
            <div className="w-full h-1.5 bg-charcoal-900 rounded-full overflow-hidden">
              <div className="h-full bg-gold-500 transition-all duration-500" style={{ width: `${mix.equities}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gold-200">Alternative Private Equity Markets</span>
              <span className="font-mono text-gold-500">{mix.privateEquity}%</span>
            </div>
            <div className="w-full h-1.5 bg-charcoal-900 rounded-full overflow-hidden">
              <div className="h-full bg-gold-400 transition-all duration-500" style={{ width: `${mix.privateEquity}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gold-200">Physical Gold & Land Reserves</span>
              <span className="font-mono text-gold-500">{mix.realAssets}%</span>
            </div>
            <div className="w-full h-1.5 bg-charcoal-900 rounded-full overflow-hidden">
              <div className="h-full bg-gold-300 transition-all duration-500" style={{ width: `${mix.realAssets}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gold-200">High-Grade Fixed Income Sovereign Debt</span>
              <span className="font-mono text-gold-500">{mix.fixedIncome}%</span>
            </div>
            <div className="w-full h-1.5 bg-charcoal-900 rounded-full overflow-hidden">
              <div className="h-full bg-gold-700 transition-all duration-500" style={{ width: `${mix.fixedIncome}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gold-200">Liquid Treasury Cash Pools</span>
              <span className="font-mono text-gold-500">{mix.liquidCash}%</span>
            </div>
            <div className="w-full h-1.5 bg-charcoal-900 rounded-full overflow-hidden">
              <div className="h-full bg-charcoal-600 transition-all duration-500" style={{ width: `${mix.liquidCash}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= 3. LENDING & CREDIT LOMBARD LEVERAGE CALCULATOR ================= */
function LendingBrokerage() {
  const [portfolioVal, setPortfolioVal] = useState("50000000");
  const value = parseFloat(portfolioVal) || 0;

  // Swiss Lombard guidelines: typical high-end loan-to-value is limited to 60-70% max
  const maxLtv = 0.65;
  const availableLombard = value * maxLtv;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4 text-left">
        <span className="text-xs uppercase font-mono tracking-widest text-gold-500">
          Strategic Leverage
        </span>
        <h3 className="font-serif text-2xl text-gold-100 leading-tight">
          Lombard Credit & Liquidity Engine
        </h3>
        <p className="text-xs text-charcoal-400 leading-relaxed font-sans font-light">
          Release liquid funds from high-grade assets without triggering premature tax realization. Estimate your instant Lombard borrowing limit by setting your current eligible portfolio value below.
        </p>
      </div>

      <div className="lg:col-span-12 xl:col-span-7 bg-charcoal-950/80 border border-charcoal-800 p-8 rounded-sm">
        <div className="flex flex-col gap-4 text-left mb-6">
          <label className="text-[11px] uppercase tracking-wider text-charcoal-400 font-mono">
            Eligible Portfolio Market Capitalization (CHF)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gold-500 font-mono">
              CHF
            </span>
            <input
              type="number"
              value={portfolioVal}
              onChange={(e) => setPortfolioVal(e.target.value)}
              placeholder="50,000,000"
              className="w-full bg-charcoal-900 border border-charcoal-700 py-3 pl-14 pr-4 text-sm font-mono text-gold-100 focus:outline-none"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-charcoal-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div>
            <span className="text-[9.5px] text-charcoal-400 block font-mono">MAXIMUM AVAILABLE CREDIT</span>
            <span className="font-serif text-2xl text-gold-300 font-light block mt-1.5">
              CHF {availableLombard.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>

          <div>
            <span className="text-[9.5px] text-charcoal-400 block font-mono">RECOMMENDED LTV MARGIN</span>
            <span className="text-xs text-gold-100 block mt-2.5 font-bold">
              {(maxLtv * 100).toFixed(0)}% Authorized Limit
            </span>
          </div>

          <div>
            <span className="text-[9.5px] text-charcoal-400 block font-mono">INDICATIVE OVERDRAFT INTEREST</span>
            <span className="text-xs text-emerald-400 block mt-2.5 font-mono font-medium">
              SARON + 0.95% p.a.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= 4. FAMILY OFFICE GOVERNANCE SCORECARD ================= */
function FamilyAssessment() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const questions = [
    { id: 1, text: "Do you have a legally signed Multi-Generational Family Constitution?" },
    { id: 2, text: "Are emerging heirs trained in private portfolio stewardship before age 25?" },
    { id: 3, text: "Is your asset allocation structured across at least three distinct sovereign jurisdictions?" },
    { id: 4, text: "Are philanthropic capital reserves structured independently from active corporate boards?" },
  ];

  const handleToggle = (id: number) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const trueCount = Object.values(answers).filter(Boolean).length;
  const assessmentResult = () => {
    if (trueCount === 4) return "Excellent Stability Structure. Your global family assets are institutionally managed.";
    if (trueCount >= 2) return "Moderate Structural Health. Transition plans require refinement to avoid generation-two frictions.";
    return "High Priority. Your generational assets lack unified structural protection frameworks.";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 flex flex-col gap-4 text-left">
        <span className="text-xs uppercase font-mono tracking-widest text-gold-500">
          Governance Scorecard
        </span>
        <h3 className="font-serif text-2xl text-gold-100 leading-tight">
          Assess Gen-to-Gen Transition Readiness
        </h3>
        <p className="text-xs text-charcoal-400 leading-relaxed font-sans font-light">
          Successful multigenerational wealth transitions rely on rigorous human governance charters. Answer these questions below to quickly benchmark your family structure's long-term preparedness level.
        </p>
      </div>

      <div className="lg:col-span-7 bg-charcoal-950/80 border border-charcoal-800 p-8 rounded-sm text-left">
        <div className="flex flex-col gap-4 mb-6">
          {questions.map((q) => (
            <div key={q.id} className="flex items-center justify-between gap-4 py-2 border-b border-charcoal-905">
              <span className="text-xs text-charcoal-100 font-sans max-w-sm">
                0{q.id}. {q.text}
              </span>
              <button
                type="button"
                onClick={() => handleToggle(q.id)}
                className={`py-1.5 px-4 font-mono text-[10px] tracking-wide transition-all uppercase rounded-sm border ${
                  answers[q.id]
                    ? "bg-gold-500/10 text-gold-300 border-gold-500/40 font-bold"
                    : "bg-charcoal-900 text-charcoal-500 border-charcoal-800"
                }`}
              >
                {answers[q.id] ? "Aligned" : "Pending"}
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-charcoal-900 border border-gold-500/10 rounded-sm">
          <span className="text-[10px] text-charcoal-400 uppercase tracking-widest font-mono">
            Aurelia Advisory Benchmarking Response:
          </span>
          <p className="text-xs text-gold-300 leading-relaxed font-serif italic mt-1 bg-opacity-10">
            {assessmentResult()}
          </p>
        </div>
      </div>
    </div>
  );
}
