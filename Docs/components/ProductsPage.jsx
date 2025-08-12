import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { addItem } from '../store/CartSlice';
import { plants, categories } from '../data/plants';

const ProductsPage = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const { items, disabledButtons } = useSelector(state => state.cart);
  
  const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="text-green-600 hover:text-green-800 font-semibold"
            >
              ← Inicio
            </button>
            <h1 className="text-3xl font-bold text-green-800">Nuestras Plantas</h1>
          </div>
          
          <button 
            onClick={() => onNavigate('cart')}
            className="relative bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>

        {/* Productos por categoría */}
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plants.filter(plant => plant.category === category).map(plant => (
                <div key={plant.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <span className="text-6xl">{plant.image}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{plant.name}</h3>
                    <p className="text-2xl font-bold text-green-600 mb-4">${plant.price}</p>
                    <button
                      onClick={() => dispatch(addItem(plant))}
                      disabled={disabledButtons.includes(plant.id)}
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                        disabledButtons.includes(plant.id)
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-lg transform hover:scale-105'
                      }`}
                    >
                      {disabledButtons.includes(plant.id) ? 'Agregada al carrito' : 'Añadir a la cesta'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
