import { Facebook, Instagram, Linkedin } from "lucide-react";


export function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white pt-24 pb-12 mt-32">
            {/* OVERLAPPING CTA CARD */}
            <div className="absolute -top-24 left-0 right-0 px-6">
                <div className="max-w-5xl mx-auto bg-brand-yellow rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                            Leve seu inglês para o próximo nível.
                        </h2>
                        <p className="text-slate-800 font-medium text-lg">
                            Agende uma avaliação gratuita e descubra seu nível real.
                        </p>
                    </div>
                    <button className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-whatsapp font-bold text-lg rounded-full shadow-lg hover:bg-green-50 transition-colors whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        Chamar no WhatsApp
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">

                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.png" alt="Teacher Bruno Logo" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold">Teacher Bruno</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-6">
                            Transformando a maneira como você aprende inglês. Foco em resultados reais e comunicação global.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-brand-blue rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-brand-blue rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-brand-blue rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Navegação</h4>
                        <ul className="space-y-4">
                            {["Início", "Sobre Mim", "Metodologia", "Depoimentos", "Blog"].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-brand-yellow transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Serviços</h4>
                        <ul className="space-y-4">
                            {["Aulas Particulares", "Mentoria B2B", "Tradução Técnica", "Preparatório TOEFL", "Inglês para Viagem"].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-brand-yellow transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li>contato@teacherbruno.com</li>
                            <li>+55 (11) 99999-9999</li>
                            <li>Av. Paulista, 1000 - SP</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
                    <p>&copy; 2025 Teacher Bruno Fernandes. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
