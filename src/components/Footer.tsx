import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Reservations", path: "/reservations" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Executive Car Hire", path: "/services#executive" },
    { name: "Airport Transfers", path: "/services#airport" },
    { name: "Wedding Cars", path: "/services#wedding" },
    { name: "Chauffeur Services", path: "/services#chauffeur" },
    { name: "Tours", path: "/services#tours" },
  ];

  const locations = [
    { name: "Car Hire Nairobi", path: "/locations/nairobi" },
    { name: "Car Hire Kahawa Wendani", path: "/locations/kahawa-wendani" },
    { name: "Car Hire Ruiru", path: "/locations/ruiru" },
    { name: "Airport Transfer Nairobi", path: "/locations/airport-transfer" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">J</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-gradient">Jobunya</h3>
                <p className="text-sm text-muted-foreground">Car Rentals</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium executive car hire and rental services in Nairobi, Kenya. 
              Experience luxury, comfort, and professionalism with every journey.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="hover-glow">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover-glow">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover-glow">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                className="btn-luxury"
                onClick={() => window.open("https://wa.me/254723565952", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>1st floor Room A29, Meltpot Building</p>
                  <p>Next to Magunas Supermarket</p>
                  <p>Kahawa Wendani, Nairobi, Ruiru, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-muted-foreground">
                  <p>0723 565952</p>
                  <p>+254 723 565952</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">info@jobunyacarrentals.co.ke</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-muted-foreground">
                  <p>24/7 Service Available</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-500 border border-green-500/20">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <h4 className="text-lg font-semibold text-foreground mb-4">Service Locations</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location) => (
              <Link
                key={location.path}
                to={location.path}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Jobunya Car Rentals. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="text-muted-foreground">
                Website: jobunyacarrentals.co.ke
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;