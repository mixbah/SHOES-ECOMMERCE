import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Stay in the Loop</h3>
            <p className="text-white/80">
              Get exclusive access to new arrivals, special offers, and insider news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-accent"
              />
              <Button variant="hero" className="shrink-0">
                <Mail className="h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full gradient-accent"></div>
              <h2 className="text-xl font-bold">SoleMate</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for premium footwear. We believe every step 
              should be comfortable, stylish, and confident.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button key={index} variant="ghost" size="icon" className="text-white/60 hover:text-accent">
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Size Guide', path: '/size-guide' },
                { name: 'Shipping Info', path: '/shipping' },
                { name: 'Returns', path: '/returns' },
                { name: 'FAQ', path: '/faq' }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-white/80 hover:text-accent transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Categories</h3>
            <nav className="flex flex-col space-y-3">
              {['Men\'s Shoes', 'Women\'s Shoes', 'Kids\' Shoes', 'Athletic', 'Casual', 'Formal'].map((category) => (
                <a 
                  key={category} 
                  href="#" 
                  className="text-white/80 hover:text-accent transition-smooth"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/80">123 Fashion St, Style City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white/80">hello@solemate.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-white/10">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-white/80">Secure Payment</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-6 w-6 text-accent" />
              <span className="text-white/80">Free Shipping Over $75</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CreditCard className="h-6 w-6 text-accent" />
              <span className="text-white/80">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 SoleMate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-smooth">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-accent transition-smooth">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-accent transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;