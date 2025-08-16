import { useState } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we write and maintain code.",
    date: "2025-08-15",
    category: "Artificial Intelligence",
    readingTime: "5 min read",
    author: {
      name: "Alex Thompson",
      avatar: "https://i.pravatar.cc/150?img=1"
    }
  },
  {
    id: 2,
    title: "Building Scalable Cloud Architecture",
    excerpt: "Learn the best practices for designing cloud-native applications that can handle millions of users.",
    date: "2025-08-14",
    category: "Cloud Computing",
    readingTime: "7 min read",
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=2"
    }
  },
  {
    id: 3,
    title: "The Rise of Web3 Technologies",
    excerpt: "Discover how blockchain and decentralized systems are shaping the future of the web.",
    date: "2025-08-13",
    category: "Web3",
    readingTime: "6 min read",
    author: {
      name: "Marcus Williams",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(SAMPLE_POSTS.map(post => post.category)));

  const filteredPosts = selectedCategory
    ? SAMPLE_POSTS.filter(post => post.category === selectedCategory)
    : SAMPLE_POSTS;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tech Insights & Innovation
          </h1>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full ${
                !selectedCategory ? 'bg-blue-500' : 'bg-gray-700'
              } hover:bg-blue-600 transition-all`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category ? 'bg-blue-500' : 'bg-gray-700'
                } hover:bg-blue-600 transition-all`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500 rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold mb-3 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{post.readingTime}</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    Read more →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
