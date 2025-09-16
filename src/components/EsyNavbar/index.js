import React, { useEffect, useState } from "react";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig, useColorMode} from '@docusaurus/theme-common';
import Logo from "../Logo";
import { Sun, Moon } from "lucide-react";
import styles from './styles.module.css';

export default function EsyNavbar() {
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
          {/* Navigation */}
          <div className={styles.navLinks}>
            <a href="https://app.esy.com" className={styles.navCta}>Write</a>
          </div>

          {/* Theme Toggle */}
          <button
            className={styles.themeToggle}
            onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {colorMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

        </div>
      </div>

    </nav>
  );
}