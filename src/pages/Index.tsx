import { useEffect, useState } from 'react';
import { Gem, Mail, Phone, MapPin, Star, Award, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const gemstones = [
    {
      name: "Amethyst",
      description: "Known for its stunning purple hues and timeless style",
      image: "https://www.rockhounding.org/blog/collecting-amethyst-meaning-uses-properties-guide/images/Amethyst%20Ring.jpg",
      price: "$150 - $400/ct"
    },
    {
      name: "Sapphire",
      description: "The stone renowned for its deep blue color and royal heritage",
      image: "https://cdn.prod.website-files.com/6177926b5641c2ccacfc1ad3/6447b0edacd07b2042451d82_Facts%20about%20Sapphires.webp",
      price: "$10,000 - $30,000/ct"
    },
    {
      name: "Alexandrite",
      description: "The color-changing marvel that shifts from green to red found in Sri Lanka, Africa",
      image: "https://cdn.shopify.com/s/files/1/0297/3705/8388/files/1080x1080_IG_Alexandrite_13_480x480.jpg?v=1627934238",
      price: "$1,200 - $60,000/ct"
    },
    {
      name: "Aquamarine",
      description: "A stone of tranquility, known for its serene blue-green color",
      image: "https://cdn.gemporia.io/images/assets/160489/Aquamarine%20-%20Santa%20Maria.jpg",
      price: "$1500 - $400/ct"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Gem className="h-8 w-8 text-gemstone-purple" />
              <span className="font-playfair font-bold text-xl text-gemstone-dark">Wafiya Gems</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gemstone-dark hover:text-gemstone-purple transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gemstone-dark hover:text-gemstone-purple transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gemstone-dark hover:text-gemstone-purple transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gemstone-purple/10 via-gemstone-rose/5 to-gemstone-gold/10">
        <div className={`text-center px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gemstone-dark mb-6">
            Wafiya Gems:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gemstone-purple to-gemstone-rose block">
            Exquisite Gemstones & Timeless Jewelry from Asia Pacific
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Curated collection of the world's finest semi-precious stones, 
            each one handpicked for its unique beauty & selection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-gemstone-purple hover:bg-gemstone-purple/90 text-white px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Explore Collection
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline" 
              className="border-gemstone-purple text-gemstone-purple hover:bg-gemstone-purple hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gemstone-purple rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gemstone-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gemstone-dark mb-4">
              About Wafiya Gems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over a decade, we've been passionate about bringing you the most beautiful 
              semi-precious stones from around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-playfair text-3xl font-semibold text-gemstone-dark">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2009 by gem enthusiast Wavoo Ismail, Wafiya Gems began as a small 
                collection of personally sourced stones from travels around the globe. What started 
                as a passion project has grown into a trusted source for high-quality semi-precious 
                stones that inspire.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every stone has a story, and we're here to help you discover 
                the perfect piece that resonates with your journey. Our commitment to authenticity, 
                quality, and customer satisfaction has made us a favorite among collectors
                and jewelry makers worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-gemstone-gold mx-auto mb-4" />
                  <h4 className="font-semibold text-gemstone-dark mb-2">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Hand-selected stones with certificates of authenticity</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-gemstone-emerald mx-auto mb-4" />
                  <h4 className="font-semibold text-gemstone-dark mb-2">Expert Guidance</h4>
                  <p className="text-sm text-gray-600">Knowledgeable team to help you find the perfect stone</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-gemstone-rose mx-auto mb-4" />
                  <h4 className="font-semibold text-gemstone-dark mb-2">Ethical Sourcing</h4>
                  <p className="text-sm text-gray-600">Responsibly sourced from trusted suppliers worldwide</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Star className="h-12 w-12 text-gemstone-amber mx-auto mb-4" />
                  <h4 className="font-semibold text-gemstone-dark mb-2">Customer Love</h4>
                  <p className="text-sm text-gray-600">Thousands of satisfied customers and 5-star reviews</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-gemstone-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gemstone-dark mb-4">
              Our Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of semi-precious stones, 
              each chosen for its unique beauty and metaphysical properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gemstones.map((stone, index) => (
              <Card key={stone.name} className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={stone.image} 
                    alt={stone.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-gemstone-dark mb-2">
                    {stone.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {stone.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gemstone-purple text-lg">
                      {stone.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-gemstone-purple hover:bg-gemstone-purple/90 text-white rounded-full px-6"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gemstone-gold hover:bg-gemstone-gold/90 text-white px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
              View Full Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gemstone-dark mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our stones or need help finding the perfect piece? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gemstone-purple/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gemstone-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gemstone-dark mb-2">Phone</h3>
                  <p className="text-gray-600">+852 9329 8251</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 9AM - 6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gemstone-rose/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gemstone-rose" />
                </div>
                <div>
                  <h3 className="font-semibold text-gemstone-dark mb-2">Email</h3>
                  <p className="text-gray-600">wsarismail@gmail.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gemstone-emerald/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gemstone-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-gemstone-dark mb-2">Visit Our Showroom</h3>
                  <p className="text-gray-600">123 Burlington House<br />Nathan Road, Tsim Sha Tsui,<br />Kowloon, Hong Kong</p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-lg">
              <CardContent className="space-y-6">
                <h3 className="font-playfair text-2xl font-semibold text-gemstone-dark mb-6">
                  Send us a message
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gemstone-dark mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gemstone-purple focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gemstone-dark mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gemstone-purple focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gemstone-dark mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gemstone-purple focus:border-transparent transition-all duration-300"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gemstone-purple hover:bg-gemstone-purple/90 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gemstone-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gem className="h-8 w-8 text-gemstone-gold" />
                <span className="font-playfair font-bold text-xl">Wafiya Gems</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted source for authentic semi-precious stones and quality gemstones. 
                Bringing you nature's beauty since 2009.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-gemstone-gold transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-gemstone-gold transition-colors">Our Collection</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-gemstone-gold transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-gemstone-gold transition-colors">Care Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest arrivals and gemstone wisdom.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gemstone-purple rounded-full flex items-center justify-center hover:bg-gemstone-gold transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <a 
                  href="mailto:wsarismail@gmail.com?subject=Inquiry%20About%20Gemstones&body=Hello%20Wafiya%20Gems,"
                  className="w-10 h-10 bg-gemstone-rose rounded-full flex items-center justify-center hover:bg-gemstone-gold transition-colors cursor-pointer"
                  aria-label="Send us an email"
                  title="Send us an email"
                >
                  <span className="text-sm font-bold text-white">@</span>
                </a>
                <div className="w-10 h-10 bg-gemstone-emerald rounded-full flex items-center justify-center hover:bg-gemstone-gold transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Wafiya Gems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
