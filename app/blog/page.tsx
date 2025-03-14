import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

// Get all blog posts
async function getBlogPosts(): Promise<BlogPost[]> {
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
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <main className="flex flex-col items-center py-12 min-h-screen bg-offwhite">
      <div className="w-full px-7 md:max-w-3xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        
        <ul className="space-y-12">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-gray-200 pb-12 last:border-0">
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <span className="text-blue-600 font-medium">Read more →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
} 