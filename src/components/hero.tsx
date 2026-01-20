"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config";
import { Container } from "./ui/container";
import { cn } from "../lib/utils";

// --- CONFIGURAÇÃO DE POSIÇÃO DOS CARDS FLUTUANTES ---
// Edite aqui para mudar a posição dos cards
const FLOAT_CONFIG = {
    conversation: {
        mobile: "top-4 right-10",
        desktop: "md:top-10 md:right-25",
        transform: "scale-[0.75] md:scale-100 origin-top-right"
    },
    customized: {
        mobile: "bottom-25 left-0",
        desktop: "md:left-4",
        transform: "scale-[0.75] md:scale-100 origin-bottom-left"
    },
    students: {
        mobile: "top-65 -right-4",
        desktop: "md:top-85 md:-right-2 md:-translate-y-1/2",
        transform: "scale-[0.75] md:scale-100 origin-right"
    }
};

interface FloatingCardProps {
    className?: string;
    delay?: number;
    children: React.ReactNode;
}

function FloatingCard({ className, delay = 0, children }: FloatingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0.5, -10, 0] // Animação Yoyo (Nuvem)
            }}
            transition={{
                delay: delay,
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                y: {
                    duration: 6, // Mais lento para parecer flutuar
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className={cn(
                "absolute z-20 flex items-center gap-3 p-3 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
                "bg-white/90 backdrop-blur-sm border border-white/20", // Efeito Vidro
                className
            )}
        >
            {children}
        </motion.div>
    );
}

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-slate-50 overflow-hidden py-4 md:py-20">
            {/* Background Decor (Geral) */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-white/50 rounded-l-[100px] -z-10 hidden lg:block backdrop-blur-3xl" />

            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6 lg:gap-8 z-10"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-3 py-2 bg-white border border-slate-200 rounded-full w-fit shadow-sm">
                        <img src="https://cdn-icons-png.flaticon.com/24/197/197484.png" alt="flag" className="w-5 h-5" />
                        <span className="text-xs font-black text-slate-600 uppercase">Vagas 2026</span>
                    </div>

                    {/* Titulo */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[var(--color-brand-blue)] leading-[1.1]">
                        Conecte-se com o <span className="text-[var(--color-brand-yellow)]">mundo</span> <br className="hidden lg:block" /> através das palavras.
                    </h1>

                    {/* SubTitulo */}
                    <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
                        Inglês sem enrolação e Tradução Profissional. Zero decoreba, foco total na prática e conversação real.
                    </p>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                        <button
                            onClick={() => scrollToSection('plans')}
                            // Corrigido w-90% para w-[90%] (sintaxe correta do Tailwind)
                            className="flex sm:w-auto items-center justify-center w-[80%] gap-2 px-8 py-4 font-bold text-md rounded-full btn-yellow-solid"
                        >
                            Destravar meu Inglês
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollToSection('methodology')}
                            className="flex items-center w-[80%] sm:w-auto justify-center gap-2 px-8 py-4 font-bold text-md rounded-full btn-clean shadow-sm"
                        >
                            Conhecer Metodologia
                        </button>
                    </div>


                </motion.div>

                {/* Right Column: Image & Abstract Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end z-0"
                >
                    {/* --- 3 ELEMENTOS ABSTRATOS EMPILHADOS --- */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center translate-x-8 translate-y-4">
                        <div className="absolute w-[850px] h-[550px] bg-brand-yellow/10 rounded-full blur-2xl" />
                        <div className="absolute w-[550px] h-[450px] bg-brand-yellow/30 rounded-full blur-xl translate-x-[-30px] translate-y-[-20px]" />
                        <div className="absolute w-[250px] h-[250px] bg-brand-yellow/40 rounded-full blur-lg translate-x-[50px] translate-y-[30px]" />
                    </div>

                    {/* Main Image */}
                    <div className="relative z-10">
                        <img
                            src="/Hero_image.webp"
                            alt="Teacher Bruno Teaching"
                            width={600}
                            height={600}
                            loading="eager"
                            // @ts-ignore
                            fetchPriority="high"
                            className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
                        />
                    </div>

                    {/* Floating Card 1 (Conversação) - Topo Direito */}
                    <FloatingCard
                        delay={0.5}
                        className={cn(
                            FLOAT_CONFIG.conversation.mobile,
                            FLOAT_CONFIG.conversation.desktop,
                            FLOAT_CONFIG.conversation.transform
                        )}
                    >
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm">Conversação</p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase">Foco Prático</p>
                        </div>
                    </FloatingCard>

                    {/* Floating Card 2 (Personalizado) - Base Esquerda */}
                    <FloatingCard
                        delay={0.7}
                        className={cn(
                            FLOAT_CONFIG.customized.mobile,
                            FLOAT_CONFIG.customized.desktop,
                            FLOAT_CONFIG.customized.transform
                        )}
                    >
                        <div className="w-10 h-10 bg-brand-yellow/10 rounded-full flex items-center justify-center text-[var(--color-brand-yellow)]">
                            <span className="font-bold text-sm">100%</span>
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm">Personalizado</p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase">Para você</p>
                        </div>
                    </FloatingCard>

                    {/* Floating Card 3 (Reviews) - Lateral Direita*/}

                    <FloatingCard
                        delay={0.9}
                        className={cn(
                            FLOAT_CONFIG.students.mobile,
                            FLOAT_CONFIG.students.desktop,
                            FLOAT_CONFIG.students.transform,
                            "-py-1"
                        )}
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                            ))}
                        </div>
                        <div className="flex flex-col gap-1/2 -space-x-3 justify-center">
                            <div className="flex gap-0.5 text-[var(--color-brand-yellow)] text-xs">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <span key={star}>★</span>
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{SITE_CONFIG.studentCount} Alunos</span>
                        </div>
                    </FloatingCard>
                </motion.div>
            </Container>
        </section>
    );
}