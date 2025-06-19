import { Cookie } from '../types';

export const cookies: Cookie[] = [
  {
    id: '1',
    name: 'Strawberry Cookies',
    description: 'Delicious homemade strawberry cookies with real strawberry pieces. Sweet, fruity, and perfectly baked.',
    price: 7.00,
    image: 'https://images.pexels.com/photos/4686819/pexels-photo-4686819.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Fresh strawberries', 'Butter', 'Sugar', 'Flour', 'Eggs', 'Vanilla extract'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    category: 'classic',
    rating: 4.8,
    reviews: 89,
    inStock: true
  },
  {
    id: '2',
    name: 'Matcha Cookies',
    description: 'Premium Japanese matcha cookies with authentic green tea flavor. Rich, earthy, and delightfully sweet.',
    price: 7.00,
    image: 'https://images.pexels.com/photos/4198492/pexels-photo-4198492.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Premium matcha powder', 'White chocolate', 'Butter', 'Sugar', 'Flour', 'Eggs'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    category: 'premium',
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: '3',
    name: 'Double Chocolate Cookies',
    description: 'Rich, fudgy cookies loaded with dark and milk chocolate chips. A chocolate lover\'s dream come true.',
    price: 7.00,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Dark chocolate chips', 'Milk chocolate chips', 'Cocoa powder', 'Butter', 'Brown sugar', 'Eggs', 'Flour'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    category: 'classic',
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  {
    id: '4',
    name: 'Red Velvet Cookies',
    description: 'Soft and chewy red velvet cookies with cream cheese frosting. Rich cocoa flavor with a festive appearance.',
    price: 7.00,
    image: 'https://images.pexels.com/photos/8104069/pexels-photo-8104069.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Cocoa powder', 'Red food coloring', 'Cream cheese', 'Butter', 'Sugar', 'Eggs', 'Flour'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    category: 'premium',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: '5',
    name: 'Original Cookies',
    description: 'Classic homemade cookies with traditional recipe. Simple, sweet, and perfectly baked with love.',
    price: 7.00,
    image: 'https://images.pexels.com/photos/1047892/pexels-photo-1047892.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Butter', 'Brown sugar', 'White sugar', 'Eggs', 'Vanilla extract', 'Flour', 'Baking soda'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    category: 'classic',
    rating: 4.7,
    reviews: 134,
    inStock: true
  },
  {
    id: '6',
    name: 'Basque Cheesecake (Original)',
    description: 'Authentic Basque-style burnt cheesecake with creamy texture and caramelized top. 2 pieces per order.',
    price: 10.00,
    image: 'https://images.pexels.com/photos/4686819/pexels-photo-4686819.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Cream cheese', 'Heavy cream', 'Sugar', 'Eggs', 'Vanilla extract'],
    allergens: ['Eggs', 'Dairy'],
    category: 'premium',
    rating: 4.9,
    reviews: 98,
    inStock: true
  },
  {
    id: '7',
    name: 'Basque Cheesecake (Matcha)',
    description: 'Premium matcha-flavored Basque cheesecake with rich green tea taste. 2 pieces per order.',
    price: 10.00,
    image: 'https://images.pexels.com/photos/4198492/pexels-photo-4198492.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Cream cheese', 'Heavy cream', 'Premium matcha powder', 'Sugar', 'Eggs'],
    allergens: ['Eggs', 'Dairy'],
    category: 'premium',
    rating: 4.8,
    reviews: 76,
    inStock: true
  }
];