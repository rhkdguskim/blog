import PostCard from '@/components/PostCard';
import { posts } from '@/lib/posts';

export default function BlogIndex() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>AI Insights</h1>
                <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
                    Navigating the frontier of Artificial Intelligence, Engineering, and Ethics.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {posts.map(post => (
                    <PostCard key={post.slug} {...post} />
                ))}
            </div>
        </div>
    );
}
