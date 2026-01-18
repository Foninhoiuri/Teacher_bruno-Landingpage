"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "./ui/container";

export function AboutMe() {
    return (
        <section className="relative w-full py-12 lg:py-24 bg-slate-50 overflow-hidden" id="sobre">
            <Container>
                {/* Wrapper relativo para restringir a imagem à largura do container */}
                <div className="relative flex flex-col lg:block">

                    {/* --- IMAGEM DE FUNDO (Agora dentro do Container) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full h-[300px] md:h-[400px] lg:absolute lg:inset-y-0 lg:h-full lg:w-[48%] z-0 rounded-2xl overflow-hidden shadow-lg lg:shadow-none mb-8 lg:mb-0"
                    >
                        <img
                            src="/AboutMe.png"
                            alt="Teacher Bruno Fernandes"
                            className="w-full h-full object-cover object-top lg:object-center"
                        />
                        {/* Overlay sutil */}
                        <div className="absolute inset-0 bg-black/10 lg:bg-transparent" />
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Espaço vazio para a imagem (Coluna Esquerda) */}
                        <div className="hidden lg:block h-full min-h-[400px]" />

                        {/* --- CONTEÚDO DE TEXTO (Coluna Direita) --- */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6 py-4 lg:py-8"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full w-fit shadow-sm">
                                <span className="w-2 h-2 bg-brand-yellow rounded-full" />
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Sobre Mim</span>
                            </div>

                            {/* Título */}
                            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-blue)] leading-tight">
                                Muito prazer, <br />
                                eu sou o <span className="text-[var(--color-brand-yellow)]">Teacher Bruno.</span>
                            </h2>

                            {/* Texto Corrido */}
                            <div className="text-base md:text-lg text-slate-600 leading-relaxed space-y-4">
                                <p>
                                    Apaixonado pelo idioma, comecei a estudar numa escola de bairro quando tinha 14 anos de idade. Sempre me destaquei pelo fato de gostar da língua, e foi justamente esse fato que me ajudou a dar aulas assim que terminei meu tempo estudando nessa escola.
                                </p>
                                <p>
                                    Em 2018, ingressei na franquia de idiomas que mais cresce no país, <strong>KNN Idiomas</strong>. Fiquei surpreso com a eficiência do método da escola e me desenvolvi como jamais poderia imaginar nos quase três anos que passei tendo contato com pessoas incríveis e participando de treinamentos com especialistas da área.
                                </p>
                                <p className="font-medium text-[var(--color-brand-blue)]">
                                    Agora trabalhando exclusivamente pra mim, trago para meus alunos o melhor de todos os métodos que já conheci, eliminando intermediários desnecessários e entendendo a dificuldade e necessidade exclusiva de cada aluno, respeitando as diferenças e extraindo toda a capacidade de cada um daqueles que me escolhem como treinador, teacher ou amigo pessoal!
                                </p>
                            </div>

                            {/* Destaques */}
                            <div className="flex flex-col sm:flex-row gap-6 mt-2 pt-4 border-t border-slate-200">
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand-yellow/10 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-yellow)]" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Experiência Real</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand-yellow/10 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-yellow)]" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Método Exclusivo</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}