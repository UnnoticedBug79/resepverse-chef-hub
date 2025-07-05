
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const WorldMap = () => {
  const popularRecipes = [
    { 
      country: 'Italy', 
      recipe: 'Pasta Carbonara', 
      flag: '🇮🇹', 
      cooks: 2.3,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      description: 'Creamy Roman pasta with eggs and pancetta'
    },
    { 
      country: 'Japan', 
      recipe: 'Ramen', 
      flag: '🇯🇵', 
      cooks: 1.8,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
      description: 'Rich broth noodles with toppings'
    },
    { 
      country: 'India', 
      recipe: 'Butter Chicken', 
      flag: '🇮🇳', 
      cooks: 3.1,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400',
      description: 'Creamy tomato-based curry'
    },
    { 
      country: 'Mexico', 
      recipe: 'Tacos al Pastor', 
      flag: '🇲🇽', 
      cooks: 1.9,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400',
      description: 'Marinated pork with pineapple'
    },
    { 
      country: 'France', 
      recipe: 'Coq au Vin', 
      flag: '🇫🇷', 
      cooks: 1.2,
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400',
      description: 'Chicken braised in wine'
    },
    { 
      country: 'Thailand', 
      recipe: 'Pad Thai', 
      flag: '🇹🇭', 
      cooks: 2.7,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      description: 'Stir-fried rice noodles'
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-blue-50 to-green-50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Discover Global Flavors</h2>
        <p className="text-muted-foreground">Explore the most popular recipes from around the world</p>
      </div>

      {/* Country Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularRecipes.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img 
                src={item.image} 
                alt={`${item.country} cuisine`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-background/80 backdrop-blur-sm text-foreground">
                  <span className="mr-1">{item.flag}</span>
                  {item.country}
                </Badge>
              </div>
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  {item.cooks}k cooks
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.recipe}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                View Recipe
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
