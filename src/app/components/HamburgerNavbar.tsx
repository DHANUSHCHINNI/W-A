"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Image from "next/image";

interface HamburgerNavbarProps {
  show: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HUBS = [
  { label: "Therapy Hub", href: "/therapyhub" },
  { label: "Corporate Hub", href: "/corporatehub" },
  { label: "Training Hub", href: "/traininghub" },
  { label: "Innovation Lab", href: "/innovationlab" },
  { label: "R&D Hub", href: "/rnd" },
];

const adminEmails = [
  "admin@example.com",
  "syedhamadanahmad@gmail.com",
  "dhanushchinni100@gmail.com",
  'amruta@wearehub.org',
  'kritija@wearehub.org',
  'info@wearehub.org'
  // add more emails here
];

const HamburgerNavbar: React.FC<HamburgerNavbarProps> = ({ show, open, setOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = !!(user && user.email && adminEmails.includes(user.email.toLowerCase()));

  const handleMyPlanClick = () => {
    setUserOpen(false);
    setOpen(false);
    if (user) {
      router.push("/my-plan");
    } else {
      router.push("/test-auth?redirect=/my-plan");
    }
  };

  const handleLogout = async () => {
    setUserOpen(false);
    setOpen(false);
    await signOut(auth);
    router.push("/");
  };

  if (!show) return null;

  // Shared style constants for reuse
  const baseTextColor = "#d1c1b2";
  const hoverColor = "#82341A";
  const bgColor = "#1C1610";
  const dropdownBgColor = "#1C1610";
  const dropdownHoverBgColor = "#1C1610";
  const fontFamily = "'erstoria', serif";
  const defaultFontSize = 16;
  const dropdownFontSize = 14;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: bgColor,
        color: baseTextColor,
        zIndex: 100,
        padding: "0.75rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily,
        fontSize: "1.4rem",
      } as HTMLMotionProps<"nav">["style"]}
    >
      <div style={{ marginRight: "1.5rem", marginLeft: "1rem" }}>
        <Image src="/toplogo2.png" alt="Logo" width={55} height={25} />

      </div>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ color: baseTextColor, fontSize: 32, mr: 1 }}
        aria-label="menu"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
          setServicesOpen(false);
          setUserOpen(false);
        }}
        PaperProps={{
          sx: { background: bgColor, color: baseTextColor, width: 260, fontFamily },
        }}
      >
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Nav Links */}
          <Link
            href="/"
            style={{
              color: baseTextColor,
              textDecoration: "none",
              fontSize: defaultFontSize,
              padding: "6px 0",
              fontFamily,
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
          >
            Home
          </Link>
          <Link
            href="/story"
            style={{
              color: baseTextColor,
              textDecoration: "none",
              fontSize: defaultFontSize,
              padding: "6px 0",
              fontFamily,
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
          >
            Our story
          </Link>

          {/* Services Dropdown */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                color: baseTextColor,
                fontSize: defaultFontSize,
                padding: "6px 0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily,
                userSelect: "none",
              }}
              onClick={() => setServicesOpen((open) => !open)}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
            >
              <span>Services</span>
              <span style={{ fontSize: 18 }}>{servicesOpen ? "▲" : "▼"}</span>
            </div>
            {servicesOpen && (
              <div
                style={{
                  marginLeft: 12,
                  marginTop: 2,
                  marginBottom: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {HUBS.map((hub) => (
                  <Link
                    key={hub.href}
                    href={hub.href}
                    style={{
                      color: baseTextColor,
                      textDecoration: "none",
                      fontSize: dropdownFontSize,
                      padding: "6px 0",
                      fontFamily,
                      cursor: "pointer",
                      borderRadius: 3,
                      backgroundColor: dropdownBgColor,
                      transition: "background 0.18s, color 0.18s",
                      userSelect: "none",
                    }}
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = dropdownHoverBgColor;
                      e.currentTarget.style.color = hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = dropdownBgColor;
                      e.currentTarget.style.color = baseTextColor;
                    }}
                  >
                    {hub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/Members"
            style={{
              color: baseTextColor,
              textDecoration: "none",
              fontSize: defaultFontSize,
              padding: "6px 0",
              fontFamily,
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
          >
            Members
          </Link>

          <Link
            href="/contact"
            style={{
              color: baseTextColor,
              textDecoration: "none",
              fontSize: defaultFontSize,
              padding: "6px 0",
              fontFamily,
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
          >
            Contact us
          </Link>

          {/* User Dropdown */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                color: baseTextColor,
                fontSize: defaultFontSize,
                padding: "6px 0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily,
                userSelect: "none",
              }}
              onClick={() => setUserOpen((open) => !open)}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
            >
              <span>User</span>
              <span style={{ fontSize: 18 }}>{userOpen ? "▲" : "▼"}</span>
            </div>
            {userOpen && (
              <div
                style={{
                  marginLeft: 12,
                  marginTop: 2,
                  marginBottom: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <div
                  style={{
                    color: baseTextColor,
                    fontSize: dropdownFontSize,
                    padding: "6px 0",
                    fontFamily,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={handleMyPlanClick}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
                  tabIndex={0}
                >
                  My Plan
                </div>

                {!user && (
                  <div
                    style={{
                      color: baseTextColor,
                      fontSize: dropdownFontSize,
                      padding: "6px 0",
                      fontFamily,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    onClick={() => {
                      setUserOpen(false);
                      setOpen(false);
                      router.push("/test-auth");
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
                  >
                    Login
                  </div>
                )}

                {isAdmin && (
                  <div
                    style={{
                      color: baseTextColor,
                      fontSize: dropdownFontSize,
                      padding: "6px 0",
                      fontFamily,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    onClick={() => {
                      setUserOpen(false);
                      setOpen(false);
                      router.push("/admin-dashboard");
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
                  >
                    Dashboard
                  </div>
                )}

                {user && (
                  <div
                    style={{
                      color: baseTextColor,
                      fontSize: dropdownFontSize,
                      padding: "6px 0",
                      fontFamily,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    onClick={handleLogout}
                    onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = baseTextColor)}
                  >
                    Logout
                  </div>
                )}
              </div>
            )}
          </div>
        </Box>
      </Drawer>
    </motion.nav>
  );
};

export default HamburgerNavbar;
