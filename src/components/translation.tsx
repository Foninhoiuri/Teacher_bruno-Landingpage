import { motion } from "framer-motion";
import { CheckCircle2, Globe2 } from "lucide-react";

export function Translation() {
    return (
        <section className="py-24 bg-white overflow-hidden" id="traducao">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Image Composition */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                            alt="Translation Services"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <p className="font-bold text-lg">Soluções Corporativas</p>
                                <p className="text-sm text-slate-200">Qualidade e precisão para seu negócio</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-full h-full bg-slate-100 rounded-[3rem] -z-10" />
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-yellow/20 rounded-full blur-2xl -z-10" />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-6 order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full w-fit">
                        <Globe2 className="w-4 h-4 text-brand-yellow" />
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Para Empresas</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
                        Tradução Profissional <br /> & Consultoria.
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        Além do ensino, ofereço serviços especializados de tradução técnica e simultânea para empresas que buscam expandir suas fronteiras sem barreiras linguísticas.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {[
                            "Tradução de Documentos",
                            "Legendagem de Vídeos",
                            "Revisão de Conteúdo",
                            "Consultoria Cultural",
                            "Intérprete para Reuniões",
                            "Localização de Software"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100/50 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all">
                                <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                                <span className="text-slate-700 font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1">
                            Solicitar Orçamento
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
