import React from 'react'

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 py-12 px-4">
      {/* Hero Section */}
      <div className="w-full max-w-3xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center mb-10 animate-fade-in">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow-lg">
            About RecipeBook
          </span>
        </div>
        <p className="text-lg text-gray-700 text-center mb-6 font-medium">
          Welcome to <span className="font-bold text-pink-500">RecipeBook</span> – your ultimate destination to discover, create, and share mouth-watering recipes! Whether you're a seasoned chef or a home cook, our vibrant community and intuitive platform make it easy to explore new flavors, organize your favorites, and inspire your next culinary adventure.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mt-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🍳</span>
            <span className="font-semibold text-gray-800">Easy to Use</span>
            <span className="text-sm text-gray-500">Simple, clean, and intuitive interface for everyone.</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🌍</span>
            <span className="font-semibold text-gray-800">Global Flavors</span>
            <span className="text-sm text-gray-500">Explore recipes from around the world.</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">❤️</span>
            <span className="font-semibold text-gray-800">Save Favorites</span>
            <span className="text-sm text-gray-500">Keep your most-loved recipes at your fingertips.</span>
          </div>
        </div>
      </div>

      {/* Team/Creator Section */}
      <div className="w-full max-w-2xl bg-white/70 rounded-2xl shadow-lg p-8 flex flex-col items-center mb-10 animate-fade-in delay-200">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Meet the Creator</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Creator" className="w-24 h-24 rounded-full border-4 border-pink-300 shadow-lg" />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800">Vaibhavi Kansal</h3>
            <p className="text-gray-600 mt-2">Passionate developer, food lover, and the mind behind RecipeBook. Dedicated to making cooking fun, accessible, and inspiring for everyone.</p>
            <div className="flex gap-4 mt-3 justify-center md:justify-start">
              <a href="https://github.com/vaibhavikansal" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 text-2xl"><i className="ri-github-fill"></i></a>
              <a href="mailto:vaibhavikansal@example.com" className="text-gray-500 hover:text-pink-500 text-2xl"><i className="ri-mail-fill"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-xl bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in delay-400">
        <h2 className="text-2xl font-bold text-white mb-4 drop-shadow">Ready to start your culinary journey?</h2>
        <p className="text-white text-lg mb-6 text-center">Sign up, explore trending recipes, or create your own masterpiece today!</p>
        <a href="/recipes" className="bg-white text-pink-600 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-pink-100 transition-all text-lg">Explore Recipes</a>
      </div>
    </div>
  )
}

export default About