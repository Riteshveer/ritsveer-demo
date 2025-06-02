
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <Card className="group bg-gray-50/50 backdrop-blur-sm border-gray-200 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 h-full">
      <CardHeader>
        <div className="w-16 h-16 bg-gradient-to-r from-gray-300/20 to-gray-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-gray-400/30 group-hover:to-gray-600/30 transition-all duration-300">
          <Icon className="w-8 h-8 text-gray-700 group-hover:text-gray-800 transition-colors duration-300" />
        </div>
        <CardTitle className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-base">
          {service.title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={feature} className="flex items-center space-x-3 group/item">
              <CheckCircle className="w-5 h-5 text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300 flex-shrink-0" />
              <span className="text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300 text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
