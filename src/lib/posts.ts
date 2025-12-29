export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    content: string; // simulating content
};

export const posts: Post[] = [
    {
        slug: 'hello-world',
        title: 'Hello World: Starting My Dev Blog',
        date: '2023-12-29',
        excerpt: 'Welcome to my new personal development blog. Here is why I started it and what I plan to write about.',
        tags: ['Personal', 'Meta'],
        content: `
      <h2>Welcome to my digital garden</h2>
      <p>This is the start of something new. I've always wanted a place to document my learning journey as a developer.</p>
      <p>I decided to build this using <strong>Next.js 14</strong> (or 15!) and vanilla CSS to keep things lightweight yet modern.</p>
      <h3>The Tech Stack</h3>
      <ul>
        <li>Next.js App Router</li>
        <li>TypeScript</li>
        <li>CSS Modules</li>
        <li>GitHub Pages</li>
      </ul>
      <p>Stay tuned for more updates on my coding adventures!</p>
    `
    },
    {
        slug: 'modern-css-is-awesome',
        title: 'Why Modern CSS is Enough',
        date: '2023-12-28',
        excerpt: 'You might not need Tailwind everywhere. Let’s explore native CSS variables, nesting, and more.',
        tags: ['CSS', 'Web Design'],
        content: `
      <h2>CSS has come a long way</h2>
      <p>Before, we needed SASS for variables and nesting. Now, browsers support them natively.</p>
      <p>With <code>var(--variable)</code>, we can create powerful theming systems without a build step (well, post-css handles compatibility).</p>
      <pre><code>:root {
  --primary: #6366f1;
}
.button {
  background: var(--primary);
}</code></pre>
      <p>It's cleaner, standard-compliant, and you learn the actual platform.</p>
    `
    },
    {
        slug: 'deploying-to-github-pages',
        title: 'Deploying Next.js to GitHub Pages',
        date: '2023-12-25',
        excerpt: 'A quick guide on setting up a CI/CD pipeline for a static Next.js site.',
        tags: ['DevOps', 'Next.js'],
        content: `
      <h2>Static Exports are Key</h2>
      <p>Since GitHub Pages hosts static files, we need to tell Next.js to generate just that.</p>
      <p>In <code>next.config.ts</code>:</p>
      <pre><code>output: 'export'</code></pre>
      <p>This disables server-side features but makes hosting free and fast!</p>
    `
    }
];

export function getPost(slug: string): Post | undefined {
    return posts.find(post => post.slug === slug);
}
