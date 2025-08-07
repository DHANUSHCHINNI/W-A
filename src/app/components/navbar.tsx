"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import Asset1 from "./Asset1";
import { NavbarProps } from "../types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useState, useRef, useEffect } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import styles from "./Navbar.module.css";

const HUBS = [
    { label: "Therapy Hub", href: "/therapyhub" },
    { label: "Corporate Hub", href: "/corporatehub" },
    { label: "Training Hub", href: "/traininghub" },
    { label: "Innovation Lab", href: "/innovationlab" },
    { label: "R&D Hub", href: "/rnd" },
];

const adminEmails = [
    "syedhamadanahmad@gmail.com",
    "dhanushchinni100@gmail.com",
    'amruta@wearehub.org',
    'kritija@wearehub.org',
    'info@wearehub.org'
    // add more emails here
];

const Navbar: React.FC<NavbarProps> = ({ show, color = "#1C1610" }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [userDropdownPosition, setUserDropdownPosition] = useState<"left" | "right">("left");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const userDropdownRef = useRef<HTMLDivElement>(null);
    const userDropdownMenuRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    // Subscribe to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
            if (userDropdownOpen && userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
                setUserDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen, userDropdownOpen]);

    // Position user dropdown dynamically (left or right)
    useEffect(() => {
        if (userDropdownOpen && userDropdownRef.current && userDropdownMenuRef.current) {
            const buttonRect = userDropdownRef.current.getBoundingClientRect();
            const menuRect = userDropdownMenuRef.current.getBoundingClientRect();
            const spaceRight = window.innerWidth - buttonRect.left;
            if (spaceRight < menuRect.width + 16) {
                setUserDropdownPosition("right");
            } else {
                setUserDropdownPosition("left");
            }
        }
    }, [userDropdownOpen]);

    // Navigation handlers
    const handleMyPlanClick = () => {
        setUserDropdownOpen(false);
        if (user) {
            router.push("/my-plan");
        } else {
            router.push("/test-auth?redirect=/my-plan");
        }
    };

    const handleLogout = async () => {
        setUserDropdownOpen(false);
        await signOut(auth);
        router.push("/");
    };

    const isAdmin = !!(user && user.email && adminEmails.includes(user.email.toLowerCase()));

    // Check if Services dropdown should be active (any of its hubs matches current path)
    const isServicesActive = HUBS.some((hub) => pathname.startsWith(hub.href));

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={show ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={styles.navbar}
            style={{ backgroundColor: color } as HTMLMotionProps<"nav">["style"]}
        >
            <AppBar position="static" elevation={0} className={styles.appBar} style={{ backgroundColor: color }}>
                <Toolbar className={styles.toolbar}>
                    <Box className={styles.logoBox}>
                        <Link href="/">
                            <Image src="/toplogo2.png" alt="Logo" width={55} height={22} />
                        </Link>
                    </Box>

                    <Box className={styles.navLinks}>
                        <Link
                            href="/"
                            className={`${styles.navLink} ${pathname === "/" ? styles.activeNavLink : ""}`}
                        >
                            Home
                        </Link>

                        <Link
                            href="/story"
                            className={`${styles.navLink} ${pathname === "/story" ? styles.activeNavLink : ""}`}
                        >
                            Our story
                        </Link>

                        {/* Services Dropdown */}
                        <div className={styles.dropdownWrapper} ref={dropdownRef}>
                            <span
                                tabIndex={0}
                                className={`${styles.dropdownToggle} ${isServicesActive ? styles.activeNavLink : ""}`}
                                onClick={() => setDropdownOpen((open) => !open)}
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                            >
                                Services
                            </span>
                            <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.open : ""}`}>
                                {HUBS.map((hub) => (
                                    <Link
                                        key={hub.href}
                                        href={hub.href}
                                        className={`${styles.dropdownItem} ${pathname === hub.href ? styles.activeNavLink : ""}`}
                                        onClick={() => {
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {hub.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/Members"
                            className={`${styles.navLink} ${pathname === "/Members" ? styles.activeNavLink : ""}`}
                        >
                            Members
                        </Link>

                        <Link
                            href="/contact"
                            className={`${styles.navLink} ${pathname === "/contact" ? styles.activeNavLink : ""}`}
                        >
                            Contact us
                        </Link>

                        {/* User dropdown */}
                        <div className={styles.dropdownWrapper} ref={userDropdownRef}>
                            <span
                                tabIndex={0}
                                className={styles.dropdownToggle}
                                onClick={() => setUserDropdownOpen((open) => !open)}
                                aria-haspopup="true"
                                aria-expanded={userDropdownOpen}
                            >
                                User
                            </span>
                            <div
                                className={`${styles.dropdownMenu} ${userDropdownOpen ? styles.open : ""}`}
                                ref={userDropdownMenuRef}
                                style={{
                                    left: userDropdownPosition === "left" ? 0 : "auto",
                                    right: userDropdownPosition === "right" ? 0 : "auto",
                                    minWidth: 180,
                                    maxWidth: "calc(100vw - 16px)",
                                    overflowX: "auto",
                                }}
                            >
                                <div
                                    className={styles.dropdownItem}
                                    onClick={handleMyPlanClick}
                                    tabIndex={0}
                                >
                                    My Plan
                                </div>

                                {!user && (
                                    <div
                                        className={styles.dropdownItem}
                                        onClick={() => {
                                            setUserDropdownOpen(false);
                                            router.push("/test-auth");
                                        }}
                                        tabIndex={0}
                                    >
                                        Login
                                    </div>
                                )}

                                {isAdmin && (
                                    <div
                                        className={styles.dropdownItem}
                                        onClick={() => {
                                            setUserDropdownOpen(false);
                                            router.push("/admin-dashboard");
                                        }}
                                        tabIndex={0}
                                    >
                                        Dashboard
                                    </div>
                                )}

                                {user && (
                                    <div
                                        className={styles.dropdownItem}
                                        onClick={handleLogout}
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
        </motion.nav>
    );
};

export default Navbar;
