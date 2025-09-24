import Navigation from '@/components/Navigation';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  Clock,
  DollarSign,
  Hammer
} from 'lucide-react';

const services = [
  {
    id: 'kitchen',
    icon: <Paintbrush className="h-12 w-12 text-accent" />,
    title: 'Kitchen Renovation',
    subtitle: 'Complete Kitchen Transformations',
    description: 'Transform your kitchen into a modern, functional space with premium materials and expert craftsmanship. Our comprehensive kitchen renovation services cover everything from design consultation to final installation.',
    features: [
      'Custom cabinet design and installation',
      'Countertop selection (Quartz, Granite, Marble)',
      'High-end appliance installation',
      'Plumbing and electrical work',
      'Backsplash design and installation',
      'Lighting design and installation',
      'Flooring installation',
      'Paint and finishing work'
    ],
    gallery: ['/generated/kitchen-before.jpg', '/generated/kitchen-after.jpg'],
    pricing: 'Starting from $25,000',
    timeline: '4-8 weeks'
  },
  {
    id: 'bathroom',
    icon: <Building2 className="h-12 w-12 text-accent" />,
    title: 'Bathroom Remodeling',
    subtitle: 'Luxury Bathroom Renovations',
    description: 'Complete bathroom renovations from design to completion, creating your perfect sanctuary. We specialize in both full renovations and targeted updates to maximize your space and comfort.',
    features: [
      'Full bathroom design and layout',
      'Tile and stone installation',
      'Fixture selection and installation',
      'Shower and tub installation',
      'Vanity design and installation',
      'Plumbing and electrical updates',
      'Ventilation improvements',
      'Accessibility modifications'
    ],
    gallery: ['/generated/bathroom-before.jpg', '/generated/bathroom-after.jpg'],
    pricing: 'Starting from $15,000',
    timeline: '3-6 weeks'
  },
  {
    id: 'roofing',
    icon: <Shield className="h-12 w-12 text-accent" />,
    title: 'Roofing & Siding',
    subtitle: 'Protect Your Investment',
    description: 'Protect your property with professional roofing and siding services using quality materials. Our experienced team handles everything from minor repairs to complete roof replacements.',
    features: [
      'Roof inspection and assessment',
      'Shingle and tile installation',
      'Flat roof systems',
      'Gutter installation and repair',
      'Siding installation and repair',
      'Insulation improvements',
      'Emergency roof repairs',
      'Preventive maintenance programs'
    ],
    gallery: ['/generated/roofing-project.jpg'],
    pricing: 'Starting from $8,000',
    timeline: '1-3 weeks'
  },
  {
    id: 'commercial',
    icon: <Zap className="h-12 w-12 text-accent" />,
    title: 'Commercial Construction',
    subtitle: 'Professional Office Buildouts',
    description: 'Full-scale commercial projects including office buildouts and retail renovations. We work with businesses to create functional, attractive spaces that enhance productivity and customer experience.',
    features: [
      'Office space planning and design',
      'Retail buildout services',
      'ADA compliance modifications',
      'HVAC system installation',
      'Commercial electrical work',
      'Fire safety system installation',
      'Permit acquisition and management',
      'Project management services'
    ],
    gallery: ['/generated/commercial-office.jpg'],
    pricing: 'Custom quotes available',
    timeline: '6-16 weeks'
  },
  {
    id: 'general',
    icon: <Wrench className="h-12 w-12 text-accent" />,
    title: 'General Contracting',
    subtitle: 'Full-Service Construction Management',
    description: 'Complete project management from permits to final walkthrough for all renovation needs. Our general contracting services ensure your project is completed on time, on budget, and to your specifications.',
    features: [
      'Project planning and design',
      'Permit acquisition and management',
      'Subcontractor coordination',
      'Material procurement',
      'Quality control and inspections',
      'Timeline management',
      'Budget oversight',
      'Final walkthrough and cleanup'
    ],
    gallery: ['/generated/hero-construction.jpg'],
    pricing: 'Varies by project scope',
    timeline: 'Varies by project'
  },
  {
    id: 'custom',
    icon: <Award className="h-12 w-12 text-accent" />,
    title: 'Custom Builds',
    subtitle: 'Unique Construction Projects',
    description: 'Unique construction projects tailored to your specific vision and requirements. From custom built-ins to specialty installations, we bring your unique ideas to life.',
    features: [
      'Custom millwork and built-ins',
      'Specialty installations',
      'Historic renovation services',
      'Green building solutions',
      'Smart home integration',
      'Luxury finishes and materials',
      'Architectural consultation',
      'Design-build services'
    ],
    gallery: ['/generated/kitchen-after.jpg'],
    pricing: 'Custom quotes available',
    timeline: 'Varies by complexity'
  }
];

