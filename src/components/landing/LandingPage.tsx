import { Header } from "../header/Header";
import { HeroSpinPrize } from "../heroSection/HeroSection";
import { FaqSection } from "../faqSection/FaqSection";
import { Footer } from "../footer/Footer";
import { useState } from "react";
import { Overview } from "../overview/Overview";
import { HowItWorks } from "../howItWorks/HowItWorks";
import { TestimonialSection } from "../testimonials/Testimonials";
import { TrustedPlatformSection } from "../trsutedPlatform/TrustedPlatform";
import { Market } from "../marketGlance/Market";
import { SignupModal } from "../signUpModal/SignUpModal";
import { LoginModal } from "../logInModal/LogInModal";

function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}Add
      commentMore actions
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}
      <div className="flex flex-col">
        <Header
          onLogin={() => setModal("login")}
          onSignup={() => setModal("signup")}
        />
        <section id="hero">
          <HeroSpinPrize />
        </section>
        <section id="overview">
          <Overview />
        </section>
        <section id="howitworks">
          <HowItWorks />
        </section>
        <section id="trsutedplatform">
          <TrustedPlatformSection />
        </section>
        <section id="market">
          <Market />
        </section>
        <section id="testimonials">
          <TestimonialSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
