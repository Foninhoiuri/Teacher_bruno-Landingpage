import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useState } from "react";

const PLANS = [
    {
        name: "Mensal",
        price: "R$ 350",
        period: "/mês",
        features: ["2 aulas por semana", "Material digital incluso", "Acesso à comunidade", "Feedback mensal"],
        highlight: false,
        color: "bg-white"
    },
    {
        name: "Trimestral",
        price: "R$ 315",
        period: "/mês",
        tag: "Mais Popular",
        features: ["2 aulas por semana", "Material digital incluso", "Acesso à comunidade", "Feedback quinzenal", "1 aula bônus de conversação"],
        highlight: true,
        color: "bg-white"
    },
    {
        name: "Semestral",
        price: "R$ 290",
        period: "/mês",
        features: ["2 aulas por semana", "Material digital incluso", "Acesso à comunidade", "Feedback semanal", "2 aulas bônus de conversação"],
        highlight: false,
        color: "bg-white"
    }
];

export function Services() { // Keeping component name 'Services' for compatibility
    const [billingCycle, setBillingCycle] = useState("Mensal");

    return (
        <section id="planos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full shadow-sm mb-6">
                        <Zap className="w-4 h-4 text-brand-yellow" />
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Investimento</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                        Escolha o plano ideal <br /> para você.
                    </h2>

                    {/* Toggle */}
                    <div className="flex items-center bg-slate-100 p-1.5 rounded-full">
                        {["Mensal", "Anual", "Personalizado"].map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billingCycle === cycle
                                    ? "bg-slate-900 text-white shadow-md"
                                    : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                {cycle}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PLANS.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-[2rem] border border-slate-100 hover:border-brand-yellow hover:shadow-xl transition-all ${plan.highlight ? "shadow-2xl scale-105 z-10" : "shadow-lg bg-white"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                                    {plan.tag}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-slate-500 mb-4">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                                    <span className="text-slate-400 font-medium">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                        <div className="mt-0.5 w-5 h-5 bg-brand-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-brand-dark" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-bold text-sm transition-all ${plan.highlight
                                ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
                                : "bg-white border-2 border-slate-100 text-slate-900 hover:border-slate-900"
                                }`}>
                                Escolher Plano
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
