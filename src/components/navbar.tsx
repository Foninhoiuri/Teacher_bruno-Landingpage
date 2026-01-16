"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, UserCircle } from "lucide-react";


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
                    <img src="/logo.png" alt="Teacher Bruno Logo" className="w-9 h-9 object-contain" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                                Comece Agora
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}