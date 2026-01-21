
import React from 'react';
import { Search, ArrowUpRight } from 'lucide-react';

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const FEATURE_POSTS: BlogPost[] = [
  {
    id: 1,
    category: 'Engineering',
    date: 'OCT 12, 2024',
    title: 'The Silence of Speed: Redefining Torque',
    excerpt: 'An inside look at our proprietary vector-control algorithms that eliminate motor whine while delivering 250 N.m of instant torque.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Company',
    date: 'OCT 08, 2024',
    title: 'Los Angeles Strategic Hub Now Operational',
    excerpt: 'Our flagship customization and R&D facility is open in the Arts District. Book a test ride or consult with our build specialists.',
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1600&auto=format&fit=crop'
  }
];

const STANDARD_POSTS: BlogPost[] = [
  {
    id: 3,
    category: 'Tech',
    date: 'SEP 28, 2024',
    title: '72V Architecture Explained',
    excerpt: 'Why high voltage is the key to sustained power delivery and thermal management.',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Field Guide',
    date: 'SEP 24, 2024',
    title: 'Urban Stealth Protocols',
    excerpt: 'Navigating the grid efficiently. Tips for night riding in dense metropolitan zones.',
    image: 'https://images.unsplash.com/photo-1558980331-0672ff794669?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Design',
    date: 'SEP 20, 2024',
    title: 'The Monocoque Philosophy',
    excerpt: 'Reducing hardware points to silence acoustic rattle and improve chassis rigidity.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Update',
    date: 'SEP 15, 2024',
    title: 'Firmware 2.0 Release Notes',
    excerpt: 'New regenerative braking profiles and unlocked "Track Mode" for GT Pro owners.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop'
  }
];

const FOOTER_THUMBNAILS = [
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517174637840-79885e783433?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578590895995-2c262143b836?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565452445657-3b2d184762d0?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=400&auto=format&fit=crop"
];

const BlogHeader = () => (
  <div className="flex flex-col md:flex-row items-center justify-between py-8 px-8 border-b border-black/10 bg-white">
    <div className="w-full md:w-1/3 flex justify-between md:justify-start items-center">
      <span className="text-2xl font-bold tracking-tighter">BRAXX</span>
    </div>

    <div className="w-full md:w-1/3 flex justify-center py-4 md:py-0">
      <nav className="flex gap-8 text-xs font-medium text-gray-500 uppercase tracking-widest">
        <button className="hover:text-black transition-colors">News</button>
        <button className="hover:text-black transition-colors">Engineering</button>
        <button className="hover:text-black transition-colors">Culture</button>
        <button className="hover:text-black transition-colors">Fleet</button>
      </nav>
    </div>

    <div className="w-full md:w-1/3 flex justify-end items-center gap-6">
      <div className="relative hidden md:block group">
        <Search size={16} className="text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-6 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none text-black w-24 focus:w-40 transition-all duration-300"
        />
      </div>
      <button className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#e2ff4a] hover:text-black transition-colors">
        Sign In
      </button>
    </div>
  </div>
);

interface TileProps {
  post: BlogPost;
  type: 'feature' | 'standard';
  className?: string;
}

const PostTile: React.FC<TileProps> = ({ post, type, className = '' }) => {
  return (
    <div className={`group relative flex flex-col justify-between p-8 md:p-12 overflow-hidden bg-white border-b border-black/10 ${className}`}>
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">

        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 group-hover:text-white/80 transition-colors duration-300">
            {post.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-white/40"></span>
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400 group-hover:text-white/60 transition-colors duration-300">
            {post.date}
          </span>
        </div>

        {/* Body */}
        <div className="mt-auto space-y-4 pt-12">
          <h3 className={`font-semibold tracking-tight text-black group-hover:text-white transition-colors duration-300 ${type === 'feature' ? 'text-3xl md:text-5xl leading-[1.1]' : 'text-2xl md:text-3xl leading-tight'}`}>
            {post.title}
          </h3>
          <p className={`text-gray-500 group-hover:text-gray-200 transition-colors duration-300 font-medium leading-relaxed ${type === 'feature' ? 'text-sm md:text-base max-w-lg' : 'text-xs md:text-sm line-clamp-3'}`}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute top-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        <ArrowUpRight className="text-white" size={24} />
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="bg-[#d4d4d4] min-h-screen pt-24 md:pt-28 pb-32">
      <div className="max-w-[1920px] mx-auto bg-white shadow-2xl">
        <BlogHeader />

        {/* Feature Row (Row 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {FEATURE_POSTS.map((post, index) => (
            <PostTile
              key={post.id}
              post={post}
              type="feature"
              className={`h-[500px] md:h-[650px] ${index === 0 ? 'md:border-r border-black/10' : ''}`}
            />
          ))}
        </div>

        {/* Standard Row (Row 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {STANDARD_POSTS.map((post, index) => (
            <PostTile
              key={post.id}
              post={post}
              type="standard"
              className={`h-[450px] ${index !== 3 ? 'lg:border-r border-black/10' : ''} ${index % 2 === 0 ? 'md:border-r lg:border-r-0' : ''}`}
            />
          ))}
        </div>

        {/* Footer Thumbnail Strip */}
        <div className="py-8 px-8 border-t border-black/10 flex flex-col xl:flex-row items-center justify-between gap-12">
          <div className="flex-1 w-full grid grid-cols-3 md:grid-cols-6 gap-4">
            {FOOTER_THUMBNAILS.map((src, index) => (
              <div key={index} className="aspect-[3/2] bg-gray-100 overflow-hidden relative group cursor-pointer">
                <img
                  src={src}
                  alt={`Archive ${index}`}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <button className="shrink-0 px-12 py-5 border border-black/10 hover:bg-black hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300">
            View Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;