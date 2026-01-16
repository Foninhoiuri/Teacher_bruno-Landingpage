import { motion } from "framer-motion";
import { Lightbulb, Zap, Globe, MessageCircle } from "lucide-react";

// Dados (Removi o 'highlight: true' pois agora é tudo via hover)
const STEPS = [
    {
        title: "Aulas Leves e Diretas",
        description: "Aqui você aprende de verdade: sem decoreba, sem vergonha e com muita prática. O foco é a comunicação real.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        cta: "Ver Metodologia",
        icon: <Zap className="w-4 h-4" />,
    },
    {
        title: "Personalizado pra Você",
        description: "Aulas individuais ou em dupla, online e no seu ritmo. Entendo sua dificuldade e necessidade exclusiva.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        cta: "Como Funciona",
        icon: <Lightbulb className="w-4 h-4" />,
    },
    {
        title: "Para o Mundo Real",
        description: "Pra viajar, arrasar no trabalho ou simplesmente entender suas séries favoritas sem legenda!",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        cta: "Ver Resultados",
        icon: <Globe className="w-4 h-4" />,
    },
    {
        title: "Bora Destravar?",
        description: "Quantas oportunidades você já perdeu por não falar inglês? Me chama e vamos resolver isso juntos!",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        cta: "Chamar no Whats",
        icon: <MessageCircle className="w-4 h-4" />,
    }
];

export function PainPoints() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
                        <div className="bg-brand-yellow/20 rounded-full p-1">
                            <Lightbulb className="w-3 h-3 text-brand-dark" />
                        </div>
                        <span className="text-sm font-bold text-slate-700 tracking-wide">Método Teacher Bruno</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Inglês sem enrolação e <br />
                        <span className="text-brand-yellow">Zero Decoreba.</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        Evolua com bom humor e no seu ritmo. Aulas criadas para você destravar, seja para o trabalho ou para a vida.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            // MUDANÇA AQUI: Classes de hover adicionadas para o fundo amarelo
                            className={`group flex flex-col rounded-[2rem] p-2 transition-all duration-300 h-full
                                bg-white shadow-sm border border-slate-100 
                                hover:-translate-y-2 hover:shadow-xl hover:bg-brand-yellow hover:border-transparent hover:shadow-brand-yellow/40`}
                        >
                            {/* Imagem */}
                            <div className="h-48 w-full overflow-hidden rounded-[1.5rem]">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Conteúdo */}
                            <div className="p-5 pt-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                {/* MUDANÇA AQUI: group-hover para escurecer o texto no fundo amarelo */}
                                <p className="text-sm mb-6 leading-relaxed flex-1 text-slate-500 font-medium group-hover:text-slate-900">
                                    {step.description}
                                </p>

                                {/* Botão CTA */}
                                <div className="mt-auto">
                                    {/* MUDANÇA AQUI: group-hover para transformar o botão branco em preto */}
                                    <button className={`w-full py-3 px-6 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2
                                        bg-white border border-slate-200 text-slate-700 shadow-sm
                                        group-hover:bg-slate-900 group-hover:text-white group-hover:border-transparent
                                    `}>
                                        {step.icon}
                                        {step.cta}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}