import Image from "next/image";
import { site } from "@/lib/site";

const socials = [
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    icon: <path d="M6.5 9.5v8M6.5 6.5v.01M10.5 17.5v-4.5a2.5 2.5 0 0 1 5 0v4.5M10.5 9.5v8" />,
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    icon: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><path d="M16.8 7.2v.01" /></>,
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-ivory">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[auto_1fr_auto] md:gap-16 md:py-20">
        <div className="flex items-center gap-4">
          <Image src="/staad-logo.png" alt="STAAD logo" width={64} height={64} className="h-16 w-16" />
          <div>
            <p className="font-display text-xl font-medium tracking-wide text-ink">STAAD</p>
            <p className="text-sm text-muted">By Tecchash Pvt Ltd</p>
          </div>
        </div>

        <div className="md:border-l md:border-line md:pl-16">
          <p className="font-display text-3xl font-medium text-ink">
            PSYVERSE <span className="text-lavender-deep italic">2026</span>
          </p>
          <p className="mt-2 font-display text-lg text-muted italic">{site.tagline}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {site.date} · {site.time}
            <br />
            {site.venue.room}, {site.venue.institute}, {site.venue.city}
          </p>
        </div>

        <div>
          <p className="eyebrow">Contact &amp; follow</p>
          <ul className="mt-4 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`STAAD on ${s.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-lavender-deep transition-colors hover:bg-lavender-mist"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="wrap py-6 text-center text-xs text-muted">© 2026 PSYVERSE</p>
      </div>
    </footer>
  );
}
