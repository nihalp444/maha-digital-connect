import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  GraduationCap,
  Landmark,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import emblem from "../assets/maharashtra-government-emblem.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maharashtra Government Digital Services" },
      {
        name: "description",
        content: "Access Maharashtra education, worker welfare, skill development and government services through one portal.",
      },
      { property: "og:title", content: "Maharashtra Government Digital Services" },
      {
        property: "og:description",
        content: "A unified gateway to useful digital services from the Government of Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceSections = [
  {
    title: "Education & Learning",
    label: "शिक्षण आणि अध्ययन",
    icon: GraduationCap,
    accent: "education",
    cards: [
      { name: "Unacademy", description: "Online learning and educational resources", icon: GraduationCap, href: "https://unacademy.com/", mark: "UA" },
      { name: "Online Learning", description: "Access digital classes and learning tools", icon: BookOpen, href: "#online-learning", mark: "OL" },
      { name: "Digital Education", description: "Government-supported digital education", icon: Sparkles, href: "#digital-education", mark: "DE" },
      { name: "Study Resources", description: "Learning material for students and teachers", icon: BookOpen, href: "#study-resources", mark: "SR" },
    ],
  },
  {
    title: "Worker Services",
    label: "कामगार सेवा",
    icon: Users,
    accent: "worker",
    cards: [
      { name: "Worker Welfare", description: "Welfare schemes and support for workers", icon: ShieldCheck, href: "#worker-welfare", mark: "WW" },
      { name: "Worker Services", description: "Registration and essential worker services", icon: Users, href: "#worker-services", mark: "WS" },
      { name: "Worker Benefits", description: "Explore eligible benefits and assistance", icon: BriefcaseBusiness, href: "#worker-benefits", mark: "WB" },
      { name: "Worker Information", description: "Guidance, notices and useful information", icon: BookOpen, href: "#worker-information", mark: "WI" },
    ],
  },
  {
    title: "Skill Development",
    label: "कौशल्य विकास",
    icon: Wrench,
    accent: "skills",
    cards: [
      { name: "Skill Development", description: "Build practical skills for better opportunities", icon: Wrench, href: "#skill-development", mark: "SD" },
      { name: "Training Programs", description: "Find certified training opportunities", icon: GraduationCap, href: "#training-programs", mark: "TP" },
      { name: "Vocational Learning", description: "Career-focused vocational education", icon: BriefcaseBusiness, href: "#vocational-learning", mark: "VL" },
      { name: "Courses", description: "Browse professional and technical courses", icon: BookOpen, href: "#courses", mark: "CS" },
    ],
  },
  {
    title: "Government Services",
    label: "शासकीय सेवा",
    icon: Landmark,
    accent: "government",
    cards: [
      { name: "Maharashtra Government", description: "Official information from the state government", icon: Landmark, href: "#maharashtra-government", mark: "महा" },
      { name: "Aaple Sarkar", description: "Citizen services, certificates and applications", icon: Building2, href: "#aaple-sarkar", mark: "AS" },
      { name: "MahaOnline", description: "Digital public services across Maharashtra", icon: Sparkles, href: "#mahaonline", mark: "MO" },
      { name: "Government Services", description: "Quick access to essential public services", icon: ShieldCheck, href: "#government-services", mark: "GS" },
    ],
  },
] as const;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filteredSections = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return serviceSections;
    return serviceSections
      .map((section) => ({
        ...section,
        cards: section.cards.filter((card) => `${card.name} ${card.description}`.toLowerCase().includes(normalized)),
      }))
      .filter((section) => section.cards.length > 0);
  }, [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <div className="utility-bar">
          <div className="site-container flex items-center justify-between py-2 text-[11px] font-semibold sm:text-xs">
            <span>Government of Maharashtra <span className="mx-1 opacity-50">|</span> महाराष्ट्र शासन</span>
            <div className="flex items-center gap-5"><a href="#main-content">Skip to main content</a><button type="button" className="language-button">English <span className="opacity-50">|</span> मराठी</button></div>
          </div>
        </div>

        <div className="identity-bar">
          <div className="site-container flex min-h-24 items-center justify-between gap-4 py-4 lg:min-h-28">
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <img src={emblem} alt="Government of Maharashtra emblem" className="h-16 w-12 object-contain sm:h-20 sm:w-15" />
              <div className="min-w-0 border-l border-border pl-4 sm:pl-5">
                <p className="font-devanagari text-sm font-bold text-primary sm:text-lg">महाराष्ट्र शासन</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-xs">Government of Maharashtra</p>
                <h2 className="mt-1 text-base font-bold text-foreground sm:text-2xl">Maharashtra Government <span className="hidden sm:inline">Digital Services</span></h2>
              </div>
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              <div className="official-seal"><Landmark size={24} aria-hidden="true" /></div>
              <div className="text-right"><p className="text-xs font-bold text-primary">आपले सरकार</p><p className="text-[10px] text-muted-foreground">Your Government, Your Services</p></div>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <div className="site-container flex h-14 items-center justify-between">
            <nav aria-label="Primary navigation" className="hidden items-center lg:flex">
              {['Home', 'Education', 'Worker Services', 'Skill Development', 'Government Services'].map((item, index) => (
                <a key={item} href={index === 0 ? '#' : `#${item.toLowerCase().replaceAll(' ', '-')}`} className={`nav-link ${index === 0 ? 'nav-link-active' : ''}`}>{item}{index > 0 && <ChevronDown size={13} aria-hidden="true" />}</a>
              ))}
            </nav>
            <button type="button" className="mobile-menu-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}<span>Menu</span></button>
            <label className="search-box">
              <span className="sr-only">Search services</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services..." />
              <Search size={17} aria-hidden="true" />
            </label>
          </div>
          {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav lg:hidden">{['Home', 'Education', 'Worker Services', 'Skill Development', 'Government Services'].map((item) => <a key={item} href="#main-content" onClick={() => setMenuOpen(false)}>{item}<ArrowRight size={15} /></a>)}</nav>}
        </div>
      </header>

      <main id="main-content">
        <section className="intro-band">
          <div className="site-container py-10 sm:py-14">
            <div className="section-kicker"><span></span>Unified Citizen Portal</div>
            <h1>Maharashtra Government<br className="hidden sm:block" /> Digital Services</h1>
            <p>Access education, worker welfare, skill development and other useful services through one platform.</p>
          </div>
        </section>

        <section className="services-area" aria-label="Digital services">
          <div className="site-container space-y-14 py-12 sm:py-16">
            {filteredSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <section key={section.title} id={section.title.toLowerCase().replaceAll(' ', '-')} className={`service-section accent-${section.accent}`}>
                  <div className="mb-5 flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="section-icon"><SectionIcon size={20} aria-hidden="true" /></span>
                      <div><h2>{section.title}</h2><p>{section.label}</p></div>
                    </div>
                    <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:block">Explore services</span>
                  </div>
                  <div className="card-row">
                    {section.cards.map((card) => {
                      const CardIcon = card.icon;
                      const external = card.href.startsWith('http');
                      return (
                        <a key={card.name} href={card.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="portal-card">
                          <div className="portal-visual">
                            <span className="portal-pattern" aria-hidden="true"></span>
                            <div className="portal-mark">{card.mark}</div>
                            <CardIcon size={34} strokeWidth={1.5} aria-hidden="true" />
                          </div>
                          <div className="portal-content"><h3>{card.name}</h3><p>{card.description}</p><span>Visit Portal <ArrowRight size={15} aria-hidden="true" /></span></div>
                        </a>
                      );
                    })}
                  </div>
                </section>
              );
            })}
            {filteredSections.length === 0 && <div className="empty-state"><Search size={26} /><h2>No services found</h2><p>Try another search term.</p></div>}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main"><div className="site-container grid gap-7 py-9 md:grid-cols-[1fr_auto] md:items-center"><div className="flex items-center gap-4"><img src={emblem} alt="" className="h-14 w-11 object-contain brightness-0 invert" /><div><p className="font-devanagari text-sm font-bold">महाराष्ट्र शासन</p><h2 className="mt-1 text-lg font-bold">Government of Maharashtra</h2></div></div><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">{['Useful Links', 'Contact', 'Privacy', 'Disclaimer', 'Accessibility'].map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}</nav></div></div>
        <div className="footer-bottom"><div className="site-container flex flex-col gap-2 py-4 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© Government of Maharashtra. All Rights Reserved.</p><p>Official Digital Services Portal</p></div></div>
      </footer>
    </div>
  );
}
