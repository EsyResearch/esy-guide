import React, { useEffect, useState } from "react";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig, useColorMode} from '@docusaurus/theme-common';
import Logo from "../Logo";
import { Menu, X, Sun, Moon } from "lucide-react";
import styles from './styles.module.css';

export default function EsyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {colorMode, setColorMode} = useColorMode();

  // Ensure component is mounted before accessing DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (nav) {
        // Remove scroll effect since we want consistent background
        // nav.style.background = '#16161f';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mounted]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, mounted]);

  // Render a placeholder navbar during SSR to prevent errors
  if (!mounted) {
    return (
      <nav className={`${styles.nav} navbar navbar--fixed-top`} style={{ height: 'var(--ifm-navbar-height, 4rem)' }}>
        <div className={styles.navInner}>
          <a href="/" className={styles.logo}>
            <Logo suffix="Essay Guide" showText={false} />
          </a>
          <div className={styles.navRight}>
            <div className={styles.themeToggle} style={{ visibility: 'hidden' }}>
              <div style={{ width: 20, height: 20 }} />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`${styles.nav} navbar navbar--fixed-top`} role="navigation">
      <div className={styles.navInner}>
        <a href="/guide" className={styles.logo}>
          <Logo suffix="Essay Guide" showText={false} />
        </a>
        
        {/* Right side items */}
        <div className={styles.navRight}>
          {/* Desktop Navigation */}
          <div className={`${styles.navLinks} ${styles.desktopNav}`}>
            <a href="https://app.esy.com" className={styles.navCta}>Write</a>
          </div>

          {/* Desktop Theme Toggle */}
          <button
            className={`${styles.themeToggle} ${styles.desktopOnly}`}
            onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {colorMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          <a href="https://app.esy.com" className={styles.mobileNavCta}>Write</a>
          <button
            className={styles.mobileThemeToggle}
            onClick={() => {
              setColorMode(colorMode === 'dark' ? 'light' : 'dark');
              setMobileMenuOpen(false);
            }}
          >
            {colorMode === 'dark' ? (
              <>
                <Sun size={20} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={20} />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}