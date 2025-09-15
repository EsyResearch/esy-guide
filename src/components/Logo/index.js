import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const Logo = ({ 
  suffix, 
  href = '', 
  className = '', 
  size = 60,
  showText = true 
}) => {
  const logoPath = useBaseUrl('/img/esy-logo.svg');

  const logoContent = (
    <div className={`${styles.logo} ${className}`}>
      <div className={styles.logoIcon}>
        <img 
          src={logoPath} 
          alt="Esy Logo" 
          width={size} 
          height={size}
        />
      </div>
      {suffix && (
        <span className={styles.logoSubtitle}>{suffix}</span>
      )}
      {showText && (
        <span className={styles.logoText}>esy</span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className={styles.logoLink}>
        {logoContent}
      </a>
    );
  }

  return logoContent;
};

export default Logo;