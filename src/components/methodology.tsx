import { Video } from "lucide-react";

export function Methodology() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* PART 2: Evolua suas Skills - Video Call Mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Video Mockup */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-900 bg-slate-800 aspect-video group">
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
                            Live Class
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-6">
                        <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm">Metodologia Online</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
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
                                <h4 className="font-bold text-slate-900">Feedback Imediato</h4>
                                <p className="text-sm text-slate-600">Correção de pronúncia e estrutura em tempo real.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
