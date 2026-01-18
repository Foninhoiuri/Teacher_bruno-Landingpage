import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Container } from "./ui/container";

const COMMON_BENEFITS = [
    "Sem taxa de matrícula",
    "Sem custo com material",
    "Sem multa rescisória"
];

const ALL_PLANS = [
    {
        name: "Regular",
        frequency: "1h / semana",
        description: "Ideal para manter contato constante com o idioma.",
        price: "R$ 499,90",
        period: "/mês",
        highlight: false,
        features: [
            "4 aulas mensais",
            "Foco em conversação",
            "Material exclusivo incluso",
            "Acesso à plataforma",
            "Feedback de progresso"
        ],
        buttonText: "Começar Agora"
    },
    {
        name: "Intensivo",
        frequency: "2h / semana",
        description: "Acelere seus resultados com o dobro de prática.",
        price: "R$ 729,90",
        period: "/mês",
        highlight: true,
        tag: "Recomendado",
        features: [
            "8 aulas mensais",
            "Imersão acelerada",
            "Material exclusivo incluso",
            "Acesso à plataforma",
            "Feedback semanal detalhado",
            "Suporte prioritário"
        ],
        buttonText: "Garantir Vaga"
    },
    {
        name: "Personalizado",
        frequency: "Horário Flexível",
        description: "Cronograma montado especificamente para sua rotina.",
        price: "Sob Medida",
        period: "",
        highlight: false,
        isWhatsApp: true,
        icon: "whatsapp",
        features: [
            "Carga horária adaptável",
            "Foco em objetivos específicos",
            "Business English ou Viagens",
            "Preparatório para testes",
            "Consultoria individual"
        ],
        buttonText: "Falar no WhatsApp"
    }
];

export function Plans() {
    const [selectedPlan, setSelectedPlan] = useState(ALL_PLANS[1]);

    return (
        <section id="planos" className="py-24 bg-white">
            <Container>

                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[color-mix(in_srgb,var(--color-brand-yellow),transparent_90%)] border border-[color-mix(in_srgb,var(--color-brand-yellow),transparent_80%)] rounded-full shadow-sm mb-6">
                        <Star className="w-4 h-4 text-[var(--color-brand-yellow)]" fill="currentColor" />
                        <span className="text-xs font-bold text-brand-dark uppercase tracking-wide">Treinamento VIP 2026</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-brand-blue)] mb-6">
                        Investimento que traz <br /> retorno real.
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-lg mb-8">
                        Escolha o formato que melhor se adapta à sua rotina e comece a falar inglês de verdade.
                    </p>

                    {/* Benefits Badge Row */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                        {COMMON_BENEFITS.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                                <Check className="w-4 h-4 text-green-500" />
                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {ALL_PLANS.map((plan, idx) => {
                        const isSelected = selectedPlan.name === plan.name;

                        return (
                            <motion.div
                                key={idx}
                                layout
                                onClick={() => setSelectedPlan(plan)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white transition-all duration-300 cursor-pointer
                                ${isSelected
                                        ? "shadow-2xl border-2 border-[var(--color-brand-yellow)] scale-105 z-10"
                                        : "shadow-xl border border-slate-100 hover:border-[color-mix(in_srgb,var(--color-brand-yellow),transparent_70%)] hover:shadow-2xl opacity-75 hover:opacity-100"
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-[var(--color-brand-yellow)] px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-lg z-20 whitespace-nowrap">
                                        {plan.tag}
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-slate-700">{plan.name}</h3>
                                        {plan.name === "Personalizado" ? (
                                            <Zap className="w-6 h-6 text-[var(--color-brand-yellow)]" fill="currentColor" />
                                        ) : (
                                            <span className="text-xs font-bold text-[color-mix(in_srgb,var(--color-brand-blue),transparent_30%)] bg-[color-mix(in_srgb,var(--color-brand-blue),transparent_95%)] px-3 py-1 rounded-full">
                                                {plan.frequency}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-500 text-sm h-10 mb-6 leading-relaxed">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`font-extrabold text-[var(--color-brand-blue)] tracking-tight ${plan.price === "Sob Medida" ? "text-4xl" : "text-5xl"}`}>
                                            {plan.price}
                                        </span>
                                        {plan.period && <span className="text-slate-400 font-medium">{plan.period}</span>}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-2 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                            <div className="mt-0.5 w-5 h-5 bg-[color-mix(in_srgb,var(--color-brand-yellow),transparent_90%)] rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-brand-dark" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Selection Indicator */}
                                <div className={`mt-6 flex justify-center transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="bg-brand-yellow/20 text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                        <Check className="w-3 h-3" /> Selecionado
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* --- Dynamic CTA Button --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={selectedPlan.name}
                    className="flex flex-col items-center justify-center mt-12"
                >
                    <button
                        onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const isWhatsApp = (selectedPlan as any).isWhatsApp;
                            if (isWhatsApp) {
                                openWhatsApp(WHATSAPP_MESSAGES.PERSONALIZED);
                            } else {
                                openWhatsApp(WHATSAPP_MESSAGES.PLAN_INTEREST(selectedPlan.name));
                            }
                        }}
                        className="group relative flex items-center gap-3 btn-green px-8 py-4 rounded-full text-lg font-bold min-w-[300px] justify-center"
                    >
                        <WhatsAppIcon className="w-6 h-6" />
                        <span>{selectedPlan.buttonText} - {selectedPlan.name}</span>
                        <div className="absolute -right-2 -top-2 w-5 h-5 bg-brand-yellow rounded-full animate-pulse border-2 border-white"></div>
                    </button>
                    <p className="mt-4 text-slate-400 text-sm font-medium">
                        Clique para falar diretamente com o professor no WhatsApp
                    </p>
                </motion.div>

            </Container>
        </section>
    );
}
