import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  title: string;
  rating: number;
  text: string;
  author: string;
}

const ReviewCard = ({ title, rating, text, author }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 italic leading-relaxed">"{text}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{author}</p>
          <p className="text-xs text-gray-500">Verified Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
