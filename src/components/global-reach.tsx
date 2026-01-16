"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import DottedMap from "dotted-map";
import { useMemo } from "react";

interface Location {
    id: number;
    lat: number;
    lng: number;
}

const LOCATIONS: Location[] = [
    { id: 1, lat: 40.7128, lng: -74.0060 }, // New York
    { id: 2, lat: 48.8566, lng: 2.3522 },   // Paris
    { id: 3, lat: -23.5505, lng: -46.6333 }, // Sao Paulo
    { id: 4, lat: 35.6762, lng: 139.6503 }, // Tokyo
    { id: 5, lat: -33.8688, lng: 151.2093 }, // Sydney
    { id: 6, lat: 51.5074, lng: -0.1278 }, // London
    { id: 7, lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
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

export function GlobalReach() {
    const mapSvg = useMemo(() => {
        const map = new DottedMap({ height: 100, grid: "diagonal" });

        // Add pins for locations
        LOCATIONS.forEach(loc => {
            map.addPin({
                lat: loc.lat,
                lng: loc.lng,
                // AQUI: Usamos o Hex exato da sua variável --color-brand-yellow (#EAB308)
                svgOptions: { color: "#EAB308", radius: 0.3 },
            });
        });

        return map.getSVG({
            radius: 0.22,
            // AQUI: Usamos um cinza claro ou o brand-gray para os pontos do mapa ficarem sutis
            color: "#a0a3a8ff", // equivalent to slate-300 to match the clean aesthetic
            shape: "hexagon",
            backgroundColor: "#ffffff",
        });
    }, []);

    return (
        <section className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden text-center min-h-[600px] flex flex-col items-center justify-center">

            {/* 1. WORLD MAP GLOBAL BACKGROUND */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 md:opacity-100">
                <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
                    alt="World Map"
                    className="w-full h-full object-contain md:object-cover opacity-60 pointer-events-none scale-110 md:scale-100"
                />
            </div>

            {/* 2. GLOBAL VIGNETTE (Bordas suaves em todos os lados) */}
            {/* Top Fade */}
            <div className="absolute inset-x-0 top-0 h-100 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none" />
            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none" />

            {/* 3. CONTENT CONTAINER (Sobreposto ao Mapa) */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* Heading Block */}
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight">
                        Alunos pelo Mundo
                    </h2>
                    <p className="text-brand-gray/80 text-lg leading-relaxed">
                        Uma comunidade global de profissionais conectados através do inglês.
                    </p>
                </div>

                {/* Interactive Elements (Central Card + Button) - Positioning container */}
                <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">

                    {/* CARD CENTRAL (Happy Students) */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="absolute md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none w-max"
                    >
                        <div className="bg-white p-3 md:p-4 pr-4 md:pr-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-3 md:gap-4 animate-float pointer-events-auto transform scale-90 md:scale-110">
                            <div className="bg-red-50 p-2 md:p-3 rounded-xl">
                                <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-500 fill-current" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Happy Students</span>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(id => (
                                            <img key={id} src={`https://i.pravatar.cc/100?img=${id + 10}`} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white" alt="avatar" />
                                        ))}
                                    </div>
                                    <span className="text-base md:text-lg font-black text-brand-blue">+500</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* BOTÃO INFERIOR */}
                    <div className="absolute -bottom-8 md:bottom-0 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center">
                        <button className="bg-brand-yellow hover:bg-brand-dark text-brand-blue px-5 py-2.5 md:px-8 md:py-3 rounded-full font-bold shadow-lg shadow-brand-yellow/30 transition-all hover:-translate-y-1 flex items-center gap-2 text-xs md:text-base">
                            Join the Community
                            <span className="text-base md:text-xl">→</span>
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}