import React from 'react';
import { Cookie, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cookie className="h-8 w-8 text-pink-400" />
              <span className="text-xl font-bold">Cookie College</span>
            </div>
            <p className="text-gray-300">
              Freshly baked cookies made with love by students, for students. 
              Supporting your sweet cravings since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-pink-400 transition-colors">Browse Cookies</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact Us</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-pink-400 transition-colors">My Account</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Pickup Locations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Allergen Info</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/1234567890" className="text-gray-300 hover:text-pink-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="mailto:cookies@college.edu" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="text-gray-300 text-sm">
              <p>📍 Student Center, Room 101</p>
              <p>🕒 Mon-Fri: 9AM-6PM</p>
              <p>📱 WhatsApp: +1 (234) 567-8900</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Cookie College Store. Made with ❤️ by students, for students.</p>
        </div>
      </div>
    </footer>
  );
}