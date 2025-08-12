import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// 📁 src/data/plants.js
export const plants = [
  // Plantas de Interior
  { id: 1, name: "Monstera Deliciosa", price: 45.99, category: "Interior", image: "🌿" },
  { id: 2, name: "Pothos Dorado", price: 25.99, category: "Interior", image: "🌱" },
  
  // Plantas de Exterior
  { id: 3, name: "Rosa Roja", price: 35.99, category: "Exterior", image: "🌹" },
  { id: 4, name: "Lavanda", price: 28.99, category: "Exterior", image: "🌸" },
  
  // Suculentas
  { id: 5, name: "Aloe Vera", price: 18.99, category: "Suculentas", image: "🌵" },
  { id: 6, name: "Echeveria", price: 22.99, category: "Suculentas", image: "🪴" }
];

export const categories = ["Interior", "Exterior", "Suculentas"];
