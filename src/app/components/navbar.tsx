'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import Asset1 from './Asset1';
import { NavbarProps } from '../types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useState, useRef, useEffect } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

const HUBS = [
    { label: 'Therapy Hub', href: '/therapyhub' },
    { label: 'R&D Hub', href: '/rnd' },
    { label: 'Corporate Hub', href: '/corporatehub' },
    { label: 'Innovation Lab', href: '/innovationlab' },
    { label: 'Training Hub', href: '/traininghub' },
];

const adminEmails = [
    'syedhamadanahmad@gmail.com',
    'dhanushchinni100@gmail.com'

    // add more emails here
];

const Navbar: React.FC<NavbarProps> = ({ show }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [userDropdownPosition, setUserDropdownPosition] = useState<'left' | 'right'>('left');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const userDropdownRef = useRef<HTMLDivElement>(null);
    const userDropdownMenuRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    // Auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
                setUserDropdownOpen(false);
            }
        }
        if (dropdownOpen || userDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen, userDropdownOpen]);

    // Dynamically position user dropdown
    useEffect(() => {
        if (userDropdownOpen && userDropdownRef.current && userDropdownMenuRef.current) {
            const buttonRect = userDropdownRef.current.getBoundingClientRect();
            const menuRect = userDropdownMenuRef.current.getBoundingClientRect();
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < menuRect.width + 16) {
                setUserDropdownPosition('right');
            } else {
                setUserDropdownPosition('left');
            }
        }
    }, [userDropdownOpen]);

    const handleMyPlanClick = () => {
        setUserDropdownOpen(false);
        if (user) {
            router.push('/my-plan');
        } else {
            router.push('/test-auth?redirect=/my-plan');
        }
    };

    const handleLogout = async () => {
        setUserDropdownOpen(false);
        await signOut(auth);
        router.push('/');
    };

    // Ensure isAdmin is always boolean
    const isAdmin = !!(user && user.email && adminEmails.includes(user.email.toLowerCase()));

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
                zIndex: 100,
            } as HTMLMotionProps<"nav">["style"]}
        >
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    background: '#BAB1AB',
                    color: '#2e1a13',
                    fontFamily: 'erstoria',
                    fontSize: '1.4rem',
                    boxShadow: 'none',
                    padding: '5px'
                }}
            >
                <Toolbar sx={{ minHeight: '64px', px: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box className="logo" sx={{ mr: 3, ml: 2, zIndex: 10 }}>
                        <Asset1 width={55} height={55} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1.1rem', ml: 'auto' }}>
                        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                        <Link href="/story" style={{ color: 'inherit', textDecoration: 'none' }}>Our story</Link>
                        <div
                            className="services-dropdown-wrapper"
                            style={{ position: 'relative', display: 'inline-block' }}
                            ref={dropdownRef}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <span
                                className="services-link"
                                tabIndex={0}
                                style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', padding: 0 }}
                                onClick={() => setDropdownOpen((open) => !open)}
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                            >
                                Services
                            </span>
                            <div className="services-dropdown" style={{ display: dropdownOpen ? 'block' : undefined }}>
                                {HUBS.map(hub => (
                                    <Link
                                        key={hub.href}
                                        href={hub.href}
                                        style={{
                                            display: 'block',
                                            fontFamily: 'erstoria',
                                            fontSize: '1.1rem',
                                            whiteSpace: 'nowrap',
                                            textDecoration: 'none',
                                            padding: '0.6rem 1.2rem',
                                        }}
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        {hub.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link href="/Members" style={{ color: 'inherit', textDecoration: 'none' }}>Members</Link>
                        <Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact us</Link>
                        <div
                            className="services-dropdown-wrapper"
                            style={{ position: 'relative', display: 'inline-block' }}
                            ref={userDropdownRef}
                            onMouseEnter={() => setUserDropdownOpen(true)}
                            onMouseLeave={() => setUserDropdownOpen(false)}
                        >
                            <span
                                className="services-link"
                                tabIndex={0}
                                style={{ color: 'inherit', textDecoration: 'none', fontFamily: 'erstoria', fontSize: '1.4rem', cursor: 'pointer', padding: 0 }}
                                onClick={() => setUserDropdownOpen((open) => !open)}
                                aria-haspopup="true"
                                aria-expanded={userDropdownOpen}
                            >
                                User
                            </span>
                            <div
                                className="services-dropdown"
                                ref={userDropdownMenuRef}
                                style={{
                                    display: userDropdownOpen ? 'block' : undefined,
                                    left: userDropdownPosition === 'left' ? 0 : 'auto',
                                    right: userDropdownPosition === 'right' ? 0 : 'auto',
                                    minWidth: 180,
                                    maxWidth: 'calc(100vw - 16px)',
                                    overflowX: 'auto',
                                }}
                            >
                                <div
                                    onClick={handleMyPlanClick}
                                    className="services-dropdown-item"
                                    style={{
                                        display: 'block',
                                        textDecoration: 'none',
                                        padding: '0.6rem 1.2rem',
                                        fontFamily: 'erstoria',
                                        fontSize: '1.1rem',
                                        whiteSpace: 'nowrap',
                                        borderRadius: 3,
                                        cursor: 'pointer',
                                    }}
                                    tabIndex={0}
                                >
                                    My Plan
                                </div>
                                {!user && (
                                    <div
                                        onClick={() => { setUserDropdownOpen(false); router.push('/test-auth'); }}
                                        className="services-dropdown-item"
                                        style={{
                                            display: 'block',
                                            textDecoration: 'none',
                                            padding: '0.6rem 1.2rem',
                                            fontFamily: 'erstoria',
                                            fontSize: '1.1rem',
                                            whiteSpace: 'nowrap',
                                            borderRadius: 3,
                                            cursor: 'pointer',
                                        }}
                                        tabIndex={0}
                                    >
                                        Login
                                    </div>
                                )}
                                {Boolean(isAdmin) && (
                                    <div
                                        onClick={() => { setUserDropdownOpen(false); router.push('/admin-dashboard'); }}
                                        className="services-dropdown-item"
                                        style={{
                                            display: 'block',
                                            textDecoration: 'none',
                                            padding: '0.6rem 1.2rem',
                                            fontFamily: 'erstoria',
                                            fontSize: '1.1rem',
                                            whiteSpace: 'nowrap',
                                            borderRadius: 3,
                                            cursor: 'pointer',
                                        }}
                                        tabIndex={0}
                                    >
                                        Dashboard
                                    </div>
                                )}
                                {user && (
                                    <div
                                        onClick={handleLogout}
                                        className="services-dropdown-item"
                                        style={{
                                            display: 'block',
                                            textDecoration: 'none',
                                            padding: '0.6rem 1.2rem',
                                            fontFamily: 'erstoria',
                                            fontSize: '1.1rem',
                                            whiteSpace: 'nowrap',
                                            borderRadius: 3,
                                            cursor: 'pointer',
                                        }}
                                        tabIndex={0}
                                    >
                                        Logout
                                    </div>
                                )}
                            </div>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
            <style jsx global>{`
                @media (min-width: 900px) {
                    .services-dropdown-wrapper:hover .services-dropdown,
                    .services-dropdown-wrapper:focus-within .services-dropdown {
                        display: block;
                    }
                    .services-dropdown {
                        display: none;
                        position: absolute;
                        top: 2.2rem;
                        left: 0;
                        background: #BAB1AB;
                        min-width: 180px;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.10);
                        border-radius: 4px;
                        z-index: 1000;
                        padding: 0.5rem 0;
                        transition: background 0.2s;
                        max-width: calc(100vw - 16px);
                        overflow-x: auto;
                    }
                    .services-dropdown a, .services-dropdown-item {
                        display: block;
                        color: #2e1a13;
                        text-decoration: none;
                        padding: 0.6rem 1.2rem;
                        font-family: 'erstoria';
                        font-size: 1.1rem;
                        white-space: nowrap;
                        border-radius: 3px;
                        transition: background 0.18s, color 0.18s;
                        background: transparent;
                    }
                    .services-dropdown a:hover,
                    .services-dropdown a:focus,
                    .services-dropdown-item:hover,
                    .services-dropdown-item:focus {
                        background: #a18c7c;
                        color: #a0522d;
                    }
                    .services-dropdown a:not(:hover):not(:focus),
                    .services-dropdown-item:not(:hover):not(:focus) {
                        background: #d1c1b2;
                        color: #2e1a13;
                    }
                    .services-link {
                        cursor: pointer;
                        color: inherit;
                        text-decoration: none;
                        padding: 0 0.2rem;
                        font-family: 'erstoria';
                        font-size: 1.4rem;
                        outline: none;
                        transition: color 0.18s;
                    }
                    .services-link:focus,
                    .services-link:hover {
                        color: #ff9900;
                    }
                }
                @media (max-width: 899px) {
                    .services-dropdown-wrapper, .services-dropdown {
                        display: none !important;
                    }
                }
            `}</style>
        </motion.nav>
    );
}

export default Navbar;