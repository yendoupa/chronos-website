'use client';

import Image from "next/image";

const sections = [
  {
    title: "Conception graphique & Branding",
    items: [
      "Création de logos vectoriels et chartes graphiques complètes",
      "Définition d’identité visuelle : couleurs, typographies, éléments graphiques",
      "Création de templates pour réseaux sociaux, présentations et supports marketing",
    ],
  },
  {
    title: "Infographie",
    items: [
      "Réalisation d’illustrations vectorielles et graphiques animés",
      "Préparation de fichiers optimisés pour print et web",
      "Maquettes de supports marketing (flyers, brochures, affiches)",
    ],
  },
  {
    title: "Stratégie de marque",
    items: [
      "Analyse concurrentielle et positionnement",
      "Conseils sur le branding visuel et cohérence globale",
      "Suivi de l’évolution de la marque et guidelines graphiques",
    ],
  },
];

const gallery = [
  { src: "/systeme-visuel.jpg", label: "Système visuel", caption: "Charte complète" },
  { src: "/animation-logo.png", label: "Animation logo", caption: "Identité dynamique" },
  { src: "/kit-marketing.jpg", label: "Kit marketing", caption: "Supports prêts à imprimer" },
];

const VideoHero = () => (
  <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_rgba(15,23,42,0.65)]">
    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/25 via-transparent to-violet-600/30" />
    <video
      className="relative z-10 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/systeme-visuel.jpg"
    >
      <source src="/studio-branding.mp4" type="video/mp4" />
    </video>
    <div className="absolute bottom-4 left-4 z-20 rounded-full bg-slate-950/80 px-4 py-1 text-xs text-slate-50">
      Studio branding — 8s loop
    </div>
  </div>
);

export default function InfographiePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-fuchsia-400/25 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-700/30 blur-[200px]" />
      </div>

      {/* floating device */}
      <div className="pointer-events-none absolute left-10 top-28 hidden lg:block opacity-30">
        <div className="relative h-72 w-56 rounded-[2rem] shadow-[0_35px_70px_rgba(15,23,42,0.7)] border border-white/30 animate-float overflow-hidden">
          <Image 
            src="/flottant.png" 
            alt="Mock branding" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      <main className="relative z-10">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />
              Direction artistique CHRONOS
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl text-white md:text-5xl">
                Infographie & Branding Professionnel
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Création visuelle, identité de marque, supports graphiques et conseils branding. Nous donnons une
                signature forte à vos produits et campagnes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Moodboards", "Logo systems", "Brand kits"].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <VideoHero />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.6)]"
              >
                <h3 className="font-display text-xl text-white">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.7)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24">
          <div className="mb-8 space-y-3">
            <h2 className="font-display text-3xl text-white">Visual Library</h2>
            <p className="text-slate-300">Logos, chartes et infographies prêtes à être déclinées.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.65)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-fuchsia-400/30 via-transparent to-violet-500/30" />
                </div>
                <div className="relative mb-6 rounded-2xl bg-white/5 p-6 backdrop-blur overflow-hidden">
                  <Image src={item.src} alt={item.label} width={300} height={200} className="mx-auto opacity-90 object-cover w-full h-auto rounded-xl" loading="lazy" />
                </div>
                <div className="relative space-y-1">
                  <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200/80">{item.caption}</p>
                  <h3 className="text-xl text-white">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}




