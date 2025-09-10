import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useSearch } from '@/contexts/SearchContext';
import { toast } from '@/hooks/use-toast';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import shoe1 from '@/assets/shoe-1.jpg';
import shoe2 from '@/assets/shoe-2.jpg';
import shoe3 from '@/assets/shoe-3.jpg';

const products = [
  {
    id: 1,
    name: 'Air Max Revolution',
    brand: 'Nike',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 124,
    image: shoe1,
    isNew: true,
    isSale: true,
    colors: ['black', 'white', 'orange']
  },
  {
    id: 2,
    name: 'Court Vision Elite',
    brand: 'Adidas',
    price: 149.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    image: shoe2,
    isNew: false,
    isSale: false,
    colors: ['black', 'red', 'blue']
  },
  {
    id: 3,
    name: 'Oxford Professional',
    brand: 'Cole Haan',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 67,
    image: shoe3,
    isNew: false,
    isSale: true,
    colors: ['black', 'brown', 'navy']
  },
  {
    id: 4,
    name: 'Runner Pro',
    brand: 'Nike',
    price: 139.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: shoe1,
    isNew: true,
    isSale: false,
    colors: ['blue', 'black', 'white']
  },
  {
    id: 5,
    name: 'Street Walker',
    brand: 'Adidas',
    price: 169.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 203,
    image: shoe2,
    isNew: false,
    isSale: true,
    colors: ['white', 'grey', 'blue']
  },
  {
    id: 6,
    name: 'Classic Derby',
    brand: 'Cole Haan',
    price: 229.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 45,
    image: shoe3,
    isNew: false,
    isSale: false,
    colors: ['brown', 'black', 'tan']
  },
  {
    id: 7,
    name: 'Sport Flex',
    brand: 'Nike',
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviews: 98,
    image: shoe1,
    isNew: true,
    isSale: true,
    colors: ['red', 'black', 'white']
  },
  {
    id: 8,
    name: 'Urban Style',
    brand: 'Adidas',
    price: 159.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 134,
    image: shoe2,
    isNew: false,
    isSale: false,
    colors: ['black', 'white', 'grey']
  }
];

const FeaturedProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { searchQuery } = useSearch();

  const toggleFavorite = (product: typeof products[0]) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
      });
    }
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Duplicate products for "View All" functionality
  const additionalProducts = products.map(p => ({ 
    ...p, 
    id: p.id + 100,
    name: p.name + ' Pro',
    price: p.price + 20
  }));
  
  const allProducts = showAll ? [...products, ...additionalProducts] : products;
  
  // Filter products based on search query
  const displayedProducts = searchQuery.trim()
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    : allProducts;

  return (
    <section id="featured-products" className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Products'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {searchQuery 
              ? `Found ${displayedProducts.length} product(s) matching your search`
              : 'Discover our handpicked selection of premium footwear that combines style, comfort, and performance for every lifestyle.'
            }
          </p>
        </div>

        {/* Products Grid */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found matching your search.</p>
            <p className="text-muted-foreground text-sm mt-2">Try searching for different keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {displayedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-strong transition-smooth overflow-hidden">
              <div className="relative overflow-hidden">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground">New</Badge>
                  )}
                  {product.isSale && product.originalPrice && (
                    <Badge variant="destructive">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="h-8 w-8 shadow-medium"
                    onClick={() => toggleFavorite(product)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${isFavorite(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-8 w-8 shadow-medium">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Add to Cart - Hover */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <Button 
                    variant="cart" 
                    className="w-full" 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                {/* Brand */}
                <div className="text-sm text-muted-foreground font-medium">
                  {product.brand}
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-lg leading-tight">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Colors */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 border-white shadow-soft ${
                          color === 'black' ? 'bg-black' :
                          color === 'white' ? 'bg-white border-gray-300' :
                          color === 'orange' ? 'bg-orange-500' :
                          color === 'red' ? 'bg-red-500' :
                          color === 'blue' ? 'bg-blue-500' :
                          color === 'brown' ? 'bg-amber-700' :
                          color === 'navy' ? 'bg-navy-900' :
                          'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-accent">
                    Rs{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      Rs{product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        )}

        {/* View All Button - Only show when not searching */}
        {!searchQuery && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less Products' : 'View All Products'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;