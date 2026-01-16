"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ChevronDown, UserCircle } from "lucide-react";

// --- DADOS DE NAVEGAÇÃO ---
export const LINKS = [
    { label: "Sobre", id: "about" },
    { label: "Metodologia", id: "methodology" },
    { label: "Aulas", id: "plans" },
    { label: "Business", id: "business" },
    { label: "Tradução", id: "translation" },
];

const FLAGS = {
    BR: "https://cdn-icons-png.flaticon.com/24/9906/9906449.png",
    US: "https://cdn-icons-png.flaticon.com/24/197/197484.png"
};

// --- COMPONENTE WHATSAPP (Reutilizável) ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
);

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
    const [lang, setLang] = useState<"BR" | "US">("BR");
    const [activeId, setActiveId] = useState("");

    const toggleLang = () => setLang(prev => prev === "BR" ? "US" : "BR");

    // --- SCROLL SPY ---
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = LINKS.map(link => link.id);
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Detecta se a seção está no topo da tela (com margem de 300px)
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveId(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScrollSpy);
        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);

    // --- CLICK HANDLER ---
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveId(id);
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* ============================================================
               1. DESKTOP NAVBAR (Fixo no topo)
            ============================================================ */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="hidden lg:block fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-colors duration-300"
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* LOGO */}
                    <div className="flex items-center gap-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Teacher Bruno Logo" className="w-auto h-12" />
                            <div className="flex flex-col">
                                <span className="text-lg font-extrabold tracking-tight text-[var(--color-brand-yellow)] leading-none">Teacher Bruno</span>
                                <span className="text-lg font-bold text-slate-400 leading-none">Fernandes</span>
                            </div>
                        </div>
                        {/* IDIOMA DESKTOP */}
                        <button onClick={toggleLang} className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm">
                            <img src={FLAGS[lang]} alt={lang} className="w-6 h-6 rounded-full object-cover border border-slate-100" />
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-bold text-slate-700">{lang}</span>
                                <ChevronDown className="w-3 h-3 text-slate-400" />
                            </div>
                        </button>
                    </div>

                    {/* LINKS CENTRAIS */}
                    <div className="flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50">
                        {LINKS.map(link => {
                            const isActive = activeId === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleScroll(link.id)}
                                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                                        ? "bg-white text-brand-blue shadow-sm font-bold"
                                        : "text-slate-500 hover:text-brand-blue hover:bg-white/50"
                                        }`}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* AÇÕES DIREITA */}
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all">
                            <UserCircle className="w-4 h-4 text-slate-400" />
                            Área do Aluno
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full btn-whatsapp-effect">
                            <WhatsAppIcon className="w-4 h-4" />
                            Comece Agora
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ============================================================
               2. MOBILE HEADER (Logo + Idioma)
            ============================================================ */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 h-16 flex items-center px-6 justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Teacher Bruno Logo" className="w-auto h-8" />
                    <span className="text-lg font-extrabold text-[var(--color-brand-yellow)]">Teacher Bruno</span>
                </div>
                <button onClick={toggleLang} className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-full border border-slate-200">
                    <img src={FLAGS[lang]} alt={lang} className="w-5 h-5 rounded-full" />
                    <span className="text-xs font-bold text-slate-600">{lang}</span>
                </button>
            </div>

            {/* ============================================================
               3. MOBILE SPEED DIAL (Botão Flutuante)
            ============================================================ */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">

                {/* BOTÃO TRIGGER */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        w-14 h-14 rounded-full flex items-center justify-center
                        shadow-xl transition-all duration-300 z-50
                        ${isOpen ? "bg-red-500 text-white rotate-90" : "bg-brand-blue text-white rotate-0"}
                    `}
                >
                    {isOpen ? <X strokeWidth={2.5} /> : <Plus strokeWidth={2.5} />}
                </motion.button>

                {/* ITENS DO MENU */}
                <AnimatePresence>
                    {isOpen && (
                        <div className="flex flex-col items-end gap-3 pb-2 pr-1">

                            {/* A. Link do WhatsApp */}
                            <motion.button
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                transition={{ delay: 0.05 }}
                                className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full btn-whatsapp-effect"
                                onClick={() => alert("Link do WhatsApp")}
                            >
                                Whatsapp <WhatsAppIcon className="w-5 h-5" />
                            </motion.button>

                            {/* B. Área do Aluno */}
                            <motion.button
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800 text-white font-bold shadow-lg"
                            >
                                Área do Aluno <UserCircle className="w-5 h-5" />
                            </motion.button>

                            {/* C. Links de Navegação */}
                            {LINKS.slice().reverse().map((link, i) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ delay: (i + 2) * 0.05 + 0.1 }}
                                    onClick={() => handleScroll(link.id)}
                                    className={`
                                        px-5 py-2.5 rounded-xl font-medium shadow-md border
                                        backdrop-blur-md transition-colors
                                        ${activeId === link.id
                                        ${activeId === link.id
                                        ? "bg-brand-blue text-white border-brand-blue"
                                        : "bg-white/95 text-slate-600 border-white"
                                    }
                                    `}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    )}
                </AnimatePresence>

                {/* OVERLAY ESCURO */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}