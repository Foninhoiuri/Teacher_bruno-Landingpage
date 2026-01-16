"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink, Play, VolumeX, Volume2, CheckCircle2, Loader2 } from "lucide-react";

// --- TYPES ---
interface InstagramProfile {
  username: string;
  name: string;
  followers: string;
  posts: string;
  img: string;
  link: string;
}

interface InstagramPost {
  id: string;
  type: string;
  link: string;
  videoUrl: string;
  thumbnail: string;
  likes: string;
  comments: string;
  caption: string;
}

// --- CONFIGURAÇÃO ---
const LINKS_TO_FETCH = [
  "https://www.instagram.com/teacher.brunofernandes/reel/DSdLlIpkeRz/?hl=pt-br",
  "https://www.instagram.com/teacher.brunofernandes/reel/DSXWQxskSy6/?hl=pt-br",
  "https://www.instagram.com/teacher.brunofernandes/reel/DSIpOKeEVDZ/?hl=pt-br",
  "https://www.instagram.com/teacher.brunofernandes/reel/DRaimGlERcB/?hl=pt-br",
  "https://www.instagram.com/teacher.brunofernandes/reel/DRWse8_kYO3/?hl=pt-br",
  "https://www.instagram.com/teacher.brunofernandes/reel/DRUryVVkayy/?hl=pt-br",
  "https://www.instagram.com/teacher.brunofernandes/reel/DQwdxNDkX5q/?hl=pt-br",
  "https://www.instagram.com/teacher.brunofernandes/reel/DQuNaqXCDsF/?hl=pt-br"
];

const WEBHOOK_PROFILE = "https://n8n.igoriurialves.com.br/webhook/instagram-profile";
const WEBHOOK_POSTS = "https://n8n.igoriurialves.com.br/webhook/instagram-reels-list";

// --- COMPONENTE CARD ---
function InstaCard({ post }: { post: InstagramPost }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef(null);
  const isInCenter = useInView(containerRef, { margin: "0px -20% 0px -20%" });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isBroken, setIsBroken] = useState(false);

  useEffect(() => {
    if (!videoRef.current || isBroken) return;

    if (isInCenter) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setIsPlaying(false));
      }
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isInCenter, isBroken]);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  if (isBroken || !post.videoUrl) return null;

  return (
    <div
      ref={containerRef}
      className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] rounded-3xl overflow-hidden group bg-black border border-slate-100 shadow-md transition-transform duration-300 hover:scale-[1.02]"
    >
      <video
        ref={videoRef}
        src={post.videoUrl}
        poster={post.thumbnail}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover bg-slate-900"
        onError={() => {
          console.warn("Falha ao carregar video:", post.videoUrl);
          setIsBroken(true);
        }}
      />

      <button 
        onClick={toggleMute}
        className="absolute top-3 right-3 bg-black/50 p-2 rounded-full backdrop-blur-sm z-30 hover:bg-black/70 transition-colors"
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
      </button>

      <div className="absolute top-3 left-3 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm z-10">
        <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
          <Play className="w-3 h-3 fill-white" /> Reel
        </span>
      </div>

      <a 
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 text-white z-20 cursor-pointer"
      >
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
        <div className="mt-2 px-4 py-2 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-2 hover:bg-white/30 transition-colors">
          Ver no Instagram <ExternalLink className="w-3 h-3" />
        </div>
      </a>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export function InstagramFeed() {
  const controls = useAnimation();

  const [profile, setProfile] = useState<InstagramProfile | null>(null);
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    if (posts.length > 0) {
      controls.start({
        x: "-50%",
        transition: { ease: "linear", duration: Math.max(20, posts.length * 5), repeat: Infinity }
      });
    }
  }, [controls, posts]);

  // 1. Fetch PERFIL
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(WEBHOOK_PROFILE);
        if (response.ok) {
          const data = await response.json();
          if (data.followers) {
            setProfile({
              ...data,
              link: `https://www.instagram.com/${data.username?.replace('@', '')}/`
            });
          }
        }
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    }
    fetchProfile();
  }, []);

  // 2. Fetch POSTS
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoadingPosts(true);

        const response = await fetch(WEBHOOK_POSTS, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ links: LINKS_TO_FETCH }) 
        });

        if (response.ok) {
           const jsonResult = await response.json();
           const rawPosts = jsonResult[0]?.posts || [];

           // --- CORREÇÃO DO CAMINHO ---
           const processedPosts = rawPosts.map((post: any) => ({
             ...post,
             // Transforma "video/arquivo.mp4" em "/videos/arquivo.mp4"
             videoUrl: post.videoUrl ? `/${post.videoUrl.replace('video/', 'videos/')}` : '',
             // Transforma "image/arquivo.png" em "/images/arquivo.png" (assumindo pasta 'images')
             thumbnail: post.thumbnail ? `/${post.thumbnail.replace('image/', 'images/')}` : '',
           }));

           setPosts([...processedPosts, ...processedPosts]);
        } else {
           console.error("Erro no status do webhook:", response.status);
           // Se der erro, tenta usar os dados vazios para não quebrar a página
           setPosts([]); 
        }
      } catch (error) {
        console.error("Erro ao conectar no n8n:", error);
      } finally {
        setLoadingPosts(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="instagram">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* HEADER */}
        {profile ? (
          <div className="bg-white p-4 md:p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <a href={profile.link} target="_blank" rel="noreferrer" className="relative group cursor-pointer hover:scale-105 transition-transform">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity blur-sm" />
                  <img src={profile.img} alt={profile.name} className="relative w-20 h-20 rounded-full border-4 border-white object-cover shadow-sm bg-slate-100" />
                </a>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-1">
                    {profile.username}
                    <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">{profile.name}</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-slate-100" />

              <div className="flex gap-8 text-center">
                <div>
                  <span className="block text-xl font-bold text-slate-900">{profile.followers}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Seguidores</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-slate-900">{profile.posts}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Posts</span>
                </div>
              </div>

              <a href={profile.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#FFDD00] text-slate-900 font-bold rounded-full hover:brightness-95 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full md:w-auto justify-center">
                <Instagram className="w-4 h-4" />
                Seguir no Insta
              </a>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto h-32 bg-slate-200/50 rounded-[2.5rem] animate-pulse flex items-center justify-center text-slate-400 gap-2">
             <Loader2 className="animate-spin w-5 h-5"/> Carregando Perfil...
          </div>
        )}
      </div>

      {/* CARROSSEL */}
      <div className="w-full relative min-h-[500px]">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {loadingPosts ? (
          <div className="flex flex-col items-center justify-center h-[450px] w-full gap-3 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-yellow-500" />
            <span className="text-sm font-medium">Sincronizando feed...</span>
          </div>
        ) : (
          <div 
             className="flex overflow-hidden py-4"
             onMouseEnter={() => controls.stop()} 
             onMouseLeave={() => controls.start({ x: "-50%", transition: { ease: "linear", duration: Math.max(20, posts.length * 5), repeat: Infinity } })}
          >
            <motion.div className="flex gap-6 px-6" animate={controls}>
              {posts.map((post, index) => (
                <InstaCard key={`${post.id}-${index}`} post={post} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
