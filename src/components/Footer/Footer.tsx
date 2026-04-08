import Link from 'next/link';
import styles from './Footer.module.scss';
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Cyberia"
              className={styles.logo}
              width={130}
              height={30}
            />
          </Link>
          <p className={styles.subtitle}>
            Веб-разработка и<br />
            усиление IT-команд
          </p>
        </div>

        <div className={styles.centerGroup}>
          <div className={styles.contacts}>
            <a href="tel:+79991234567" className={styles.link}>
              +7 999 123 45 67
            </a>
            <a href="mailto:hello@cyberia.studio" className={styles.link}>
              hello@cyberia.studio
            </a>
            <p className={styles.address}>ул.Ярных, д.35, оф.10</p>
          </div>

          <div className={styles.nav}>
            <div className={styles.navColumn}>
              <Link href="#" className={styles.link}>
                Агентство
              </Link>
              <Link href="#" className={styles.link}>
                Услуги
              </Link>
              <Link href="/" className={styles.link}>
                Кейсы
              </Link>
            </div>
            <div className={styles.navColumn}>
              <Link href="#" className={styles.link}>
                Блог
              </Link>
              <Link href="#" className={styles.link}>
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}