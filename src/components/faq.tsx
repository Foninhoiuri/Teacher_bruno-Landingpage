import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const FAQS = [
    {
        question: "Como funcionam as aulas personalizadas?",
        answer: "As aulas são 100% adaptadas ao seu objetivo (viagem, trabalho, exames). Antes de começar, fazemos uma avaliação completa para definir sua trilha de aprendizado."
    },
    {
        question: "Qual a duração de cada aula?",
        answer: "As aulas têm duração de 50 minutos, focadas totalmente na prática e conversação. Você pode agendar horários flexíveis de acordo com sua rotina."
    },
    {
        question: "Oferecem certificado ao final do curso?",
        answer: "Sim! Ao completar cada nível ou módulo específico, você recebe um certificado detalhado com as competências adquiridas, válido para LinkedIn e currículo."
    },
    {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim, nossos planos mensais não possuem fidelidade. Você pode pausar ou cancelar quando quiser, sem multas ou taxas escondidas."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                {/* Left: Header & CTA */}
                <div className="lg:col-span-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">FAQ</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Dúvidas <br /> Frequentes
                    </h2>
                    <p className="text-slate-500 mb-8">
                        Não achou o que procurava? Entre em contato direto com nosso time.
                    </p>

                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg">
                        <div className="flex -space-x-3 mb-4">
                            {[1, 2, 3].map(i => (
                                <img key={i} src={`https://source.unsplash.com/random/100x100?face&sig=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-white" />
                            ))}
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">Ainda tem dúvidas?</h4>
                        <p className="text-sm text-slate-500 mb-4">Fale com a gente no WhatsApp.</p>
                        <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">
                            Falar com Suporte
                        </button>
                    </div>
                </div>

                {/* Right: Accordion */}
                <div className="lg:col-span-2 space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                                <div className={`p-1 rounded-full border transition-colors ${openIndex === idx ? "bg-slate-900 border-slate-900 text-white" : "border-slate-200 text-slate-400"}`}>
                                    {openIndex === idx ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-500 leading-relaxed bg-slate-50/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
