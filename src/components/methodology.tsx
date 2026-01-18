import { Video, BookOpen, MessageCircle, PlayCircle, MessageSquare, Users, Star, Lightbulb, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { WhatsAppIcon } from "./icons";

const FEATURES = [
    {
        icon: <BookOpen className="w-6 h-6 text-brand-dark" />,
        title: "Material Próprio & Digital",
        description: "Desenvolvo materiais exclusivos para sua necessidade. 100% digital e gratuito, sem custos extras com livros."
    },
    {
        icon: <MessageCircle className="w-6 h-6 text-brand-dark" />,
        title: "Foco na Conversação",
        description: "Desde a primeira aula. Gramática é ferramenta, não muleta. Aprenda o motivo das coisas e ganhe confiança."
    },
    {
        icon: <PlayCircle className="w-6 h-6 text-brand-dark" />,
        title: "Aulas Gravadas",
        description: "Acesse as gravações para revisar o conteúdo quantas vezes quiser e fixar o aprendizado."
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-brand-dark" />,
        title: "Suporte via WhatsApp",
        description: "Tire dúvidas e pratique diretamente comigo mesmo fora do horário de aula. O aprendizado é contínuo."
    },
    {
        icon: <Users className="w-6 h-6 text-brand-dark" />,
        title: "Desconto por Indicação",
        description: "Indique um amigo e ganhe 10% de desconto fixo na mensalidade enquanto ambos estiverem estudando."
    }
];

const CHALLENGES_STEPS = [
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
        icon: <WhatsAppIcon className="w-4 h-4" />,
    }
];

export function Methodology() {
    return (
        <section className="py-24 bg-white overflow-hidden" id="methodology">
            <Container>

                {/* PART 1: Online Methodology (Demo Video) */}

                {/* PART 2: Challenges / Método Teacher Bruno (Merged from Challenges) */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
                        <div className="bg-brand-yellow/20 rounded-full p-1">
                            <Lightbulb className="w-3 h-3 text-brand-dark" />
                        </div>
                        <span className="text-sm font-bold text-slate-700 tracking-wide">Método Teacher Bruno</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-brand-blue)] mb-4">
                        Inglês sem enrolação e <br />
                        <span className="text-[var(--color-brand-yellow)]">Zero Decoreba.</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        Evolua com bom humor e no seu ritmo. Aulas criadas para você destravar, seja para o trabalho ou para a vida.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    {/* Video Mockup */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-blue bg-slate-800 aspect-video group">
                        <img
                            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop"
                            className="w-full h-full object-cover opacity-80"
                            alt="Video Call"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                <Video className="w-8 h-8 text-white fill-current" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                           Veja um pedacinho da aula 
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[var(--color-brand-yellow)] font-bold tracking-wider uppercase text-sm">Metodologia Online</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-brand-blue)] leading-tight">
                            Evolua suas <span className="underline decoration-brand-yellow decoration-4 underline-offset-4">Skills</span> de onde estiver.
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Aulas dinâmicas, interativas e focadas na prática. Plataforma exclusiva e material de apoio digital.
                        </p>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                            <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 text-brand-dark font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--color-brand-blue)]">Feedback Imediato</h4>
                                <p className="text-sm text-slate-600">Correção de pronúncia e estrutura em tempo real.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {CHALLENGES_STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`group flex flex-col rounded-[2rem] p-2 transition-all duration-300 h-full
                                bg-white shadow-sm border border-slate-100 
                                hover:-translate-y-2 hover:shadow-xl hover:bg-brand-yellow hover:border-transparent hover:shadow-brand-yellow/40`}
                        >
                            <div className="h-48 w-full overflow-hidden rounded-[1.5rem]">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5 pt-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-[var(--color-brand-blue)] mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm mb-6 leading-relaxed flex-1 text-slate-500 font-medium group-hover:text-[var(--color-brand-blue)]">
                                    {step.description}
                                </p>
                                <div className="mt-auto">
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

                {/* PART 3: Detailed Pillars Grid (Original Part 2 of Methodology) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-yellow/50 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-brand-blue)] mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                    {/* Special Highlights Card */}
                    <div className="bg-brand-blue p-8 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Star className="w-6 h-6 text-brand-yellow" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Diferencial Exclusivo</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Além das aulas, você tem acesso direto a mim para tirar dúvidas a qualquer momento. O objetivo é a sua fluência.
                            </p>
                        </div>
                        {/* Decor */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-2xl" />
                    </div>
                </div>

            </Container>
        </section>
    );
}
