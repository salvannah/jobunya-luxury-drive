import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import jobunyaLogo from "@/assets/jobunya-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Reservations", path: "/reservations" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const locationItems = [
    { name: "Kiambu", path: "/locations/kiambu" },
    { name: "Murang'a", path: "/locations/muranga" },
    { name: "Nyeri", path: "/locations/nyeri" },
    { name: "Kirinyaga", path: "/locations/kirinyaga" },
    { name: "Embu", path: "/locations/embu" },
    { name: "Tharaka Nithi", path: "/locations/tharaka-nithi" },
    { name: "Machakos", path: "/locations/machakos" },
    { name: "Kajiado", path: "/locations/kajiado" },
    { name: "Wajir", path: "/locations/wajir" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:shadow-glow transition-all duration-300">
              <img 
                src={jobunyaLogo} 
                alt="Jobunya Car Rentals" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-serif font-bold text-gradient">
                Jobunya
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Car Rentals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary" />
                )}
              </Link>
            ))}
            
            {/* Locations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLocations(!showLocations)}
                className="relative px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300"
              >
                Locations
              </button>
              {showLocations && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-lg animate-fade-in z-50">
                  <div className="py-2">
                    {locationItems.map((location) => (
                      <Link
                        key={location.path}
                        to={location.path}
                        onClick={() => setShowLocations(false)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-all duration-300"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>0723 565952</span>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 rounded-md"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              asChild
              size="sm"
              className="btn-luxury"
            >
              <Link to="/reservations">Reserve Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Locations Mobile */}
                <div className="border-t border-border/50 pt-4 mt-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Locations</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {locationItems.map((location) => (
                      <Link
                        key={location.path}
                        to={location.path}
                        onClick={() => setIsOpen(false)}
                        className="px-3 py-2 rounded-md text-xs text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-300"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Phone className="w-4 h-4" />
                    <span>0723 565952</span>
                  </div>
                  
                  {/* Theme Toggle Mobile */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full mb-4 justify-start"
                  >
                    <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="ml-6">Toggle theme</span>
                  </Button>
                  
                  <Button
                    asChild
                    size="sm"
                    className="btn-luxury w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/reservations">Reserve Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;