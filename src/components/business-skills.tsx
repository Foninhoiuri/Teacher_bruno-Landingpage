import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function BusinessSkills() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">

                {/* PART 1: Ferramentas para o Sucesso - Masonry Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm">Carreira & Negócios</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Ferramentas para o <span className="text-brand-yellow">Sucesso</span> Profissional.
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Não basta saber a gramática. É preciso dominar a linguagem corporativa, reuniões, apresentações e negociações internacionais.
                        </p>
                        <div className="flex flex-col gap-4 mt-2">
                            {["Inglês para Reuniões", "Apresentações de Impacto", "Vocabulário Técnico", "Simulações de Entrevista"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Masonry Grid */}
                    <div className="grid grid-cols-2 gap-4 h-[500px] order-1 lg:order-2">
                        <div className="flex flex-col gap-4 mt-12">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                                className="rounded-2xl shadow-lg object-cover h-64 w-full"
                                alt="Business Woman"
                            />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                                className="rounded-2xl shadow-lg object-cover h-40 w-full"
                                alt="Man in Suit"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
                                className="rounded-2xl shadow-lg object-cover h-40 w-full"
                                alt="Meeting"
                            />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop"
                                className="rounded-2xl shadow-lg object-cover h-80 w-full"
                                alt="Handshake"
                            />
                        </div>
                    </div>
                </div>

                {/* PART 1 CONTENT ENDS ABOVE */}
            </div>
        </section>
    );
}
