import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ruler, Info, Users, Footprints } from 'lucide-react';

const SizeGuide = () => {
  const mensShoes = [
    { us: '6', uk: '5.5', eu: '39', cm: '24.0' },
    { us: '6.5', uk: '6', eu: '39.5', cm: '24.5' },
    { us: '7', uk: '6.5', eu: '40', cm: '25.0' },
    { us: '7.5', uk: '7', eu: '40.5', cm: '25.5' },
    { us: '8', uk: '7.5', eu: '41', cm: '26.0' },
    { us: '8.5', uk: '8', eu: '42', cm: '26.5' },
    { us: '9', uk: '8.5', eu: '42.5', cm: '27.0' },
    { us: '9.5', uk: '9', eu: '43', cm: '27.5' },
    { us: '10', uk: '9.5', eu: '44', cm: '28.0' },
    { us: '10.5', uk: '10', eu: '44.5', cm: '28.5' },
    { us: '11', uk: '10.5', eu: '45', cm: '29.0' },
    { us: '11.5', uk: '11', eu: '45.5', cm: '29.5' },
    { us: '12', uk: '11.5', eu: '46', cm: '30.0' },
  ];

  const womensShoes = [
    { us: '5', uk: '2.5', eu: '35', cm: '22.0' },
    { us: '5.5', uk: '3', eu: '35.5', cm: '22.5' },
    { us: '6', uk: '3.5', eu: '36', cm: '23.0' },
    { us: '6.5', uk: '4', eu: '37', cm: '23.5' },
    { us: '7', uk: '4.5', eu: '37.5', cm: '24.0' },
    { us: '7.5', uk: '5', eu: '38', cm: '24.5' },
    { us: '8', uk: '5.5', eu: '38.5', cm: '25.0' },
    { us: '8.5', uk: '6', eu: '39', cm: '25.5' },
    { us: '9', uk: '6.5', eu: '40', cm: '26.0' },
    { us: '9.5', uk: '7', eu: '40.5', cm: '26.5' },
    { us: '10', uk: '7.5', eu: '41', cm: '27.0' },
    { us: '10.5', uk: '8', eu: '42', cm: '27.5' },
    { us: '11', uk: '8.5', eu: '42.5', cm: '28.0' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Size Guide</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive sizing charts and measurement guide.
            </p>
          </div>

          {/* How to Measure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Ruler className="h-5 w-5" />
                <span>How to Measure Your Feet</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Step-by-Step Instructions</h3>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex space-x-3">
                      <Badge variant="outline" className="shrink-0">1</Badge>
                      <span>Place a piece of paper on a flat surface against a wall</span>
                    </li>
                    <li className="flex space-x-3">
                      <Badge variant="outline" className="shrink-0">2</Badge>
                      <span>Step on the paper with your heel against the wall</span>
                    </li>
                    <li className="flex space-x-3">
                      <Badge variant="outline" className="shrink-0">3</Badge>
                      <span>Mark the longest point of your foot on the paper</span>
                    </li>
                    <li className="flex space-x-3">
                      <Badge variant="outline" className="shrink-0">4</Badge>
                      <span>Measure the distance from the wall to the mark</span>
                    </li>
                    <li className="flex space-x-3">
                      <Badge variant="outline" className="shrink-0">5</Badge>
                      <span>Repeat for both feet and use the larger measurement</span>
                    </li>
                  </ol>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center space-x-2">
                    <Info className="h-4 w-4" />
                    <span>Pro Tips</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Measure your feet in the evening when they're largest</li>
                    <li>• Wear the socks you plan to wear with the shoes</li>
                    <li>• Stand with your full weight on the foot being measured</li>
                    <li>• If between sizes, we recommend sizing up</li>
                    <li>• Consider the type of shoe - athletic shoes may need more room</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Size Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Men's Sizes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Men's Sizes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">US</th>
                        <th className="text-left p-2">UK</th>
                        <th className="text-left p-2">EU</th>
                        <th className="text-left p-2">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mensShoes.map((size, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-2 font-medium">{size.us}</td>
                          <td className="p-2">{size.uk}</td>
                          <td className="p-2">{size.eu}</td>
                          <td className="p-2">{size.cm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Women's Sizes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Women's Sizes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">US</th>
                        <th className="text-left p-2">UK</th>
                        <th className="text-left p-2">EU</th>
                        <th className="text-left p-2">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {womensShoes.map((size, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-2 font-medium">{size.us}</td>
                          <td className="p-2">{size.uk}</td>
                          <td className="p-2">{size.eu}</td>
                          <td className="p-2">{size.cm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Width Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Footprints className="h-5 w-5" />
                <span>Width Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Badge variant="outline" className="text-sm">Narrow (B)</Badge>
                  <p className="text-sm text-muted-foreground">Slim foot profile</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="text-sm">Medium (D)</Badge>
                  <p className="text-sm text-muted-foreground">Standard width (most common)</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="outline" className="text-sm">Wide (E/EE)</Badge>
                  <p className="text-sm text-muted-foreground">Broader foot profile</p>
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

export default SizeGuide;