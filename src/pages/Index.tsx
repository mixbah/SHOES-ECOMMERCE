import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Footer from '@/components/sections/Footer';
import { useSearch } from '@/contexts/SearchContext';

const Index = () => {
  const { searchQuery } = useSearch();

  return (
    <div className="min-h-screen bg-background w-full">
      <Header />
      <main className="w-full">
        {!searchQuery.trim() && <Hero />}
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
