import React from 'react';
import Card from '../common/Card';

const ProductCard = ({ name, brand, type }) => {
  return (
    <Card className="hover:shadow-md transition-shadow text-center">
      <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
        <span className="text-gray-400 font-medium">Product Image</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">{brand}</p>
      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded mt-2">{type}</span>
    </Card>
  );
};

export default ProductCard;
