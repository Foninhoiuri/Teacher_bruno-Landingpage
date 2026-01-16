"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink, VolumeX, CheckCircle2 } from "lucide-react";

// --- CONFIGURAÇÃO ---
const WEBHOOK_PROFILE = "https://n8n.igoriurialves.com.br/webhook/instagram-profile";

const FALLBACK_PROFILE = {
    username: "@teacher.brunofernandes",
    name: "Teacher Bruno Fernandes",
    img: "/AboutMe.jpg",
    followers: "452k",
    posts: "1.2k",
    link: "https://www.instagram.com/teacher.brunofernandes/"
};

// Dados Estáticos dos Reels
const REELS = [
    {
        id: "DSIpOKeEVDZ",
        likes: "856",
        comments: "32",
        caption: "Como destravar sua fala em reuniões internacionais. 💬"
    },
    {
        id: "DRaimGlERcB",
        likes: "2.1k",
        comments: "120",
        caption: "Dica rápida de pronúncia para impressionar! ✨ #pronuncia"
    },
    {
        id: "DRWse8_kYO3",
        likes: "945",
        comments: "28",
        caption: "Vocabulário essencial para Tech Recruiters. 💻"
    },
    {
        id: "DQq3moWkaEh",
        likes: "1.5k",
        comments: "55",
        caption: "Pare de traduzir mentalmente! Pense em inglês. 🧠"
    }
];

// --- COMPONENTE CARD ---
function InstaCard({ post }: { post: any }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef(null);
    const isInCenter = useInView(containerRef, { margin: "0px -15% 0px -15%" });

    // Estados
    const [isBroken, setIsBroken] = useState(false);

    useEffect(() => {
        if (!videoRef.current || isBroken) return;

        if (isInCenter) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay bloqueado pelo navegador, normal
                });
            }
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isInCenter, isBroken]);

    // Se o vídeo deu erro (404 ou formato inválido), remove o card da tela
    if (isBroken) return null;

    return (
        <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={containerRef}
            className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] rounded-3xl overflow-hidden group bg-black border border-slate-100 shadow-md cursor-pointer mr-6"
        >
            <video
                ref={videoRef}
                src={post.videoUrl}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onError={() => setIsBroken(true)} // Se o vídeo não carregar, esconde o card
            />

            <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full backdrop-blur-sm z-10">
                <VolumeX className="w-4 h-4 text-white" />
            </div>

            <div className="absolute top-3 left-3 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-sm z-10">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Reel</span>
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 text-white z-20">
                <div className="flex items-center gap-6 font-bold text-lg">
                    <div className="flex items-center gap-2">
                        <Heart className="w-6 h-6 fill-white" />
                        {post.likes}
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-6 h-6 fill-white" />
                        {post.comments}
                    </div>
                </div>
                <p className="px-6 text-center text-xs font-medium text-white/80 line-clamp-3">
                    {post.caption}
                </p>
                <div className="mt-2 px-4 py-2 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-2">
                    Ver no Instagram <ExternalLink className="w-3 h-3" />
                </div>
            </div>
        </a>
    );
}

// --- COMPONENTE PRINCIPAL ---
export function InstagramFeed() {
    const controls = useAnimation();

    const [profile, setProfile] = useState<any>(FALLBACK_PROFILE);

    // Preparar os posts (Estáticos + Loop Infinito)
    const basePosts = REELS.map(reel => ({
        ...reel,
        videoUrl: `/Instagram/videos/${reel.id}.mp4`,
        link: `https://www.instagram.com/teacher.brunofernandes/reel/${reel.id}`
    }));

    // Multiplicamos para garantir o loop infinito suave em telas grandes
    const displayPosts = [...basePosts, ...basePosts, ...basePosts, ...basePosts];

    // Animação Carrossel
    useEffect(() => {
        controls.start({
            x: "-50%",
            transition: { ease: "linear", duration: 120, repeat: Infinity }
        });
    }, [controls]);

    // 1. Fetch PERFIL (Opcional, mantém info atualizada do perfil)
    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await fetch(WEBHOOK_PROFILE);
                if (response.ok) {
                    const data = await response.json();
                    if (data.followers) {
                        setProfile({
                            ...data,
                            // Garante que o link esteja correto e HTTPS
                            link: `https://www.instagram.com/${data.username?.replace('@', '')}/`
                        });
                        return;
                    }
                }
                throw new Error("Dados inválidos ou incompletos da API");
            } catch (error) {
                console.error("Erro ao carregar perfil (mantendo fallback):", error);
                // Não precisamos fazer nada pois o estado inicial já é o fallback.
                setProfile(FALLBACK_PROFILE); // Redundante mas seguro
            }
        }
        fetchProfile();
    }, []);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden" id="instagram">
            <div className="max-w-7xl mx-auto px-6 mb-16">

                {/* HEADER DO PERFIL */}
                {profile ? (
                    <div className="bg-white p-4 md:p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                                <a href={profile.link} target="_blank" rel="noreferrer" className="relative group cursor-pointer hover:scale-105 transition-transform">
                                    <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity blur-sm" />
                                    <img src={profile.img} alt={profile.name} className="relative w-20 h-20 rounded-full border-4 border-white object-cover shadow-sm" />
                                </a>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-blue flex items-center justify-center md:justify-start gap-1">
                                        {profile.username}
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium">{profile.name}</p>
                                </div>
                            </div>

                            <div className="hidden md:block w-px h-12 bg-slate-100" />

                            <div className="flex gap-8 text-center">
                                <div>
                                    <span className="block text-xl font-bold text-brand-blue">{profile.followers}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Seguidores</span>
                                </div>
                                <div>
                                    <span className="block text-xl font-bold text-brand-blue">{profile.posts}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Posts</span>
                                </div>
                            </div>

                            <a href={profile.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-brand-yellow text-brand-blue font-bold rounded-full hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full md:w-auto justify-center">
                                <Instagram className="w-4 h-4" />
                                Seguir no Insta
                            </a>
                        </div>
                    </div>
                ) : (
                    /* Fallback nunca deve acontecer pois inicializamos com dados */
                    <div className="max-w-4xl mx-auto h-32 bg-slate-200/50 rounded-[2.5rem] animate-pulse" />
                )}
            </div>

            {/* CARROSSEL */}
            <div className="w-full relative min-h-[450px]">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden" onMouseEnter={() => controls.stop()} onMouseLeave={() => controls.start({ x: "-50%", transition: { ease: "linear", duration: 120, repeat: Infinity } })}>
                    <motion.div className="flex" animate={controls}>
                        {displayPosts.map((post, index) => (
                            <InstaCard key={`${post.id}-${index}`} post={post} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
