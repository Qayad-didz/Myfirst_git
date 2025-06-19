import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, ArrowLeft, AlertTriangle } from 'lucide-react';
import { cookies } from '../data/cookies';
import { useCart } from '../contexts/CartContext';

export default function CookieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const cookie = cookies.find(c => c.id === id);

  if (!cookie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie not found</h2>
          <button
            onClick={() => navigate('/cookies')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Back to Cookies
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(cookie, quantity);
    // Show success message or redirect
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/cookies')}
          className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Cookies</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src={cookie.image}
                alt={cookie.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {cookie.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-amber-400 fill-current" />
                  <span className="font-medium">{cookie.rating}</span>
                  <span className="text-gray-500">({cookie.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{cookie.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{cookie.description}</p>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              ${cookie.price.toFixed(2)}
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {cookie.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm border border-purple-200"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Allergens */}
            {cookie.allergens.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-amber-800">Allergen Information</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cookie.allergens.map((allergen, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center hover:bg-purple-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-semibold min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center hover:bg-purple-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-lg font-semibold">
                  Total: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">${(cookie.price * quantity).toFixed(2)}</span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              cookie.inStock 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {cookie.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cookies
              .filter(c => c.id !== cookie.id && c.category === cookie.category)
              .slice(0, 3)
              .map((relatedCookie) => (
                <div
                  key={relatedCookie.id}
                  onClick={() => navigate(`/cookies/${relatedCookie.id}`)}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
                >
                  <img
                    src={relatedCookie.image}
                    alt={relatedCookie.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedCookie.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">${relatedCookie.price.toFixed(2)}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="text-sm">{relatedCookie.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}