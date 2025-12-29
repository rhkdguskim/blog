import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navParams}`}>
                <Link href="/" className={styles.logo}>
                    Dev<span style={{ color: 'var(--primary)' }}>Log</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/blog" className={styles.link}>Blog</Link>
                    <Link href="https://github.com/kwanghyeonkim" target="_blank" className={styles.link}>GitHub</Link>
                </div>
            </div>
        </nav>
    );
}
