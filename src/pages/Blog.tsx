import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  Car,
  Heart,
  Plane,
  MapPin,
  Shield
} from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Benefits of Executive Car Hire in Nairobi",
      excerpt: "Discover why more business professionals are choosing executive car hire services for their transportation needs in Nairobi. From productivity to comfort, explore the advantages.",
      content: `Executive car hire in Nairobi has become increasingly popular among business professionals and discerning travelers. Here are the top 5 benefits:

1. **Professional Image**: Arriving in a luxury vehicle makes a strong first impression for business meetings and corporate events.

2. **Productivity on the Go**: Spacious interiors and quiet cabins allow you to work, make calls, or prepare for meetings while traveling.

3. **Stress-Free Navigation**: Professional chauffeurs know the best routes and can navigate Nairobi's traffic efficiently.

4. **Flexibility and Convenience**: Door-to-door service on your schedule without the hassles of parking or fuel.

5. **Safety and Reliability**: Well-maintained vehicles with comprehensive insurance and experienced drivers ensure your safety.

At Jobunya Car Rentals, we understand the importance of reliable, professional transportation for business success.`,
      author: "John Mwangi",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Business",
      image: "🚗",
      tags: ["Executive Car Hire", "Business Travel", "Nairobi"],
      featured: true
    },
    {
      id: 2,
      title: "How to Choose the Best Car Rental for Your Wedding",
      excerpt: "Your wedding day is special, and every detail matters. Learn how to select the perfect luxury vehicle to complement your celebration and create lasting memories.",
      content: `Choosing the right car rental for your wedding is crucial for creating the perfect atmosphere for your special day. Here's your complete guide:

**Consider Your Wedding Style**
- Classic elegance: Choose timeless sedans like Mercedes-Benz E-Class
- Modern luxury: Opt for contemporary designs with premium features
- Grand entrance: Consider luxury SUVs for dramatic arrivals

**Practical Considerations**
- Vehicle capacity for the wedding party
- Decoration compatibility and attachment points
- Photography angles and backdrop appeal
- Weather protection for outdoor ceremonies

**Booking Timeline**
- Book 2-3 months in advance for popular dates
- Schedule a viewing before your wedding day
- Confirm decoration policies and services
- Arrange trial runs for timing and routes

**Additional Services**
- Red carpet service for grand entrances
- Complimentary decorations and ribbons
- Professional chauffeur in formal attire
- Photography coordination support

Jobunya Car Rentals specializes in wedding transportation, ensuring your day is as perfect as you've dreamed.`,
      author: "Sarah Kimani",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Wedding",
      image: "💒",
      tags: ["Wedding Cars", "Luxury Rental", "Special Events"],
      featured: false
    },
    {
      id: 3,
      title: "Why Airport Transfer Services Make Travel Stress-Free",
      excerpt: "Eliminate the stress of airport transportation with professional transfer services. Discover how reliable pickups and drop-offs can transform your travel experience.",
      content: `Airport transfers are often overlooked in travel planning, but they can make or break your journey. Here's why professional airport transfer services are essential:

**Punctuality Guaranteed**
- Flight tracking ensures timely arrivals
- Buffer time for traffic and delays
- Professional drivers familiar with airport layouts
- 24/7 availability for any flight schedule

**Comfort After Long Flights**
- Immediate comfort after hours of travel
- Climate-controlled vehicles
- Assistance with luggage handling
- Quiet environment for decompression

**Stress Elimination**
- No waiting for taxis or ride-shares
- Fixed pricing with no surge charges
- Meet and greet service at arrivals
- Direct route to your destination

**Safety and Reliability**
- Licensed and insured vehicles
- Background-checked professional drivers
- Real-time tracking and communication
- 24/7 customer support

**Cost-Effective**
- No parking fees for extended trips
- Competitive rates compared to alternatives
- Group travel discounts available
- Transparent pricing with no hidden costs

Choose Jobunya Car Rentals for your next airport transfer and experience the difference professional service makes.`,
      author: "David Ochieng",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Travel",
      image: "✈️",
      tags: ["Airport Transfer", "Travel Tips", "JKIA"],
      featured: false
    },
    {
      id: 4,
      title: "Tips for Safe and Comfortable Road Trips in Kenya",
      excerpt: "Planning a road trip across Kenya? Get expert advice on vehicle selection, route planning, and safety measures for an unforgettable adventure.",
      content: `Kenya offers incredible destinations perfect for road trips. Here are essential tips for safe and comfortable journeys:

**Vehicle Selection**
- Choose 4WD vehicles for off-road destinations
- Ensure comprehensive insurance coverage
- Check vehicle maintenance records
- Consider fuel efficiency for long distances

**Route Planning**
- Research road conditions and accessibility
- Plan fuel stops and accommodation
- Check weather conditions and seasonal factors
- Have offline maps and GPS backup

**Safety Preparations**
- Carry emergency supplies and first aid kit
- Inform others of your travel plans
- Have emergency contact numbers
- Check tire condition and spare availability

**Popular Road Trip Destinations**
- Maasai Mara National Reserve
- Amboseli National Park
- Tsavo East and West
- Lake Nakuru National Park
- Mount Kenya region

**Comfort Essentials**
- Pack adequate water and snacks
- Bring entertainment for long drives
- Ensure air conditioning functionality
- Plan rest stops every 2 hours

**Local Regulations**
- Valid driving license requirements
- Speed limit awareness
- Park entry regulations
- Cultural sensitivity guidelines

Jobunya Car Rentals provides well-maintained vehicles perfect for Kenya road trips, complete with emergency support and local knowledge.`,
      author: "Grace Wanjiku",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Adventure",
      image: "🗺️",
      tags: ["Road Trips", "Kenya Travel", "Safari"],
      featured: false
    },
    {
      id: 5,
      title: "Luxury Car Rentals: Experience the VIP Lifestyle",
      excerpt: "Step into the world of luxury with premium car rentals. Explore how high-end vehicles can elevate your status and provide unparalleled comfort and prestige.",
      content: `Luxury car rentals offer more than just transportation – they provide an experience that reflects success and sophistication. Here's what makes luxury rentals special:

**Premium Vehicle Features**
- Hand-crafted leather interiors
- Advanced entertainment systems
- Climate-controlled comfort zones
- State-of-the-art safety technology

**Status and Prestige**
- Make powerful first impressions
- Reflect professional success
- Enhance social status
- Create memorable experiences

**Unmatched Comfort**
- Massage and heated seats
- Premium sound systems
- Spacious cabin environments
- Smooth, quiet rides

**Perfect Occasions for Luxury Rentals**
- Important business meetings
- Special celebrations and anniversaries
- VIP client entertainment
- Exclusive social events
- Romantic occasions

**Service Excellence**
- White-glove treatment
- Professional chauffeur service
- Concierge-level attention
- Customized experience packages

**Investment in Experience**
- Creates lasting memories
- Provides temporary luxury access
- Offers variety without ownership
- Includes professional maintenance

**Popular Luxury Models**
- Mercedes-Benz S-Class
- BMW 7 Series
- Audi A8
- Range Rover Sport
- Jaguar XF

At Jobunya Car Rentals, we believe everyone deserves to experience luxury. Our premium fleet and exceptional service ensure your VIP experience exceeds expectations.`,
      author: "Michael Kariuki",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Luxury",
      image: "⭐",
      tags: ["Luxury Cars", "VIP Service", "Premium Rental"],
      featured: true
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length },
    { name: "Business", count: blogPosts.filter(post => post.category === "Business").length },
    { name: "Wedding", count: blogPosts.filter(post => post.category === "Wedding").length },
    { name: "Travel", count: blogPosts.filter(post => post.category === "Travel").length },
    { name: "Luxury", count: blogPosts.filter(post => post.category === "Luxury").length },
    { name: "Adventure", count: blogPosts.filter(post => post.category === "Adventure").length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Business": return Car;
      case "Wedding": return Heart;
      case "Travel": return Plane;
      case "Adventure": return MapPin;
      case "Luxury": return Shield;
      default: return Car;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Car Rental <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert advice, tips, and insights about car rentals, luxury transportation, 
              and travel in Kenya. Stay informed with the latest industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <Card key={post.id} className="card-luxury hover-lift group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {post.category}
                        </Badge>
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      </div>
                      <div className="text-4xl">{post.image}</div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="btn-outline-luxury group-hover:shadow-glow transition-all duration-300">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <Card className="card-luxury">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Categories</h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="card-luxury">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Recent Posts</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="space-y-2">
                      <h4 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      {post.id !== recentPosts[recentPosts.length - 1].id && (
                        <div className="border-b border-border/50" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="card-luxury">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Stay Updated</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our newsletter for the latest car rental tips and exclusive offers.
                  </p>
                  <Button className="btn-luxury w-full">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-serif font-bold mb-8">All Articles</h2>
              <div className="space-y-8">
                {blogPosts.map((post) => {
                  const CategoryIcon = getCategoryIcon(post.category);
                  return (
                    <Card key={post.id} className="card-luxury hover-lift">
                      <CardContent className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="text-center">
                            <div className="text-5xl mb-4">{post.image}</div>
                            <Badge variant="secondary" className="text-xs">
                              <CategoryIcon className="w-3 h-3 mr-1" />
                              {post.category}
                            </Badge>
                          </div>
                          <div className="md:col-span-3 space-y-4">
                            <div>
                              <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                              </h3>
                              <p className="text-muted-foreground">{post.excerpt}</p>
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <User className="w-4 h-4" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" className="btn-outline-luxury">
                              Read More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
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
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Put our expertise to work for you. Book your premium car rental today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/reservations">
                  Book Now
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

export default Blog;