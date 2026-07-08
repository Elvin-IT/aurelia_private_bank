export interface ClientProfile {
  title: string;
  description: string;
  longDescription: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  focusAreas: string[];
  image: string;
}

export interface PhilosophyPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  languages: string[];
  details: string;
  image: string;
}

export const clientProfiles: ClientProfile[] = [
  {
    title: "Entrepreneurs and founders",
    description: "Empowering visionary builders to translate concentrated equity into enduring multi-generational wealth.",
    longDescription: "For founders, liquid wealth is only part of the equation. We provide comprehensive pre-transaction advisory, corporate cash management, Lombard lending facilities to unlock liquidity from equity blockholdings, and long-term asset structures designed to safeguard capital after successful enterprise sales."
  },
  {
    title: "Executives and professionals",
    description: "Decompressing complex multi-jurisdictional compensation structures and strategic liquidity management.",
    longDescription: "Corporate leaders require rigorous optimization of highly complex compensation schedules, restricted stock units, international tax residency queries, and global retirement allocation. We bring strategic clarity to maximize value while respecting compliance and personal balance sheet requirements."
  },
  {
    title: "Families and family offices",
    description: "Stewarding complex balance sheets through rigorous family governance and institutional-grade framework design.",
    longDescription: "We partner with family leaders to design enduring governance systems, manage direct investment allocations, maintain multi-generational trust structures, and educate the next tier of heirs to ensure the family legacy survives and flourishes across centuries."
  }
];

