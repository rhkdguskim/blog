export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  category?: 'Prompt Engineering' | 'Agent AI' | 'Philosophy' | 'Dev';
};

export const posts: Post[] = [
  {
    slug: 'prompt-engineering-guide',
    title: 'The Art of Prompt Engineering',
    date: '2024-01-01',
    excerpt: 'Mastering the language of AI: How to craft prompts that get exactly what you want.',
    tags: ['Prompt Engineering', 'AI', 'Tutorial'],
    category: 'Prompt Engineering',
    content: `
      <h2>Why Prompt Engineering Matters</h2>
      <p>As LLMs become more powerful, the ability to direct them precisely becomes a critical skill. It's not just about asking questions; it's about setting context, defining constraints, and iterating towards perfection.</p>
      
      <h3>Key Techniques</h3>
      <ul>
        <li><strong>Few-Shot Prompting</strong>: Providing examples to guide the model.</li>
        <li><strong>Chain of Thought</strong>: Asking the model to explain its reasoning step-by-step.</li>
        <li><strong>Role Playing</strong>: Assigning a persona to the AI.</li>
      </ul>
      
      <p>Effective prompting bridges the gap between human intent and machine execution.</p>
    `
  },
  {
    slug: 'agent-ai-revolution',
    title: 'The Rise of Agentic AI: Codex, Gemini, and Claude',
    date: '2024-01-02',
    excerpt: 'Comparing the leading AI agents that are reshaping software development and automation.',
    tags: ['Agent AI', 'Gemini', 'Codex', 'Claude'],
    category: 'Agent AI',
    content: `
      <h2>From Chatbots to Agents</h2>
      <p>We are moving beyond simple Q&A bots to autonomous agents capable of performing tasks.</p>

      <h3>OpenAI Codex</h3>
      <p>The engine behind GitHub Copilot. It translates natural language into code, effectively acting as a pair programmer.</p>

      <h3>Google Gemini</h3>
      <p>A multimodal powerhouse. Gemini doesn't just understand text; it processes code, images, and video, making it a versatile agent for complex workflows.</p>

      <h3>Anthropic Claude</h3>
      <p>Known for its massive context window and safety focus. Claude excels at analyzing large codebases and providing nuanced, distinct responses.</p>
      
      <p>The future is multi-agent systems where these specialized AIs work together.</p>
    `
  },
  {
    slug: 'philosophy-of-ai',
    title: 'Ghost in the Shell: The Philosophy of Artificial Intelligence',
    date: '2024-01-03',
    excerpt: 'Exploring consciousness, ethics, and what it means to be intelligent in the age of machines.',
    tags: ['Philosophy', 'Ethics', 'Consciousness'],
    category: 'Philosophy',
    content: `
      <h2>Can Machines Think?</h2>
      <p>Alan Turing asked this decades ago. Today, as AI passes the Turing Test in many forms, the question shifts to: <em>Do they understand?</em></p>
      
      <h3>The Chinese Room Argument</h3>
      <p>Searle's famous thought experiment suggests that syntactic processing (manipulating symbols) is not the same as semantic understanding (knowing meaning).</p>
      
      <h3>AI Alignment</h3>
      <p>Ensuring AI goals align with human values is not just a technical problem, but a deeply philosophical one. What values do we prioritize? Who decides?</p>
      
      <p>As we build smarter entities, we reflect on our own nature as thinking beings.</p>
    `
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}
