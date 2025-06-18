import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    const [modal, setModal] = useState(null);
    return (_jsxs(_Fragment, { children: [modal === "login" && _jsx(LoginModal, { onClose: () => setModal(null) }), modal === "signup" && _jsx(SignupModal, { onClose: () => setModal(null) }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Header, { onLogin: () => setModal("login"), onSignup: () => setModal("signup") }), _jsx("section", { id: "hero", children: _jsx(HeroSpinPrize, {}) }), _jsx("section", { id: "overview", children: _jsx(Overview, {}) }), _jsx("section", { id: "howitworks", children: _jsx(HowItWorks, {}) }), _jsx("section", { id: "trsutedplatform", children: _jsx(TrustedPlatformSection, {}) }), _jsx("section", { id: "market", children: _jsx(Market, {}) }), _jsx("section", { id: "testimonials", children: _jsx(TestimonialSection, {}) }), _jsx("section", { id: "faq", children: _jsx(FaqSection, {}) }), _jsx(Footer, {})] })] }));
}
export default LandingPage;
