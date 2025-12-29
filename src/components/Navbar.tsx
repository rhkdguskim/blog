import Link from 'next/link';
import styles from './Navbar.module.css';
import { getMenuItems } from '@/lib/api';

export default function Navbar() {
    const menuItems = getMenuItems();

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navParams}`}>
                <Link href="/" className={styles.logo}>
                    AI<span style={{ color: 'var(--primary)' }}>Log</span>
                </Link>
                <div className={styles.links}>
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.url} className={styles.link} target={item.url.startsWith('http') ? '_blank' : undefined}>
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
