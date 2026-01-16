import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";


export function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white pt-24 pb-12 mt-32">
            {/* OVERLAPPING CTA CARD */}
            <div className="absolute -top-24 left-0 right-0 px-6">
                <div className="max-w-5xl mx-auto bg-brand-yellow rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                            Leve seu inglês para o próximo nível.
                        </h2>
                        <p className="text-slate-800 font-medium text-lg">
                            Agende uma avaliação gratuita e descubra seu nível real.
                        </p>
                    </div>
                    <button className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-whatsapp font-bold text-lg rounded-full shadow-lg hover:bg-green-50 transition-colors whitespace-nowrap">
                        <MessageCircle className="w-5 h-5" />
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
                            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
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
