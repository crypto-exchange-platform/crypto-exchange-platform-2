import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const columns = [
  {
    title: "PRODUCTS",
    links: [
      "Spot",
      "Inverse Perpetual",
      "USDT Perpetual",
      "Exchange",
      "Launchpad",
      "Binance Pay",
    ],
  },
  {
    title: "SERVICES",
    links: [
      "Buy Crypto",
      "Markets",
      "Trading Fee",
      "Affiliate Program",
      "Referral Program",
      "API",
    ],
  },
  {
    title: "SUPPORT",
    links: [
      "Bybit Learn",
      "Help Center",
      "User Feedback",
      "Submit A Request",
      "API Documentation",
      "Trading Rules",
    ],
  },
  {
    title: "ABOUT US",
    links: [
      "About Bitget",
      "Authenticity Check",
      "Careers",
      "Business Contacts",
      "Blog",
    ],
  },
];

export const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-white bg-gradient-to-b from-pink-600 via-fuchsia-700 to-rose-600  px-6 pt-16 pb-6">
      <div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-2 gap-10">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="Rocket Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">Rocket</span>
          </div>
          <p className="text-white/80 text-base font-medium mb-2">
            Let’s talk! 👍
          </p>
          <p className="text-white/60 text-sm mb-1">+98 902 353 2926</p>
          <p className="text-white/60 text-sm mb-1">
            RocketCrypto@Gmail.Com
          </p>
          <p className="text-white/40 text-xs mt-4">
            Copyright © {year} Free For World People
          </p>
        </div>

        {columns.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold tracking-wider mb-4 text-white/90">
              {section.title}
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>Copyright © {year} Free For World People</p>
        <div className="flex gap-4 text-white/40">
          <a href="#" className="hover:text-white">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
 