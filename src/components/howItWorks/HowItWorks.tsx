import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const stepsKeys = ["step1", "step2", "step3", "step4"];

export const HowItWorks: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gradient-to-b from-[#1a0329] to-[#1a0329] py-24 px-4 text-center text-white">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("howItWorks.title")}
        </motion.h2>

        <motion.p
          className="text-white mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("howItWorks.description")}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stepsKeys.map((key, index) => (
            <motion.div
              key={key}
              className="flex flex-col items-center justify-center text-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={t(`howItWorks.${key}.icon`)} alt={t(`howItWorks.${key}.title`)} className="h-40 w-30 object-contain" />
              <p className="text-xs font-semibold uppercase text-white">{t(`howItWorks.${key}.step`)}</p>
              <h3 className="text-lg font-bold">{t(`howItWorks.${key}.title`)}</h3>
              <p className="text-sm text-white">{t(`howItWorks.${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
