import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const promotionsKeys = [
  "promo1",
  "promo2",
  "promo3",
  "promo4"
];

export const HeroSpinPrize: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329] text-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            {t("hero.title")} <span className="text-yellow-300">{t("hero.highlight")}</span>
          </h1>
          <p className="text-base text-white/80 max-w-md">
            {t("hero.description")}
          </p>

          <form className="flex w-full max-w-md overflow-hidden rounded border border-white/30 backdrop-blur-sm">
            <input
              type="text"
              placeholder={t("hero.inputPlaceholder")}
              className="flex-1 bg-transparent px-4 py-1 text-white placeholder:text-white/50 focus:outline-none"
            />
            <Button type="submit" className="rounded-none">
              {t("hero.cta")}
            </Button>
          </form>
        </div>

        <div className="flex justify-center">
          <img
            src="/Illustration.png"
            alt={t("hero.imageAlt")}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto pt-12">
        <div className="container mx-auto flex gap-5 px-4 md:justify-center">
          {promotionsKeys.map((key) => (
            <div
              key={key}
              className="promo-box min-w-[260px] bg-white/10 border border-white/10 text-left text-sm rounded-xl px-5 py-4 hover:border-yellow-300"
            >
              <h3 className="text-white font-bold mb-1">{t(`promotions.${key}.title`)}</h3>
              <p className="text-white/70 text-xs leading-relaxed">{t(`promotions.${key}.subtitle`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
