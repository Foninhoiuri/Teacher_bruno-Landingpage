import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_DOTS = 40;
const RADIUS = 20;

export function ParticleGlobe({ className }: { className?: string }) {
    const [dots, setDots] = useState<{ x: number; y: number; z: number; id: number }[]>([]);

    useEffect(() => {
        // Generate points on a sphere (Fibonacci Sphere algorithm for even distribution)
        const newDots = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

        for (let i = 0; i < NUM_DOTS; i++) {
            const y = 1 - (i / (NUM_DOTS - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y); // radius at y

            const theta = phi * i; // Golden angle increment

            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;

            newDots.push({ x: x * RADIUS, y: y * RADIUS, z: z * RADIUS, id: i });
        }
        setDots(newDots);
    }, []);

    return (
        <div className={`relative flex items-center justify-center perspective-[100px] ${className}`}>
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative w-10 h-10 preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
            >
                {dots.map((dot) => (
                    <div
                        key={dot.id}
                        className="absolute w-[3px] h-[3px] bg-brand-yellow rounded-full"
                        style={{
                            transform: `translate3d(${dot.x}px, ${dot.y}px, ${dot.z}px)`,
                            opacity: (dot.z + RADIUS) / (2 * RADIUS) + 0.2, // Fade back dots
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
