import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import blogs from '../data/blogs.json';

const Blog = ({ isDarkMode }) => {
  return (
    <main className={`min-h-screen py-16 px-4 page-fade-in ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            AIverse Blog
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover insights, guides, and news about AI tools and their applications
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogs.blogs.map(blog => (
            <Link key={blog.id} to={`/blog/${blog.slug}`}>
              <article className={`rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-800 border-slate-700 hover:border-blue-500'
                  : 'bg-white border-gray-200 hover:border-blue-400'
              }`}>
                <div className="md:flex">
                  {/* Featured Image */}
                  <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    {/* Title and Excerpt */}
                    <div>
                      <h2 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {blog.title}
                      </h2>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                      <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FiUser size={16} />
                        {blog.author}
                      </div>
                      <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FiCalendar size={16} />
                        {new Date(blog.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FiClock size={16} />
                        {blog.readTime} min read
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;

