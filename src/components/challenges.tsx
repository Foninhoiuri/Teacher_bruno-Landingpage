import { motion } from "framer-motion";
import { Lightbulb, Zap, Globe } from "lucide-react";

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
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>,
    }
];

export function Challenges() {
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

                    <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
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
                                <h3 className="text-xl font-bold text-brand-blue mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                {/* MUDANÇA AQUI: group-hover para escurecer o texto no fundo amarelo */}
                                <p className="text-sm mb-6 leading-relaxed flex-1 text-slate-500 font-medium group-hover:text-brand-blue">
                                    {step.description}
                                </p>

                                {/* Botão CTA */}
                                <div className="mt-auto">
                                    {/* MUDANÇA AQUI: group-hover para transformar o botão branco em preto */}
                                    <button className={`w-full py-3 px-6 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2
                                        bg-white border border-slate-200 text-slate-700 shadow-sm
                                        group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent
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
