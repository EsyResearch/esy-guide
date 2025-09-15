import React, { useEffect, useState } from "react";
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Logo from "../Logo";
import { Menu, X } from "lucide-react";
import styles from './styles.module.css';

export default function EsyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
          nav.style.background = 'rgba(10, 10, 15, 0.85)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={styles.nav} id="nav">
      <div className={styles.navInner}>
        <Link to="/" className={styles.logo}>
          <Logo suffix="Guide" href="" showText={false} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className={`${styles.navLinks} ${styles.desktopNav}`}>
          <a href="https://app.esy.com" className={styles.navCta}>Start Writing</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          <a href="https://app.esy.com" className={styles.mobileNavCta}>Start Writing</a>
        </div>
      </div>
    </nav>
  );
}