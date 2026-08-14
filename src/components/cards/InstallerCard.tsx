import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { Star, MapPin } from 'lucide-react';

interface InstallerCardProps {
  name: string;
  rating: number;
  reviews: number;
  location: string;
}

const InstallerCard = ({ name, rating, reviews, location }: InstallerCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="flex items-center mb-3">
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <span className="font-bold ml-1">{rating}</span>
        <span className="text-gray-500 ml-1">({reviews} reviews)</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{location}</span>
      </div>
      <Button variant="outline" className="w-full">View Profile</Button>
    </Card>
  );
};

export default InstallerCard;
