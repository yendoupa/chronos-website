'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Phone, ArrowUpRight, ChevronRight, Shirt, Code2, Sparkles, Smartphone, ShoppingBag, BadgeCheck, Navigation2, ArrowLeft, Play, Send, X } from "lucide-react";

export default function Home() {
  const [showAppModal, setShowAppModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-[#00AFFF]/40 selection:text-[#EFEFF3]">
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Gradient + Glow Background */}
        <div className="pointer-events-none fixed inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-[#00AFFF]/20 blur-3xl opacity-70"></div>
          <div className="absolute bottom-[-10rem] right-[-4rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl opacity-80"></div>
        </div>

        {/* Glass Top Bar */}
        <header className="sticky top-0 z-40">
          <div className="backdrop-blur-md bg-slate-900/50 border-b border-[rgba(148,163,184,0.45)]/60">
            <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(15,23,42,0.9)] overflow-hidden">
        <Image
                    src="/chronos-logo.jpg"
                    alt="Logo Chronos"
                    fill
                    sizes="44px"
                    className="object-cover"
          priority
        />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-sm sm:text-base tracking-[0.32em] text-slate-100">
                    CHRONOS
                  </span>
                  <span className="text-sm text-slate-400">
                    reflect what you are
                  </span>
                </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
                <a href="#home" className="text-slate-300 hover:text-[#00AFFF] transition-colors">Accueil</a>
                <a href="#services" className="text-slate-300 hover:text-[#00AFFF] transition-colors">Services</a>
                <Link href="/contact" className="text-slate-300 hover:text-[#00AFFF] transition-colors">Contact</Link>
              </nav>

              {/* Compact Services Menu */}
              <div className="flex items-center gap-2">
                <a href="#services" className="hidden sm:inline-flex text-xs sm:text-sm text-slate-200 hover:text-[#00AFFF] border border-[rgba(148,163,184,0.45)]/70 hover:border-[#00AFFF]/70 rounded-full px-3 py-1.5 bg-slate-900/60 backdrop-blur-md transition-all duration-200 hover:scale-[1.03] active:scale-95">
                  Voir les services
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1">
          {/* HOME */}
          <section id="home" className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-16 sm:pt-14 sm:pb-24 lg:flex lg:items-center lg:gap-12">
            {/* Left: Text */}
            <div className="relative z-10 flex-1 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.45)]/70 bg-slate-900/70 backdrop-blur-md px-3 sm:px-4 py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#00AFFF] shadow-[0_0_12px_rgba(0,175,255,0.9)]"></div>
                <span className="text-xs sm:text-sm text-slate-300">
                  Plateforme d'innovation technologique
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-50">
                  CHRONOS — reflect what you are
          </h1>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  CHRONOS est une plateforme d'innovation technologique qui rassemble
                  e-commerce, design, développement, sérigraphie, branding, livraison et solutions digitales, avec une vision moderne et futuriste.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-[#00AFFF]/90 hover:bg-[#00AFFF] text-slate-950 text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 shadow-[0_20px_40px_rgba(0,175,255,0.45)] transition-transform duration-200 hover:scale-[1.05] active:scale-95 cursor-pointer">
                  Explorer les services
                  <span className="inline-flex items-center justify-center rounded-full bg-slate-950/10 text-slate-900 h-5 w-5">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.45)]/70 bg-slate-900/60 hover:bg-slate-900/80 text-slate-100 text-sm sm:text-base px-4 sm:px-5 py-2.5 transition-transform duration-200 hover:scale-[1.05] active:scale-95 cursor-pointer">
                  <Phone className="h-4 w-4 text-[#00AFFF]" strokeWidth={1.5} />
                  +228 96 03 29 53
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md text-sm text-slate-400">
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-300">Vision</span>
                  <span>Fusionner design, technologie et logistique dans une expérience cohérente.</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-slate-300">Secteurs</span>
                  <span>Textile, digital, électronique, livraison express & branding.</span>
                </div>
              </div>
            </div>

            {/* Right: 3D Watch Scene */}
            <div className="relative mt-10 lg:mt-0 flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Orbital light */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00AFFF]/20 via-slate-900/40 to-slate-900 shadow-[0_0_120px_rgba(0,175,255,0.4)] blur-3xl"></div>
                
                {/* Faux 3D: Glass ring */}
                <div className="absolute inset-[10%] rounded-full border border-[rgba(148,163,184,0.45)]/70 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-slate-900/80 backdrop-blur-md shadow-[0_30px_80px_rgba(15,23,42,0.9)]"></div>
                <div className="absolute inset-[14%] rounded-full border border-white/10 border-t-white/30 border-l-white/20 border-b-slate-900/90 border-r-slate-900/90"></div>
                
                {/* Rotating orbit lines */}
                <div className="absolute inset-[18%]">
                  <div className="absolute inset-0 rounded-full border border-[#00AFFF]/25 border-dashed animate-spin" style={{ animationDuration: '18s' }}></div>
                  <div className="absolute inset-[14%] rounded-full border border-slate-500/20 border-dashed animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                </div>
                
                {/* Floating 3D Watch block */}
                <div className="absolute inset-[26%] flex items-center justify-center">
                  <div className="group relative h-full w-full [transform-style:preserve-3d]">
                    {/* Shadow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 h-8 w-24 rounded-full bg-black/60 blur-2xl opacity-70"></div>
                    
                    {/* Body */}
                    <div className="relative h-full w-full origin-center" style={{ transform: 'rotateX(18deg) rotateY(-22deg)' }}>
                      {/* Metallic frame */}
                      <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-slate-200 to-slate-500 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"></div>
                      {/* Inner frame */}
                      <div className="absolute inset-[0.14rem] rounded-[1.4rem] bg-slate-900"></div>
                      {/* Bezel highlight */}
                      <div className="absolute inset-[0.14rem] rounded-[1.4rem] border border-white/20 border-t-white/45 border-l-white/35 border-r-slate-900/80 border-b-slate-900/90"></div>
                      {/* Screen */}
                      <div className="absolute inset-[0.4rem] rounded-[1.2rem] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
                        {/* Clock face */}
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div className="absolute inset-[14%] rounded-full border border-slate-700/70 bg-slate-900/80"></div>
                          <div className="absolute inset-[22%] rounded-full bg-gradient-radial from-[#00AFFF]/40 via-transparent to-transparent"></div>
                          
                          {/* Hour markers */}
                          <div className="absolute h-[1px] w-[52%] bg-gradient-to-r from-transparent via-slate-400/60 to-transparent rotate-0 origin-center"></div>
                          <div className="absolute h-[1px] w-[48%] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent rotate-90 origin-center"></div>
                          <div className="absolute h-[1px] w-[48%] bg-gradient-to-r from-transparent via-slate-500/40 to-transparent rotate-45 origin-center"></div>
                          <div className="absolute h-[1px] w-[48%] bg-gradient-to-r from-transparent via-slate-500/40 to-transparent -rotate-45 origin-center"></div>
                          
                          {/* Hands */}
                          <div className="absolute h-[40%] w-[2px] bg-slate-200 origin-bottom rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
                          <div className="absolute h-[55%] w-[1.5px] bg-slate-400 origin-bottom rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>
                          <div className="absolute h-[60%] w-[1px] bg-[#00AFFF] origin-bottom rounded-full animate-spin" style={{ animationDuration: '6s' }}></div>
                          <div className="absolute h-2 w-2 rounded-full bg-slate-100 shadow-[0_0_18px_rgba(255,255,255,0.9)]"></div>
                          
                          {/* Brand text */}
                          <div className="absolute bottom-[26%] text-[0.65rem] tracking-[0.32em] text-slate-300/90">
                            CHRONOS
                          </div>
                          <div className="absolute top-[26%] text-[0.55rem] text-slate-500">
                            FUTURE TIME ENGINE
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtle glow */}
                    <div className="absolute inset-[30%] rounded-full bg-[#00AFFF]/30 blur-2xl opacity-60 mix-blend-screen"></div>
                  </div>
                </div>
                
                {/* Orbiting info chip */}
                <div className="absolute -right-3 sm:-right-6 top-1/3 sm:top-1/4">
                  <div className="animate-pulse" style={{ animationDuration: '3s' }}>
                    <div className="rounded-2xl border border-[rgba(148,163,184,0.45)]/70 bg-slate-900/80 backdrop-blur-xl px-3 py-2 shadow-[0_18px_35px_rgba(15,23,42,0.9)]">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#00AFFF] shadow-[0_0_12px_rgba(0,175,255,1)]"></span>
                        <span className="text-xs text-slate-200">
                          3D Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES GRID */}
          <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
            <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-slate-50">
                  Services CHRONOS
                </h2>
                <p className="text-base sm:text-lg text-slate-300 mt-1.5 max-w-xl">
                  Un écosystème complet de services pour faire vivre vos idées :
                  du textile au digital, jusqu'à la livraison.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Sérigraphie & Design Textile */}
              <div onClick={() => document.getElementById('service-textile')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/60 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-95 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AFFF]/10 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-300/35 via-yellow-200/25 to-violet-500/30 blur-md"></span>
                      <div className="relative h-9 w-9 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-[rgba(148,163,184,0.45)]/70 shadow-[0_0_18px_rgba(240,171,0,0.25)]">
                        <Shirt className="h-4 w-4 text-[#fcd34d]" strokeWidth={1.5} />
                      </div>
                    </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg tracking-tight text-slate-50">
                          Sérigraphie & Design Textile
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Textile, marques, événements, vêtements premium.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00AFFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-1">
                    Impressions nettes, durables, prêtes pour les marques ambitieuses.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Sweats, t-shirts, caps, séries limitées.</span>
                    <Link
                      href="/services/serigraphie"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#00AFFF] hover:text-white transition-colors"
                    >
                      Détails
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Développement d'Apps & Sites Web */}
              <div className="group relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/60 backdrop-blur-xl transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-200/30 via-sky-300/25 to-indigo-500/35 blur-md"></span>
                      <div className="relative h-9 w-9 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-[rgba(148,163,184,0.45)]/70 shadow-[0_0_18px_rgba(129,140,248,0.35)]">
                        <Code2 className="h-4 w-4 text-[#c4b5fd]" strokeWidth={1.5} />
                      </div>
                    </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg tracking-tight text-slate-50">
                          Développement d'Applications & Sites Web
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Apps rapides, sécurisées, prêtes à scaler.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00AFFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-1">
                    Expériences digitales fluides : front, back, mobile & web.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Startups, entreprises, particuliers.</span>
                    <Link
                      href="/services/developpement"
                      className="inline-flex items-center gap-1 text-[#00AFFF] hover:text-white transition-colors"
                    >
                      Détails
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Infographie & Branding */}
              <div onClick={() => document.getElementById('service-branding')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/60 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-95 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-200/30 via-pink-300/25 to-purple-500/35 blur-md"></span>
                      <div className="relative h-9 w-9 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-[rgba(148,163,184,0.45)]/70 shadow-[0_0_20px_rgba(232,121,249,0.4)]">
                        <Sparkles className="h-4 w-4 text-[#f472b6]" strokeWidth={1.5} />
                      </div>
                    </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg tracking-tight text-slate-50">
                          Infographie & Branding
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Identités visuelles & storytelling de marque.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00AFFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-1">
                    Logos, affiches, systèmes graphiques et chartes complètes.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Univers cohérent, déclinable partout.</span>
                    <Link
                      href="/services/infographie"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#00AFFF] hover:text-white transition-colors"
                    >
                      Détails
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Électroniques & Électroménager */}
              <div onClick={() => document.getElementById('service-electro')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/60 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-95 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AFFF]/12 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-200/30 via-lime-200/20 to-violet-500/30 blur-md"></span>
                      <div className="relative h-9 w-9 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-[rgba(148,163,184,0.45)]/70 shadow-[0_0_18px_rgba(190,242,100,0.3)]">
                        <Smartphone className="h-4 w-4 text-[#bef264]" strokeWidth={1.5} />
                      </div>
                    </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg tracking-tight text-slate-50">
                          Électroniques & Électroménager
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Matériel fiable, sélectionné et prêt à l'usage.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00AFFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-1">
                    Smartphones, gadgets, accessoires et électroménager modernes.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Gadgets tech, audio, maison.</span>
                    <Link
                      href="/services/electronique"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#00AFFF] hover:text-white transition-colors"
                    >
                      Détails
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Achat & Revente */}
              <div onClick={() => setShowAppModal(true)} className="group relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/60 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-95 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-200/30 via-teal-200/20 to-purple-500/30 blur-md"></span>
                      <div className="relative h-9 w-9 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-[rgba(148,163,184,0.45)]/70 shadow-[0_0_18px_rgba(45,212,191,0.35)]">
                        <ShoppingBag className="h-4 w-4 text-[#34d399]" strokeWidth={1.5} />
                      </div>
                    </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg tracking-tight text-slate-50">
                          Achat & Revente
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Matériel tech, vêtements, équipements & plus.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00AFFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-1">
                    Sélection, rachat et revente d'objets premium en circuit court.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Flux rapide, offres mobiles.</span>
                    <span className="inline-flex items-center gap-1 text-[#00AFFF]">
                      Détails
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Tests & Reviews Tech */}
              <div onClick={() => document.getElementById('service-reviews')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/60 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-95 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/12 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-200/30 via-indigo-300/25 to-violet-500/35 blur-md"></span>
                      <div className="relative h-9 w-9 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-[rgba(148,163,184,0.45)]/70 shadow-[0_0_18px_rgba(99,102,241,0.35)]">
                        <BadgeCheck className="h-4 w-4 text-[#a5b4fc]" strokeWidth={1.5} />
                      </div>
                    </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg tracking-tight text-slate-50">
                          Tests & Reviews Tech
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Analyses claires pour des choix sûrs.
          </p>
        </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00AFFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-1">
                    Tests de smartphones, gadgets et accessoires avec avis détaillés.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Comparatifs, retours terrain.</span>
                    <Link
                      href="/services/tests-reviews"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#00AFFF] hover:text-white transition-colors"
                    >
                      Détails
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Livraison CHRONOS Express */}
              <div onClick={() => setShowAppModal(true)} className="group relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/60 backdrop-blur-xl cursor-pointer transition-all duration-200 hover:scale-[1.05] active:scale-95 hover:shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AFFF]/14 via-transparent to-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col h-full p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-200/30 via-orange-200/25 to-purple-500/30 blur-md"></span>
                      <div className="relative h-9 w-9 rounded-2xl bg-slate-900/80 flex items-center justify-center border border-[rgba(148,163,184,0.45)]/70 shadow-[0_0_18px_rgba(253,186,116,0.35)]">
                        <Navigation2 className="h-4 w-4 text-[#fdba74]" strokeWidth={1.5} />
                      </div>
                    </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg tracking-tight text-slate-50">
                          Livraison CHRONOS Express
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Livraison rapide à Lomé et régions.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00AFFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-1">
                    Une logistique pensée pour l'instantané : suivi, sécurité, fiabilité.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Courses, livraisons, e-commerce.</span>
                    <span className="inline-flex items-center gap-1 text-[#00AFFF]">
                      Détails
                      <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICE PAGES */}
          <section className="border-t border-slate-800/80 bg-slate-950/80">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16 space-y-16 sm:space-y-20">
              {/* SÉRIGRAPHIE & DESIGN TEXTILE */}
              <section id="service-textile" className="scroll-mt-24">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AFFF] shadow-[0_0_12px_rgba(0,175,255,1)]"></span>
                      <span className="text-xs text-slate-300">
                        Textile & impression — futuriste, bleu nuit
                      </span>
                    </div>
                    <div className="relative mb-4 sm:mb-6">
                      <div className="absolute -inset-x-6 -bottom-3 h-10 bg-gradient-to-r from-[#00AFFF]/20 via-transparent to-transparent blur-2xl opacity-60"></div>
                      <div className="relative inline-block">
                        <div className="absolute inset-0 translate-y-1 translate-x-1 rounded-3xl bg-slate-950/90 shadow-[0_30px_80px_rgba(0,0,0,0.9)]"></div>
                        <div className="relative rounded-3xl border border-white/10 border-t-white/35 border-l-white/25 border-b-slate-900/90 border-r-slate-900/90 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4 sm:px-5 py-3 sm:py-3.5">
                          <h2 className="font-display text-xl sm:text-2xl tracking-tight text-slate-50">
                            Sérigraphie & Design Textile
                          </h2>
                        </div>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-5 max-w-2xl">
                      CHRONOS réalise des impressions textiles premium, nettes, durables et adaptées
                      aux marques, entreprises, événements et vêtements personnalisés.
                    </p>
                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl mb-6">
                      De la maquette au produit final, nous gérons la direction artistique, la préparation
                      des fichiers, la sélection des supports et l'exécution technique, avec une exigence
                      de rendu inspirée des studios les plus pointus.
                    </p>
                    <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.45)]/60 bg-slate-900/70 text-slate-200 text-sm px-4 py-2 transition-transform duration-200 hover:bg-slate-900/90 hover:scale-[1.05] active:scale-95 cursor-pointer">
                      <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                      Retour à l'accueil
          </a>
        </div>
                  <div className="space-y-5 sm:space-y-6">
                    <div className="relative rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.95)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00AFFF]/20 via-transparent to-slate-950/60"></div>
                      <div className="relative aspect-video">
                        <video
                          className="relative z-10 h-full w-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                        >
                          <source src="/workflow-impression.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-4 left-4 z-20 rounded-full bg-slate-950/80 px-4 py-1 text-xs text-slate-100 backdrop-blur">
                          Workflow d'impression textile futuriste
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/80 backdrop-blur-xl p-4 sm:p-5">
                      <div className="absolute -top-6 right-4 h-10 w-10 rounded-2xl bg-[#00AFFF]/20 blur-2xl"></div>
                      <div className="relative space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h3 className="font-display text-base tracking-tight text-slate-50">
                              Parler à CHRONOS Textile
                            </h3>
                            <p className="text-sm text-slate-400">
                              Devis, séries limitées, événements, merchandising.
                            </p>
                          </div>
                          <div className="h-10 w-10 rounded-2xl bg-slate-800/80 border border-[rgba(148,163,184,0.45)]/70 flex items-center justify-center">
                            <Shirt className="h-4 w-4 text-[#00AFFF]" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-slate-300">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-[#00AFFF]" strokeWidth={1.5} />
                          <span>+228 96 03 29 53</span>
                          </div>
                        </div>
                        <a href="mailto:chronos.ciego@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00AFFF]/90 hover:bg-[#00AFFF] text-slate-950 text-sm px-4 py-2 transition-transform duration-200 hover:scale-[1.05] active:scale-95 cursor-pointer">
                          <Send className="h-4 w-4" strokeWidth={1.5} />
                          Commander / Contacter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* CONTACT FOOTER */}
          <section id="contact-footer" className="border-t border-slate-800/80 bg-slate-950/80">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
              <div className="grid gap-8 lg:grid-cols-2 items-start">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-slate-50 mb-4">
                    Contactez CHRONOS
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-xl">
                    Prêt à démarrer votre projet ? Parlons-en !
                  </p>
                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#00AFFF]" strokeWidth={1.5} />
                          <span>+228 96 03 29 53</span>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-3xl border border-[rgba(148,163,184,0.45)]/80 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8">
                  <div className="absolute -top-6 right-6 h-10 w-10 rounded-2xl bg-[#00AFFF]/20 blur-2xl"></div>
                  <div className="relative space-y-4">
                    <h3 className="font-display text-lg tracking-tight text-slate-50">
                      Envoyez-nous un message
                    </h3>
                    <p className="text-sm text-slate-400">
                      Nous répondons rapidement à toutes vos demandes.
                    </p>
                    <a href="mailto:chronos.ciego@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00AFFF]/90 hover:bg-[#00AFFF] text-slate-950 text-sm px-6 py-3 transition-transform duration-200 hover:scale-[1.05] active:scale-95 cursor-pointer font-medium">
                      <Send className="h-4 w-4" strokeWidth={1.5} />
                      Aller à la page contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>
      </div>

      {/* Modal Application Bientôt Disponible */}
      {showAppModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowAppModal(false)}
        >
          <div 
            className="relative max-w-md w-full rounded-3xl border border-white/20 bg-slate-900/95 backdrop-blur-xl p-8 shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAppModal(false)}
              className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
            
            <div className="flex flex-col items-center gap-6">
              {/* Image en lévitation */}
              <div className="relative animate-float">
                <Image 
                  src="/phone-app.png" 
                  alt="Application CHRONOS" 
                  width={200} 
                  height={300}
                  className="object-contain"
                />
              </div>
              
              {/* Message structuré */}
              <div className="text-center space-y-3">
                <h3 className="font-display text-2xl text-white">
                  Application CHRONOS
                </h3>
                <p className="text-lg text-slate-300 font-medium">
                  Bientôt disponible
                </p>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  Notre application mobile arrive très prochainement. Restez connectés pour être les premiers informés !
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
