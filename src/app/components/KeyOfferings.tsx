'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Rahaat from './Rahaat';
import Retreat from './Retreat';
import Fillcup from './Fillcup';
import SukoonLogo from './SukoonLogo';

const offerings = [
    {
        href: '/sukoon',
        icon: <SukoonLogo width={90} height={90} />,
        label: 'Sukoon Subscription',
    },
    {
        href: '/rahaat',
        icon: <Rahaat width={90} height={90} />,
        label: 'Rahaat Subscription',
    },
    {
        href: '/offerings/fillingyourcup',
        icon: <Fillcup width={90} height={90} />,
        label: 'Filling your cup',
    },
    {
        href: '/wellbeingretreats',
        icon: <Retreat width={90} height={90} />,
        label: 'Well-being Retreats',
    },
];

export default function KeyOfferings() {
    const [isMobile, setIsMobile] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const next = () => setIndex((index + 1) % offerings.length);
    const prev = () => setIndex((index - 1 + offerings.length) % offerings.length);

    return (
        <div
            style={{
                width: '100%',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: '#B1ABAB',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: isMobile ? 60 : 75,
                    left: isMobile ? 50 : 170,
                    fontFamily: 'Erstoria',
                    fontSize: isMobile ? 28 : 40,
                    fontWeight: 500,
                    color: '#BAB1AB',
                    letterSpacing: 1,
                    textAlign: 'left',
                    zIndex: 20,
                }}
            >
                Key offerings
            </div>


            {/* Carousel or Grid */}
            <div
                style={{
                    marginTop: 60,
                    width: '100vw',
                    maxWidth: '100vw',
                    background: '#B1ABAB',
                    padding: '3.5rem 2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                {isMobile ? (
                    <div style={{width: '100%', textAlign: 'center', position: 'relative'}}>
                        <button
                            onClick={prev}
                            style={{
                                position: 'absolute',
                                left: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: 28,
                                background: 'transparent',
                                border: 'none',
                                color: '#83351b',
                                cursor: 'pointer',
                            }}
                            aria-label="Previous"
                        >
                            &#8249;
                        </button>

                        <Link href={offerings[index].href} style={{textDecoration: 'none'}}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    padding: '1.5rem 1rem',
                                    background: '#B1ABAB',
                                }}
                            >
                                {offerings[index].icon}
                                <div
                                    style={{
                                        marginTop: 18,
                                        fontFamily: 'Erstoria',
                                        fontSize: 20,
                                        color: '#83351b',
                                        fontWeight: 500,
                                        textAlign: 'center',
                                    }}
                                >
                                    {offerings[index].label}
                                </div>
                            </div>
                        </Link>

                        <button
                            onClick={next}
                            style={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: 28,
                                background: 'transparent',
                                border: 'none',
                                color: '#83351b',
                                cursor: 'pointer',
                            }}
                            aria-label="Next"
                        >
                            &#8250;
                        </button>
                    </div>
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: 1000,
                            gap: '2.5rem',
                        }}
                    >
                        {offerings.map((item, i) => (
                            <Link href={item.href} key={i} style={{textDecoration: 'none', flex: 1}}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        borderRadius: 10,
                                        padding: '1.2rem 0.5rem',
                                        background: '#B1ABAB',
                                        transition: 'background 0.2s, box-shadow 0.2s',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.background = '#d1c1b2')}
                                    onMouseOut={(e) => (e.currentTarget.style.background = '#B1ABAB')}
                                >
                                    {item.icon}
                                    <div
                                        style={{
                                            marginTop: 18,
                                            fontFamily: 'Erstoria',
                                            fontSize: 20,
                                            color: '#83351b',
                                            fontWeight: 500,
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
