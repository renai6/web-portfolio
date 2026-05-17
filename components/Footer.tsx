"use client";
import { socials } from "@/lib/page-data";

export function Footer() {
  const handleSocialRedirect = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black">Raffi Muloc</h3>

          <p className="text-gray-400 mt-2">raffibucog@gmail.com</p>
          <p className="text-gray-400 mt-2">+63 956 930 3690</p>
        </div>

        <div className="flex gap-4">
          {socials.map((s) => (
            <button
              key={s.name}
              aria-label={s.name}
              onClick={() => handleSocialRedirect(s.link)}
              className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:border-emerald-400/40 transition-all"
            >
              {s.svg}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
