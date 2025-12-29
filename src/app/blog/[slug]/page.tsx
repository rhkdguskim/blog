import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSortedPostsData, getPostData } from '@/lib/api';
import styles from './page.module.css';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>
            <Link href="/blog" style={{
                display: 'inline-block',
                marginBottom: '2rem',
                color: 'var(--primary)',
                fontWeight: 600
            }}>
                &larr; Back to Blog
            </Link>

            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    lineHeight: 1.2
                }}>
                    {post.title}
                </h1>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: '#94a3b8' }}>
                    <time className={styles.date}>{post.date}</time>
                    {post.category && <span>• {post.category}</span>}
                    <span>•</span>
                    <div className={styles.tags}>
                        {post.tags.map(tag => (
                            <span key={tag}>#{tag}</span>
                        ))}
                    </div>
                </div>
            </header>

            <article
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
}
