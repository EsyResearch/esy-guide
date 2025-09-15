import React, {useState, useEffect} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarItems} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './styles.module.css';

function NavbarContent() {
  const items = useNavbarItems();
  const {navbar} = useThemeConfig();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const leftItems = items.filter((item) => item.position === 'left');
  const rightItems = items.filter((item) => item.position === 'right');

  return (
    <nav className={`${styles.navbar} ${!isNavbarVisible ? styles.navbarHidden : ''}`}>
      <div className={styles.navbarInner}>
        <div className={styles.navbarItems}>
          <NavbarMobileSidebarToggle />
          <NavbarLogo />
          
          <div className={styles.navbarItemsLeft}>
            {leftItems.map((item, i) => (
              <NavbarItem {...item} key={i} />
            ))}
          </div>
        </div>

        <div className={styles.navbarItemsRight}>
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return <NavbarContent />;
}