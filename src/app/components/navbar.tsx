// src/app/components/Navbar.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Asset1 from './Asset1';

export default function Navbar({ show }: { show: boolean }) {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={show ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                background: '#b19a8b', // lighter brown for navbar
                color: '#2e1a13',
                zIndex: 100,
                padding: '0.75rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: "erstoria",
                fontSize: '1.4rem',
            }}
        >
            <div className="logo" style={{ top: 20, left: 20, zIndex: 10 }}>
                <Asset1 width={50} height={50} />

            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link href="/">Home</Link>
                <Link href="/Our Story">Our story</Link>
                <Link href="/Services">Services</Link>
                <Link href="/Members">Members</Link>
                <Link href="/Contact Us">Contact us</Link>
            </div>
        </motion.nav>
    );
}