export const services: ServiceDetail[] = [
  {
    id: "private-banking",
    title: "Private Banking",
    shortDescription: "Sovereign liquidity accounts, multicurrency treasury, and bespoke high-touch cash management tailored to cross-border requirements.",
    longDescription: "Your daily financial transactions demand swift execution and total confidentiality. Aurelia delivers premium multi-currency accounts, customized debit cards with infinite options, dedicated personal cashiers, and premium foreign exchange desks. Our private banking operation is designed to respond immediately, irrespective of calendar lines or boundaries.",
    focusAreas: [
      "Bespoke Multi-Currency Accounts",
      "Confidential Treasury & Cash Management",
      "Executive Foreign Exchange Services",
      "Sovereign Deposit Protections"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "wealth-management",
    title: "Wealth Management",
    shortDescription: "Active global asset allocation, dynamic discretionary mandates, and rigorous risk control designed to preserve purchasing power across economic cycles.",
    longDescription: "Compound capital growth is achieved through patience, rigorous macroeconomic alignment, and proprietary access. We structuralize private assets, offer bespoke global investment mandates, and provide direct participation in secondary private equity transactions. Every portfolio is engineered with custom risk limits to protect purchasing power first.",
    focusAreas: [
      "Discretionary Investment Mandates",
      "Bespoke Asset Allocation & Risk Controls",
      "Exclusive Private Market Access",
      "Tax & Structural Optimization"
    ],
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "lending-credit",
    title: "Lending & Credit",
    shortDescription: "Strategic leverage against premium assets, custom Lombard facilities, and structured real estate financing for liquid and illiquid holdings.",
    longDescription: "Leverage as an asset optimization tool requires exact structures. We offer swift Lombard loans secured against high-grade investment portfolios, specialized residential and commercial real estate financing in global metropolitan areas, and custom credits backed by unique assets including fine art or corporate jet fleets.",
    focusAreas: [
      "Flexible Lombard Credit Lines",
      "Prime International Property Loans",
      "Aviation & Structured Luxury Assets",
      "Cross-Border Structural Leverage"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "family-office",
    title: "Family Office & Advisory",
    shortDescription: "Comprehensive advisory guiding multigenerational estate transition, philanthropic structures, and institutional family governance frameworks.",
    longDescription: "A great legacy requires robust structure and rigorous alignment. Our Family Office advisors create comprehensive solutions spanning multi-generational wealth preservation trusts, comprehensive estate transition protocols, structured philanthropic programs, and tailored educational curriculums for heirs.",
    focusAreas: [
      "Multigenerational Estate Trusts",
      "Tailored Family Governance Charters",
      "Philanthropic Advisory Protocols",
      "Emerging Successor Training"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
  }
];

export const philosophyPillars: PhilosophyPillar[] = [
  {
    title: "Preservation",
    subtitle: "Defense of Sovereign Purchasing Power",
    description: "Our first duty is the defense of your families' purchasing power. In a volatile world, we design risk architectures that withstand geopolitical and market turbulence, prioritizing capital protection above speculative action."
  },
  {
    title: "Growth",
    subtitle: "Patience and Private Deal Flow",
    description: "Generational compound growth requires quiet patience and access to restricted, non-public deal flow. We identify structurally sound opportunities across global equities, private markets, and critical infrastructure."
  },
  {
    title: "Discretion",
    subtitle: "Primacy of Confident Stewardship",
    description: "True wealth does not command attention. We protect your structural privacy with rigorous confidentiality standards, secure communication architectures, and a culture of absolute institutional discretion."
  }
];

export const insightsArticles: InsightArticle[] = [
  {
    id: "insight-1",
    title: "Navigating liquidity events without losing focus on your legacy",
    excerpt: "A comprehensive analysis of pre-transaction estate planning, transition governance, and post-liquidity wealth allocation structures.",
    category: "Legacy Stewardship",
    readTime: "4 min read",
    date: "June 12, 2026",
    content: "When an entrepreneur approaches a significant liquidity event, focus often shifts exclusively to corporate legal structures. However, true legacy preservation begins long before funds are wired. Structuring pre-sale asset transfers into trusts can mitigate catastrophic transition risks, while establishing a family charter outlines how the incoming capital will be governed by emerging generations. We guide clients through the intricate orchestration of pre-transaction planning, ensuring that liquidity catalyzes opportunities rather than disrupting family cohesion."
  },
  {
    id: "insight-2",
    title: "The resilience of Swiss wealth stewardship in decentralized markets",
    excerpt: "Evaluating the performance of historic multi-jurisdictional asset protection frameworks against modern volatile credit regimes.",
    category: "Macro Frameworks",
    readTime: "6 min read",
    date: "May 28, 2026",
    content: "In an era of rising inflation, volatile sovereign credit ratings, and shifting global frameworks, Switzerland remains the undisputed benchmark for wealth preservation. This insight discusses the unique architecture of Swiss banking law, multi-custodial diversification strategies, and the integration of highly stable physical collateral structures. We evaluate why combining century-old custody principles with modern programmatic safety checks represents the ultimate defense system for complex modern capital reserves."
  },
  {
    id: "insight-3",
    title: "Multigenerational family constitutions: Best practice in governance",
    excerpt: "Ensuring alignment of purpose and strategic clarity for emerging heirs operating within modern, complex global structures.",
    category: "Family Governance",
    readTime: "5 min read",
    date: "April 15, 2026",
    content: "Statistics tell a harsh truth about the dissipation of family assets by the third generation. The antidote is not complex mathematical risk modeling, but clear, written human frameworks. A family constitution serves as a moral and operational compass. By defining shared values, clear investment philosophies, restrictions on leverage, and strict guidelines for next-generation venture support, families cultivate the institutional cohesion required to span centuries."
  }
];

export const offices: OfficeLocation[] = [
  {
    city: "Zurich",
    country: "Switzerland",
    address: "Bahnhofstrasse 12, 8001 Zürich, Switzerland",
    phone: "+41 44 212 9000",
    email: "zh@aureliaprivate.com",
    hours: "08:30 - 17:30 (CET)",
    languages: ["German", "English", "French", "Italian"],
    details: "Our global headquarters, delivering pristine Swiss private banking heritage and comprehensive discretionary wealth stewardship overlooking the beautiful Limmat riverfront.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "14 Curzon Street, Mayfair, London W1J 7HG, United Kingdom",
    phone: "+44 20 7949 0800",
    email: "ldn@aureliaprivate.com",
    hours: "09:00 - 18:00 (GMT)",
    languages: ["English", "French", "Spanish"],
    details: "Providing bespoke wealth management, high-value international mortgage structures, and sterling cash management based in the heart of historic Mayfair.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800"
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Gate Precinct Building 3, Dubai International Financial Centre, UAE",
    phone: "+971 4 362 8000",
    email: "dxb@aureliaprivate.com",
    hours: "08:00 - 17:00 (GST)",
    languages: ["Arabic", "English", "Russian", "Hindi"],
    details: "A key gateway to Middle Eastern strategic wealth transition advisory, sovereign capital accounts, and real estate financing structures for international clients.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    address: "Keizersgracht 123, 1015 CJ Amsterdam, Netherlands",
    phone: "+31 20 123 4567",
    email: "amsterdam@aureliaprivate.com",
    hours: "09:00 - 18:00 (CET)",
    languages: ["Dutch", "English"],
    details: "Strategic hub for European financial services, offering multi-currency advisory, corporate governance, and innovative wealth solutions across the continent.",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
