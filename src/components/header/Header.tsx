import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
  { key: "buyCrypto", href: "#hero" },
  { key: "overview", href: "#overview" },
  { key: "howItWorks", href: "#howitworks" },
  { key: "trusted", href: "#trsutedplatform" },
  { key: "markets", href: "#market" },
  { key: "testimonials", href: "#testimonials" },
  { key: "faq", href: "#faq" },
];

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329] shadow-lg shadow-fuchsia-900/20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="/"
          aria-label={t("header.homepage")}
          className="flex items-center gap-3"
        >
          <img src="/logo.svg" alt="Logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-white tracking-tight">
            {t("header.brand")}
          </span>
        </a>

        <nav className="hidden lg:flex gap-6 items-center text-white font-medium text-sm">
          {NAV_ITEMS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="relative transition-all duration-300 hover:text-yellow-300 hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white hover:text-yellow-300 hover:bg-white/10 text-sm font-medium transition-colors"
            onClick={onLogin}
          >
            {t("header.login")}
          </Button>
          <Button
            className="bg-yellow-300 text-black hover:bg-white hover:text-pink-600 transition-colors"
            onClick={onSignup}
          >
            {t("header.signup")}
          </Button>

          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-transparent border border-gray-500 rounded p-1 text-sm bg-black text-white"
          >
            <option value="en" className="text-black">
              EN
            </option>
            <option value="es" className="text-black">
              ES
            </option>
            <option value="de" className="text-black">
              DE
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};
