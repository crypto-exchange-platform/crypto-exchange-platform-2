import { FC, ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface SignupModalProps {
  onClose: () => void;
  onSignupSuccess: () => void;
}

export const SignupModal: FC<SignupModalProps> = ({ onClose, onSignupSuccess }) => {
  const { t } = useTranslation();
  const [countries, setCountries] = useState<any[]>([]);
  const [dialCodes, setDialCodes] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    birthdate: "",
    country: "",
    language: "",
    dialCode: "",
    password: "",
  });

  useEffect(() => {
    fetch("https://api.salesvault.vc/api/countries")
      .then((res) => res.json())
      .then(setCountries);
    fetch("https://api.salesvault.vc/api/countries/dial-codes")
      .then((res) => res.json())
      .then(setDialCodes);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (pass: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/.test(pass);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const required = ["firstName", "lastName", "username", "email", "password"];
    for (const f of required) {
      if (!form[f as keyof typeof form]) {
        setError(t("signup.errorRequired"));
        return;
      }
    }
    if (!isValidEmail(form.email)) {
      setError(t("signup.errorInvalidEmail"));
      return;
    }
    if (!isStrongPassword(form.password)) {
      setError(t("signup.errorWeakPassword"));
      return;
    }
    const isoDOB = form.birthdate ? new Date(form.birthdate).toISOString().split("T")[0] : null;
    try {
      await axios.post(
        "https://api.salesvault.vc/identity/api/clients/create-client-via-web",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username,
          email: form.email,
          password: form.password,
          telephone: form.dialCode + form.phone,
          country: form.country || null,
          language: form.language || null,
          dateOfBirth: isoDOB,
          source: window.location.hostname === "localhost"
            ? "cryptotrade.salesvault.vc"
            : window.location.hostname,
        }
      );
      onClose();
      onSignupSuccess();
    } catch (err: any) {
      setError(err.response?.data?.message || t("signup.errorFailed"));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto">
      <div className="bg-purple-950 w-full max-w-xl p-6 rounded-md shadow-lg relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl cursor-pointer">×</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">{t("signup.title")}</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input name="firstName" placeholder={t("signup.firstName")} className="border p-2 rounded bg-white text-black" onChange={handleChange} />
          <input name="lastName" placeholder={t("signup.lastName")} className="border p-2 rounded bg-white text-black" onChange={handleChange} />
          <input name="username" placeholder={t("signup.username")} className="border p-2 rounded bg-white text-black" onChange={handleChange} />
          <input name="email" type="email" placeholder={t("signup.email")} className="border p-2 rounded bg-white text-black" onChange={handleChange} />
          <input name="phone" type="tel" placeholder={t("signup.phone")} className="border p-2 rounded bg-white text-black" onChange={handleChange} />
          <input name="birthdate" type="date" className="border p-2 rounded bg-white text-black cursor-pointer" onChange={handleChange} />
          <input name="password" type="password" placeholder={t("signup.password")} className="border p-2 rounded bg-white text-black col-span-full" onChange={handleChange} />
          <input name="language" placeholder={t("signup.language")} className="border p-2 rounded bg-white text-black" onChange={handleChange} />
          <select name="dialCode" className="border p-2 rounded bg-white text-black cursor-pointer" onChange={handleChange}>
            <option value="">{t("signup.dialCode")}</option>
            {dialCodes.map((d) => <option key={d.code} value={d.dial_code}>{d.dial_code}</option>)}
          </select>
          <select name="country" className="border p-2 rounded bg-white text-black col-span-full cursor-pointer" onChange={handleChange}>
            <option value="">{t("signup.country")}</option>
            {countries.map((c) => <option key={c.code} value={c.name}>{c.name}</option>)}
          </select>
          {error && <div className="text-red-500 text-sm col-span-full">{error}</div>}
          <button type="submit" className="w-full bg-black text-white py-2 rounded col-span-full hover:bg-gray-900 cursor-pointer">
            {t("signup.button")}
          </button>
        </form>
      </div>
    </div>
  );
};
