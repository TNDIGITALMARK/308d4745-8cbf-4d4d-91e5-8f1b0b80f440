import Navigation from '@/components/Navigation';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Paintbrush,
  Building2,
  Zap,
  Shield,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users,
  Calendar,
  Clock
} from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-construction.jpg"
            alt="NYC Construction Site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            BUILDING<br />
            <span className="text-accent">TOMORROW, TODAY</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            NYC's premier renovation contractor with 15+ years of experience transforming spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From kitchen renovations to commercial construction, we deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Paintbrush className="h-8 w-8 text-accent" />,
                title: "Kitchen Renovation",
                description: "Transform your kitchen into a modern, functional space with premium materials and expert craftsmanship."
              },
              {
                icon: <Building2 className="h-8 w-8 text-accent" />,
                title: "Bathroom Remodeling",
                description: "Complete bathroom renovations from design to completion, creating your perfect sanctuary."
              },
              {
                icon: <Shield className="h-8 w-8 text-accent" />,
                title: "Roofing & Siding",
                description: "Protect your property with professional roofing and siding services using quality materials."
              },
              {
                icon: <Zap className="h-8 w-8 text-accent" />,
                title: "Commercial Construction",
                description: "Full-scale commercial projects including office buildouts and retail renovations."
              },
              {
                icon: <Wrench className="h-8 w-8 text-accent" />,
                title: "General Contracting",
                description: "Complete project management from permits to final walkthrough for all renovation needs."
              },
              {
                icon: <Award className="h-8 w-8 text-accent" />,
                title: "Custom Builds",
                description: "Unique construction projects tailored to your specific vision and requirements."
              }
            ].map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Why Choose Roofus Inc?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              We set the standard for quality construction and customer service in NYC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-accent" />,
                title: "15+ Years Experience",
                description: "Proven track record of successful projects across NYC"
              },
              {
                icon: <Shield className="h-12 w-12 text-accent" />,
                title: "Licensed & Insured",
                description: "Fully licensed contractor with comprehensive insurance coverage"
              },
              {
                icon: <Users className="h-12 w-12 text-accent" />,
                title: "Expert Team",
                description: "Skilled craftsmen and project managers dedicated to quality"
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-accent" />,
                title: "Quality Guarantee",
                description: "Every project backed by our satisfaction guarantee"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Before/After */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See the remarkable transformations we've delivered for our NYC clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BeforeAfterSlider
              beforeImage="/generated/kitchen-before.jpg"
              afterImage="/generated/kitchen-after.jpg"
              beforeAlt="Kitchen before renovation"
              afterAlt="Kitchen after renovation"
              title="Upper East Side Kitchen"
            />
            <BeforeAfterSlider
              beforeImage="/generated/bathroom-before.jpg"
              afterImage="/generated/bathroom-after.jpg"
              beforeAlt="Bathroom before renovation"
              afterAlt="Bathroom after renovation"
              title="Manhattan Bathroom"
            />
            <div className="relative bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/generated/commercial-office.jpg"
                  alt="Commercial office renovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-accent text-accent-foreground mb-2">Commercial</Badge>
                    <h3 className="font-heading font-semibold text-white text-lg drop-shadow-md">
                      Midtown Office Buildout
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Read testimonials from satisfied NYC property owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Homeowner, Upper West Side",
                content: "Roofus Inc transformed our outdated kitchen into a modern masterpiece. The attention to detail and professionalism was outstanding throughout the entire process.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Property Manager",
                content: "We've worked with Roofus Inc on multiple commercial projects. They consistently deliver on time and within budget. Highly recommended for any construction needs.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Homeowner, Brooklyn Heights",
                content: "From permit to completion, the team handled everything professionally. Our bathroom renovation exceeded all expectations. Worth every penny!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your next renovation project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-lg">
              <Phone className="h-5 w-5 mr-2" />
              (212) 555-ROOF
            </div>
            <div className="flex items-center text-lg">
              <Mail className="h-5 w-5 mr-2" />
              info@roofusinc.com
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 mt-8">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 font-heading font-bold text-xl mb-4">
                <Building2 className="h-8 w-8 text-accent" />
                <span>Roofus Inc.</span>
              </div>
              <p className="text-primary-foreground/80">
                NYC's premier renovation contractor transforming spaces with quality and care.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Kitchen Renovation</li>
                <li>Bathroom Remodeling</li>
                <li>Roofing & Siding</li>
                <li>Commercial Construction</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (212) 555-ROOF
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@roofusinc.com
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  New York City, NY
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Roofus Inc. All rights reserved. Licensed & Insured NYC Contractor.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}