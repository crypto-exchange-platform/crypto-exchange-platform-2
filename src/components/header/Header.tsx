import { FC } from "react";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { label: "Buy crypto", href: "#hero" },
  { label: "Overview", href: "#overview" },
  { label: "How it works", href: "#howitworks" },
  { label: "Trusted", href: "#trsutedplatform" },
  { label: "Markets", href: "#market" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];


interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329]shadow-lg shadow-fuchsia-900/20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" aria-label="Homepage" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-white tracking-tight">Rocket</span>
        </a>

        <nav className="hidden lg:flex gap-6 items-center text-white font-medium text-sm">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative transition-all duration-300 hover:text-yellow-300 hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white hover:text-yellow-300 hover:bg-white/10 text-sm font-medium transition-colors"
            onClick={onLogin}
          >
            Log in
          </Button>
          <Button
            className="bg-yellow-300 text-black hover:bg-white hover:text-pink-600 transition-colors"
            onClick={onSignup}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};
 