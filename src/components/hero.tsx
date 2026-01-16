"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-slate-50 overflow-hidden py-24 lg:py-32">
            {/* Background Decor (Geral) */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-white/50 rounded-l-[100px] -z-10 hidden lg:block backdrop-blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-8 z-10"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-3 py-2 bg-white border border-slate-200 rounded-full w-fit shadow-sm">
                        <img src="https://cdn-icons-png.flaticon.com/24/197/197484.png" alt="flag" className="w-5 h-5" />
                        <span className="text-xs font-black text-slate-600 uppercase">Vagas 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Conecte-se com o <span className="text-brand-yellow">mundo</span> <br className="hidden lg:block" /> através das palavras.
                    </h1>

                    <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
                        Inglês sem enrolação e Tradução Profissional. Zero decoreba, foco total na prática e conversação real.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-slate-900 font-bold text-md rounded-xl hover:brightness-90 transition-all shadow-lg shadow-brand-yellow/20 hover:shadow-xl hover:-translate-y-0.5">
                            Destravar meu Inglês
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-600 font-bold text-md rounded-xl border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm">
                            Conhecer Metodologia
                        </button>
                    </div>

                    {/* Student Satisfaction */}
                    <div className="flex items-center gap-4 mt-6 pt-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-brand-yellow text-sm">★</span>)}
                            </div>
                            <span className="text-xs font-semibold text-slate-500">+500 alunos satisfeitos</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Image & Abstract Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end z-0"
                >
                    {/* --- 3 ELEMENTOS ABSTRATOS EMPILHADOS (Menos Blur) --- */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center translate-x-8 translate-y-4">

                        {/* 1. Camada Base (Maior, mais suave) */}
                        <div className="absolute w-[450px] h-[450px] bg-brand-yellow/20 rounded-full blur-2xl" />

                        {/* 2. Camada Média (Deslocada, um pouco mais definida) */}
                        <div className="absolute w-[350px] h-[350px] bg-brand-yellow/30 rounded-full blur-xl translate-x-[-30px] translate-y-[-20px]" />

                        {/* 3. Camada Topo (Menor, mais cor, menos blur) */}
                        <div className="absolute w-[250px] h-[250px] bg-brand-yellow/40 rounded-full blur-lg translate-x-[40px] translate-y-[30px]" />

                    </div>

                    {/* Main Image */}
                    <div className="relative z-10">
                        <img
                            src="/Hero_image.png"
                            alt="Teacher Bruno Teaching"
                            className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Floating Card 1 */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-10 right-4 bg-white p-3 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 z-20"
                    >
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm">Conversação</p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase">Foco Prático</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute bottom-12 left-4 bg-white p-3 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 z-20"
                    >
                        <div className="w-10 h-10 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow">
                            <span className="font-bold text-sm">100%</span>
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm">Personalizado</p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase">Para você</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}