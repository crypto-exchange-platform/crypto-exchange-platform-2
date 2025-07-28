import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

const faqKeys = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6", "faq7"];

export const FaqSection: FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section
      id="faq"
      className="w-full bg-gradient-to-b from-[#1c052e] via-[#2d0843] to-[#180225] text-white py-24 px-4"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-300">
          {t("faq.title")}
        </h2>

        <div className="space-y-4 divide-y divide-white/10 border-y border-white/10">
          {faqKeys.map((key, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={key} className="faq-item py-4 hover:bg-white/5 px-2 rounded-md transition">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center text-left text-lg font-medium text-white/90"
                >
                  <span>{t(`faq.${key}.question`)}</span>
                  <span
                    className={`faq-icon text-2xl text-fuchsia-300 ${isOpen ? "rotate" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="faq-answer text-sm text-white/70 mt-3 leading-relaxed">
                    {t(`faq.${key}.answer`)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
