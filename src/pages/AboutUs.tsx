import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Globe, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">About SoleMate</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium footwear since 2020. We believe every step should be comfortable, stylish, and confident.
            </p>
          </div>

          {/* Story Section */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020 by a team of footwear enthusiasts, SoleMate was born from a simple belief: 
                  everyone deserves shoes that don't just look good, but feel incredible too.
                </p>
                <p>
                  We started with a mission to bridge the gap between style and comfort, sourcing the finest materials 
                  and working with skilled craftspeople to create footwear that stands the test of time.
                </p>
                <p>
                  Today, we're proud to serve customers worldwide, offering a curated selection of premium shoes 
                  for every occasion, lifestyle, and personality.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Users className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-semibold">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Every decision we make starts with our customers in mind.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Award className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-semibold">Quality Promise</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on materials or craftsmanship.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Globe className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-semibold">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to responsible sourcing and eco-friendly practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Heart className="h-12 w-12 mx-auto text-primary" />
                <h3 className="font-semibold">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Driven by love for great design and exceptional comfort.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto"></div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto"></div>
                  <div>
                    <h3 className="font-semibold">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Head of Design</p>
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto"></div>
                  <div>
                    <h3 className="font-semibold">Emma Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Customer Experience</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;