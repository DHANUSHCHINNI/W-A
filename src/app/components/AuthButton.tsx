'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // 🔁 make sure this is your Firebase auth export

export default function AuthButton() {
    const [firstName, setFirstName] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.displayName) {
                const nameParts = user.displayName.split(' ');
                setFirstName(nameParts[0]);
            }
        });
        return () => unsubscribe();
    }, []);

    let menuTimeout: NodeJS.Timeout;

    const openMenu = () => {
        clearTimeout(menuTimeout);
        setMenuOpen(true);
    };

    const closeMenu = () => {
        menuTimeout = setTimeout(() => {
            setMenuOpen(false);
        }, 150);
    };

    return (
        <div className="relative inline-block text-left">
            {/* First name as hover trigger */}
            <div
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
                className="cursor-pointer font-semibold"
            >
                {firstName || 'User'} ▾
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
                <div
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenu}
                    className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded z-50"
                >
                    <a
                        href="/dashboard"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        Dashboard
                    </a>
                    <a
                        href="/subscriptions"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        My Subscriptions
                    </a>
                    <a
                        href="/logout"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        Logout
                    </a>
                </div>
            )}
        </div>
    );
}
