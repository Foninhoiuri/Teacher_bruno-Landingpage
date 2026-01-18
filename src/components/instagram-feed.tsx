"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, CheckCircle2 } from "lucide-react";
import { Container } from "./ui/container";

// ============================================================================
// 1. CONFIGURAÇÕES E DADOS PADRÃO (FALLBACK)
// ============================================================================

// URL do seu Webhook n8n para pegar a foto/seguidores atualizados
const WEBHOOK_PROFILE = "https://n8n.igoriurialves.com.br/webhook/instagram-profile";

// Dados que aparecem caso a API falhe ou enquanto carrega
const FALLBACK_PROFILE = {
    username: "@teacher.brunofernandes",
    name: "Teacher Bruno Fernandes",
    img: "/AboutMe.png", // Certifique-se que essa imagem existe na pasta public
    followers: "1.580",
    posts: "340",
    link: "https://www.instagram.com/teacher.brunofernandes/"
};

// ============================================================================
// 2. LÓGICA DE CARREGAMENTO DOS VÍDEOS (REELS)
// ============================================================================

// Isso carrega todos os .mp4 da pasta automaticamente.
// ATENÇÃO: Verifique se o caminho '../assets/videos/*.mp4' está correto para sua estrutura.
const videoModules = import.meta.glob('../assets/videos/*.mp4', { eager: true, query: '?url', import: 'default' });

// Transforma os arquivos encontrados em uma lista organizada
const REELS = Object.entries(videoModules).map(([path, url]) => {
    // Pega o nome do arquivo (ex: "Video1.mp4") para usar como ID
    const fileName = path.split('/').pop() || "";
    const id = fileName.replace('.mp4', '');

    return {
        id,
        videoUrl: url as string,
        link: `https://www.instagram.com/teacher.brunofernandes/reel/${id}/`
    };
});

