'use client';

import Image from "next/image";

const blocks = [
  {
    title: "Conception graphique",
    items: [
      "Création de motifs, logos et illustrations vectorielles",
      "Préparation de fichiers pour impression textile",
      "Gestion des couleurs Pantone et profils CMJN",
    ],
  },
  {
    title: "Sérigraphie",
    items: [
      "Impression sur textiles (t-shirts, sweatshirts, accessoires)",
      "Techniques : sérigraphie manuelle, impression numérique, transfert thermique",
      "Optimisation du rendu : densité d’encre, séchage, résistances au lavage",
    ],
  },
  {
    title: "Prototypage & Maquettes",
    items: [
      "Création de mockups réalistes pour validation client",
      "Mise en page et placement de motifs sur différents supports",
      "Tests de couleurs et textures avant production",
    ],
  },
  {
    title: "Production & Suivi",
    items: [
      "Organisation des lots, suivi qualité",
      "Conseils sur choix de textile et grammage",
      "Intégration de retours clients pour production finale",
    ],
  },
];

const gallery = [
  { src: "/textile.jpg", label: "Planche textile", caption: "Préparation des couches" },
  { src: "/palette.jpg", label: "Palette Pantone", caption: "Gestion colorimétrique" },
  { src: "/prototype.jpg", label: "Prototype client", caption: "Validation finale" },
];

const VideoShowcase = () => (
  <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_rgba(15,23,42,0.65)]">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-transparent to-purple-500/30" />
    <video
      className="relative z-10 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/textile.jpg"
    >
      <source src="/deo.mp4" type="video/mp4" />
    </video>
    <div className="absolute bottom-4 left-4 z-20 rounded-full bg-slate-950/80 px-4 py-1 text-xs text-slate-50">
      Process sérigraphique — 8s loop
    </div>
  </div>
);

export default function SerigraphiePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-amber-300/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/25 blur-[180px]" />
      </div>

      {/* Floating textile mock */}
      <div className="pointer-events-none absolute left-10 top-24 hidden lg:block opacity-25">
        <div className="relative h-80 w-64 rounded-[2.5rem] shadow-[0_35px_80px_rgba(15,23,42,0.6)] border border-white/40 animate-float overflow-hidden">
          <Image 
            src="/flote.png" 
            alt="mockup textile" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      <main className="relative z-10">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
              Studio textile CHRONOS
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
                Sérigraphie & Design Textile Professionnel
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Création graphique, impression textile, prototypes et conseils en style. Nous accompagnons les marques
                ambitieuses de l’idée jusqu’à la production.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Moodboards créatifs", "Atelier sérigraphie", "Suivi production"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <VideoShowcase />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {blocks.map((block) => (
              <div
                key={block.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.6)]"
              >
                <h3 className="font-display text-xl text-white">{block.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
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
            <h2 className="font-display text-3xl text-white">Galerie Créative</h2>
            <p className="text-slate-300">Illustrations, impressions et prototypes avant validation.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.65)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-amber-200/30 via-transparent to-purple-500/30" />
                </div>
                <div className="relative mb-6 rounded-2xl bg-white/5 p-6 backdrop-blur overflow-hidden">
                  <Image src={item.src} alt={item.label} width={300} height={200} className="mx-auto opacity-90 object-cover w-full h-auto rounded-xl" loading="lazy" />
                </div>
                <div className="relative space-y-1">
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-200/80">{item.caption}</p>
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




