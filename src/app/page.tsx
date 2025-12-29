import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { posts } from '@/lib/posts';

export default function Home() {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="container">
      {/* Hero Section */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          lineHeight: 1.1
        }}>
          Exploring the <span className="gradient-text">Mind</span><br />
          of the Machine.
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#94a3b8',
          maxWidth: '600px',
          margin: '0 auto 2.5rem'
        }}>
          Diving deep into Prompt Engineering, Agentic AI (Gemini, Codex, Claude), and the Philosophy of Artificial Intelligence.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/blog" style={{
            background: 'var(--primary)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            transition: 'opacity 0.2s'
          }}>
            Read the Blog
          </Link>
          <Link href="https://github.com/rhkdguskim" target="_blank" style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            backdropFilter: 'blur(10px)'
          }}>
            GitHub Profile
          </Link>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Latest Insights</h2>
          <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            View all &rarr;
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {recentPosts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}
