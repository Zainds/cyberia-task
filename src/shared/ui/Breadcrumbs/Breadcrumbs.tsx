import Link from 'next/link';
import clsx from 'clsx';
import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs ({ items }: BreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ul className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className={styles.item}>
              {/* Если есть ссылка и это не последний элемент — делаем кликабельным */}
              {item.href && !isLast ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={clsx(styles.link, styles.active)}>
                  {item.label}
                </span>
              )}
              
              {!isLast && <span className={styles.separator}>/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};