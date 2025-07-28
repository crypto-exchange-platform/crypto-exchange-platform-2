import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const featuresKeys = ["feature1", "feature2", "feature3"];

export const TrustedPlatformSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-[#1c052e] via-[#2d0843] to-[#180225] text-black">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
          {featuresKeys.map((key) => (
            <div
              key={key}
              className={`rounded-xl p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 bg-white`}
            >
              <h4 className="text-center font-bold text-md mb-2">{t(`trusted.features.${key}.title`)}</h4>
              <p className="text-sm text-center text-gray-600">{t(`trusted.features.${key}.description`)}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {t("trusted.title")}
          </h2>
          <p className="text-white mb-6">
            {t("trusted.description")}
          </p>
          <Button className="bg-yellow-300 hover:bg-blue-700 text-black font-semibold px-6 py-3">
            {t("trusted.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};
 