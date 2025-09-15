import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBaseUrl} from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterColumn({ title, links }) {
  return (
    <div className={styles.footerColumn}>
      <h4>{title}</h4>
      <div className={styles.footerLinks}>
        {links.map((link, index) => (
          <Link key={index} href={link.href} to={link.to} className={styles.footerLink}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <img src={useBaseUrl('/img/esy-logo.svg')} alt="Esy Logo" width="60" height="60" />
            <span>esy</span>
          </div>
          <p className={styles.footerDesc}>
            Write your next paper with Esy, an AI assistant that learns your writing style to create original, authentic essays.
          </p>
          <div className={styles.footerSocials}>
            <a href="https://www.x.com/@esyResearch" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/esyresearch" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.youtube.com/@esyresearch" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <FooterColumn 
          title="Explore"
          links={[
            { href: "https://esy.com/essays", text: "Essays" },
            { href: "https://esy.com/ai-writing-tools", text: "AI Writing Tools" },
            { href: "https://esy.com/writing-prompts", text: "Writing Prompts" },
          ]}
        />
        
        <FooterColumn 
          title="Learn"
          links={[
            { href: "https://esy.com/school", text: "School" },
            { href: "https://esy.com/glossary", text: "Glossary" },
            { href: "https://esy.com/how-to-write", text: "How to Write" },
            { to: "/", text: "Guide" }, // This guide itself
          ]}
        />
        
        <FooterColumn 
          title="Resources"
          links={[
            { href: "https://esy.com/ai-essay-writer", text: "AI Essay Writer" },
            { href: "https://esy.com/agentic-workflows", text: "Agentic Workflows" },
            { href: "https://esy.com/extended-school-year", text: "Extended School Year" },
          ]}
        />
        
        <FooterColumn 
          title="Company"
          links={[
            { href: "https://esy.com/about", text: "About Us" },
            { href: "https://esy.com/contact", text: "Contact" },
            { href: "https://esy.com/privacy", text: "Privacy" },
            { href: "https://esy.com/cookies", text: "Cookies" },
            { href: "https://esy.com/terms", text: "Terms" },
          ]}
        />
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Esy, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;