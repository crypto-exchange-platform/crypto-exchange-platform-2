import { FC } from "react";
import { Button } from "../ui/button";

export const Overview: FC = () => {
  return (
    <section className="w-full bg-[#1c052e] 
 text-white py-24 px-4">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Market Insights at a Glance
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Explore live trading activity and performance metrics across top cryptocurrencies. Stay updated, make smarter moves.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button className="bg-white text-black hover:bg-gray-200">Explore Markets</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Start Trading
          </Button>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-col items-center justify-center gap-12">
        <img
          src="/ListCrypto.png"
          alt="Crypto Overview"
          className="w-full max-w-4xl rounded-xl shadow-xl transition duration-300 hover:scale-105"
        />
        <img
          src="/MarketTrends.png"
          alt="Market Trends"
          className="w-full max-w-4xl rounded-xl shadow-xl transition duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};
 