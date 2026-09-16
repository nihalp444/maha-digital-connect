import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Menu,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import studiesImage from "@/assets/studies-services.jpg";
import workerImage from "@/assets/worker-services.jpg";
import governmentImage from "@/assets/government-services.jpg";
import unacademyCardImage from "@/assets/unacademy-card.png";
import mscitCardImage from "@/assets/MSCIT.jpg";
import skillIndiaCardImage from "@/assets/Skill India.jpg";
import rplCardImage from "@/assets/RPL.jpg";
import welfareSchemesImage from "@/assets/Welfare Schemes.jpg";
import financialAssistanceImage from "@/assets/Financial Assistance.jpg";
import educationAssistanceImage from "@/assets/Education Assistance.jpg";
import healthBenefitsImage from "@/assets/Health Benefits.jpg";
import workerRegistrationImage from "@/assets/Worker Registration.jpg";
import aapleSarkarImage from "@/assets/Aaple Sarkar.jpg";
import mahaOnlineImage from "@/assets/MahaOnline.jpg";
import eShramImage from "@/assets/e-Shram.jpg";
import nationalCareerServiceImage from "@/assets/National Career Service.jpg";
import maharashtraGovernmentImage from "@/assets/Maharashtra Government.jpg";

const maharashtraSeal = "/__l5e/assets-v1/c9e43318-83b0-4623-a364-3dc34b3e1a4a/maharashtra-state-seal.png";
const nationalEmblem = "/__l5e/assets-v1/6507b783-3002-4840-b6ca-b4eebdd94886/maharashtra-government-emblem.png";
const mbocwwbLogo = "/__l5e/assets-v1/7799f571-eaa2-4586-98a4-29c3faa41b2d/mahabocw-logo.png";
const heroImages = [
  { src: "/__l5e/assets-v1/8926fd5b-a14b-4fca-9f98-f40d85ebb0bd/mahabocw-hero-1.jpg", alt: "MBOCWWB services for construction workers" },
  { src: "/__l5e/assets-v1/b1eb2cce-8f0d-4cd7-83fa-a70b371ebe19/mahabocw-hero-2.jpg", alt: "Welfare initiatives for construction workers in Maharashtra" },
  { src: "/__l5e/assets-v1/0079226b-e416-40ce-9c97-5dbff6e07de2/mahabocw-hero-3.jpg", alt: "MBOCWWB worker welfare programmes" },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MBOCWWB – Maharashtra Construction Workers Welfare Board" },
      { name: "description", content: "Access learning, worker welfare and useful government services through the MBOCWWB portal." },
      { property: "og:title", content: "MBOCWWB – Maharashtra Construction Workers Welfare Board" },
      { property: "og:description", content: "A trusted gateway to services for Maharashtra building and construction workers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceSections = [
  {
    id: "studies-learning",
    title: "Studies & Learning",
    label: "शिक्षण आणि अध्ययन",
    description: "Education, digital learning and job-ready skill development.",
    icon: GraduationCap,
    accent: "education",
    image: studiesImage,
    cards: [
      { name: "Unacademy", description: "Online classes and learning resources", icon: GraduationCap, href: "https://unacademy.com/", mark: "UA", image: unacademyCardImage },
      { name: "MS-CIT", description: "Maharashtra's digital literacy course", icon: BookOpen, href: "https://mscit.mkcl.org/", mark: "MS", image: mscitCardImage },
      { name: "Skill India", description: "Government skill courses and opportunities", icon: BriefcaseBusiness, href: "https://www.skillindiadigital.gov.in/home", mark: "SI", image: skillIndiaCardImage },
      { name: "RPL / Skill Development", description: "Recognition and practical skills training", icon: Wrench, href: "https://rpl.nimilearningonline.in/", mark: "RPL", image: rplCardImage },
    ],
  },
  {
    id: "worker-welfare",
    title: "Worker Welfare & Services",
    label: "कामगार कल्याण आणि सेवा",
    description: "Registration, assistance and benefits for BOCW workers.",
    icon: HeartHandshake,
    accent: "worker",
    image: workerImage,
    cards: [
      { name: "Welfare Schemes", description: "Explore welfare support available to workers", icon: ShieldCheck, href: "https://mahabocw.in/en/welfare-schemes/", mark: "WS", image: welfareSchemesImage },
      { name: "Financial Assistance", description: "Social security and financial support", icon: WalletCards, href: "https://mahabocw.in/en/welfare-schemes/", mark: "FA", image: financialAssistanceImage },
      { name: "Education Assistance", description: "Education support for workers' families", icon: GraduationCap, href: "https://mahabocw.in/en/welfare-schemes/", mark: "EA", image: educationAssistanceImage },
      { name: "Health Benefits", description: "Health schemes and medical assistance", icon: Stethoscope, href: "https://mahabocw.in/en/welfare-schemes/", mark: "HB", image: healthBenefitsImage },
      { name: "Worker Registration / Renewal", description: "Register or renew a construction worker record", icon: UserRoundCheck, href: "https://iwbms.mahabocw.in/registration-and-renewal/registration", mark: "WR", image: workerRegistrationImage },
    ],
  },
  {
    id: "government-services",
    title: "Government & Useful Services",
    label: "शासकीय आणि उपयुक्त सेवा",
    description: "Official portals workers may need for documents, jobs and public services.",
    icon: Landmark,
    accent: "government",
    image: governmentImage,
    cards: [
      { name: "Aaple Sarkar", description: "Certificates and citizen services", icon: Landmark, href: "https://aaplesarkar.maharashtra.gov.in/", mark: "AS", image: aapleSarkarImage },
      { name: "MahaOnline", description: "Digital public services across Maharashtra", icon: ShieldCheck, href: "https://aaplesarkar.mahaonline.gov.in/en", mark: "MO", image: mahaOnlineImage },
      { name: "e-Shram", description: "National database and services for workers", icon: UserRoundCheck, href: "https://eshram.gov.in/", mark: "ES", image: eShramImage },
      { name: "National Career Service", description: "Jobs, career guidance and employment services", icon: BriefcaseBusiness, href: "https://www.ncs.gov.in/", mark: "NCS", image: nationalCareerServiceImage },
      { name: "Maharashtra Government", description: "Official Government of Maharashtra portal", icon: Landmark, href: "https://maharashtra.gov.in/", mark: "महा", image: maharashtraGovernmentImage },
    ],
  },
] as const;

const navigation = [
  { label: "Home", href: "#main-content" },
  { label: "Studies & Learning", href: "#studies-learning" },
  { label: "Worker Welfare", href: "#worker-welfare" },
  { label: "Government Services", href: "#government-services" },
] as const;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeHero, setActiveHero] = useState(0);
  const filteredSections = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return serviceSections;
    return serviceSections.map((section) => ({ ...section, cards: section.cards.filter((card) => `${card.name} ${card.description}`.toLowerCase().includes(normalized)) })).filter((section) => section.cards.length > 0);
  }, [query]);

  const hero = heroImages[activeHero] ?? heroImages[0];

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
          <div className="site-container identity-layout">
            <div className="identity-title">
              <img src={mbocwwbLogo} alt="MBOCWWB logo" className="board-logo" />
              <div className="min-w-0 border-l border-border pl-3 sm:pl-5">
                <p className="font-devanagari text-[11px] font-bold text-primary sm:text-base">महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी मंडळ</p>
                <h2>MBOCWWB – Maharashtra Building and Other Construction Workers Welfare Board</h2>
                <p className="identity-government">Government of Maharashtra</p>
              </div>
            </div>
            <div className="government-marks" aria-label="Government of Maharashtra official marks">
              <img src={maharashtraSeal} alt="Maharashtra Shasan seal" />
              <img src={nationalEmblem} alt="State Emblem of India" />
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <div className="site-container flex h-14 items-center justify-between gap-4">
            <nav aria-label="Primary navigation" className="hidden items-center lg:flex">
              {navigation.map((item, index) => <a key={item.label} href={item.href} className={`nav-link ${index === 0 ? "nav-link-active" : ""}`}>{item.label}</a>)}
            </nav>
            <button type="button" className="mobile-menu-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}<span>Menu</span></button>
            <label className="search-box"><span className="sr-only">Search services</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services..." /><Search size={17} aria-hidden="true" /></label>
          </div>
          {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav lg:hidden">{navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowRight size={15} /></a>)}</nav>}
        </div>
      </header>

      <main id="main-content">
        <section className="hero-banner" aria-label="MBOCWWB highlights">
          <div className="site-container hero-frame">
            <img src={hero.src} alt={hero.alt} className="hero-image" />
            <button type="button" className="hero-arrow hero-arrow-left" aria-label="Previous banner" onClick={() => setActiveHero((activeHero + heroImages.length - 1) % heroImages.length)}><ChevronLeft size={24} /></button>
            <button type="button" className="hero-arrow hero-arrow-right" aria-label="Next banner" onClick={() => setActiveHero((activeHero + 1) % heroImages.length)}><ChevronRight size={24} /></button>
            <div className="hero-dots" aria-label="Choose banner">{heroImages.map((image, index) => <button key={image.src} type="button" aria-label={`Show banner ${index + 1}`} aria-current={index === activeHero} onClick={() => setActiveHero(index)} />)}</div>
          </div>
        </section>

        <section className="intro-band">
          <div className="site-container py-8 sm:py-10">
            <div className="section-kicker"><span></span>MBOCWWB Digital Services</div>
            <h1>Services for Building &amp; Construction Workers</h1>
            <p>Access education, worker welfare, skill development and other useful services through one platform.</p>
          </div>
        </section>

        <section className="services-area" aria-label="Digital services">
          <div className="site-container space-y-14 py-12 sm:py-16">
            {filteredSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <section key={section.title} id={section.id} className={`service-section accent-${section.accent}`}>
                  <div className="service-heading">
                    <span className="section-icon"><SectionIcon size={20} aria-hidden="true" /></span>
                    <div><h2>{section.title}</h2><p>{section.label}</p><div className="service-description">{section.description}</div></div>
                  </div>
                  <div className="card-row">
                    {section.cards.map((card) => {
                      const CardIcon = card.icon;
                      return (
                        <a key={card.name} href={card.href} target="_blank" rel="noreferrer" className="portal-card">
                          <div className="portal-visual">
                            <img src={"image" in card && card.image ? card.image : section.image} alt={card.name} loading="lazy" width={1280} height={720} />
                            <span className="portal-shade" aria-hidden="true" />
                            <div className="portal-mark">{card.mark}</div>
                            <CardIcon size={30} strokeWidth={1.7} aria-hidden="true" />
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
        <div className="footer-main"><div className="site-container footer-layout"><div className="footer-brand"><img src={mbocwwbLogo} alt="MBOCWWB logo" /><div><p className="font-devanagari text-sm font-bold">महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी मंडळ</p><h2>MBOCWWB – Maharashtra Building and Other Construction Workers Welfare Board</h2><p>Government of Maharashtra</p></div></div><nav aria-label="Footer navigation">{["Useful Links", "Contact", "Privacy", "Disclaimer", "Accessibility"].map((item) => <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>{item}</a>)}</nav></div></div>
        <div className="footer-bottom"><div className="site-container flex flex-col gap-2 py-4 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© Government of Maharashtra. All Rights Reserved.</p><p>MBOCWWB Digital Services Portal</p></div></div>
      </footer>
    </div>
  );
}