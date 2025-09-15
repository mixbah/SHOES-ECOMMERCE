import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-shoes.jpg';
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isTablet: boolean = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium sneakers collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-white/20 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">New Collection</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Step Into
              <span className="block text-accent">
                Greatness
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover premium footwear that combines cutting-edge technology 
              with timeless style. Every step matters.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => {
                const element = document.getElementById('featured-products');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Shop
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => {
                const modal = document.getElementById('story-modal');
                modal?.classList.remove('hidden');
              }}
            >
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8 animate-fade-in">
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '100+', label: 'Premium Brands' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-accent">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!isMobile && !isTablet && <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>}

      {/* Story Modal */}
      <div id="story-modal" className="hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full p-8 relative">
            <button 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={() => {
                const modal = document.getElementById('story-modal');
                modal?.classList.add('hidden');
              }}
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-6 text-accent">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                It started with a worn-out pair of sneakers and a late-night revelation. In 2025, while scrolling through endless pages of disappointing footwear options, our founder realized something was missing from the shoe industry: soul. Not just comfort for your soles, but products with genuine soul. The market was flooded with mass-produced mediocrity, where style came at the expense of substance, and comfort meant compromising on aesthetics.
              </p>
              <p>
                SoleMate emerged from countless conversations with fellow shoe lovers who shared the same frustration - why choose between style and substance? We believed footwear should be an extension of your personality, not a compromise. So we built something different. We spent months walking in shoes that didn't quite fit our vision, talking to craftsmen who shared our passion, and dreaming of a world where every step felt intentional. What started as a small rebellion against boring footwear has grown into a revolution of choice, quality, and authentic style.
              </p>
              <p>
                We're not just another shoe retailer. We're curators of confidence, collectors of craftsmanship, and believers that the right pair of shoes can change how you see the world - and how the world sees you. Every pair in our collection has been chosen not just for its appearance, but for its story, its purpose, and its power to make you feel unstoppable. Because we know that when you find the perfect shoe, you don't just walk differently - you live differently.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm">Happy customers worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;