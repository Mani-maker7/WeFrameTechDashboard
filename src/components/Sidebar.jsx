import Link from 'next/link';
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar({ open }) {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Stages & Checklist', path: '/stages' },
    { name: 'Upload Docs', path: '/upload' },
    { name: 'Preferred Vendors', path: '/vendors' },
    { name: 'Tech Stack', path: '/tech' },
    { name: 'Targets', path: '/targets' },
    { name: 'Zee Sales Targets', path: '/zee-targets' },
    { name: 'MAI Settings', path: '/settings' },
    { name: 'Pending Questions', path: '/questions', badge: 3 }
  ];

  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={item.name === 'Home' ? styles.active : ''}>
              <Link href={item.path} className={styles.navLink}>
                {item.name}
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.logoutContainer}>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </aside>
  );
}