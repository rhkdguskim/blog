import Link from 'next/link';
import styles from './PostCard.module.css';

interface PostProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    tags: string[];
}

export default function PostCard({ title, excerpt, date, slug, tags }: PostProps) {
    return (
        <Link href={`/blog/${slug}`} className={`glass-panel glow-hover ${styles.card}`}>
            <div className={styles.content}>
                <div className={styles.date}>{date}</div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.excerpt}>{excerpt}</p>
                <div className={styles.tags}>
                    {tags.map(tag => (
                        <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
