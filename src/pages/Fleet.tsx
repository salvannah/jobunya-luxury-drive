import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Car, 
  Users, 
  Fuel, 
  Settings, 
  Star,
  ArrowRight,
  Filter
} from "lucide-react";

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Vehicles" },
    { id: "executive", name: "Executive" },
    { id: "luxury", name: "Luxury" },
    { id: "suv", name: "SUVs" },
    { id: "economy", name: "Economy" }
  ];

  const vehicles = [
    {
      id: 1,
      name: "Mercedes-Benz E-Class",
      category: "executive",
      type: "Executive Sedan",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "8,500",
      features: ["Leather Seats", "Climate Control", "GPS Navigation", "Bluetooth"],
      rating: 4.9,
      image: "🚗",
      popular: true
    },
    {
      id: 2,
      name: "BMW 5 Series",
      category: "executive",
      type: "Executive Sedan",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "9,000",
      features: ["Premium Sound", "Sunroof", "Parking Sensors", "Heated Seats"],
      rating: 4.8,
      image: "🚗",
      popular: false
    },
    {
      id: 3,
      name: "Mercedes-Benz S-Class",
      category: "luxury",
      type: "Luxury Sedan",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "12,000",
      features: ["Massage Seats", "Premium Audio", "Executive Rear", "Night Vision"],
      rating: 5.0,
      image: "🚗",
      popular: true
    },
    {
      id: 4,
      name: "Toyota Land Cruiser",
      category: "suv",
      type: "Luxury SUV",
      seats: 8,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "10,500",
      features: ["4WD", "Off-road Capable", "Third Row", "Roof Rails"],
      rating: 4.7,
      image: "🚙",
      popular: false
    },
    {
      id: 5,
      name: "Mercedes-Benz G-Class",
      category: "luxury",
      type: "Luxury SUV",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "15,000",
      features: ["Premium Interior", "Off-road Package", "AMG Styling", "360° Camera"],
      rating: 4.9,
      image: "🚙",
      popular: true
    },
    {
      id: 6,
      name: "Toyota Camry",
      category: "executive",
      type: "Executive Sedan",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "6,500",
      features: ["Fuel Efficient", "Spacious", "Safety Features", "Comfort Package"],
      rating: 4.6,
      image: "🚗",
      popular: false
    },
    {
      id: 7,
      name: "Nissan X-Trail",
      category: "suv",
      type: "Mid-size SUV",
      seats: 7,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "7,500",
      features: ["All-wheel Drive", "Third Row", "Large Boot", "Safety Shield"],
      rating: 4.5,
      image: "🚙",
      popular: false
    },
    {
      id: 8,
      name: "Toyota Corolla",
      category: "economy",
      type: "Economy Sedan",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      price: "4,500",
      features: ["Fuel Efficient", "Reliable", "Safety Sense", "Easy Parking"],
      rating: 4.4,
      image: "🚗",
      popular: false
    }
  ];

  const filteredVehicles = selectedCategory === "all" 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Our Premium <span className="text-gradient">Fleet</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our carefully curated collection of luxury vehicles. From executive 
              sedans to premium SUVs, find the perfect car for your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="btn-luxury">
                <Link to="/reservations">Reserve a Vehicle</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline-luxury">
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 overflow-x-auto">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "btn-luxury" : "btn-outline-luxury"}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="card-luxury hover-lift group">
                <CardContent className="p-0">
                  {/* Vehicle Image */}
                  <div className="relative p-8 text-center bg-gradient-card rounded-t-lg">
                    <div className="text-6xl mb-4">{vehicle.image}</div>
                    {vehicle.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
                      <p className="text-muted-foreground">{vehicle.type}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(vehicle.rating) 
                                ? 'text-primary fill-current' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {vehicle.rating} rating
                      </span>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{vehicle.seats} seats</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4 text-primary" />
                        <span>{vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Fuel className="w-4 h-4 text-primary" />
                        <span>{vehicle.fuel}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {vehicle.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{vehicle.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-border/50 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-primary">
                            KES {vehicle.price}
                          </p>
                          <p className="text-sm text-muted-foreground">per day</p>
                        </div>
                        <Button 
                          asChild 
                          className="btn-luxury group-hover:shadow-glow transition-all duration-300"
                        >
                          <Link to={`/reservations?vehicle=${vehicle.id}`}>
                            Book Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No vehicles found</h3>
              <p className="text-muted-foreground">
                Try selecting a different category or contact us for special requests.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Premium Fleet Standards
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Every vehicle in our fleet meets the highest standards of luxury, safety, and performance
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regular Maintenance</h3>
                <p className="text-muted-foreground">
                  All vehicles undergo rigorous maintenance checks to ensure optimal performance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Latest Models</h3>
                <p className="text-muted-foreground">
                  Our fleet features the latest models with cutting-edge technology and features
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Luxury Standards</h3>
                <p className="text-muted-foreground">
                  Premium interiors, advanced safety features, and superior comfort in every vehicle
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
              Find Your Perfect Vehicle
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Can't find what you're looking for? Contact us for special requests and custom solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/reservations">
                  Reserve Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">Custom Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fleet;