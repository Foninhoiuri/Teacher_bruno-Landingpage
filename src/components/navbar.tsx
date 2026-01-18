"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, UserCircle } from "lucide-react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { SITE_CONFIG } from "../config";
import { Container } from "./ui/container";

// --- DADOS DE NAVEGAÇÃO ---
export const LINKS = [
    { label: "Sobre", id: "about" },
    { label: "Metodologia", id: "methodology" },
    { label: "Depoimentos", id: "testimonials" },
    { label: "Planos", id: "plans" },
    { label: "Tradução", id: "translation" },
];

const FLAGS = {
    BR: "https://cdn-icons-png.flaticon.com/24/9906/9906449.png",
    US: "https://cdn-icons-png.flaticon.com/24/197/197484.png"
};



export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState<"BR" | "US">("BR");
    const [activeId, setActiveId] = useState("");

    const toggleLang = () => setLang(prev => prev === "BR" ? "US" : "BR");

    useEffect(() => {
        let lastRun = 0;
        const limit = 100; // Throttle limit in ms (10 frames per second is enough for spy)

        const handleScrollSpy = () => {
            const now = Date.now();
            if (now - lastRun < limit) return;
            lastRun = now;

            // Otimização: Pegar sessoes uma vez seria ideal, mas como o DOM pode mudar, pegamos aqui.
            // Para performance extema, cachear as posições seria melhor, mas resize quebraria.
            // Esta abordagem com throttle já resolve 90% do problema.
            const sections = LINKS.map(link => link.id);

            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Verifica se o topo da sessão está na área de "trigger" (0 a 300px do topo)
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveId(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScrollSpy, { passive: true });
        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);

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
            {/* DESKTOP NAVBAR */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-sm/10 transition-all duration-300"
            >
                <Container className="h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Teacher Bruno Logo" className="w-auto h-12" />
                            <div className="flex flex-col">
                                <span className="text-lg font-extrabold tracking-tight text-[var(--color-brand-yellow)] leading-none">Teacher Bruno</span>
                                <span className="text-lg font-bold text-slate-400 leading-none">Fernandes</span>
                            </div>
                        </div>
                        <button onClick={toggleLang} className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white/50 border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm">
                            <img src={FLAGS[lang]} alt={lang} className="w-6 h-6 rounded-full object-cover border border-slate-100" />
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-bold text-slate-700">{lang}</span>
                                <ChevronDown className="w-3 h-3 text-slate-400" />
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50">
                        {LINKS.map(link => {
                            const isActive = activeId === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleScroll(link.id)}
                                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                                        ? "btn-yellow-solid font-bold"
                                        : "text-slate-500 hover:text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-yellow)/50]"
                                        }`}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        {SITE_CONFIG.showStudentArea && (
                            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full btn-yellow transition-all">
                                <UserCircle className="w-4 h-4 text-[var(--color-brand-blue)]" />
                                Área do Aluno
                            </button>
                        )}
                        <button
                            className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full btn-green-solid"
                            onClick={() => openWhatsApp(WHATSAPP_MESSAGES.GENERAL)}
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            Comece Agora
                        </button>
                    </div>
                </Container>
            </motion.nav>

            {/* MOBILE HEADER */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white/70 backdrop-blur-xl border-b border-white/50 h-16 flex items-center px-6 justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Teacher Bruno Logo" className="w-auto h-8" />
                    <span className="text-lg font-extrabold text-[var(--color-brand-yellow)]">Teacher Bruno</span>
                </div>
                <button onClick={toggleLang} className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-full border border-slate-200">
                    <img src={FLAGS[lang]} alt={lang} className="w-5 h-5 rounded-full" />
                    <span className="text-xs font-bold text-slate-600">{lang}</span>
                </button>
            </div>

            {/* MOBILE SPEED DIAL */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-50 ${isOpen
                        ? "bg-orange-500 text-brand-white rotate-90"
                        : "bg-[var(--color-brand-yellow)] text-brand-white rotate-0"
                        }`}
                >
                    {isOpen ? <X strokeWidth={2.5} className="w-6 h-6" /> : <Menu strokeWidth={2.5} className="w-6 h-6" />}
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-end gap-3 pb-2 pr-1"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="cursor-pointer flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full btn-green-solid"
                                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.GENERAL)}
                            >
                                Whatsapp <WhatsAppIcon className="w-5 h-5" />
                            </motion.button>

                            {SITE_CONFIG.showStudentArea && (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="cursor-pointer flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--color-brand-yellow)] text-white font-bold shadow-[0px_20px_25px_-5px_rgba(234,179,8,0.4),0px_8px_10px_-6px_rgba(234,179,8,0.4)]"
                                >
                                    Área do Aluno <UserCircle className="w-5 h-5" />
                                </motion.button>
                            )}

                            {LINKS.slice().reverse().map((link) => (
                                <motion.button
                                    key={link.id}
                                    onClick={() => handleScroll(link.id)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-5 py-2.5 rounded-full font-medium shadow-md border backdrop-blur-md transition-colors ${activeId === link.id
                                        ? "bg-[var(--color-brand-yellow)] text-[var(--color-brand-white)] border-[var(--color-brand-yellow)] shadow-lg scale-105"
                                        : "bg-white/95 text-slate-600 border-white"
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* OVERLAY ESCURO */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-[var(--color-brand-blue)]/10 z-40 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
