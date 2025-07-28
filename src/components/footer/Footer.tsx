import { FC } from "react";
import { useTranslation } from "react-i18next";

const footerColumnsKeys = ["products", "services", "support", "about"];

export const Footer: FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-white bg-gradient-to-b from-[#1a0329] to-[#1a0329] px-6 pt-16 pb-6">
      <div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-2 gap-10">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt={t("footer.logoAlt") as string} className="h-10 w-10" />
            <span className="text-xl font-bold">{t("footer.brand")}</span>
          </div>
          <p className="text-white/80 text-base font-medium mb-2">
            {t("footer.contactPrompt")}
          </p>
          <p className="text-white/60 text-sm mb-1">{t("footer.phone")}</p>
          <p className="text-white/60 text-sm mb-1">{t("footer.email")}</p>
          <p className="text-white/40 text-xs mt-4">
            © {year} {t("footer.copyright")}
          </p>
        </div>

        {footerColumnsKeys.map((key) => {
          const links = t(`footer.columns.${key}.links`, { returnObjects: true });
          return (
            <div key={key}>
              <h4 className="text-sm font-semibold tracking-wider mb-4 text-white/90">
                {t(`footer.columns.${key}.title`)}
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                {(Array.isArray(links) ? links : []).map((link: string) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition duration-200 cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>© {year} {t("footer.copyright")}</p>
        <div className="flex gap-4">
          {(() => {
            const socials = t("footer.socials", { returnObjects: true });
            return (Array.isArray(socials) ? socials : []).map((social: string) => (
              <a key={social} href="#" className="hover:text-white underline cursor-pointer">
                {social}
              </a>
            ));
          })()}
        </div>
      </div>
    </footer>
  );
};
