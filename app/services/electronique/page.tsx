'use client';

import Image from "next/image";

const sections = [
  {
    title: "Présentation des produits",
    items: [
      "Catalogues détaillés de produits électroniques et électroménagers",
      "Spécifications techniques, dimensions et compatibilités",
      "Comparatifs et conseils d’utilisation",
    ],
  },
  {
    title: "Démonstration & tutoriels",
    items: [
      "Vidéos explicatives ou tutoriels pour chaque produit",
      "Guides visuels pour montage, installation et maintenance",
      "FAQ technique intégrée",
    ],
  },
  {
    title: "Gestion & suivi",
    items: [
      "Gestion de stock et disponibilité des produits",
      "Support client intégré : chat et email pour questions techniques",
      "Recommandations de produits selon besoins et usages",
    ],
  },
];

const gallery = [
  { src: "/catalogue-connecte.jpg", label: "Catalogue connecté", caption: "Vue e-commerce" },
  { src: "/ecosysteme-iot.jpg", label: "Écosystème IoT", caption: "Produits smart" },
  { src: "/support-ticket.jpg", label: "Suivi client", caption: "Support & tickets" },
];

const VideoShowcase = () => (
  <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_45px_120px_rgba(2,6,23,0.7)]">
    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/25 via-transparent to-indigo-600/30" />
    <video
      className="relative z-10 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/catalogue-connecte.jpg"
    >
      <source src="/demo-produits.mp4" type="video/mp4" />
    </video>
    <div className="absolute bottom-4 left-4 z-20 rounded-full bg-slate-950/80 px-4 py-1 text-xs text-slate-100">
      Démo produits — 7s loop
    </div>
  </div>
);

export default function ElectroniquePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950 text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 right-1/3 h-72 w-72 rounded-full bg-sky-400/25 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-700/30 blur-[200px]" />
      </div>

      {/* Floating device mock */}
      <div className="pointer-events-none absolute left-10 top-28 hidden lg:block opacity-30">
        <div className="relative h-80 w-64 rounded-[2.5rem] shadow-[0_35px_80px_rgba(2,6,23,0.7)] border border-white/40 animate-float overflow-hidden">
          <Image 
            src="/flot-electro.png" 
            alt="Smart catalog" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      <main className="relative z-10">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              Hub électronique CHRONOS
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl text-white md:text-5xl">Électronique & Électroménager</h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Vente, présentation, démonstration et suivi technique des appareils électroniques et électroménagers.
                Des catalogues complets jusqu’au support client.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Sélection premium", "Fiches techniques", "Support expert"].map((pill) => (
                <div
                  key={pill}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <VideoShowcase />
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
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
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
            <h2 className="font-display text-3xl text-white">Galerie produits & interface</h2>
            <p className="text-slate-300">Produits en situation et modules de gestion intégrée.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.65)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-sky-400/30 via-transparent to-indigo-600/30" />
                </div>
                <div className="relative mb-6 rounded-2xl bg-white/5 p-6 backdrop-blur overflow-hidden">
                  <Image src={item.src} alt={item.label} width={300} height={200} className="mx-auto opacity-90 object-cover w-full h-auto rounded-xl" loading="lazy" />
                </div>
                <div className="relative space-y-1">
                  <p className="text-sm uppercase tracking-[0.25em] text-sky-200/80">{item.caption}</p>
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




