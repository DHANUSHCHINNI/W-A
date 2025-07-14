'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import Asset1 from './Asset1';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

interface HamburgerNavbarProps {
  show: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our story', href: '/story' },
  { label: 'Services', href: '/Services' },
  { label: 'Members', href: '/Members' },
  { label: 'Contact us', href: '/Contact Us' },
];

const HUBS = [
  { label: 'Therapy Hub', href: '/therapyhub' },
  { label: 'R&D Hub', href: '/rnd' },
  { label: 'Corporate Hub', href: '/corporatehub' },
  { label: 'Innovation Lab', href: '/innovationlab' },
  { label: 'Training Hub', href: '/traininghub' },
];

const adminEmails = [
  'admin@example.com',
  'syedhamadanahmad@gmail.com',
  'dhanushchinni100@gmail.com'
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
      router.push('/my-plan');
    } else {
      router.push('/test-auth?redirect=/my-plan');
    }
  };

  const handleLogout = async () => {
    setUserOpen(false);
    setOpen(false);
    await signOut(auth);
    router.push('/');
  };

  if (!show) return null;

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
        background: '#BAB1AB',
        color: '#2e1a13',
        zIndex: 100,
        padding: '0.75rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "erstoria",
        fontSize: '1.4rem',
      } as HTMLMotionProps<"nav">["style"]}
    >
      <div className="logo" style={{ marginRight: '1.5rem', marginLeft: '1rem' }}>
        <Asset1 width={55} height={55} />
      </div>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ color: '#2e1a13', fontSize: 32, mr: 1 }}
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
          sx: { background: "#b19a8b", color: "#2e1a13", width: 260 },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link
            href="/"
            style={{ color: "#2e1a13", textDecoration: "none", fontSize: 20, padding: '8px 0' }}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/story"
            style={{ color: "#2e1a13", textDecoration: "none", fontSize: 20, padding: '8px 0' }}
            onClick={() => setOpen(false)}
          >
            Our story
          </Link>
          {/* Services Dropdown */}
          <div style={{ width: '100%' }}>
            <div
              style={{
                color: "#2e1a13",
                fontSize: 20,
                padding: '8px 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'erstoria',
              }}
              onClick={() => setServicesOpen((open) => !open)}
            >
              <span>Services</span>
              <span style={{ fontSize: 18 }}>{servicesOpen ? '▲' : '▼'}</span>
            </div>
            {servicesOpen && (
              <div style={{ marginLeft: 12, marginTop: 2, marginBottom: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {HUBS.map((hub) => (
                  <Link
                    key={hub.href}
                    href={hub.href}
                    style={{ color: "#2e1a13", textDecoration: "none", fontSize: 18, padding: '6px 0', fontFamily: 'erstoria' }}
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
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
            style={{ color: "#2e1a13", textDecoration: "none", fontSize: 20, padding: '8px 0' }}
            onClick={() => setOpen(false)}
          >
            Members
          </Link>
          <Link
            href="/contact"
            style={{ color: "#2e1a13", textDecoration: "none", fontSize: 20, padding: '8px 0' }}
            onClick={() => setOpen(false)}
          >
            Contact us
          </Link>
          {/* User Dropdown */}
          <div style={{ width: '100%' }}>
            <div
              style={{
                color: "#2e1a13",
                fontSize: 20,
                padding: '8px 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'erstoria',
              }}
              onClick={() => setUserOpen((open) => !open)}
            >
              <span>User</span>
              <span style={{ fontSize: 18 }}>{userOpen ? '▲' : '▼'}</span>
            </div>
            {userOpen && (
              <div style={{ marginLeft: 12, marginTop: 2, marginBottom: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div
                  style={{ color: "#2e1a13", fontSize: 18, padding: '6px 0', fontFamily: 'erstoria', cursor: 'pointer' }}
                  onClick={handleMyPlanClick}
                >
                  My Plan
                </div>
                {!user && (
                  <div
                    style={{ color: "#2e1a13", fontSize: 18, padding: '6px 0', fontFamily: 'erstoria', cursor: 'pointer' }}
                    onClick={() => {
                      setUserOpen(false);
                      setOpen(false);
                      router.push('/test-auth');
                    }}
                  >
                    Login
                  </div>
                )}
                {isAdmin && (
                  <div
                    style={{ color: "#2e1a13", fontSize: 18, padding: '6px 0', fontFamily: 'erstoria', cursor: 'pointer' }}
                    onClick={() => {
                      setUserOpen(false);
                      setOpen(false);
                      router.push('/admin-dashboard');
                    }}
                  >
                    Dashboard
                  </div>
                )}
                {user && (
                  <div
                    style={{ color: "#2e1a13", fontSize: 18, padding: '6px 0', fontFamily: 'erstoria', cursor: 'pointer' }}
                    onClick={handleLogout}
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