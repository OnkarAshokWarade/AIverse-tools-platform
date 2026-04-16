import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiClock, FiArrowLeft } from 'react-icons/fi';
import ToolCard from '../components/ToolCard';
import blogs from '../data/blogs.json';
import tools from '../data/tools.json';

const BlogDetail = ({ isDarkMode }) => {
  const { slug } = useParams();
  const blog = blogs.blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <main className={`min-h-screen py-16 px-4 page-fade-in ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Blog Post Not Found
          </h1>
          <Link to="/blog" className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-2">
            <FiArrowLeft /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedTools = tools.tools.filter(t => blog.relatedTools.includes(t.id));

  return (
    <main className={`min-h-screen py-16 px-4 page-fade-in ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/blog" className={`inline-flex items-center gap-2 mb-8 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition`}>
          <FiArrowLeft /> Back to Blog
        </Link>

        {/* Featured Image */}
        <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-sm mb-6">
            <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <FiUser size={18} />
              <span>{blog.author}</span>
            </div>
            <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <FiCalendar size={18} />
              <span>
                {new Date(blog.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <FiClock size={18} />
              <span>{blog.readTime} min read</span>
            </div>
          </div>

          <div className={`flex gap-2 flex-wrap`}>
            {blog.category && (
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                {blog.category}
              </span>
            )}
            {blog.subcategory && (
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                {blog.subcategory}
              </span>
            )}
          </div>
        </div>

        {/* Blog Content */}
        <div className={`prose ${isDarkMode ? 'prose-invert' : ''} max-w-none mb-12`}>
          <div
            className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-700">
            <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Tools Mentioned in This Post
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTools.map(tool => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* Related Blogs */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.blogs
              .filter(b => b.id !== blog.id)
              .slice(0, 2)
              .map(relatedBlog => (
                <Link key={relatedBlog.id} to={`/blog/${relatedBlog.slug}`}>
                  <div className={`rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg cursor-pointer h-full ${
                    isDarkMode
                      ? 'bg-slate-800 border-slate-700 hover:border-blue-500'
                      : 'bg-white border-gray-200 hover:border-blue-400'
                  }`}>
                    <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className={`font-bold mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {relatedBlog.title}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;

