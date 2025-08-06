import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Car, 
  Plane, 
  Clock, 
  Phone,
  Star,
  ArrowRight,
  CheckCircle,
  Navigation,
  Building,
  Users
} from "lucide-react";

const Locations = () => {
  const { location } = useParams();

  const locations = {
    nairobi: {
      title: "Car Hire Nairobi",
      subtitle: "Premium Car Rental Services in Kenya's Capital",
      description: "Experience luxury car hire in Nairobi with Jobunya Car Rentals. We provide premium vehicles and professional chauffeur services throughout Nairobi and its environs.",
      seoContent: `Nairobi, Kenya's vibrant capital city, demands reliable and luxurious transportation solutions. Jobunya Car Rentals offers comprehensive car hire services in Nairobi, catering to business executives, tourists, and local residents who value quality and professionalism.

Our Nairobi car hire services include executive sedans, luxury SUVs, and economy vehicles suitable for various needs. Whether you're attending business meetings in Upperhill, exploring the cultural sites in the city center, or heading to conferences in Westlands, our premium fleet ensures you arrive in style and comfort.

We serve all major areas in Nairobi including CBD, Westlands, Karen, Kilimani, Upperhill, Lavington, and surrounding areas. Our local knowledge and experienced drivers ensure efficient navigation through Nairobi's bustling streets.`,
      areas: [
        "Nairobi CBD", "Westlands", "Karen", "Kilimani", "Upperhill", 
        "Lavington", "Parklands", "Eastleigh", "South B", "South C"
      ],
      services: [
        "Executive car hire for business meetings",
        "Airport transfers to/from JKIA",
        "Corporate transportation services",
        "Tourist and sightseeing tours",
        "Event and conference transportation",
        "Wedding car rentals"
      ],
      landmarks: [
        "Kenyatta International Conference Centre",
        "Nairobi National Park", 
        "Karen Blixen Museum",
        "Giraffe Centre",
        "Nairobi National Museum",
        "Uhuru Park"
      ],
      icon: "🏙️"
    },
    "kahawa-wendani": {
      title: "Car Hire Kahawa Wendani",
      subtitle: "Local Car Rental Services in Kahawa Wendani",
      description: "Conveniently located in Kahawa Wendani, Jobunya Car Rentals provides reliable car hire services to residents and visitors in this growing suburb of Nairobi.",
      seoContent: `Kahawa Wendani has emerged as one of Nairobi's most desirable residential areas, and Jobunya Car Rentals is proud to be based in this vibrant community. Our car hire services in Kahawa Wendani cater to the transportation needs of local residents, students, and professionals.

As a locally-based car rental company, we understand the unique transportation challenges and opportunities in Kahawa Wendani. From quick trips to nearby shopping centers to longer journeys into Nairobi city center, our fleet of well-maintained vehicles provides reliable solutions.

Our Kahawa Wendani location offers easy access to surrounding areas including Ruiru, Juja, and Thika, making us the ideal choice for both local and regional transportation needs.`,
      areas: [
        "Kahawa Wendani Estate", "Kahawa West", "Kahawa Sukari", 
        "Gitothua", "Kenyatta University", "Juja Road"
      ],
      services: [
        "Local area transportation",
        "University transport services",
        "Shopping and errands trips",
        "Inter-county travel",
        "Airport connections",
        "Emergency transportation"
      ],
      landmarks: [
        "Kenyatta University",
        "Magunas Supermarket",
        "Kahawa Wendani Market",
        "Gitothua Shopping Center",
        "Kahawa Sukari Shopping Mall",
        "Juja Road"
      ],
      icon: "🏘️"
    },
    ruiru: {
      title: "Car Hire Ruiru",
      subtitle: "Reliable Car Rental Services in Ruiru Town",
      description: "Serving Ruiru and surrounding areas with premium car hire services. From local trips to long-distance travel, we provide safe and comfortable transportation solutions.",
      seoContent: `Ruiru, a rapidly growing town in Kiambu County, requires modern transportation solutions to match its development pace. Jobunya Car Rentals extends its premium car hire services to Ruiru residents and businesses, offering reliable vehicles for various transportation needs.

Our car hire services in Ruiru include daily rentals, weekly packages, and monthly arrangements suitable for both personal and business use. We understand the commuting patterns between Ruiru and Nairobi, as well as local transportation needs within Ruiru town.

With our strategic location and local knowledge, we provide efficient car hire solutions for Ruiru residents traveling to work in Nairobi, students attending universities, and businesses requiring reliable transportation for their operations.`,
      areas: [
        "Ruiru Town", "Githunguri", "Kiambu Road", "Ruiru Dam", 
        "Kimbo", "Juja Road Junction", "Ruiru Market"
      ],
      services: [
        "Daily commuter services",
        "Business transportation",
        "School and university runs",
        "Weekend family outings",
        "Shopping center visits",
        "Medical appointment transport"
      ],
      landmarks: [
        "Ruiru Dam",
        "Ruiru Market",
        "Githunguri Shopping Center",
        "Kiambu Road",
        "Ruiru Sports Club",
        "Junction Mall Ruiru"
      ],
      icon: "🏘️"
    },
    "airport-transfer": {
      title: "Airport Transfer Nairobi",
      subtitle: "Professional Airport Transfer Services",
      description: "Reliable airport transfer services between JKIA, Wilson Airport, and all destinations in Nairobi. Professional meet & greet service with luxury vehicles.",
      seoContent: `Nairobi airport transfer services are essential for both business and leisure travelers. Jobunya Car Rentals specializes in providing professional airport transfer services between Jomo Kenyatta International Airport (JKIA), Wilson Airport, and destinations throughout Nairobi and beyond.

Our airport transfer service includes flight tracking, meet and greet services, and assistance with luggage. We understand the importance of punctuality for airport transfers and ensure our drivers are always on time, whether for arrivals or departures.

With our luxury fleet and professional chauffeurs, we provide stress-free airport transfers that allow you to relax after a long flight or arrive at the airport refreshed and on time. Our service covers all major hotels, business districts, and residential areas in Nairobi.`,
      areas: [
        "JKIA Terminal 1 & 2", "Wilson Airport", "All Nairobi Hotels", 
        "Nairobi CBD", "Westlands", "Karen", "Kilimani", "Airport Hotels"
      ],
      services: [
        "JKIA pickup and drop-off",
        "Wilson Airport transfers",
        "Flight tracking service",
        "Meet and greet at arrivals",
        "Luggage assistance",
        "24/7 availability"
      ],
      landmarks: [
        "Jomo Kenyatta International Airport",
        "Wilson Airport",
        "Carnivore Restaurant",
        "Nairobi National Park Gate",
        "Airport North Road",
        "Embakasi"
      ],
      icon: "✈️"
    }
  };

  // Default to general locations page if no specific location
  const currentLocation = location ? locations[location as keyof typeof locations] : null;

  if (currentLocation) {
    return (
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">{currentLocation.icon}</div>
              <h1 className="text-5xl font-serif font-bold mb-6">
                {currentLocation.title.split(' ').map((word, index) => 
                  index === currentLocation.title.split(' ').length - 1 ? (
                    <span key={index} className="text-gradient">{word}</span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                )}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {currentLocation.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="btn-luxury">
                  <Link to="/reservations">Book Now</Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-luxury">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Service Areas</h2>
                <p className="text-muted-foreground mb-6">
                  We provide comprehensive car hire services throughout the following areas:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {currentLocation.areas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Our Services</h2>
                <p className="text-muted-foreground mb-6">
                  Tailored transportation solutions for your specific needs:
                </p>
                <div className="space-y-3">
                  {currentLocation.services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Landmarks */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center">
                Key Landmarks & Destinations
              </h2>
              <p className="text-xl text-muted-foreground mb-12 text-center">
                We provide transportation to and from all major landmarks and destinations
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {currentLocation.landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold mb-6">
                About Our {currentLocation.title} Services
              </h2>
              <div className="text-muted-foreground space-y-6">
                {currentLocation.seoContent.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6">
                Need {currentLocation.title}?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Contact us today for personalized service and competitive rates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/reservations">
                    Make Reservation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // General locations overview page
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Our Service <span className="text-gradient">Locations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Jobunya Car Rentals serves multiple locations across Nairobi and surrounding areas. 
              Find the perfect car rental service for your specific location.
            </p>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(locations).map(([key, location]) => (
              <Card key={key} className="card-luxury hover-lift group">
                <CardHeader>
                  <div className="text-4xl mb-4">{location.icon}</div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {location.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{location.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{location.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.areas.slice(0, 4).map((area, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                      {location.areas.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{location.areas.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button asChild className="btn-luxury flex-1">
                      <Link to={`/locations/${key}`}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="btn-outline-luxury">
                      <Link to="/reservations">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Comprehensive Coverage Across Kenya
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              No matter where you are in Nairobi or the surrounding areas, 
              Jobunya Car Rentals has you covered with professional service
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
                <p className="text-muted-foreground">
                  Serving all major areas in Nairobi and surrounding counties
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
                <p className="text-muted-foreground">
                  Round-the-clock availability across all our service locations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Local drivers with extensive knowledge of each area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Choose your location and experience premium car rental services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/reservations">
                  Make Reservation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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
    </Layout>
  );
};

export default Locations;