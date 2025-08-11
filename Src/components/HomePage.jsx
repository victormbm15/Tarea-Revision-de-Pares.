import React from 'react';
import { Leaf } from 'lucide-react';

const HomePage = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center p-4">
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-2xl text-center">
      <div className="mb-6">
        <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-green-800 mb-2">PlantHub</h1>
        <h2 className="text-xl text-green-600">Tu tienda de plantas favorita</h2>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          En PlantHub nos especializamos en brindarte las mejores plantas para transformar 
          tu hogar y jardín. Con más de 10 años de experiencia, ofrecemos plantas de alta 
          calidad, cuidadas con amor y seleccionadas especialmente para ti. Desde plantas 
          de interior que purifican el aire hasta hermosas flores para tu jardín exterior.
        </p>
      </div>
      
      <button 
        onClick={() => onNavigate('products')}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Comenzar
      </button>
    </div>
  </div>
);

export default HomePage;
