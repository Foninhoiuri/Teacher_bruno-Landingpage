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

export function Plans() { // Keeping component name 'Services' for compatibility
    const [billingCycle, setBillingCycle] = useState("Mensal");

    return (
        <section id="planos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full shadow-sm mb-6">
                        <Zap className="w-4 h-4 text-brand-yellow" />
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Investimento</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8">
                        Escolha o plano ideal <br /> para você.
                    </h2>

                    {/* Toggle */}
                    <div className="flex flex-wrap items-center justify-center bg-slate-100 p-1.5 rounded-3xl md:rounded-full">
                        {["Mensal", "Anual", "Personalizado"].map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${billingCycle === cycle
                                    ? "bg-brand-blue text-white shadow-md"
                                    : "text-slate-500 hover:text-brand-blue"
                                    }`}
                            >
                                {cycle}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PLANS.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`group relative flex flex-col p-8 rounded-[2rem] border border-slate-100 bg-white transition-all duration-300
                                ${plan.highlight ? "shadow-xl scale-105 z-10 border-brand-yellow" : "shadow-lg"}
                                hover:-translate-y-2 hover:shadow-xl hover:bg-brand-yellow hover:border-transparent hover:shadow-brand-yellow/40`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-brand-yellow px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-sm z-20">
                                    {plan.tag}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-slate-500 mb-4 group-hover:text-brand-blue transition-colors">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-brand-blue tracking-tight">{plan.price}</span>
                                    <span className="text-slate-400 font-medium group-hover:text-slate-800 transition-colors">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium group-hover:text-brand-blue transition-colors">
                                        <div className="mt-0.5 w-5 h-5 bg-brand-yellow/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/70 transition-colors">
                                            <Check className="w-3 h-3 text-brand-dark group-hover:text-black/60 transition-colors" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2
                                bg-white border border-slate-200 text-slate-700 shadow-sm
                                group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent`}>
                                Escolher Plano
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
