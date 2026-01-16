"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MessageCircle, UserCircle } from "lucide-react";
import { ParticleGlobe } from "./ui/particle-globe";

const NAV_LINKS = [
    { name: "Metodologia", href: "#metodologia" },
    { name: "Aulas", href: "#aulas", active: true },
    { name: "Tradução", href: "#traducao" },
    { name: "Dicas", href: "#dicas" },
];

// URLs ajustadas para tamanho 24px
const FLAGS = {
    BR: "https://cdn-icons-png.flaticon.com/24/9906/9906449.png", // Ajustado de 512 para 24
    US: "https://cdn-icons-png.flaticon.com/24/197/197484.png"   // Já estava em 24
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState<"BR" | "US">("BR");

    const toggleLang = () => setLang(prev => prev === "BR" ? "US" : "BR");

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* 1. LOGO */}
                <div className="flex items-center gap-3">
                    <ParticleGlobe className="w-9 h-9 text-brand-yellow" />
                    <div className="flex flex-col">
                        <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                            Teacher Bruno
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            English & Translation
                        </span>
                    </div>
                </div>

                {/* 2. MENU CENTRAL (Cápsula) */}
                <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${link.active
                                    ? "bg-white text-slate-900 shadow-sm font-bold"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* 3. AÇÕES (DIREITA) */}
                <div className="hidden lg:flex items-center gap-3">

                    {/* --- TOGGLE IDIOMA (Container Ajustado) --- */}
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all mr-2 shadow-sm"
                        title="Mudar Idioma"
                    >
                        {/* Bandeira Redonda na Esquerda */}
                        <img
                            src={FLAGS[lang]}
                            alt={lang}
                            className="w-6 h-6 rounded-full object-cover border border-slate-100"
                        />

                        {/* Texto e Seta na Direita */}
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-slate-700">{lang}</span>
                            <ChevronDown className="w-3 h-3 text-slate-400" />
                        </div>
                    </button>

                    {/* Botão Área do Aluno */}
                    <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all group">
                        <UserCircle className="w-4 h-4 text-slate-400 group-hover:text-brand-yellow transition-colors" />
                        Área do Aluno
                    </button>

                    {/* Botão WhatsApp */}
                    <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-whatsapp hover:bg-whatsapp-hover rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        <MessageCircle className="w-4 h-4 fill-current" />
                        Comece Agora
                    </button>
                </div>

                {/* MENU MOBILE TOGGLE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* MENU MOBILE EXPANDIDO */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-3">
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 text-base font-medium rounded-xl ${link.active
                                            ? "bg-slate-100 text-slate-900 font-bold"
                                            : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="my-2 border-slate-100" />

                            {/* Idioma Mobile (Também ajustado) */}
                            <div className="flex items-center justify-between px-2">
                                <span className="text-sm font-medium text-slate-500">Idioma:</span>
                                <button
                                    onClick={toggleLang}
                                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-full"
                                >
                                    <img src={FLAGS[lang]} alt={lang} className="w-5 h-5 rounded-full" />
                                    <span className="text-sm font-bold text-slate-900">{lang}</span>
                                </button>
                            </div>

                            <button className="w-full flex items-center justify-center gap-2 py-3 text-base font-bold text-slate-700 border border-slate-200 rounded-xl mt-2">
                                <UserCircle className="w-5 h-5" />
                                Área do Aluno
                            </button>

                            <button className="w-full flex items-center justify-center gap-2 py-3 text-base font-bold text-white bg-whatsapp rounded-xl shadow-lg">
                                <MessageCircle className="w-5 h-5 fill-current" />
                                Comece Agora
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}