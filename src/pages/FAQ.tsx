import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Package, CreditCard, Truck, RotateCcw, Users } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'Orders & Payment',
      icon: CreditCard,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Klarna for buy-now-pay-later options.'
        },
        {
          question: 'Can I modify my order after placing it?',
          answer: 'You can modify your order within 1 hour of placing it by contacting our customer service. After this window, orders are typically processed and cannot be changed.'
        },
        {
          question: 'Do you offer student discounts?',
          answer: 'Yes! We offer a 10% student discount. Verify your student status through our education verification partner to receive your discount code.'
        },
        {
          question: 'Can I use multiple discount codes?',
          answer: 'Only one discount code can be applied per order. The system will automatically apply the best available discount for your order.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: Truck,
      faqs: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight delivery arrives the next business day for orders placed before 2 PM EST.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by location, typically taking 7-20 business days depending on the destination.'
        },
        {
          question: 'What if my package is lost or damaged?',
          answer: 'We stand behind every shipment. If your package is lost or arrives damaged, contact us immediately and we\'ll send a replacement or provide a full refund.'
        },
        {
          question: 'Can I change my shipping address?',
          answer: 'You can change your shipping address within 1 hour of placing your order. After processing begins, address changes may not be possible.'
        }
      ]
    },
    {
      title: 'Products & Sizing',
      icon: Package,
      faqs: [
        {
          question: 'How do I find my correct shoe size?',
          answer: 'Use our detailed size guide which includes measurements in CM, US, UK, and EU sizes. We recommend measuring your feet in the evening when they\'re largest and referring to our sizing chart.'
        },
        {
          question: 'Are your shoes true to size?',
          answer: 'Most of our shoes fit true to size, but sizing can vary by brand and style. Check individual product pages for specific sizing notes and customer reviews for guidance.'
        },
        {
          question: 'Do you offer wide width shoes?',
          answer: 'Yes, many of our shoes are available in wide widths. Look for the width options on product pages or filter by width in our search results.'
        },
        {
          question: 'What materials are your shoes made from?',
          answer: 'We work with premium materials including genuine leather, sustainable synthetics, recycled materials, and high-performance athletic materials. Each product page lists specific materials used.'
        }
      ]
    },
    {
      title: 'Returns & Exchanges',
      icon: RotateCcw,
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We offer free returns within 30 days of delivery. Items must be unworn, in original packaging with tags attached. We provide prepaid return labels for US orders.'
        },
        {
          question: 'How long do refunds take?',
          answer: 'Refunds are processed within 3-5 business days of receiving your return. Credit card refunds take 5-10 business days to appear, PayPal refunds take 2-3 business days.'
        },
        {
          question: 'Can I exchange for a different size or color?',
          answer: 'Yes! We offer free exchanges for different sizes or colors, subject to availability. Exchanges are processed within 5-7 business days of receiving your return.'
        },
        {
          question: 'What if the shoes don\'t fit?',
          answer: 'If your shoes don\'t fit perfectly, you can return or exchange them within 30 days. We recommend trying shoes on carpet indoors to keep them in returnable condition.'
        }
      ]
    },
    {
      title: 'Account & Customer Service',
      icon: Users,
      faqs: [
        {
          question: 'Do I need to create an account to shop?',
          answer: 'No, you can shop as a guest. However, creating an account allows you to track orders, save favorites, view order history, and get faster checkout.'
        },
        {
          question: 'How can I track my order?',
          answer: 'You\'ll receive a tracking number via email once your order ships. You can also log into your account to view order status and tracking information.'
        },
        {
          question: 'How do I contact customer service?',
          answer: 'Contact us via email at hello@solemate.com, call (555) 123-4567, or use our live chat. Our team is available Monday-Friday 9 AM-6 PM EST, Saturday 10 AM-4 PM EST.'
        },
        {
          question: 'Do you have a loyalty program?',
          answer: 'Yes! Join SoleMate Rewards to earn points on every purchase, get exclusive access to sales, early product launches, and special member-only perks.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about ordering, shipping, returns, and more.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card>
            <CardContent className="p-8 text-center space-y-6">
              <HelpCircle className="h-12 w-12 mx-auto text-primary" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Still Have Questions?</h3>
                <p className="text-muted-foreground">
                  Can't find what you're looking for? Our customer service team is here to help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@solemate.com" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="inline-flex items-center justify-center px-6 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                >
                  Call (555) 123-4567
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;