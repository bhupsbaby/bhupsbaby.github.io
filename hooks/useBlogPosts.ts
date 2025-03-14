import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';

export function useBlogPosts() {
  const getBlogPosts = async (): Promise<BlogPost[]> => {
    const blogsDirectory = path.join(process.cwd(), 'content/blog');
    const fileNames = fs.readdirSync(blogsDirectory);

    const posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as BlogPost;
    });

    // Sort posts by date in descending order
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  };

  const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
    try {
      const fullPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
      
      if (!fs.existsSync(fullPath)) {
        return null;
      }
      
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as BlogPost;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  };

  return { getBlogPosts, getBlogPost };
}
