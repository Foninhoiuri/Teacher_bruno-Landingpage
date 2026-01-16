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

export function GlobalMap() {
    const mapSvg = useMemo(() => {
        const map = new DottedMap({ height: 60, grid: "diagonal" });

        // Add pins for locations
        LOCATIONS.forEach(loc => {
            map.addPin({
                lat: loc.lat,
                lng: loc.lng,
                svgOptions: { color: "#EAB308", radius: 0.4 }, // Highlighted in Brand Yellow
            });
        });

        return map.getSVG({
            radius: 0.22,
            color: "#94a3b8",
            shape: "circle",
            backgroundColor: "#ffffff",
        });
    }, []);

    return (
        <section className="relative py-24 bg-white overflow-hidden text-center">

            <div className="relative z-10 max-w-3xl mx-auto px-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight">
                    Alunos pelo Mundo
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Uma comunidade global de profissionais conectados através do inglês.
                </p>
            </div>

            {/* Container do Mapa */}
            <div className="relative w-full max-w-6xl mx-auto aspect-[1.8] md:h-[600px] flex items-center justify-center">

                {/* 1. WORLD MAP BACKGROUND (Dotted Map) */}
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                    <img
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
                        alt="World Map"
                        className="w-full h-full object-contain opacity-60 pointer-events-none"
                    />
                </div>

                {/* Máscara para suavizar as bordas do mapa (vignette) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_100%)] pointer-events-none" />

                {/* 3. CARD CENTRAL (Happy Students) */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-30 pointer-events-none"
                >
                    <div className="bg-white p-4 pr-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 animate-float pointer-events-auto">
                        <div className="bg-red-50 p-3 rounded-xl">
                            <Heart className="w-6 h-6 text-red-500 fill-current" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Happy Students</span>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(id => (
                                        <img key={id} src={`https://i.pravatar.cc/100?img=${id + 10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="avatar" />
                                    ))}
                                </div>
                                <span className="text-lg font-black text-brand-blue">+2.5k</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 5. BOTÃO INFERIOR */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center">
                    <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 flex items-center gap-2">
                        Join the Community
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>

            {/* CSS Animation para o card flutuar suavemente */}
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
