'use client';

import Image from "next/image";

const technicalSections = [
  {
    title: "Architecture & Conception",
    items: [
      "Analyse fonctionnelle et spécifications techniques",
      "Architecture modulaire ou microservices",
      "Modélisation SQL/NoSQL optimisée",
    ],
  },
  {
    title: "Front-End",
    items: [
      "React, Next.js, Tailwind CSS",
      "SSR/SSG hybrides, optimisation Core Web Vitals",
      "Animations Framer Motion, gestion d’état avancée",
    ],
  },
  {
    title: "Back-End",
    items: [
      "APIs REST/GraphQL (Node.js / Next.js API Routes)",
      "Authentification : OTP, OAuth2, JWT",
      "Workflows paiements, webhooks, notifications",
    ],
  },
  {
    title: "Base de données",
    items: [
      "PostgreSQL, MongoDB, MySQL",
      "Prisma, Mongoose",
      "Indexation, optimisation, monitoring",
    ],
  },
  {
    title: "Sécurité",
    items: [
      "Chiffrement",
      "Validation Zod/Yup",
      "Rate Limit, RBAC, protections XSS/CSRF",
    ],
  },
  {
    title: "Déploiement & Maintenance",
    items: [
      "Vercel, VPS, Docker",
      "CI/CD (GitHub Actions)",
      "Observabilité et scalabilité",
    ],
  },
];

const gallery = [
  { src: "/interface-admin.jpg", title: "Interface Admin", subtitle: "Dashboards UI" },
  { src: "/architecture-cloud.jpg", title: "Architecture Cloud", subtitle: "Infra multi-région" },
  { src: "/monitoring-logs.jpg", title: "Monitoring & Logs", subtitle: "Observabilité" },
];

const VideoSection = () => (
  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_40px_120px_rgba(15,23,42,0.8)]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#00AFFF]/20 via-transparent to-purple-700/20"></div>
    <video
      className="relative z-10 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/interface-admin.jpg"
    >
      <source src="/deo-app.mp4" type="video/mp4" />
    </video>
    <div className="absolute bottom-4 left-4 z-20 rounded-full bg-slate-950/80 px-4 py-1 text-xs text-slate-200 backdrop-blur">
      Workflow temps réel — vidéo locale
    </div>
  </div>
);

export default function DeveloppementPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900"></div>
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-[#00AFFF]/20 blur-[160px]"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-700/20 blur-[160px]"></div>
      </div>

      {/* Floating mobile mock */}
      <div className="pointer-events-none absolute left-16 top-20 hidden lg:block opacity-30">
        <div className="relative h-72 w-40 rounded-[2rem] shadow-[0_30px_80px_rgba(15,23,42,0.7)] border border-white/30 animate-float overflow-hidden">
          <Image 
            src="/fly-tec-dev.png" 
            alt="Mock mobile Chronos" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      <main className="relative z-10">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#00AFFF] shadow-[0_0_10px_rgba(0,175,255,0.8)]" />
              Systèmes digitaux CHRONOS
            </div>
            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
                Développement d’Applications Web & Sites Professionnels
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Architecture, infrastructure, front-end, back-end, sécurité, déploiement. Une chaîne complète pensée pour les produits numériques exigeants.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Architecture 360°", "Delivery sécurisé", "Scalabilité cloud"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <VideoSection />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {technicalSections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.7)]"
              >
                <h3 className="font-display text-xl text-white">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00AFFF] shadow-[0_0_8px_rgba(0,175,255,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24">
          <div className="mb-10 space-y-3">
            <h2 className="font-display text-3xl text-white">Visual Systems & Monitoring</h2>
            <p className="text-slate-300">
              Interfaces opérationnelles, schémas d’architecture et observabilité en continu pour anticiper les pics de charge.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.75)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-[#00AFFF]/30 via-transparent to-purple-600/30" />
                </div>
                <div className="relative mb-6 rounded-2xl bg-slate-950/70 p-6 overflow-hidden">
                  <Image src={item.src} alt={item.title} width={300} height={200} className="mx-auto opacity-90 object-cover w-full h-auto rounded-xl" loading="lazy" />
                </div>
                <div className="relative space-y-1">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#00AFFF]/80">{item.subtitle}</p>
                  <h3 className="text-xl text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


