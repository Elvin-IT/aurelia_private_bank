import React, { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, Clock, Calendar, Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { insightsArticles, InsightArticle } from "../data";

interface InsightsViewProps {
  selectedArticleId: string;
  onSelectArticle: (id: string) => void;
  onClearArticle: () => void;
}

export default function InsightsView({
  selectedArticleId,
  onSelectArticle,
  onClearArticle,
}: InsightsViewProps) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [activeToast, setActiveToast] = useState("");
  const article = insightsArticles.find((a) => a.id === selectedArticleId);

  // Sync scroll to top on selection
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedArticleId]);

  // Handle toast timeout
  useEffect(() => {
    if (activeToast) {
      const timer = setTimeout(() => setActiveToast(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [activeToast]);

  const handleBookmarkToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        setActiveToast("Analysis removed from secure portfolio.");
        return prev.filter((b) => b !== id);
      } else {
        setActiveToast("Analysis sealed inside your secure portfolio.");
        return [...prev, id];
      }
    });
  };

  const handleShare = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveToast("Secure communication terminal link copied to clipboard.");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
  };

  if (article) {
    /* ================= FULL ARTICLE READING ROOM VIEW ================= */
    const isBookmarked = bookmarks.includes(article.id);

    return (
      <div id={`article-reader-${article.id}`} className="w-full bg-ivory text-charcoal-900 select-text animate-fade-in hero-pt">
        {/* Toast Notification */}
        {activeToast && (
          <div className="fixed bottom-6 right-6 bg-[#121212] text-xs font-mono text-gold-400 px-4 py-3 border border-[#C5A059]/40 shadow-2xl z-50 animate-fade-in rounded-none">
            {activeToast}
          </div>
        )}

        {/* Header Block */}
        <section className="py-20 md:py-28 bg-[#0a0a0a] text-gold-100">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <button
              onClick={onClearArticle}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A059] hover:text-white transition-all mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to bibliographies
            </button>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gold-500 mb-4">
              <span className="uppercase tracking-widest bg-gold-500/10 px-2 py-0.5 border border-[#C5A059]/25">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-white/50">
                <Calendar className="w-3.5 h-3.5 text-gold-500" />
                {article.date}
              </span>
              <span className="flex items-center gap-1 text-white/50">
                <Clock className="w-3.5 h-3.5 text-gold-500" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4.5xl text-white leading-tight font-normal">
              {article.title}
            </h1>

            <p className="text-sm text-white/60 leading-relaxed max-w-2xl font-light italic mt-4">
              &ldquo;{article.excerpt}&rdquo;
            </p>
          </div>
        </section>

        {/* Article Body Content */}
        <article className="py-16 max-w-3xl mx-auto px-6 text-left flex flex-col gap-8">
          <div className="flex gap-4 items-center justify-end border-b border-charcoal-200/40 pb-4">
            <button
              onClick={(e) => handleBookmarkToggle(article.id, e)}
              className="flex items-center gap-1.5 text-xs font-mono text-black/50 hover:text-[#C5A059] transition-all"
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-gold-600" />
                  Sealed in Portfolio
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  Seal to Portfolio
                </>
              )}
            </button>
            <button
              onClick={(e) => handleShare(article.title, e)}
              className="flex items-center gap-1.5 text-xs font-mono text-black/50 hover:text-[#C5A059] transition-all"
            >
              <Share2 className="w-4 h-4" />
              Transmit Reference
            </button>
          </div>

          <p className="text-sm md:text-base text-black/75 leading-relaxed font-sans first-letter:text-5xl first-letter:font-serif first-letter:font-light first-letter:text-gold-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1 font-light">
            {article.content}
          </p>

          <p className="text-xs md:text-sm text-black/60 leading-relaxed font-sans font-light mt-4">
            Wealth preservation is not a passive task. Operating under Swiss standards, Aurelia Private Bank combines physical asset custody, digital security structures, and multi-jurisdictional administration to protect your compound legacy against inflation, credit turbulence, and shifting global frameworks.
          </p>

          {/* Footer of article */}
          <div className="mt-12 pt-8 border-t border-charcoal-200/40 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-[10px] text-charcoal-400 uppercase tracking-widest font-mono">
                PUBLICATION CREDITS
              </span>
              <p className="text-xs text-black/50 font-sans leading-relaxed mt-1">
                Compiled and approved by the Aurelia Private Bank Strategic Advisory Committee. All references are registered under Swiss Intellectual Property Law.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <button
                onClick={onClearArticle}
                className="px-6 py-2.5 bg-[#121212] text-gold-500 hover:bg-gold-500 hover:text-black text-xs tracking-widest uppercase font-mono rounded-none transition-all"
              >
                Return to Bibliographies
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  /* ================= LIST BIBLIOGRAPHIES VIEW ================= */
  return (
    <div id="insights-grid-page" className="w-full bg-ivory text-charcoal-900 select-text hero-pt">
      {/* Toast Notification */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 bg-[#121212] text-xs font-mono text-gold-400 px-4 py-3 border border-[#C5A059]/40 shadow-2xl z-50 animate-fade-in rounded-none">
          {activeToast}
        </div>
      )}

      <section className="relative py-20 bg-[#0a0a0a] text-gold-100 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="w-12 h-[1.5px] bg-[#C5A059] mb-4"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold-500 block mb-2">
            Aurelia Bibliography
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight font-normal">
            Clarity in a crowded narrative
          </h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-3xl font-light font-sans mt-4">
            Our strategic intelligence papers deconstruct global macroeconomic shifts, multigenerational family governance structures, and private collateral architecture.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsArticles.map((item) => {
            const isBookmarked = bookmarks.includes(item.id);
            return (
              <div
                key={item.id}
                id={`insight-directory-card-${item.id}`}
                onClick={() => onSelectArticle(item.id)}
                className="bg-white border border-[#C5A059]/20 p-8 rounded-none hover:border-[#C5A059] transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 text-[9px] font-mono text-charcoal-400">
                    <span className="uppercase tracking-widest text-[#C5A059] bg-[#FAF9F6] px-2 py-0.5 border border-[#C5A059]/20">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 font-sans">{item.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#121212] leading-snug mb-4 font-normal group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-black/60 leading-relaxed font-sans mb-8">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-charcoal-150 mt-auto">
                  <span className="text-[11px] font-sans text-[#C5A059] italic">
                    Read analysis &rarr;
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={(e) => handleBookmarkToggle(item.id, e)}
                      className="p-1 text-black/40 hover:text-[#C5A059] transition-colors"
                      title="Portfolio Bookmark"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-gold-600" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={(e) => handleShare(item.title, e)}
                      className="p-1 text-black/40 hover:text-[#C5A059] transition-colors"
                      title="Share link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
