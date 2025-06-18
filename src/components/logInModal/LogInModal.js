import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
export const LoginModal = ({ onClose }) => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!emailOrUsername || !password) {
            setError("Please fill all required fields.");
            return;
        }
        try {
            const response = await axios.post("https://api.salesvault.vc/identity/api/auth/login", {
                emailOrUsername,
                password,
                twoFactorCode: null,
                rememberMe: null,
            });
            if (response.data.accessToken) {
                window.location.href = "https://salesvault.vc/auth/login?returnUrl=%2F";
            }
        }
        catch (err) {
            setError(err.response?.data?.message || "Login failed.");
        }
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60", children: _jsxs("div", { className: "bg-yellow-500 text-black w-full max-w-md p-6 rounded-md shadow-lg relative", children: [_jsx("button", { onClick: onClose, className: "absolute right-4 top-4 text-xl", children: "\u00D7" }), _jsx("h2", { className: "text-2xl font-bold mb-6 text-center text-white", children: "Log In" }), _jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [_jsx("input", { type: "text", placeholder: "Email or Username", className: "w-full border p-2 rounded", value: emailOrUsername, onChange: (e) => setEmailOrUsername(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", className: "w-full border p-2 rounded", value: password, onChange: (e) => setPassword(e.target.value) }), error && _jsx("div", { className: "text-red-500 text-sm", children: error }), _jsx("button", { type: "submit", className: "w-full bg-black text-white py-2 rounded hover:bg-gray-900", children: "Log In" })] })] }) }));
};
