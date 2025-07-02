'use client';
import React, { useRef, useEffect, useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ProjectionConfig,
    Point,
}

    from 'react-simple-maps';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { geoEqualEarth } from 'd3-geo';
import { FaPlane } from 'react-icons/fa';

const INDIA_COORDS: [number, number] = [78.9629, 20.5937];
const UK_COORDS: [number, number] = [-3.435973, 55.378051];

// ✅ Correct file path (served from public/)
const geoUrl = '/world-countries.json';

const projectionConfig: ProjectionConfig = { scale: 230 };

const FlightAnimation: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const angle = useMotionValue(-60);

    const prevX = useRef(0);
    const prevY = useRef(0);

    const [screenStart, setScreenStart] = useState<Point | null>(null);
    const [screenEnd, setScreenEnd] = useState<Point | null>(null);

    useEffect(() => {
        const projection = geoEqualEarth().scale(230).translate([500, 300]);
        const start = projection(INDIA_COORDS);
        const end = projection(UK_COORDS);
        if (start && end) {
            setScreenStart(start);
            setScreenEnd(end);
        }
    }, []);

    useAnimationFrame(() => {
        const dx = x.get() - prevX.current;
        const dy = y.get() - prevY.current;

        if (dx !== 0 || dy !== 0) {
            const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
            angle.set(newAngle);
        }

        prevX.current = x.get();
        prevY.current = y.get();
    });

    if (!screenStart || !screenEnd) return null;

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e1a13' }}>
            <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={projectionConfig}
                width={undefined}
                height={undefined}
                style={{ width: '100%', height: '100%' }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: any[] }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: '#bab1ab',
                                        stroke: '#BAB1AB',
                                        strokeWidth: 0.5,
                                    },
                                    hover: {
                                        fill: '#a89c94', // Darker or different tone for hover
                                        stroke: '#bab1ab',
                                        strokeWidth: 0.5,
                                        outline: 'none',
                                        cursor: 'pointer',
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>

                <Marker coordinates={INDIA_COORDS}>
                    <circle r={5} fill="#FF5722" />
                    <text y={-10} fontSize={12} textAnchor="middle" fill="#BAB1AB">
                        India
                    </text>
                </Marker>

                <Marker coordinates={UK_COORDS}>
                    <circle r={5} fill="#3F51B5" />
                    <text y={-10} fontSize={12} textAnchor="middle" fill="#BAB1AB">
                        UK
                    </text>
                </Marker>

                {/* Plane follows actual path from India to UK */}
                <motion.g
                    style={{ x, y }}
                    animate={{
                        x: [screenStart[0], screenEnd[0]],
                        y: [screenStart[1], screenEnd[1]],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                >
                    <motion.g style={{ rotate: angle }}>
                        <FaPlane size={24} color="#ffffff" />
                    </motion.g>
                </motion.g>
            </ComposableMap>
        </div>
    );
};

export default FlightAnimation;
