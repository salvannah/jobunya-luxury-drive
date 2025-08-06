import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Car, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  MapPin, 
  Phone,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-mercedes.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Luxury vehicles maintained to the highest standards"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability for all your travel needs"
    },
    {
      icon: Award,
      title: "Professional Drivers",
      description: "Experienced, licensed, and courteous chauffeurs"
    }
  ];

  const services = [
    {
      title: "Executive Car Hire",
      description: "Professional transportation for business meetings and corporate events",
      image: "🚗",
      link: "/services#executive"
    },
    {
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off services for all major airports",
      image: "✈️",
      link: "/services#airport"
    },
    {
      title: "Wedding Cars",
      description: "Elegant vehicles to make your special day even more memorable",
      image: "💒",
      link: "/services#wedding"
    },
    {
      title: "Tours & Chauffeur",
      description: "Explore Kenya in comfort with our guided tour services",
      image: "🗺️",
      link: "/services#tours"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Business Executive",
      content: "Exceptional service! The car was immaculate and the driver was very professional. Will definitely use again.",
      rating: 5
    },
    {
      name: "David Kimani",
      role: "Wedding Client",
      content: "Made our wedding day perfect! The luxury car and professional service exceeded our expectations.",
      rating: 5
    },
    {
      name: "James Ochieng",
      role: "Tourist",
      content: "Great tour experience around Nairobi. The driver was knowledgeable and the car was very comfortable.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury Mercedes-Benz"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              <span className="text-foreground">Jobunya</span>
              <br />
              <span className="text-gradient">Car Rentals</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Rent, drive & explore your dream car with us! Premium executive car hire 
              and luxury rental services in Nairobi, Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="btn-luxury text-lg px-8 py-6 animate-glow"
              >
                <Link to="/reservations">
                  Reserve Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-outline-luxury text-lg px-8 py-6"
              >
                <Link to="/fleet">View Our Fleet</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Why Choose <span className="text-gradient">Jobunya</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our premium car rental services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-luxury hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive car rental solutions for all your transportation needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-luxury hover-lift group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from satisfied customers who chose Jobunya for their transportation needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-luxury">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book your premium car rental today and discover the Jobunya difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link to="/reservations">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">24/7 Hotline: 0723 565952</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Kahawa Wendani, Nairobi</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-600 font-medium">Open Now</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
