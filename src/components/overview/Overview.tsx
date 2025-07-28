import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export const Overview: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#1c052e] text-white py-24 px-4">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t("overview.title")}
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          {t("overview.description")}
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button className="bg-white text-black hover:bg-gray-200">
            {t("overview.explore")}
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            {t("overview.startTrading")}
          </Button>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-col items-center justify-center gap-12">
        <img
          src="/ListCrypto.png"
          alt={t("overview.listImageAlt")}
          className="w-full max-w-4xl rounded-xl shadow-xl transition duration-300 hover:scale-105"
        />
        <img
          src="/MarketTrends.png"
          alt={t("overview.trendsImageAlt")}
          className="w-full max-w-4xl rounded-xl shadow-xl transition duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};
