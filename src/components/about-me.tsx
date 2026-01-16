"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutMe() {
    return (
        <section className="relative w-full py-24 bg-white overflow-hidden" id="sobre">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* COLUNA 1: IMAGEM (Esquerda) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center lg:justify-start"
                >
                    {/* Elemento Decorativo (Blob Amarelo atrás) - Usando CSS variable */}
                    <div className="absolute -left-4 top-4 w-full h-full bg-brand-yellow/20 rounded-[2.5rem] -z-10 rotate-[-3deg]" />

                    {/* Container da Imagem */}
                    <div className="relative w-full max-w-[500px] aspect-square rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-xl bg-slate-200">
                        <img
                            src="/AboutMe.jpg"
                            alt="Teacher Bruno Fernandes"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>

                {/* COLUNA 2: TEXTO (Direita) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full w-fit">
                        {/* Bolinha com a cor da marca */}
                        <span className="w-2 h-2 bg-brand-yellow rounded-full" />
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Sobre Mim</span>
                    </div>

                    {/* Título */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Muito prazer, <br />
                        eu sou o <span className="text-brand-yellow">Teacher Bruno.</span>
                    </h2>

                    {/* Texto Corrido */}
                    <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                        <p>
                            Apaixonado pelo idioma, comecei a estudar numa escola de bairro quando tinha 14 anos de idade. Sempre me destaquei pelo fato de gostar da língua, e foi justamente esse fato que me ajudou a dar aulas assim que terminei meu tempo estudando nessa escola.
                        </p>
                        <p>
                            Em 2018, ingressei na franquia de idiomas que mais cresce no país, <strong>KNN Idiomas</strong>. Fiquei surpreso com a eficiência do método da escola e me desenvolvi como jamais poderia imaginar nos quase três anos que passei tendo contato com pessoas incríveis e participando de treinamentos com especialistas da área.
                        </p>
                        <p className="font-medium text-slate-900">
                            Agora trabalhando exclusivamente pra mim, trago para meus alunos o melhor de todos os métodos que já conheci, eliminando intermediários desnecessários e entendendo a dificuldade e necessidade exclusiva de cada aluno, respeitando as diferenças e extraindo toda a capacidade de cada um daqueles que me escolhem como treinador, teacher ou amigo pessoal!
                        </p>
                    </div>

                    {/* Destaques */}
                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-brand-yellow/10 p-1 rounded-full">
                                <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">Experiência Real</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-brand-yellow/10 p-1 rounded-full">
                                <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">Método Exclusivo</span>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}