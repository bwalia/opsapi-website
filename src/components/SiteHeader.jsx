'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '@/content/site';
import Logo from './Logo';

export default function SiteHeader() {
    const pathname = usePathname() || '/';
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(null);

    useEffect(() => setOpen(false), [pathname]);
    useEffect(() => {
        setTheme(document.documentElement.getAttribute('data-theme'));
    }, []);

    function toggleTheme() {
        const current = theme || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('opsapi-theme', next); } catch (e) { /* storage blocked: still switches for this visit */ }
        setTheme(next);
    }

    return (
        <header className="site-header">
            <div className="container-x site-header__inner">
                <Link href="/" className="brand" aria-label="OpsAPI home">
                    <Logo className="brand__mark" />
                    <span className="brand__name">OpsAPI</span>
                </Link>
                <ul id="site-nav" className={`nav-links${open ? ' is-open' : ''}`}>
                    {SITE.nav.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} aria-current={pathname.startsWith(item.href) ? 'page' : undefined}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-actions">
                    <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Switch light or dark theme">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
                    </button>
                    <button type="button" className="icon-btn menu-btn" onClick={() => setOpen(!open)}
                        aria-expanded={open} aria-controls="site-nav" aria-label="Menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
