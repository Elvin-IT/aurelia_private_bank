import React, { useState } from "react";
import { Lock, User, ShieldAlert, CheckCircle, RefreshCw, Send, ArrowRight, TrendingUp, HelpCircle, X, Download } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Portfolio Dashboard States
  const [cashBalance, setCashBalance] = useState(8000000);
  const [goldBalance, setGoldBalance] = useState(25738124);
  const [isTransferring, setIsTransferring] = useState(false);
  const [transferAmount, setTransferAmount] = useState("500000");
  const [secureMessage, setSecureMessage] = useState("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [dashboardNotice, setDashboardNotice] = useState("");
  const [dashboardError, setDashboardError] = useState("");

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !passcode.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    setIsLoading(true);

    // Simulate elite security authentication checkpoints
    const steps = [
      "Securing transport tunnels...",
      "Validating hardware security keys...",
      "Decrypting sovereign client records...",
      "Establishing sovereign biometric session..."
    ];

    let currentStep = 0;
    setLoadingStep(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setLoadingStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        setIsLoading(false);
        setIsLoggedIn(true);
      }
    }, 850);
  };

  const handleGoldConversion = (e: React.FormEvent) => {
    e.preventDefault();
    setDashboardError("");
    setDashboardNotice("");
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0) {
      setDashboardError("Please enter a valid transfer amount.");
      return;
    }
    if (amount > cashBalance) {
      setDashboardError("Insolvent. Specified amount exceeds available multicurrency cash liquidity.");
      return;
    }

    setIsTransferring(true);
    setTimeout(() => {
      setCashBalance((prev) => prev - amount);
      setGoldBalance((prev) => prev + amount);
      setIsTransferring(false);
      setTransferAmount("");
      setDashboardNotice(`Direct allocation completed: CHF ${amount.toLocaleString()} procured as Swiss physical gold.`);
      
      // Temporary physical transfer success message
      const notification = document.getElementById("vault-notification");
      if (notification) {
        notification.style.opacity = "1";
        setTimeout(() => {
          notification.style.opacity = "0";
        }, 5000);
      }
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setDashboardError("");
    setDashboardNotice("");
    if (!secureMessage.trim()) return;
    setMessageSubmitted(true);
    setTimeout(() => {
      setSecureMessage("");
      setMessageSubmitted(false);
      setDashboardNotice("Your message was compiled and transmitted via priority encrypted routing to your partner, Marc-André Senechal.");
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPasscode("");
    setCashBalance(8000000);
    setGoldBalance(25738124);
    setDashboardError("");
    setDashboardNotice("");
  };

  const totalPortfolioValue = 64520000 + 32150000 + goldBalance + 12000000 + cashBalance;

  return (
    <div
      id="login-modal-wrapper"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="login-modal-card"
        className="relative w-full max-w-4xl bg-[#121212] border border-[#C5A059]/30 rounded-none shadow-2xl p-6 md:p-10 my-8 transition-transform duration-500 select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gold-300/60 hover:text-white transition-colors"
          title="Exit Portal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isLoggedIn ? (
          /* ================= LOGIN FORM ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Branding Sidebar Info */}
            <div className="lg:col-span-5 flex flex-col gap-6 pr-0 lg:pr-8 lg:border-r border-neutral-800 text-left">
              <div className="flex items-center gap-3">
                <a href="https://ibb.co/1J9mBdFw" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center overflow-hidden rounded-none bg-black border-2 border-[#C5A059]/50 p-3 md:p-4 min-h-[72px] min-w-[72px] max-w-[220px] w-full">
                  <img
                    src="https://i.ibb.co/cXNrRC47/logoweb-logo.png"
                    alt="logoweb-logo"
                    border="0"
                    className="w-full h-full object-contain"
                  />
                </a>
               
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-white leading-tight font-normal">
                Secure Client Portal
              </h3>
              
              <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                Access to the Aurelia Digital Ledger is restricted to registered clients and authorized sovereign trustees. Sessions are monitored under FINMA compliance frameworks.
              </p>

              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-none animate-pulse" />
                  <span className="font-sans font-light text-neutral-300">256-Bit Hardware Managed Encryption</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#C5A059]/60 rounded-none" />
                  <span className="font-sans font-light text-neutral-300">Mandatory Multi-Factor Handshake</span>
                </div>
              </div>
            </div>

            {/* Practical login form */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {isLoading ? (
                /* Authenticating Animation State */
                <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                  <RefreshCw className="w-10 h-10 text-[#C5A059] animate-spin" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                      SECURE AUDIT PIPELINE
                    </span>
                    <p className="text-sm font-serif text-neutral-300 italic">
                      {loadingStep}
                    </p>
                  </div>
                </div>
              ) : (
                /* Actual Fillable Form */
                <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5 text-left">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">
                      Identity Checklist
                    </span>
                    <h4 className="font-serif text-lg text-white font-normal">
                      Enter Credentials
                    </h4>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-950/40 border border-red-500/20 rounded-none text-xs text-red-300 flex items-center gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Demo Helper box */}
                  <div className="p-3.5 bg-[#C5A059]/5 border border-[#C5A059]/25 rounded-none text-[11px] text-neutral-300 leading-relaxed">
                    <span className="font-semibold uppercase tracking-wider block mb-0.5 text-white">Steward Demo Vault Access:</span>
                    Enter any username and passcode (e.g., <span className="font-mono bg-black px-1.5 py-0.5 rounded-none text-[#C5A059] select-all">aurelia_partner</span> / <span className="font-mono bg-black px-1.5 py-0.5 rounded-none text-[#C5A059] select-all">zurich_1926</span>) to view the integrated private banking vault ledger.
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                      Client Identifier / Username
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="e.g., aurelia_partner"
                        className="w-full bg-black border border-neutral-800 rounded-none py-2.5 pl-10 pr-4 text-xs font-mono text-[#C5A059] placeholder-neutral-600 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                      Vault Passcode / Token Key
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="password"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        placeholder="••••••••••••••"
                        className="w-full bg-black border border-neutral-800 rounded-none py-2.5 pl-10 pr-4 text-xs font-mono text-[#C5A059] placeholder-neutral-600 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] text-neutral-500 hover:text-[#C5A059] transition-colors cursor-pointer font-sans underline">
                      Request Hardware Token Reset
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#C5A059] hover:bg-gold-400 text-black font-sans font-medium text-xs tracking-wider rounded-none transition-all duration-300"
                    >
                      Authenticate Session
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        ) : (
          /* ================= PRIVATE LEDGER CLIENT PORTAL DASHBOARD ================= */
          <div className="flex flex-col gap-8 text-left select-text">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <a href="https://ibb.co/1J9mBdFw" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center overflow-hidden rounded-none bg-black border border-[#C5A059]/40 min-h-[48px] min-w-[48px] max-w-[140px] w-full">
                  <img
                    src="https://i.ibb.co/cXNrRC47/logoweb-logo.png"
                    alt="logoweb-logo"
                    border="0"
                    className="w-full h-full object-contain"
                  />
                </a>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xl tracking-wide text-white font-normal">
                      Aurelia Ledger
                    </span>
                    <span className="px-2 py-0.5 bg-neutral-800 border border-[#C5A059]/30 rounded-none text-[9px] font-mono text-[#C5A059] uppercase tracking-widest">
                      Active Vault
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    Owner: Gen. Trustee #77 - aurelia_partner
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDashboardNotice("Monthly portfolio report statement prepared in physical audit queue.")}
                  className="p-2 border border-neutral-800 rounded-none text-neutral-300 hover:text-[#C5A059] transition-colors"
                  title="Export Statement"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-red-500/30 text-red-300 hover:bg-red-950/20 text-xs tracking-widest font-mono uppercase transition-all rounded-none"
                >
                  Close Session
                </button>
              </div>
            </div>

            {/* In-app status banners */}
            {dashboardNotice && (
              <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 rounded-[#0a0a0a] text-xs font-sans font-light">
                {dashboardNotice}
              </div>
            )}
            {dashboardError && (
              <div className="p-3 bg-red-950/30 border border-red-500/30 text-red-300 rounded-[#0a0a0a] text-xs font-sans font-light">
                {dashboardError}
              </div>
            )}

            {/* Primary Ledger Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Asset Valuation */}
              <div className="p-6 bg-black border border-[#C5A059]/15 rounded-none flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-mono block">
                  CONSOLIDATED AUM
                </span>
                <span className="font-serif text-3xl font-light text-white">
                  CHF {totalPortfolioValue.toLocaleString()}
                </span>
                <div className="flex items-center gap-1.5 mt-2 text-emerald-400 text-xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-mono font-medium">+1.84% Year-To-Date Yield</span>
                </div>
              </div>

              {/* Physical Commodities Vault */}
              <div className="p-6 bg-black border border-[#C5A059]/15 rounded-none flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-mono block">
                  PHYSICAL RESERVES
                </span>
                <span className="font-serif text-2xl text-white font-light">
                  CHF {goldBalance.toLocaleString()}
                </span>
                <span className="text-[11px] font-mono text-[#C5A059] block mt-2">
                  Allocated Gold: {(goldBalance / 2100).toFixed(2)} Troy Oz
                </span>
              </div>

              {/* Cash Liquidity */}
              <div className="p-6 bg-black border border-[#C5A059]/15 rounded-none flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-mono block">
                  LIQUID CASH BALANCE
                </span>
                <span className="font-serif text-2xl text-white font-light">
                  CHF {cashBalance.toLocaleString()}
                </span>
                <p className="text-[11px] text-neutral-400 mt-2 italic font-sans leading-relaxed font-light">
                  Configured across CHF, USD, EUR treasury pools.
                </p>
              </div>
            </div>

            {/* Interactive Section Gold Vault Transfer & Message Partner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
              {/* Gold Vault Transfer simulation */}
              <div className="lg:col-span-7 p-6 bg-black/60 border border-neutral-800 rounded-none flex flex-col gap-4">
                <div>
                  <h4 className="font-serif text-base text-[#C5A059] font-normal">
                    Swiss Gold Reserve Allocator
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans mt-1 font-light">
                    Convert liquid treasury balances directly into physical high-grade bullion blocks in our Zurich Bahnhofstrasse vault chambers instantly.
                  </p>
                </div>

                {/* Vault conversion Notification inside Modal */}
                <div
                  id="vault-notification"
                  className="opacity-0 transition-opacity duration-500 p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-none text-xs text-emerald-300 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conversion authorized. Custody logs updated and sealed under Swiss notary ID 90-ZUR.</span>
                </div>

                <form onSubmit={handleGoldConversion} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                      Allocation Size (CHF)
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        placeholder="e.g. 500000"
                        className="flex-1 bg-[#121212] border border-neutral-800 text-xs text-white font-mono py-2 px-3 rounded-none focus:outline-none focus:border-[#C5A059]"
                      />
                      <button
                        type="submit"
                        disabled={isTransferring}
                        className="py-2 px-5 bg-[#C5A059] hover:bg-gold-400 text-black font-sans font-medium text-xs tracking-wider rounded-none transition-all disabled:opacity-50"
                      >
                        {isTransferring ? "Procuring..." : "Direct Allocation"}
                      </button>
                    </div>
                  </div>

                  <div className="text-[10.5px] text-neutral-500 leading-relaxed font-light">
                    *Bullion conversion does not incur external commission charges. Liquidity debit executes immediately against CHF-based balance pools.
                  </div>
                </form>
              </div>

              {/* Private banking communication desk */}
              <div className="lg:col-span-5 p-6 bg-black/60 border border-neutral-800 rounded-none flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <h4 className="font-serif text-base text-[#C5A059] font-normal">
                    Steward Direct Hotline
                  </h4>
                  
                  {/* Partner Portrait card */}
                  <div className="p-3 bg-[#121212] rounded-none border border-neutral-800 flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-none bg-black overflow-hidden shrink-0 border border-[#C5A059]/30">
                      <span className="absolute inset-0 flex items-center justify-center font-serif text-[13px] font-bold text-[#C5A059]">
                        MS
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-serif font-semibold text-neutral-200 block">
                        Marc-André Senechal
                      </span>
                      <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#C5A059]/80 block mt-0.5">
                        Managing Partner / Advisor
                      </span>
                    </div>
                    <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm" title="Active on Zurich Desk" />
                  </div>
                </div>

                <form onSubmit={handleSendMessage} className="flex flex-col gap-3">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                    Transmit Secure Message
                  </span>
                  
                  <textarea
                    value={secureMessage}
                    onChange={(e) => setSecureMessage(e.target.value)}
                    placeholder="Inquire about treasury adjustments or asset transition advisory..."
                    rows={3}
                    className="w-full bg-[#121212] border border-neutral-800 text-xs text-white py-2.5 px-3 rounded-none placeholder-neutral-600 focus:outline-none focus:border-[#C5A059] resize-none font-sans"
                  />

                  <button
                    type="submit"
                    disabled={messageSubmitted}
                    className="w-full py-2 bg-black hover:bg-neutral-900 border border-[#C5A059]/30 text-white text-xs tracking-widest uppercase transition-all duration-300 rounded-none flex items-center justify-center gap-2"
                  >
                    <Send className="w-3 h-3" />
                    Transmit Encrypted
                  </button>
                </form>
              </div>
            </div>

            {/* Allocation Ledger Table */}
            <div className="p-6 bg-black/40 border border-neutral-800 rounded-none mt-2">
              <span className="text-xs font-serif font-semibold text-[#C5A059] block mb-4">
                Portfolio Allocation Structures
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-400 text-[10px] uppercase font-mono tracking-wider">
                      <th className="py-2 font-medium">Asset Class</th>
                      <th className="py-2 font-medium">Sovereign Origin</th>
                      <th className="py-2 font-medium">Yield Profile</th>
                      <th className="py-2 font-medium text-right">Holding Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/40 text-neutral-300">
                    <tr>
                      <td className="py-3 font-medium text-white">Discretionary Equities</td>
                      <td className="py-3">Global (ZRH Case)</td>
                      <td className="py-3 font-mono text-emerald-400">+4.2% YTD</td>
                      <td className="py-3 text-right font-mono font-medium">CHF 64,520,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-white">Premium Sovereign Bonds</td>
                      <td className="py-3">UK / Swiss / German</td>
                      <td className="py-3 font-mono text-emerald-400">+1.2% YTD</td>
                      <td className="py-3 text-right font-mono font-medium">CHF 32,150,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-white">Physical Reserve Gold</td>
                      <td className="py-3">Zurich Vault Chamber 4</td>
                      <td className="py-3 font-mono text-amber-500">Commodity Base</td>
                      <td className="py-3 text-right font-mono font-medium">CHF {goldBalance.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-white">Alternative Private Market</td>
                      <td className="py-3">European Securitization</td>
                      <td className="py-3 font-mono text-emerald-400">+2.5% YTD</td>
                      <td className="py-3 text-right font-mono font-medium">CHF 12,000,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-white font-semibold">Multicurrency Liquidity Cash</td>
                      <td className="py-3">Aurelia Treasury Pools</td>
                      <td className="py-3 font-mono text-neutral-500">Stable Pool</td>
                      <td className="py-3 text-right font-mono font-medium">CHF {cashBalance.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
