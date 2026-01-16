import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const REVIEWS = [
    {
        id: 1,
        name: "Ana Silva",
        role: "Dev Frontend",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        text: "O método do Bruno mudou minha carreira. Consegui minha primeira vaga internacional em 3 meses.",
        rating: 5
    },
    {
        id: 2,
        name: "Carlos Mendes",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        text: "Aulas focadas, sem perda de tempo. A tradução e o contexto cultural fizeram toda a diferença.",
        rating: 5
    },
    {
        id: 3,
        name: "Beatriz Costa",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        text: "Finalmente destraveis meu speaking! As aulas de conversação são intensas e muito divertidas.",
        rating: 5
    }
];

export function SocialProof() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => {
        setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    };

    return (
        <section className="py-24 bg-[#F1F5F9]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
                        <MessageCircle className="w-4 h-4 text-brand-yellow" />
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Depoimentos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
                        O que meus alunos <br /> dizem.
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-10">
                        <button
                            onClick={prevReview}
                            className="p-4 bg-brand-blue text-white rounded-full hover:bg-slate-700 transition-colors shadow-lg"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-10">
                        <button
                            onClick={nextReview}
                            className="p-4 bg-brand-blue text-white rounded-full hover:bg-slate-700 transition-colors shadow-lg"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Review Card */}
                    <div className="overflow-hidden">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-xl flex flex-col md:flex-row gap-6 md:gap-10 items-stretch"
                        >
                            {/* Image Left */}
                            <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-auto rounded-[2rem] overflow-hidden relative">
                                <img
                                    src={REVIEWS[activeIndex].image}
                                    alt={REVIEWS[activeIndex].name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Right */}
                            <div className="flex-1 flex flex-col justify-center py-4 pr-4">
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
                                    ))}
                                </div>

                                <blockquote className="text-xl md:text-2xl font-medium text-brand-blue leading-relaxed mb-8">
                                    "{REVIEWS[activeIndex].text}"
                                </blockquote>

                                <div>
                                    <h4 className="text-lg font-bold text-brand-blue">{REVIEWS[activeIndex].name}</h4>
                                    <p className="text-slate-500">{REVIEWS[activeIndex].role}</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
