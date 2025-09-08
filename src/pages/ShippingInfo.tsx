import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Clock, MapPin, Package, Plane, Ship } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Shipping Information</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable delivery options to get your new shoes to you quickly and safely.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Truck className="h-12 w-12 mx-auto text-primary mb-2" />
                <CardTitle>Standard Shipping</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <Badge variant="secondary">FREE on orders $75+</Badge>
                <p className="text-2xl font-bold">$5.99</p>
                <p className="text-sm text-muted-foreground">5-7 business days</p>
                <p className="text-xs text-muted-foreground">Ground shipping via FedEx/UPS</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Plane className="h-12 w-12 mx-auto text-primary mb-2" />
                <CardTitle>Express Shipping</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <Badge variant="outline">2-3 Days</Badge>
                <p className="text-2xl font-bold">$12.99</p>
                <p className="text-sm text-muted-foreground">2-3 business days</p>
                <p className="text-xs text-muted-foreground">Express air delivery</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Package className="h-12 w-12 mx-auto text-primary mb-2" />
                <CardTitle>Overnight</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <Badge variant="destructive">Next Day</Badge>
                <p className="text-2xl font-bold">$24.99</p>
                <p className="text-sm text-muted-foreground">Next business day</p>
                <p className="text-xs text-muted-foreground">Orders by 2 PM EST</p>
              </CardContent>
            </Card>
          </div>

          {/* Processing Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Processing Time</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Order Processing</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Orders placed before 2:00 PM EST ship same day</li>
                    <li>• Orders placed after 2:00 PM EST ship next business day</li>
                    <li>• Weekend orders processed on Monday</li>
                    <li>• Holiday processing may be delayed</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Business Days</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Monday through Friday (excluding holidays)</li>
                    <li>• No processing on weekends</li>
                    <li>• Major holidays: Christmas, New Year's, etc.</li>
                    <li>• You'll receive tracking information via email</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* International Shipping */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Ship className="h-5 w-5" />
                <span>International Shipping</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Region</th>
                      <th className="text-left p-3">Delivery Time</th>
                      <th className="text-left p-3">Shipping Cost</th>
                      <th className="text-left p-3">Free Shipping</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3">Canada</td>
                      <td className="p-3">5-10 business days</td>
                      <td className="p-3">$15.99</td>
                      <td className="p-3">Orders $100+</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3">Europe</td>
                      <td className="p-3">7-14 business days</td>
                      <td className="p-3">$25.99</td>
                      <td className="p-3">Orders $150+</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3">Australia</td>
                      <td className="p-3">10-15 business days</td>
                      <td className="p-3">$29.99</td>
                      <td className="p-3">Orders $200+</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3">Asia</td>
                      <td className="p-3">10-20 business days</td>
                      <td className="p-3">$35.99</td>
                      <td className="p-3">Orders $200+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">International Order Notes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Customs duties and taxes may apply</li>
                  <li>• Customer is responsible for import fees</li>
                  <li>• Delivery times may vary during peak seasons</li>
                  <li>• Some restrictions may apply to certain countries</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Order Tracking</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Track Your Order</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tracking number sent via email once shipped</li>
                    <li>• Real-time updates on delivery status</li>
                    <li>• SMS notifications available upon request</li>
                    <li>• Track directly on our website or carrier site</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Delivery Issues</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Contact us if package doesn't arrive</li>
                    <li>• Safe delivery guarantee</li>
                    <li>• Signature required for orders over $300</li>
                    <li>• Redelivery options available</li>
                  </ul>
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

export default ShippingInfo;