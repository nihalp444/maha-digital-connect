import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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

const mahabocwLogo = "/__l5e/assets-v1/7799f571-eaa2-4586-98a4-29c3faa41b2d/mahabocw-logo.png";
const heroImages = [
  {
    src: "/__l5e/assets-v1/8926fd5b-a14b-4fca-9f98-f40d85ebb0bd/mahabocw-hero-1.jpg",
    alt: "Maharashtra Building and Other Construction Workers Welfare Board services",
  },
  {
    src: "/__l5e/assets-v1/b1eb2cce-8f0d-4cd7-83fa-a70b371ebe19/mahabocw-hero-2.jpg",
    alt: "Welfare initiatives for construction workers in Maharashtra",
  },
  {
    src: "/__l5e/assets-v1/0079226b-e416-40ce-9c97-5dbff6e07de2/mahabocw-hero-3.jpg",
    alt: "MahaBOCW worker welfare programmes",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MahaBOCW Digital Services Portal" },
      {
        name: "description",
        content: "Access worker welfare, education, skill development and government services through the MahaBOCW portal.",
      },
      { property: "og:title", content: "MahaBOCW Digital Services Portal" },
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
  const [activeHero, setActiveHero] = useState(0);
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
            <div className="flex min-w-0 items-center gap-3 sm:gap-5">
              <img src={mahabocwLogo} alt="MahaBOCW logo" className="h-17 w-17 shrink-0 object-contain sm:h-21 sm:w-21" />
              <div className="min-w-0 border-l border-border pl-3 sm:pl-5">
                <p className="font-devanagari text-[11px] font-bold text-primary sm:text-base">महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी मंडळ</p>
                <h2 className="mt-1 max-w-2xl text-sm font-bold leading-tight text-foreground sm:text-xl">Maharashtra Building &amp; Other Construction Workers Welfare Board</h2>
                <p className="mt-1 hidden text-[10px] font-semibold uppercase text-muted-foreground sm:block">Government of Maharashtra</p>
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
        <section className="hero-banner" aria-label="MahaBOCW highlights">
          <div className="site-container hero-frame">
            <img src={heroImages[activeHero]?.src ?? heroImages[0].src} alt={heroImages[activeHero]?.alt ?? heroImages[0].alt} className="hero-image" />
            <button type="button" className="hero-arrow hero-arrow-left" aria-label="Previous banner" onClick={() => setActiveHero((activeHero + heroImages.length - 1) % heroImages.length)}><ChevronLeft size={24} /></button>
            <button type="button" className="hero-arrow hero-arrow-right" aria-label="Next banner" onClick={() => setActiveHero((activeHero + 1) % heroImages.length)}><ChevronRight size={24} /></button>
            <div className="hero-dots" aria-label="Choose banner">
              {heroImages.map((image, index) => <button key={image.src} type="button" aria-label={`Show banner ${index + 1}`} aria-current={index === activeHero} onClick={() => setActiveHero(index)} />)}
            </div>
          </div>
        </section>

        <section className="intro-band">
          <div className="site-container py-8 sm:py-10">
            <div className="section-kicker"><span></span>MahaBOCW Digital Services</div>
            <h1>Services for Building &amp;<br className="hidden sm:block" /> Construction Workers</h1>
            <p>Access worker welfare, education, skill development and useful government services through one trusted platform.</p>
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
        <div className="footer-main"><div className="site-container grid gap-7 py-9 md:grid-cols-[1fr_auto] md:items-center"><div className="flex items-center gap-4"><img src={mahabocwLogo} alt="" className="h-16 w-16 object-contain" /><div><p className="font-devanagari text-sm font-bold">महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी मंडळ</p><h2 className="mt-1 max-w-lg text-base font-bold">Maharashtra Building &amp; Other Construction Workers Welfare Board</h2></div></div><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">{['Useful Links', 'Contact', 'Privacy', 'Disclaimer', 'Accessibility'].map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}</nav></div></div>
        <div className="footer-bottom"><div className="site-container flex flex-col gap-2 py-4 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© MahaBOCW, Government of Maharashtra. All Rights Reserved.</p><p>Digital Services Portal</p></div></div>
      </footer>
    </div>
  );
}
