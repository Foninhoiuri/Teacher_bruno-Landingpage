"use client";

import { motion } from "framer-motion";
import { Heart, Star, Quote } from "lucide-react";
import { lazy, Suspense } from "react";
import { SITE_CONFIG } from "../config";
import { Container } from "./ui/container";

// Lazy Load do componente pesado (mapa de pontos)
const WorldMapBackground = lazy(() => import("./ui/world-map"));

const REVIEWS = [
    {
        id: 1,
        name: "Ana Silva",
        role: "Dev Frontend",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        text: "O método do Bruno mudou minha carreira. Consegui minha primeira vaga internacional em 3 meses.",
        rating: 5
    },
    {
        id: 2,
        name: "Carlos Mendes",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        text: "Aulas focadas, sem perda de tempo. A tradução e o contexto cultural fizeram toda a diferença.",
        rating: 5
    },
    {
        id: 3,
        name: "Beatriz Costa",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        text: "Finalmente destravei meu speaking! As aulas de conversação são intensas e muito divertidas.",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section className="relative md:py-16 bg-white overflow-hidden" id="testimonials">

            {/* 1. Map Background (Lazy Loaded) */}
            <Suspense fallback={<div className="absolute inset-0 bg-white" />}>
                <WorldMapBackground />
            </Suspense>

            {/* FADES */}
            <div className="absolute inset-x-0 top-16 h-[30%] bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none" />

            <Container className="relative z-10">

                {/* HEADING GROUP */}
                <div className="flex flex-col py-7 items-center mb-16 text-center relative">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mb-4 tracking-tight">
                        Alunos pelo Mundo
                    </h2>
                    <p className="text-brand-gray/80 text-lg leading-relaxed max-w-xl">
                        Uma comunidade global.<br />
                        <span className="font-semibold text-brand-yellow">Veja o que dizem:</span>
                    </p>
                </div>

                {/* TESTIMONIALS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {REVIEWS.map((review) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: review.id * 0.1 }}
                            className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 flex flex-col h-full group"
                        >
                            {/* 1. Text Content */}
                            <div className="relative mb-8 flex-1">
                                <Quote className="w-10 h-10 text-brand-yellow/20 absolute -top-4 -left-2 fill-current" />
                                <p className="text-lg text-slate-700 leading-relaxed relative z-10 font-medium pt-2">
                                    "{review.text}"
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-slate-200/50 mb-6" />

                            {/* 2. User Info */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-brand-yellow rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full object-cover ring-4 ring-white relative z-10"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-blue text-base">{review.name}</h4>
                                    <p className="text-sm text-slate-500 font-medium">{review.role}</p>
                                </div>
                            </div>

                            {/* 3. Stars */}
                            <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating "Happy Students" Bubble (Bottom) */}
                <div className="flex justify-center mt-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="animate-float"
                    >
                        <div className="bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-3 scale-110">
                            <div className="bg-red-50 p-2 rounded-full">
                                <Heart className="w-5 h-5 text-red-500 fill-current" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(id => (
                                        <img key={id} src={`https://i.pravatar.cc/100?img=${id + 10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="avatar" />
                                    ))}
                                </div>
                                <div className="text-left flex flex-col leading-none">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Happy Students</span>
                                    <span className="text-base font-black text-[var(--color-brand-blue)]">{SITE_CONFIG.studentCount}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </Container>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 6s ease-in-out infinite;
                    animation-delay: 3s;
                }
            `}</style>
        </section>
    );
}