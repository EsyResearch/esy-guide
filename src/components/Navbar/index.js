import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Navbar() {
  const {siteConfig} = useDocusaurusContext();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${!isNavbarVisible ? styles.navbarHidden : ''}`}>
      <div className={styles.navbarInner}>
        <div className={styles.navbarItems}>
          <Link to="/" className={styles.navbarBrand}>
            <img src={useBaseUrl('/img/esy-logo.svg')} alt="Esy Logo" className={styles.navbarLogo} />
            <span className={styles.navbarTitle}>Guide</span>
          </Link>
          
          <div className={styles.navbarItemsLeft}>
            <Link to="/" className={styles.navbarLink}>Contents</Link>
            <a href="https://esy.com/school" className={styles.navbarLink}>School</a>
            <a href="https://esy.com/essays" className={styles.navbarLink}>Essays</a>
            <a href="https://esy.com/blog" className={styles.navbarLink}>Blog</a>
          </div>
        </div>

        <div className={styles.navbarItemsRight}>
          <a href="https://app.esy.com" className={styles.navbarCta}>
            Open in Esy
          </a>
          
          <button
            aria-label="Navigation bar toggle"
            className={styles.navbarToggle}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu - simplified version */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Contents</Link>
          <a href="https://esy.com/school" className={styles.mobileLink}>School</a>
          <a href="https://esy.com/essays" className={styles.mobileLink}>Essays</a>
          <a href="https://esy.com/blog" className={styles.mobileLink}>Blog</a>
          <a href="https://app.esy.com" className={styles.mobileCta}>Open in Esy</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;