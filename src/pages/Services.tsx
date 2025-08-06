import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Car, 
  Plane, 
  Heart, 
  Users, 
  MapPin, 
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "executive",
      title: "Executive Car Hire",
      description: "Professional transportation for business meetings, corporate events, and VIP clients. Our executive fleet ensures you arrive in style and comfort.",
      features: [
        "Premium sedans and SUVs",
        "Professional chauffeurs",
        "Corporate billing available",
        "Airport pickup/drop-off",
        "Hourly or daily rates"
      ],
      icon: Car,
      image: "🚗",
      price: "From KES 5,000/day"
    },
    {
      id: "airport",
      title: "Airport Transfer Services",
      description: "Reliable and punctual airport transfers for JKIA, Wilson Airport, and other airfields. Never miss a flight with our 24/7 service.",
      features: [
        "Flight tracking service",
        "Meet & greet at arrivals",
        "Luggage assistance",
        "24/7 availability",
        "Fixed pricing - no surge"
      ],
      icon: Plane,
      image: "✈️",
      price: "From KES 3,500"
    },
    {
      id: "wedding",
      title: "Wedding & Event Cars",
      description: "Make your special day unforgettable with our luxury wedding car collection. From classic elegance to modern sophistication.",
      features: [
        "Luxury sedan & SUV fleet",
        "Wedding decoration included",
        "Red carpet service",
        "Photography support",
        "Multiple vehicle packages"
      ],
      icon: Heart,
      image: "💒",
      price: "From KES 8,000/event"
    },
    {
      id: "tours",
      title: "Tours & Chauffeur Services",
      description: "Explore Kenya's beautiful destinations with our experienced drivers who double as knowledgeable tour guides.",
      features: [
        "City tours & safaris",
        "Knowledgeable local guides",
        "Flexible itineraries",
        "Multi-day packages",
        "Group discounts available"
      ],
      icon: MapPin,
      image: "🗺️",
      price: "From KES 4,000/day"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured Fleet",
      description: "All vehicles covered with comprehensive insurance"
    },
    {
      icon: Award,
      title: "Licensed Drivers",
      description: "Professional, experienced, and courteous chauffeurs"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service for your convenience"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support team for all your needs"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Our <span className="text-gradient">Premium Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive car rental and chauffeur services designed to meet all your 
              transportation needs in Nairobi and across Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="btn-luxury">
                <Link to="/reservations">Book a Service</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline-luxury">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.id} id={service.id} className="card-luxury hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Service Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button asChild className="btn-luxury flex-1">
                      <Link to="/reservations">Book Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="btn-outline-luxury">
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the highest standards of service and professionalism
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Car Hire Nairobi & Executive Car Rental Kenya
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Jobunya Car Rentals is your premier choice for <strong>car hire in Nairobi</strong> and 
                <strong> executive car rental services throughout Kenya</strong>. We specialize in providing 
                luxury vehicles and professional chauffeur services for discerning clients who value 
                quality, reliability, and exceptional service.
              </p>
              <p className="text-muted-foreground mb-6">
                Our comprehensive range of services includes corporate transportation, airport transfers, 
                wedding car hire, and guided tours. Whether you need a vehicle for business meetings, 
                special events, or exploring Kenya's attractions, we have the perfect solution for you.
              </p>
              <p className="text-muted-foreground">
                Based in Kahawa Wendani, Nairobi, we serve clients throughout the greater Nairobi area 
                and beyond. Our fleet of well-maintained luxury vehicles and team of professional drivers 
                ensure that every journey with Jobunya Car Rentals is comfortable, safe, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today for personalized service and competitive pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/reservations">
                  Make a Reservation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;