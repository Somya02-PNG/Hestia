export interface MenuCategory {
  id: string
  name: string
  description: string
  verifiedUrl: string
  highlights: string[]
}

export const MENU_CONFIG = {
  authoritativeMenuUrl: 'https://www.zomato.com/kanpur/hestiia-restaurant-shyam-nagar/menu',
  disclaimer: 'Prices and seasonal dish availability are subject to daily kitchen updates. View our live verified menu on Zomato for current offerings.',
  categories: [
    {
      id: 'north-indian',
      name: 'North Indian Delicacies',
      description: 'Slow-simmered rich curries, gravies, hand-rolled rotis, and aromatic rice specialities.',
      verifiedUrl: 'https://www.zomato.com/kanpur/hestiia-restaurant-shyam-nagar/menu',
      highlights: ['Paneer Butter Masala', 'Dal Makhani', 'Shahi Paneer', 'Garlic Naan', 'Jeera Rice'],
    },
    {
      id: 'chinese',
      name: 'Indo-Chinese Favourites',
      description: 'Fresh vegetables, tangy house-made sauces, and wok-seared noodles & starters.',
      verifiedUrl: 'https://www.zomato.com/kanpur/hestiia-restaurant-shyam-nagar/menu',
      highlights: ['Crispy Chilli Paneer', 'Hakka Noodles', 'Veg Manchurian Gravy', 'Fried Rice'],
    },
    {
      id: 'fast-food',
      name: 'Quick Comforts & Snacks',
      description: 'Crispy snacks, gourmet sandwiches, and classic continental comfort eats.',
      verifiedUrl: 'https://www.zomato.com/kanpur/hestiia-restaurant-shyam-nagar/menu',
      highlights: ['Special Veg Grilled Sandwich', 'Crisp French Fries', 'Cheese Pizza', 'Crunchy Platters'],
    },
    {
      id: 'desserts',
      name: 'Sweets & Refreshing Beverages',
      description: 'Handcrafted desserts, comforting hot brews, and refreshing iced mocktails.',
      verifiedUrl: 'https://www.zomato.com/kanpur/hestiia-restaurant-shyam-nagar/menu',
      highlights: ['Slow-Cooked Badam Kheer', 'Gulab Jamun', 'Virgin Mojito', 'Cold Coffee'],
    },
  ],
}
