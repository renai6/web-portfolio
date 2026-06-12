"use client";
import { socials } from "@/lib/page-data";

export function Footer() {
  const handleSocialRedirect = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold">Raffi Muloc</h3>

          <p className="text-gray-400 text-sm mt-2">raffibucog@gmail.com</p>
          <p className="text-gray-400 text-sm mt-1">+63 956 930 3690</p>
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <button
              key={s.name}
              aria-label={s.name}
              onClick={() => handleSocialRedirect(s.link)}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center cursor-pointer hover:border-emerald-400/40 transition-colors [&_svg]:w-5 [&_svg]:h-5"
            >
              {s.svg}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
