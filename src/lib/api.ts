import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const menuFile = path.join(process.cwd(), 'content/settings/menu.json');

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    category?: string;
    content: string;
};

export type MenuItem = {
    label: string;
    url: string;
};

export function getSortedPostsData(): Post[] {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const matterResult = matter(fileContents);

            return {
                slug,
                ...(matterResult.data as { title: string; date: string; excerpt: string; tags: string[]; category?: string }),
                content: matterResult.content, // Raw markdown for listing if needed, or stripped
            } as Post;
        });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(slug: string): Promise<Post | undefined> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return undefined;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        content: contentHtml,
        ...(matterResult.data as { title: string; date: string; excerpt: string; tags: string[]; category?: string }),
    } as Post;
}

export function getMenuItems(): MenuItem[] {
    if (!fs.existsSync(menuFile)) {
        return [];
    }
    const fileContents = fs.readFileSync(menuFile, 'utf8');
    const data = JSON.parse(fileContents);
    return data.menuItems || [];
}
