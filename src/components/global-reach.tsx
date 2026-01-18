"use client";

import { motion } from "framer-motion";
import { Heart, Star, Quote } from "lucide-react";
import DottedMap from "dotted-map";
import { useMemo } from "react";
import { SITE_CONFIG } from "../config";
import { Container } from "./ui/container";

interface Location {
    id: number;
    lat: number;
    lng: number;
}

const LOCATIONS: Location[] = [
    { id: 1, lat: 40.7128, lng: -74.0060 }, // New York
    { id: 2, lat: 48.8566, lng: 2.3522 },   // Paris
    { id: 4, lat: 35.6762, lng: 139.6503 }, // Tokyo
    { id: 5, lat: -33.8688, lng: 151.2093 }, // Sydney
    { id: 6, lat: 51.5074, lng: -0.1278 }, // London
    { id: 7, lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
    { id: 3, lat: -23.5505, lng: -46.6333 }, // Sao Paulo
    { id: 8, lat: -15.7975, lng: -47.8919 }, // Brasilia
    { id: 9, lat: -12.9777, lng: -38.5016 }, // Salvador
    { id: 10, lat: -3.7172, lng: -38.5434 }, // Fortaleza
    { id: 11, lat: -19.9167, lng: -43.9345 }, // Belo Horizonte
    { id: 12, lat: -3.1190, lng: -60.0217 }, // Manaus
    { id: 13, lat: -25.4284, lng: -49.2733 }, // Curitiba
    { id: 14, lat: -8.0476, lng: -34.8770 }, // Recife
    { id: 15, lat: -30.0346, lng: -51.2177 }, // Porto Alegre
    { id: 16, lat: -1.4558, lng: -48.4902 }, // Belem
    { id: 17, lat: -16.6869, lng: -49.2648 }, // Goiania
    { id: 18, lat: -22.9099, lng: -47.0626 }, // Campinas
    { id: 19, lat: -2.5307, lng: -44.3068 }, // Sao Luis
    { id: 20, lat: -9.6662, lng: -35.7351 }, // Maceio
];

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

export function GlobalReach() {
    const mapSvg = useMemo(() => {
        const map = new DottedMap({ height: 100, grid: "diagonal" });
        LOCATIONS.forEach(loc => {
            map.addPin({
                lat: loc.lat,
                lng: loc.lng,
                svgOptions: { color: "#EAB308", radius: 0.3 },
            });
        });
        return map.getSVG({
            radius: 0.22,
            color: "#a0a3a8ff",
            shape: "hexagon",
            backgroundColor: "#ffffff",
        });
    }, []);

    return (
        <section className="relative md:py-16 bg-white overflow-hidden" id="testimonials">

            {/* 1. WORLD MAP GLOBAL BACKGROUND */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 md:opacity-100">
                <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
                    alt="World Map"
                    className="w-full h-full object-contain md:object-cover opacity-60 pointer-events-none scale-210 md:scale-90"
                />
            </div>

            {/* FADES */}
            <div className="absolute inset-x-0 top-0 h-0 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none" />

            <Container className="relative z-10">

                {/* HEADING GROUP */}
                <div className="flex flex-col items-center mb-16 text-center relative">



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
                            className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 flex flex-col h-full group"
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
                                    <span className="text-base font-black text-[var(--color-brand-blue)]">+{SITE_CONFIG.studentCount}</span>
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