import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const statsKeys = ["stat1", "stat2", "stat3"];

export const Market: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gradient-to-b from-[#1c052e] via-[#2d0843] to-[#180225] text-white py-24 px-4">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t("market.title")}
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          {t("market.description")}
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center gap-12">
        <img
          src="/MarketGlance.png"
          alt={t("market.imageAlt")}
          className="w-full max-w-4xl rounded-xl shadow-xl transition duration-300 hover:scale-105"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12">
          {statsKeys.map((key) => (
            <div
              key={key}
              className="bg-white/10 border border-white/10 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-cyan-300">{t(`market.${key}.title`)}</h3>
              <p className="text-3xl font-semibold mb-1">{t(`market.${key}.value`)}</p>
              <p className="text-sm text-gray-300">{t(`market.${key}.description`)}</p>
            </div>
          ))}
        </div>

        <Button className="bg-yellow-300 hover:bg-cyan-400 text-black text-sm mt-10 px-6 py-3">
          {t("market.cta")}
        </Button>
      </div>
    </section>
  );
};
 