import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
export const SignupModal = ({ onClose }) => {
    const [countries, setCountries] = useState([]);
    const [dialCodes, setDialCodes] = useState([]);
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
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isStrongPassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/.test(password);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const requiredFields = [
            "firstName",
            "lastName",
            "username",
            "email",
            "password",
        ];
        for (const field of requiredFields) {
            if (!form[field]) {
                setError("Please fill all required fields.");
                return;
            }
        }
        if (!isValidEmail(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!isStrongPassword(form.password)) {
            setError("Password must be at least 8 characters, include a number and a special character.");
            return;
        }
        try {
            await axios.post("https://api.salesvault.vc/identity/api/clients/create-client-via-web", {
                ...form,
                telephone: form.dialCode + form.phone,
                dateOfBirth: form.birthdate,
                source: window.location.hostname === "localhost"
                    ? "landing.salesvault.vc" //change
                    : window.location.hostname,
            });
            onClose();
        }
        catch (err) {
            setError(err.response?.data?.message || "Signup failed.");
        }
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto", children: _jsxs("div", { className: "bg-yellow-500 text-black w-full max-w-xl p-6 rounded-md shadow-lg relative", children: [_jsx("button", { onClick: onClose, className: "absolute right-4 top-4 text-xl", children: "\u00D7" }), _jsx("h2", { className: "text-2xl font-bold mb-6 text-center text-white", children: "Sign Up" }), _jsxs("form", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", onSubmit: handleSubmit, children: [_jsx("input", { name: "firstName", type: "text", placeholder: "First Name", className: "border p-2 rounded", onChange: handleChange }), _jsx("input", { name: "lastName", type: "text", placeholder: "Last Name", className: "border p-2 rounded", onChange: handleChange }), _jsx("input", { name: "username", type: "text", placeholder: "Username", className: "border p-2 rounded", onChange: handleChange }), _jsx("input", { name: "email", type: "email", placeholder: "Email", className: "border p-2 rounded", onChange: handleChange }), _jsx("input", { name: "phone", type: "tel", placeholder: "Phone Number", className: "border p-2 rounded", onChange: handleChange }), _jsx("input", { name: "birthdate", type: "date", className: "border p-2 rounded", onChange: handleChange }), _jsx("input", { name: "password", type: "password", placeholder: "Password", className: "border p-2 rounded col-span-full", onChange: handleChange }), _jsx("input", { name: "language", type: "text", placeholder: "Language", className: "border p-2 rounded", onChange: handleChange }), _jsxs("select", { name: "dialCode", className: "border p-2 rounded", onChange: handleChange, children: [_jsx("option", { value: "", children: "Dial Code" }), dialCodes.map((d) => (_jsx("option", { value: d.dial_code, children: d.dial_code }, d.code)))] }), _jsxs("select", { name: "country", className: "border p-2 rounded w-full col-span-full", onChange: handleChange, children: [_jsx("option", { value: "", children: "Select Country" }), countries.map((c) => (_jsx("option", { value: c.name, children: c.name }, c.code)))] }), error && (_jsx("div", { className: "text-red-500 text-sm col-span-full", children: error })), _jsx("button", { type: "submit", className: "w-full bg-black text-white py-2 rounded col-span-full hover:bg-gray-900", children: "Sign Up" })] })] }) }));
};
