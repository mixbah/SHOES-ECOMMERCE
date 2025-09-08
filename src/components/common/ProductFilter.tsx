import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { X, Filter } from 'lucide-react';

interface FilterState {
  categories: string[];
  brands: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
}

const ProductFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    sizes: [],
    colors: [],
    priceRange: [0, 500]
  });

  const categories = ['Athletic', 'Casual', 'Formal', 'Boots', 'Sandals'];
  const brands = ['Nike', 'Adidas', 'Jordan', 'Puma', 'New Balance', 'Vans'];
  const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];
  const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Orange', 'Brown', 'Gray'];

  const toggleFilter = (type: keyof FilterState, value: string) => {
    if (type === 'priceRange') return;
    
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value) 
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      sizes: [],
      colors: [],
      priceRange: [0, 500]
    });
  };

  const activeFiltersCount = filters.categories.length + filters.brands.length + 
                           filters.sizes.length + filters.colors.length;

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-6">
        <Button 
          variant="outline" 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full"
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge variant="destructive" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filter Panel */}
      <Card className={`${isOpen ? 'block' : 'hidden'} md:block sticky top-20`}>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          <div className="flex items-center gap-2">
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Price Range */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Price Range</Label>
            <div className="px-2">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
                max={500}
                step={10}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Category</Label>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => toggleFilter('categories', category)}
                  />
                  <Label 
                    htmlFor={`category-${category}`}
                    className="text-sm cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Brand</Label>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={() => toggleFilter('brands', brand)}
                  />
                  <Label 
                    htmlFor={`brand-${brand}`}
                    className="text-sm cursor-pointer"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Size</Label>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={filters.sizes.includes(size) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter('sizes', size)}
                  className="h-8"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Color</Label>
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleFilter('colors', color)}
                  className={`
                    w-8 h-8 rounded-full border-2 transition-all relative
                    ${filters.colors.includes(color) 
                      ? 'border-accent scale-110' 
                      : 'border-gray-300 hover:border-accent/50'
                    }
                    ${color === 'Black' ? 'bg-black' :
                      color === 'White' ? 'bg-white' :
                      color === 'Red' ? 'bg-red-500' :
                      color === 'Blue' ? 'bg-blue-500' :
                      color === 'Green' ? 'bg-green-500' :
                      color === 'Orange' ? 'bg-orange-500' :
                      color === 'Brown' ? 'bg-amber-700' :
                      'bg-gray-500'
                    }
                  `}
                  title={color}
                >
                  {filters.colors.includes(color) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-1 h-1 rounded-full ${
                        color === 'White' ? 'bg-black' : 'bg-white'
                      }`} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductFilter;