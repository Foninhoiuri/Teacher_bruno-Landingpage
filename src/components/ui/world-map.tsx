import DottedMap from "dotted-map";
import { useMemo } from "react";

interface Location {
    id: number;
    lat: number;
    lng: number;
}

const LOCATIONS: Location[] = [
    { id: 1, lat: 40.7128, lng: -74.0060 }, // New York
    { id: 2, lat: 48.8566, lng: 2.3522 },   // Paris
    { id: 4, lat: 35.6762, lng: 139.6503 }, // Tokyo
    { id: 5, lat: -33.8688, lng: 151.2093 }, // Sydney
    { id: 6, lat: 51.5074, lng: -0.1278 }, // London
    { id: 7, lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
    { id: 3, lat: -23.5505, lng: -46.6333 }, // Sao Paulo
    { id: 8, lat: -15.7975, lng: -47.8919 }, // Brasilia
    { id: 9, lat: -12.9777, lng: -38.5016 }, // Salvador
    { id: 10, lat: -3.7172, lng: -38.5434 }, // Fortaleza
    { id: 11, lat: -19.9167, lng: -43.9345 }, // Belo Horizonte
    { id: 12, lat: -3.1190, lng: -60.0217 }, // Manaus
    { id: 13, lat: -25.4284, lng: -49.2733 }, // Curitiba
    { id: 14, lat: -8.0476, lng: -34.8770 }, // Recife
    { id: 15, lat: -30.0346, lng: -51.2177 }, // Porto Alegre
    { id: 16, lat: -1.4558, lng: -48.4902 }, // Belem
    { id: 17, lat: -16.6869, lng: -49.2648 }, // Goiania
    { id: 18, lat: -22.9099, lng: -47.0626 }, // Campinas
    { id: 19, lat: -2.5307, lng: -44.3068 }, // Sao Luis
    { id: 20, lat: -9.6662, lng: -35.7351 }, // Maceio
];

export default function WorldMapBackground() {
    const mapSvg = useMemo(() => {
        const map = new DottedMap({ height: 100, grid: "diagonal" });
        LOCATIONS.forEach(loc => {
            map.addPin({
                lat: loc.lat,
                lng: loc.lng,
                svgOptions: { color: "#EAB308", radius: 0.3 },
            });
        });
        return map.getSVG({
            radius: 0.22,
            color: "#a0a3a8ff",
            shape: "hexagon",
            backgroundColor: "#ffffff",
        });
    }, []);

    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 md:opacity-100 overflow-hidden pointer-events-none">
            <div className="relative w-full h-full max-w-[1400px] mx-auto">
                <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
                    alt="World Map"
                    className="w-full h-full object-contain 
                               transform transition-transform duration-700
                               scale-[2.5] origin-[35%_75%] 
                               md:scale-95 md:origin-center"
                />
            </div>
        </div>
    );
};
