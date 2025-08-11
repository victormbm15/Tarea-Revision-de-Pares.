import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { removeItem, updateQuantity } from '../store/CartSlice';

const CartPage = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  
  const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleIncrement = (plantId) => {
    const item = items.find(item => item.id === plantId);
    if (item) {
      dispatch(updateQuantity({ id: plantId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (plantId) => {
    const item = items.find(item => item.id === plantId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id: plantId, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (plantId) => {
    dispatch(removeItem(plantId));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('products')}
              className="text-green-600 hover:text-green-800 font-semibold"
            >
              ← Continuar comprando
            </button>
            <h1 className="text-3xl font-bold text-green-800">Carrito de Compras</h1>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-500">Agrega algunas plantas hermosas a tu carrito</p>
          </div>
        ) : (
          <>
            {/* Lista de productos */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Total de plantas: {getTotalItems()}
              </h2>
              
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">{item.image}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                    <p className="text-green-600 font-semibold">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      disabled={item.quantity <= 1}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="w-8 h-8 rounded-full bg-green-200 hover:bg-green-300 flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="text-right min-w-[80px]">
                    <p className="text-lg font-bold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen del pedido */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen del Pedido</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-lg">
                  <span>Subtotal:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Envío:</span>
                  <span>Gratis</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-2xl font-bold text-green-600">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg text-xl transition-colors">
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
