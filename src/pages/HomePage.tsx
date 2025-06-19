import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, ChefHat } from 'lucide-react';
import { cookies } from '../data/cookies';
import { useCart } from '../contexts/CartContext';

export default function HomePage() {
  const { addToCart } = useCart();
  const featuredCookies = cookies.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Homemade Cookies
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">Fresh from Home</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Delicious homemade cookies and cheesecakes made with love. 
              Order online for convenient pickup at KV Perdagangan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cookies"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Browse All Cookies
              </Link>
              <Link
                to="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Homemade Fresh</h3>
              <p className="text-gray-600">All cookies and cheesecakes made fresh from home using premium ingredients and family recipes.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Payment</h3>
              <p className="text-gray-600">Pay with cash or Touch 'n Go for your convenience. Simple and hassle-free transactions.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-rose-50 to-pink-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">KV Perdagangan</h3>
              <p className="text-gray-600">Convenient pickup location at KV Perdagangan for all college students and staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cookies */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Today's Favorites</h2>
            <p className="text-xl text-gray-600">Our most popular homemade treats, loved by students across campus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCookies.map((cookie) => (
              <div key={cookie.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="relative">
                  <img
                    src={cookie.image}
                    alt={cookie.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm font-medium">{cookie.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cookie.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{cookie.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      RM {cookie.price.toFixed(2)}
                      {cookie.name.includes('Cheesecake') && <span className="text-sm text-gray-500 block">/2 pieces</span>}
                    </span>
                    <button
                      onClick={() => addToCart(cookie)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/cookies"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-lg"
            >
              View All Products
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order Your Homemade Treats?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join students who trust us for their daily sweet cravings. Made with love from home!
          </p>
          <Link
            to="/cookies"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105 shadow-lg"
          >
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  );
}