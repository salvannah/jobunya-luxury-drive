import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
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
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        variant: "default"
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0723 565952", "+254 723 565952"],
      description: "Available 24/7 for your convenience",
      action: () => window.open("tel:+254723565952")
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+254 723 565952"],
      description: "Quick responses via WhatsApp",
      action: () => window.open("https://wa.me/254723565952", "_blank")
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jobunyacarrentals.co.ke"],
      description: "Send us detailed inquiries",
      action: () => window.open("mailto:info@jobunyacarrentals.co.ke")
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["1st floor Room A29, Meltpot Building", "Kahawa Wendani, Nairobi, Ruiru"],
      description: "Next to Magunas Supermarket",
      action: () => window.open("https://maps.google.com/?q=Meltpot+Building+Kahawa+Wendani", "_blank")
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have questions about our services? Need a custom quote? Our friendly team 
              is here to help you find the perfect transportation solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-luxury hover-lift cursor-pointer" onClick={method.action}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <div className="mb-2">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-primary font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, preferred dates, or any questions you have..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-luxury w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {businessHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{hours.day}</span>
                      <span className="text-muted-foreground">{hours.hours}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-600 font-medium">Currently Open</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span>Our Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Jobunya Car Rentals</h4>
                      <p className="text-muted-foreground">
                        1st floor Room A29, Meltpot Building<br />
                        Next to Magunas Supermarket<br />
                        Kahawa Wendani, Nairobi, Ruiru, Kenya
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-4">
                        Click to view on Google Maps
                      </p>
                      <Button
                        variant="outline"
                        className="btn-outline-luxury"
                        onClick={() => window.open("https://maps.google.com/?q=Meltpot+Building+Kahawa+Wendani", "_blank")}
                      >
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
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
                  <p className="text-sm text-muted-foreground mt-4">
                    Stay updated with our latest vehicles and special offers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What's included in the rental?</h3>
                  <p className="text-muted-foreground">
                    All rentals include comprehensive insurance, 24/7 roadside assistance, 
                    and a full tank of fuel. Professional chauffeur service is available on request.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">How far in advance should I book?</h3>
                  <p className="text-muted-foreground">
                    We recommend booking at least 24 hours in advance for regular rentals. 
                    For special events or peak seasons, book 1-2 weeks ahead.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you provide airport pickup?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer meet & greet services at JKIA, Wilson Airport, and other 
                    locations. Our drivers will be waiting with your name sign.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept cash, M-Pesa, bank transfers, and major credit cards. 
                    A deposit is required for longer rentals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I cancel my reservation?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel up to 24 hours before your rental start time 
                    without any charges. Later cancellations may incur fees.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Are your vehicles regularly maintained?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. All our vehicles undergo regular maintenance and safety 
                    inspections to ensure optimal performance and your safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;