const faqs = [
  {
    question: 'Do you provide free estimates?',
    answer: 'Yes, we provide free, detailed estimates for all our services. Our team will visit your property to assess the scope of work and provide a comprehensive quote within 24-48 hours.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Roofus Inc is fully licensed for construction work in New York City and carries comprehensive liability insurance and workers compensation coverage for your protection.'
  },
  {
    question: 'How long do projects typically take?',
    answer: 'Project timelines vary based on scope and complexity. Kitchen renovations typically take 4-8 weeks, bathroom remodels 3-6 weeks, and roofing projects 1-3 weeks. We provide detailed timelines during the estimation process.'
  },
  {
    question: 'Do you handle permits and inspections?',
    answer: 'Yes, we handle all necessary permits and coordinate with city inspectors throughout your project. This ensures all work meets NYC building codes and regulations.'
  },
  {
    question: 'What areas of NYC do you serve?',
    answer: 'We serve all five boroughs of New York City, including Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. Contact us to confirm availability in your specific area.'
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes, we stand behind our work with comprehensive warranties. Labor warranties typically range from 1-5 years depending on the type of work, and we honor all manufacturer warranties on materials.'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our Services & Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive construction and renovation services for residential and commercial properties throughout NYC.
            Over 15 years of experience delivering exceptional results.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="mb-6 flex justify-center lg:justify-start">
                    {service.icon}
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-2 text-center lg:text-left">{service.title}</h2>
                  <p className="text-accent text-xl mb-4 text-center lg:text-left">{service.subtitle}</p>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 text-accent mr-2" />
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-accent mr-2" />
                      {service.timeline}
                    </div>
                  </div>

                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Free Quote
                  </Button>
                </div>

                <div className="lg:w-1/2">
                  {service.gallery.length === 2 ? (
                    <BeforeAfterSlider
                      beforeImage={service.gallery[0]}
                      afterImage={service.gallery[1]}
                      beforeAlt={`${service.title} before`}
                      afterAlt={`${service.title} after`}
                      title={service.title}
                    />
                  ) : (
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={service.gallery[0]}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get answers to common questions about our services and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Service Testimonials</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What our clients say about their experience with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                service: 'Kitchen Renovation',
                name: 'Jennifer Walsh',
                role: 'Homeowner, Chelsea',
                content: 'The kitchen renovation exceeded all our expectations. The team was professional, clean, and finished on schedule. Our new kitchen is absolutely beautiful.',
                rating: 5
              },
              {
                service: 'Commercial Buildout',
                name: 'David Park',
                role: 'Restaurant Owner',
                content: 'Roofus Inc handled our restaurant buildout flawlessly. They understood the unique requirements of commercial kitchens and delivered a functional, beautiful space.',
                rating: 5
              },
              {
                service: 'Roofing Service',
                name: 'Maria Santos',
                role: 'Property Manager',
                content: 'After storm damage, they responded quickly and professionally. The new roof looks great and we haven\'t had any issues since the installation.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <Badge className="mb-3">{testimonial.service}</Badge>
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
          <h2 className="font-heading text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and detailed quote for your renovation project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-lg">
              <Phone className="h-5 w-5 mr-2" />
              (212) 555-ROOF
            </div>
            <div className="flex items-center text-lg">
              <Mail className="h-5 w-5 mr-2" />
              info@roofusinc.com
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-accent-foreground border-accent-foreground hover:bg-accent-foreground hover:text-accent text-lg px-8 py-6">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
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