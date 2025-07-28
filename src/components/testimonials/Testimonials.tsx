import { FC } from "react";
import { useTranslation } from "react-i18next";

export const TestimonialSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#2d0843] py-24 px-6 text-black">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t("testimonials.title")}
          </h2>
          <h4 className="text-md font-semibold text-white mb-3">
            {t("testimonials.subtitle")}
          </h4>
          <p className="text-sm text-white mb-6 max-w-md">
            {t("testimonials.description")}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-white-300" />
              <div className="w-4 h-4 rounded-full bg-white-400" />
              <div className="w-4 h-4 rounded-full bg-white-300" />
            </div>
            <span className="text-xs text-white font-semibold">
              {t("testimonials.reviews")}
            </span>
          </div>
        </div>

        <div className="relative bg-gradient-to-b from-[#1a0329] via-[#29063d] to-[#1a0329] border-l-4 p-6 shadow-md border-[#2d0843] rounded-lg">
          <div className="text-xl font-semibold leading-relaxed mb-4 text-white">
            {t("testimonials.quote")}
          </div>
          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-sm font-bold text-gray-600">
                {t("testimonials.clientName")}
              </p>
              <p className="text-xs text-gray-500">
                {t("testimonials.clientRole")}
              </p>
            </div>
            <img src="/logo.svg" alt={t("testimonials.clientAlt")} className="h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
 