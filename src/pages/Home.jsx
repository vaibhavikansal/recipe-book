import React, { useContext } from 'react'
import { recipecontext } from '../context/Recipecontext'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

const Home = () => {
  const { data } = useContext(recipecontext);
  const navigate = useNavigate();

  // Show up to 3 featured recipes
  const featured = data.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full ">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-3xl shadow-2xl p-10 w-full max-w-5xl mb-14 overflow-hidden">
        {/* Animated Glow Behind Logo */}
        <div className="absolute left-4 top-4 md:left-10 md:top-1/2 md:-translate-y-1/2 z-0">
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-500 blur-3xl opacity-40 animate-pulse"></div>
        </div>
        <img src={reactLogo} alt="Logo" className="w-36 h-36 mb-4 md:mb-0 z-10 drop-shadow-2xl animate-spin-slow" />
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-xl">
            Welcome to <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">RecipeBook</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 font-medium drop-shadow">Discover, create, and share your favorite recipes with a vibrant community of food lovers.</p>
          <button
            onClick={() => navigate('/recipes')}
            className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 hover:from-pink-400 hover:to-yellow-400 text-white font-bold px-10 py-4 rounded-2xl shadow-xl text-2xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Explore Recipes
          </button>
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text drop-shadow-lg">Featured Recipes</h2>
        {featured.length === 0 ? (
          <div className="text-gray-200 text-lg bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-2xl p-8 text-center shadow-lg">
            No recipes yet. <span className="text-pink-400 font-semibold">Create your first recipe!</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featured.map(recipe => (
              <div
                key={recipe.id}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 rounded-2xl shadow-xl p-7 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-transparent hover:border-pink-400 group relative overflow-hidden"
              >
                {/* Card Glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-pink-400 via-yellow-300 to-purple-500 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-300 z-0"></div>
                {recipe.image && (
                  <img src={recipe.image} alt={recipe.title} className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-pink-400 shadow-lg z-10" />
                )}
                <h3 className="text-lg font-bold text-white mb-2 z-10 drop-shadow">{recipe.title}</h3>
                <p className="text-gray-200 text-sm mb-2 line-clamp-2 z-10">{recipe.description}</p>
                <span className="text-xs bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-1 rounded-full mt-auto z-10 shadow">{recipe.category || 'Uncategorized'}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home