
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const popularRecipes = [
    { country: 'Italy', recipe: 'Pasta Carbonara', flag: '🇮🇹', cooks: 2.3, x: 48, y: 35 },
    { country: 'Japan', recipe: 'Ramen', flag: '🇯🇵', cooks: 1.8, x: 85, y: 40 },
    { country: 'India', recipe: 'Butter Chicken', flag: '🇮🇳', cooks: 3.1, x: 70, y: 45 },
    { country: 'Mexico', recipe: 'Tacos al Pastor', flag: '🇲🇽', cooks: 1.9, x: 20, y: 50 },
    { country: 'France', recipe: 'Coq au Vin', flag: '🇫🇷', cooks: 1.2, x: 45, y: 32 },
    { country: 'Thailand', recipe: 'Pad Thai', flag: '🇹🇭', cooks: 2.7, x: 75, y: 55 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-blue-50 to-green-50 rounded-2xl p-8 relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Discover Global Flavors</h2>
        <p className="text-muted-foreground">Click on any country to explore their most popular recipes</p>
      </div>

      {/* Simplified World Map Background */}
      <div className="relative w-full h-96 bg-gradient-to-b from-blue-100 to-green-100 rounded-xl overflow-hidden">
        {/* Continents as simple shapes */}
        <div className="absolute inset-0">
          {/* North America */}
          <div className="absolute w-32 h-24 bg-green-200 rounded-lg" style={{ left: '10%', top: '25%' }}></div>
          {/* Europe */}
          <div className="absolute w-20 h-16 bg-green-200 rounded-lg" style={{ left: '45%', top: '20%' }}></div>
          {/* Asia */}
          <div className="absolute w-40 h-32 bg-green-200 rounded-lg" style={{ left: '65%', top: '25%' }}></div>
          {/* South America */}
          <div className="absolute w-16 h-28 bg-green-200 rounded-lg" style={{ left: '25%', top: '55%' }}></div>
          {/* Africa */}
          <div className="absolute w-24 h-32 bg-green-200 rounded-lg" style={{ left: '48%', top: '45%' }}></div>
        </div>

        {/* Recipe Markers */}
        {popularRecipes.map((item, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            onMouseEnter={() => setSelectedCountry(item.country)}
            onMouseLeave={() => setSelectedCountry(null)}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold animate-pulse">
                {item.flag}
              </div>
              {selectedCountry === item.country && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-card p-4 rounded-lg shadow-lg border min-w-48 z-10">
                  <div className="text-center">
                    <h3 className="font-semibold text-card-foreground">{item.country}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.recipe}</p>
                    <Badge variant="secondary" className="text-xs">
                      {item.cooks}k cooks
                    </Badge>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Popular Recipes Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {popularRecipes.map((item, index) => (
          <Button
            key={index}
            variant="outline"
            className="flex flex-col items-center p-4 h-auto space-y-2 hover:bg-accent transition-colors"
          >
            <span className="text-2xl">{item.flag}</span>
            <span className="text-sm font-medium text-center">{item.recipe}</span>
            <Badge variant="secondary" className="text-xs">
              {item.cooks}k
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
