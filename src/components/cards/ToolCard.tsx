
import Card from '../common/Card';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  path: string;
  icon?: LucideIcon;
}

const ToolCard = ({ title, description, path, icon: Icon }: ToolCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      {Icon && <Icon className="w-8 h-8 text-blue-600 mb-4" />}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 grow">{description}</p>
      <Link to={path} className="text-blue-600 font-medium hover:underline inline-flex items-center mt-auto">
        Try Tool &rarr;
      </Link>
    </Card>
  );
};

export default ToolCard;
