import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { format } from "date-fns";
import { 
  Calendar as CalendarIcon,
  Car,
  Clock,
  MapPin,
  Phone,
  User,
  Mail,
  CheckCircle,
  MessageCircle
} from "lucide-react";

const Reservations = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    pickupLocation: "",
    dropoffLocation: "",
    specialRequests: ""
  });

  const vehicles = [
    { id: "mercedes-e-class", name: "Mercedes-Benz E-Class (KES 8,500/day)" },
    { id: "bmw-5-series", name: "BMW 5 Series (KES 9,000/day)" },
    { id: "mercedes-s-class", name: "Mercedes-Benz S-Class (KES 12,000/day)" },
    { id: "toyota-landcruiser", name: "Toyota Land Cruiser (KES 10,500/day)" },
    { id: "mercedes-g-class", name: "Mercedes-Benz G-Class (KES 15,000/day)" },
    { id: "toyota-camry", name: "Toyota Camry (KES 6,500/day)" },
    { id: "nissan-xtrail", name: "Nissan X-Trail (KES 7,500/day)" },
    { id: "toyota-corolla", name: "Toyota Corolla (KES 4,500/day)" }
  ];

  const popularLocations = [
    "JKIA (Jomo Kenyatta International Airport)",
    "Wilson Airport",
    "Westlands, Nairobi",
    "Karen, Nairobi",
    "Kilimani, Nairobi",
    "Upperhill, Nairobi",
    "Kahawa Wendani",
    "Ruiru",
    "Kiambu",
    "Hotel pickup"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.vehicle || !pickupDate || !dropoffDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reservation Submitted!",
        description: "We'll contact you within 1 hour to confirm your booking.",
        variant: "default"
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        vehicle: "",
        pickupLocation: "",
        dropoffLocation: "",
        specialRequests: ""
      });
      setPickupDate(undefined);
      setDropoffDate(undefined);
    }, 2000);
  };

  const whatsappMessage = `Hello Jobunya Car Rentals! I would like to make a reservation:
Name: ${formData.name}
Vehicle: ${formData.vehicle}
Pickup Date: ${pickupDate ? format(pickupDate, "PPP") : "Not selected"}
Pickup Location: ${formData.pickupLocation}
Drop-off Date: ${dropoffDate ? format(dropoffDate, "PPP") : "Not selected"}
Drop-off Location: ${formData.dropoffLocation}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Make a <span className="text-gradient">Reservation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book your luxury vehicle in just a few simple steps. Our team will confirm 
              your reservation and arrange all the details for your perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center space-x-2">
                      <Car className="w-6 h-6 text-primary" />
                      <span>Reservation Details</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+254 7XX XXX XXX"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {/* Vehicle Selection */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Vehicle Selection</h3>
                        <div className="space-y-2">
                          <Label htmlFor="vehicle">Choose Vehicle *</Label>
                          <Select value={formData.vehicle} onValueChange={(value) => handleInputChange("vehicle", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a vehicle from our fleet" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicles.map((vehicle) => (
                                <SelectItem key={vehicle.id} value={vehicle.name}>
                                  {vehicle.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Date Selection */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Rental Period</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Pickup Date *</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {pickupDate ? format(pickupDate, "PPP") : "Select pickup date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={pickupDate}
                                  onSelect={setPickupDate}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="space-y-2">
                            <Label>Drop-off Date *</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {dropoffDate ? format(dropoffDate, "PPP") : "Select drop-off date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={dropoffDate}
                                  onSelect={setDropoffDate}
                                  disabled={(date) => date < (pickupDate || new Date())}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </div>

                      {/* Location Details */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Location Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="pickupLocation">Pickup Location</Label>
                            <Select value={formData.pickupLocation} onValueChange={(value) => handleInputChange("pickupLocation", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select pickup location" />
                              </SelectTrigger>
                              <SelectContent>
                                {popularLocations.map((location) => (
                                  <SelectItem key={location} value={location}>
                                    {location}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dropoffLocation">Drop-off Location</Label>
                            <Select value={formData.dropoffLocation} onValueChange={(value) => handleInputChange("dropoffLocation", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select drop-off location" />
                              </SelectTrigger>
                              <SelectContent>
                                {popularLocations.map((location) => (
                                  <SelectItem key={location} value={location}>
                                    {location}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Special Requests</h3>
                        <div className="space-y-2">
                          <Label htmlFor="specialRequests">Additional Information</Label>
                          <Textarea
                            id="specialRequests"
                            placeholder="Any special requirements, child seats, wheelchair accessibility, etc."
                            value={formData.specialRequests}
                            onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                            rows={4}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6">
                        <Button
                          type="submit"
                          className="btn-luxury w-full text-lg py-6"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Clock className="mr-2 h-5 w-5 animate-spin" />
                              Processing Reservation...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="mr-2 h-5 w-5" />
                              Submit Reservation
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-muted-foreground">0723 565952</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">info@jobunyacarrentals.co.ke</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Kahawa Wendani, Nairobi</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => window.open(`https://wa.me/254723565952?text=${encodeURIComponent(whatsappMessage)}`, "_blank")}
                      className="btn-luxury w-full"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Booking
                    </Button>
                  </CardContent>
                </Card>

                {/* Booking Benefits */}
                <Card className="card-luxury">
                  <CardHeader>
                    <CardTitle className="text-xl">Why Book With Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Best Price Guarantee</p>
                        <p className="text-sm text-muted-foreground">Competitive rates with no hidden fees</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">24/7 Support</p>
                        <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Free Cancellation</p>
                        <p className="text-sm text-muted-foreground">Cancel up to 24 hours before</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Professional Drivers</p>
                        <p className="text-sm text-muted-foreground">Licensed and experienced chauffeurs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservations;