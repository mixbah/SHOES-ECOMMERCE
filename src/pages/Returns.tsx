import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, Package, CheckCircle, XCircle, Clock, Truck } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Returns & Exchanges</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Not completely satisfied? We offer hassle-free returns and exchanges within 30 days.
            </p>
          </div>

          {/* Return Policy Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5" />
                <span>Return Policy Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <Clock className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="font-semibold">30-Day Window</h3>
                  <p className="text-sm text-muted-foreground">
                    Return items within 30 days of delivery for a full refund
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Package className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="font-semibold">Original Condition</h3>
                  <p className="text-sm text-muted-foreground">
                    Items must be unworn with original packaging and tags
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Truck className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="font-semibold">Free Returns</h3>
                  <p className="text-sm text-muted-foreground">
                    We provide prepaid return labels for US orders
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Process */}
          <Card>
            <CardHeader>
              <CardTitle>How to Return Your Order</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full text-sm">1</Badge>
                  <h3 className="font-semibold text-sm">Start Return</h3>
                  <p className="text-xs text-muted-foreground">
                    Contact us or use our online return portal
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full text-sm">2</Badge>
                  <h3 className="font-semibold text-sm">Print Label</h3>
                  <p className="text-xs text-muted-foreground">
                    Download and print the prepaid return label
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full text-sm">3</Badge>
                  <h3 className="font-semibold text-sm">Package Items</h3>
                  <p className="text-xs text-muted-foreground">
                    Pack items in original box with return form
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Badge variant="outline" className="w-8 h-8 rounded-full text-sm">4</Badge>
                  <h3 className="font-semibold text-sm">Ship & Track</h3>
                  <p className="text-xs text-muted-foreground">
                    Drop off at carrier location and track return
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button>Start a Return</Button>
              </div>
            </CardContent>
          </Card>

          {/* Return Conditions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span>Returnable Items</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Unworn shoes with original tags</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Items in original packaging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Shoes tried on indoors only</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Items purchased within 30 days</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Gift purchases with receipt</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  <span>Non-Returnable Items</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Worn shoes with signs of use</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Items damaged by customer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Custom or personalized items</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Items without original tags</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Final sale items</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Refund Information */}
          <Card>
            <CardHeader>
              <CardTitle>Refund & Exchange Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold">Refund Timeline</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Refunds processed within 3-5 business days</li>
                    <li>• Credit card refunds take 5-10 business days</li>
                    <li>• PayPal refunds typically take 2-3 business days</li>
                    <li>• Original shipping costs are non-refundable</li>
                    <li>• You'll receive email confirmation once processed</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Exchanges</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Free size and color exchanges</li>
                    <li>• Subject to availability</li>
                    <li>• Exchanges processed within 5-7 business days</li>
                    <li>• International exchanges may incur additional shipping</li>
                    <li>• Contact us for assistance with exchanges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Returns */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help with Your Return?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Our customer service team is here to help with any return questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  Email Support
                </Button>
                <Button variant="outline">
                  Call (555) 123-4567
                </Button>
                <Button>
                  Start Return Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;