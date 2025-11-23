"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://wa.me/22896032953",
    label: "WhatsApp",
    icon: "/whatsapp-icon.png",
    glow: "from-green-400/40 via-emerald-300/30 to-transparent",
  },
  {
    href: "https://www.tiktok.com/@chronos.ciego?_r=1&_t=ZM-91Yd7tRNt3U",
    label: "TikTok",
    icon: "/tiktok-icon.png",
    glow: "from-white/50 via-fuchsia-300/30 to-transparent",
  },
  {
    href: "https://www.facebook.com/share/1A3JJoWytN/",
    label: "Facebook",
    icon: "/facebook-icon.jpg",
    glow: "from-sky-400/40 via-blue-400/30 to-transparent",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/90 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-sm text-slate-400">© 2025 CHRONOS. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 md:justify-start">
            <Link href="/conditions-generales" className="hover:text-white transition-colors">
              Conditions générales
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map(({ href, label, icon, glow }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-105 overflow-hidden"
              aria-label={label}
            >
              <span
                className={`pointer-events-none absolute -inset-2 rounded-full bg-gradient-to-br ${glow} blur-xl opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative z-10 h-8 w-8 rounded-full overflow-hidden">
                <Image 
                  src={icon} 
                  alt={label} 
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

