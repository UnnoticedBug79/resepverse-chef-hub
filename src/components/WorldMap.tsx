
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const WorldMap = () => {
  const popularRecipes = [
    { country: 'Italy', recipe: 'Pasta Carbonara', flag: '🇮🇹', cooks: 2.3 },
    { country: 'Japan', recipe: 'Ramen', flag: '🇯🇵', cooks: 1.8 },
    { country: 'India', recipe: 'Butter Chicken', flag: '🇮🇳', cooks: 3.1 },
    { country: 'Mexico', recipe: 'Tacos al Pastor', flag: '🇲🇽', cooks: 1.9 },
    { country: 'France', recipe: 'Coq au Vin', flag: '🇫🇷', cooks: 1.2 },
    { country: 'Thailand', recipe: 'Pad Thai', flag: '🇹🇭', cooks: 2.7 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-blue-50 to-green-50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Discover Global Flavors</h2>
        <p className="text-muted-foreground">Explore the most popular recipes from around the world</p>
      </div>

      {/* Popular Recipes Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
