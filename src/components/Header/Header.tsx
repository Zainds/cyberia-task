"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx"; 
import styles from "./Header.module.scss";
import Image from "next/image";
import logoSvg from "../../../public/logo.svg"

const NAV_LINKS = [
  { label: "Агентство", href: "#" },
  { label: "Услуги", href: "#" },
  { label: "Кейсы", href: "/" }, 
  { label: "Блог", href: "#" },
  { label: "Контакты", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoSvg}
            alt="Cyberia"
            width={130} 
            height={30}
          />
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={clsx(styles.mobileMenu, isMobileMenuOpen && styles.open)}>
        <button className={styles.closeBtn} onClick={toggleMenu}>
          &times; 
        </button>
        
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={toggleMenu}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileContacts}>
          <hr className={styles.divider} />
          
          <span className={styles.contactsTitle}>Контакты:</span>
          
          <div className={styles.contactsList}>
            <a href="tel:+79991234567" className={styles.contactItem}>+7 999 123 45 67</a>
            <a href="mailto:hello@cyberia.studio" className={styles.contactItem}>hello@cyberia.studio</a>
            <span className={styles.contactItem}>ул.Ярных, д.35, оф.10</span>
          </div>

          <hr className={styles.divider} />
        </div>

      </div>
    </header>
  );
}