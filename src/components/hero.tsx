"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-slate-50 overflow-hidden py-4 lg:py-2">
            {/* Background Decor (Geral) */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-white/50 rounded-l-[100px] -z-10 hidden lg:block backdrop-blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">

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
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-brand-blue leading-[1.1]">
                        Conecte-se com o <span className="text-brand-yellow">mundo</span> <br className="hidden lg:block" /> através das palavras.
                    </h1>

                    {/* SubTitulo */}
                    <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
                        Inglês sem enrolação e Tradução Profissional. Zero decoreba, foco total na prática e conversação real.
                    </p>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-brand-blue font-bold text-md rounded-full hover:brightness-90 transition-all shadow-lg shadow-brand-yellow/20 hover:shadow-xl hover:-translate-y-0.5">
                            Destravar meu Inglês
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-600 font-bold text-md rounded-full border border-slate-200 hover:bg-slate-50 hover:text-brand-blue transition-all shadow-sm">
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
                            src="/Hero_image.png"
                            alt="Teacher Bruno Teaching"
                            className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
                        />
                    </div>

                    {/* Floating Card 1 (Conversação) - Topo Direito */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        // AJUSTE: scale-[0.75] no mobile, origin-top-right para encolher pro canto
                        className="absolute top-4 right-0 md:top-10 md:right-15 bg-white p-3 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 z-20 scale-[0.75] md:scale-100 origin-top-right"
                    >
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm">Conversação</p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase">Foco Prático</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 (Personalizado) - Base Esquerda */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        // AJUSTE: scale-[0.75], colado no bottom-0 left-0 no mobile para não subir na foto
                        className="absolute bottom-0 left-0 md:bottom-12 md:left-4 bg-white p-3 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 z-20 scale-[0.75] md:scale-100 origin-bottom-left"
                    >
                        <div className="w-10 h-10 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow">
                            <span className="font-bold text-sm">100%</span>
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm">Personalizado</p>
                            <p className="text-[10px] text-slate-400 font-medium uppercase">Para você</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 3 (Reviews) - Lateral Direita */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        // AJUSTE CRÍTICO: No mobile (padrão) vai para bottom-28 (embaixo da foto mas acima do card 2)
                        // No desktop (md:) volta para o meio (top-1/2)
                        className="absolute bottom-28 -right-4 md:bottom-auto md:top-1/2 md:-right-8 md:-translate-y-1/2 bg-white p-3 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 z-20 scale-[0.75] md:scale-100 origin-right"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                            ))}
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex gap-0.5 text-brand-yellow text-xs">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">+500 Alunos</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}