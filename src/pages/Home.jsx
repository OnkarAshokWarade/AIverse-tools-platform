import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import data from '../data/tools.json';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const Home = ({ isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <main className="page-fade-in">
      {/* Hero Section */}
      <section className={`${isDarkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-blue-50 to-white'} py-20 px-4`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-5xl sm:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Explore All AI Tools
            </span>
            <br />
            in One Place
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
            Discover, compare, and learn about the best AI tools available today. From image generation to productivity automation, find the perfect AI solution for your needs.
          </p>
          <button
            onClick={() => navigate('/categories')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Start Exploring <FiArrowRight />
          </button>
        </div>
      </section>

      {/* What is AI Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Understanding AI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What is AI */}
            <div className={`p-8 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-200'}`}>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                What is AI?
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Artificial Intelligence (AI) refers to computer systems trained to perform tasks that typically require human intelligence. This includes learning from experience, recognizing patterns, understanding language, and making decisions.
              </p>
            </div>

            {/* What is AI Tool */}
            <div className={`p-8 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-200'}`}>
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                What is an AI Tool?
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                An AI tool is a software application or service that leverages artificial intelligence to help users accomplish specific tasks more efficiently. These tools range from content creation and coding assistance to data analysis and automation.
              </p>
            </div>

            {/* Why AI is Important */}
            <div className={`p-8 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-200'}`}>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Why AI Matters?
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                AI tools increase productivity, reduce manual work, enable innovation, and democratize access to advanced capabilities. Whether you're a student, professional, or entrepreneur, AI tools can amplify your capabilities and help you achieve more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Browse AI Categories
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Explore thousands of AI tools organized by category. Find the perfect solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Workflow with AI?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Check out our blog for detailed guides on the best AI tools for different use cases.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className={`${isDarkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white/20 hover:bg-white/30'} text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center gap-2`}
          >
            Read Our Blog <FiArrowRight />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {data.categories.length}+
              </div>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                AI Categories
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {data.tools.length}+
              </div>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                AI Tools Listed
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Free to Use
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Accessible Anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