// ============================================================================
// 3. SUB-COMPONENTE: CARD DO VÍDEO (InstaCard)
// ============================================================================
// ============================================================================
// 3. SUB-COMPONENTE: CARD DO VÍDEO (InstaCard) - OTIMIZADO (Lazy Load)
// ============================================================================
function InstaCard({ post }: { post: any }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLAnchorElement>(null);

    // 1. Detecta se o card entrou na viewport (para injetar a tag <video>)
    const isInViewport = useInView(containerRef, { margin: "200px 0px 200px 0px", once: true });

    // 2. Detecta se está no CENTRO (para dar Play/Pause)
    const isInCenter = useInView(containerRef, { margin: "0px -15% 0px -15%" });

    const [isBroken, setIsBroken] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Efeito: Play/Pause baseado no centro, mas só se o vídeo existir
    useEffect(() => {
        if (!videoRef.current || isBroken || !isInViewport) return;

        // GARANTIA DE MUDO
        videoRef.current.muted = true;

        if (isInCenter) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => { /* Ignora erros de autoplay */ });
            }
        } else {
            videoRef.current.pause();
        }
    }, [isInCenter, isBroken, isInViewport]);

    // Oculta se estiver quebrado
    if (isBroken) return null;

    return (
        <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={containerRef}
            className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] rounded-3xl overflow-hidden group border border-slate-100 shadow-md cursor-pointer mr-8 bg-[var(--color-brand-gray)]/10"
        >
            {/* Esqueleto / Placeholder enquanto não está na viewport ou carregando */}
            <div className={`absolute inset-0 bg-[var(--color-brand-gray)] flex items-center justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-20'}`}>
                <Instagram className="w-10 h-10 text-[var(--color-brand-white)] opacity-50" />
            </div>

            {/* Injeta o vídeo APENAS quando estiver próximo da viewport */}
            {isInViewport && (
                <video
                    ref={videoRef}
                    src={post.videoUrl}
                    muted
                    loop
                    playsInline
                    preload="none"
                    onLoadedData={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onError={() => setIsBroken(true)}
                />
            )}

            {/* Overlay Escuro + Botão (Hover) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 transform scale-90 text-[var(--color-brand-blue)] border border-transparent group-hover:scale-100 btn-yellow hover:text-[var(--color-brand-white)]">
                    <Instagram className="w-6 h-6" />
                    Ver no Instagram
                </div>
            </div>
        </a>
    );
}

// ============================================================================
// 4. COMPONENTE PRINCIPAL (InstagramFeed)
// ============================================================================
export function InstagramFeed() {
    const [profile, setProfile] = useState<any>(FALLBACK_PROFILE);

    // Busca os dados atualizados do perfil no n8n (Foto, Seguidores, Posts)
    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await fetch(WEBHOOK_PROFILE);
                if (response.ok) {
                    const data = await response.json();
                    // Só atualiza se vierem dados válidos
                    if (data.followers) {
                        setProfile({
                            ...data,
                            // Garante link HTTPS limpo e remove @ duplicado se houver
                            link: `https://www.instagram.com/${data.username?.replace('@', '')}/`
                        });
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar perfil, usando fallback.");
                // Se der erro, mantém o FALLBACK_PROFILE definido lá em cima
            }
        }
        fetchProfile();
    }, []);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden" id="instagram">

            {/* --- PARTE 1: O CARROSSEL DE VÍDEOS --- */}
            <div className="w-full relative min-h-[450px]">
                {/* Degradês laterais para suavizar a entrada/saída */}
                <div className="absolute left-0 top-0 bottom-0 w-15 md:w-60 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-15 md:w-60 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                {/* Container da Animação */}
                <div
                    className="flex overflow-hidden"
                >
                    <motion.div
                        className="flex"
                        animate={{
                            x: [0, -1000], // Adjust this value dynamically if possible, or use a safe estimate/percentage
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "mirror", // Make it go back and forth
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Render original REELS once or twice depending on width need, avoiding massive duplication */}
                        {[...REELS, ...REELS, ...REELS].map((post, index) => (
                            <InstaCard key={`${post.id}-${index}`} post={post} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* --- PARTE 2: O HEADER DO PERFIL (Efeito Vidro) --- */}
            <Container className="rounded-full relative z-20 -mt-16">
                {profile ? (
                    // Card com efeito Glassmorphism (Vidro)
                    <div className="bg-white/55 backdrop-blur-xl p-4 md:p-6 rounded-[2.5rem] md:rounded-full shadow-xl shadow-slate-200/50 border border-white/35 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex flex-col md:flex-row items-center h-auto md:h-[60px] justify-between gap-6 md:gap-8">

                            {/* Bloco 1: Foto e Nome */}
                            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                                <a href={profile.link} target="_blank" rel="noreferrer" className="group relative block cursor-pointer">

                                    {/* 1. O Anel Gradiente de fundo */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full opacity-100 group-hover:opacity-80 transition-opacity duration-300" />

                                    {/* 2. O container branco para fazer o "gap" */}
                                    <div className="relative p-[2px] rounded-full">
                                        {/* 3. A Imagem */}
                                        <img
                                            src={profile.img}
                                            alt={profile.name}
                                            className="w-16 h-16 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </a>
                                <div>
                                    {/* Nome em Destaque (Bold) */}
                                    <h3 className="text-xl font-bold text-[var(--color-brand-blue)] flex items-center justify-center md:justify-start gap-1">
                                        {profile.name}
                                    </h3>
                                    {/* Username e Selo de Verificado logo abaixo */}
                                    <div className="flex items-center justify-center md:justify-start gap-1">
                                        <p className="text-slate-500 text-sm font-medium">{profile.username}</p>
                                        <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-50" />
                                    </div>
                                </div>
                            </div>

                            {/* Bloco 2: Divisor Vertical (Apenas Desktop) */}
                            <div className="hidden md:block w-px h-16 bg-brand-blue/20" />

                            {/* Bloco 3: Estatísticas (Seguidores/Posts) */}
                            <div className="flex gap-8 text-center">
                                <div>
                                    <span className="block text-xl font-bold text-[var(--color-brand-blue)]">{profile.followers}</span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Seguidores</span>
                                </div>
                                <div>
                                    <span className="block text-xl font-bold text-[var(--color-brand-blue)]">{profile.posts}</span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Posts</span>
                                </div>
                            </div>

                            {/* Bloco 4: Botão de Ação */}
                            <a href={profile.link} target="_blank" rel="noopener noreferrer" className="flex items-center border border-transparent gap-2 px-6 py-3.5 font-bold rounded-full w-full md:text-[var(--color-brand-blue)] md:w-auto justify-center btn-yellow hover:text-[var(--color-brand-white)]">
                                <Instagram className="w-4 h-4" />
                                Seguir no Insta
                            </a>
                        </div>
                    </div>
                ) : (
                    // Skeleton Loading (Se ainda estiver carregando ou sem dados)
                    <div className="max-w-4xl mx-auto h-32 bg-white/20 backdrop-blur-md rounded-[2.5rem] animate-pulse" />
                )}
            </Container>
        </section>
    );
}