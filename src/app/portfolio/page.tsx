'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ImageLightbox from '@/components/ImageLightbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Star,
  Phone,
  Mail,
  MapPin,
  Eye
} from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'kitchen',
    title: 'Upper East Side Kitchen Renovation',
    location: 'Manhattan, NY',
    year: '2024',
    description: 'Complete kitchen transformation with custom cabinetry, quartz countertops, and modern appliances.',
    image: '/generated/kitchen-after.jpg',
    testimonial: {
      client: 'Sarah Mitchell',
      rating: 5,
      text: 'Absolutely exceeded our expectations. The team was professional and the results are stunning.'
    }
  },
  {
    id: 2,
    category: 'kitchen',
    title: 'Tribeca Loft Kitchen',
    location: 'Tribeca, NY',
    year: '2024',
    description: 'Modern loft kitchen with open layout, industrial elements, and premium finishes.',
    image: '/generated/kitchen-before.jpg',
    testimonial: {
      client: 'David Park',
      rating: 5,
      text: 'The design perfectly captures the loft aesthetic we wanted.'
    }
  },
  {
    id: 3,
    category: 'bathroom',
    title: 'Manhattan Master Bathroom',
    location: 'Manhattan, NY',
    year: '2024',
    description: 'Luxury bathroom renovation with walk-in shower, modern fixtures, and premium materials.',
    image: '/generated/bathroom-after.jpg',
    testimonial: {
      client: 'Emily Rodriguez',
      rating: 5,
      text: 'Our bathroom feels like a spa. The quality of work is exceptional.'
    }
  },
  {
    id: 4,
    category: 'bathroom',
    title: 'Brooklyn Heights Bathroom',
    location: 'Brooklyn Heights, NY',
    year: '2024',
    description: 'Classic bathroom renovation with modern amenities and timeless design.',
    image: '/generated/bathroom-before.jpg',
    testimonial: {
      client: 'Michael Chen',
      rating: 5,
      text: 'Beautiful work that respects the historic character of our home.'
    }
  },
  {
    id: 5,
    category: 'living',
    title: 'Midtown Living Room',
    location: 'Midtown, NY',
    year: '2024',
    description: 'Contemporary living room renovation with custom built-ins and modern lighting.',
    image: '/generated/living-room.jpg',
    testimonial: {
      client: 'Jennifer Walsh',
      rating: 5,
      text: 'The space feels so much larger and more functional now.'
    }
  },
  {
    id: 6,
    category: 'bedroom',
    title: 'Master Bedroom Suite',
    location: 'Upper West Side, NY',
    year: '2024',
    description: 'Luxury master bedroom with walk-in closet and modern finishes.',
    image: '/generated/bedroom-renovation.jpg',
    testimonial: {
      client: 'Maria Santos',
      rating: 5,
      text: 'The custom closet system is a game-changer. Beautiful work.'
    }
  },
  {
    id: 7,
    category: 'commercial',
    title: 'Midtown Office Buildout',
    location: 'Midtown, NY',
    year: '2024',
    description: 'Modern office space with glass partitions, contemporary furniture, and excellent lighting.',
    image: '/generated/commercial-office.jpg',
    testimonial: {
      client: 'Tech Startup CEO',
      rating: 5,
      text: 'Perfect workspace for our growing team. Delivered on time and on budget.'
    }
  },
  {
    id: 8,
    category: 'commercial',
    title: 'SoHo Retail Store',
    location: 'SoHo, NY',
    year: '2024',
    description: 'High-end retail space with custom displays and premium finishes.',
    image: '/generated/retail-store.jpg',
    testimonial: {
      client: 'Boutique Owner',
      rating: 5,
      text: 'The store looks incredible. Sales have increased since the renovation.'
    }
  },
  {
    id: 9,
    category: 'basement',
    title: 'Finished Basement Entertainment',
    location: 'Brooklyn, NY',
    year: '2024',
    description: 'Complete basement transformation into entertainment space with bar and media area.',
    image: '/generated/basement-renovation.jpg',
    testimonial: {
      client: 'Family Homeowner',
      rating: 5,
      text: 'Amazing transformation. The kids love the new space.'
    }
  },
  {
    id: 10,
    category: 'roofing',
    title: 'Brooklyn Roofing Project',
    location: 'Brooklyn, NY',
    year: '2024',
    description: 'Complete roof replacement with modern materials and professional installation.',
    image: '/generated/roofing-project.jpg',
    testimonial: {
      client: 'Property Manager',
      rating: 5,
      text: 'Quick, professional service. No leaks since installation.'
    }
  },
  // Duplicate some projects to reach 24 total
  {
    id: 11,
    category: 'kitchen',
    title: 'Chelsea Kitchen Remodel',
    location: 'Chelsea, NY',
    year: '2023',
    description: 'Modern kitchen with subway tile backsplash and stainless steel appliances.',
    image: '/generated/kitchen-after.jpg',
    testimonial: {
      client: 'Home Owner',
      rating: 5,
      text: 'Love cooking in this beautiful new kitchen.'
    }
  },
  {
    id: 12,
    category: 'bathroom',
    title: 'West Village Bathroom',
    location: 'West Village, NY',
    year: '2023',
    description: 'Compact bathroom renovation maximizing space and functionality.',
    image: '/generated/bathroom-after.jpg',
    testimonial: {
      client: 'Apartment Owner',
      rating: 5,
      text: 'Incredible how much space they created.'
    }
  },
  {
    id: 13,
    category: 'living',
    title: 'Soho Loft Living Space',
    location: 'SoHo, NY',
    year: '2023',
    description: 'Open concept living space with exposed brick and modern elements.',
    image: '/generated/living-room.jpg',
    testimonial: {
      client: 'Artist',
      rating: 5,
      text: 'Perfect blend of industrial and modern design.'
    }
  },
  {
    id: 14,
    category: 'bedroom',
    title: 'Penthouse Master Suite',
    location: 'Manhattan, NY',
    year: '2023',
    description: 'Luxury penthouse bedroom with city views and custom features.',
    image: '/generated/bedroom-renovation.jpg',
    testimonial: {
      client: 'Penthouse Owner',
      rating: 5,
      text: 'Waking up in this room is a dream every day.'
    }
  },
  {
    id: 15,
    category: 'commercial',
    title: 'Financial District Office',
    location: 'Financial District, NY',
    year: '2023',
    description: 'Corporate office renovation with modern amenities and professional design.',
    image: '/generated/commercial-office.jpg',
    testimonial: {
      client: 'Corporate Manager',
      rating: 5,
      text: 'Employees love the new workspace.'
    }
  },
  {
    id: 16,
    category: 'basement',
    title: 'Queens Basement Conversion',
    location: 'Queens, NY',
    year: '2023',
    description: 'Basement converted to functional living space with proper lighting and ventilation.',
    image: '/generated/basement-renovation.jpg',
    testimonial: {
      client: 'Family',
      rating: 5,
      text: 'Added so much usable space to our home.'
    }
  },
  {
    id: 17,
    category: 'kitchen',
    title: 'Brooklyn Kitchen Upgrade',
    location: 'Brooklyn, NY',
    year: '2023',
    description: 'Complete kitchen renovation with energy-efficient appliances.',
    image: '/generated/kitchen-before.jpg',
    testimonial: {
      client: 'Brooklyn Resident',
      rating: 5,
      text: 'Love the new energy-efficient features.'
    }
  },
  {
    id: 18,
    category: 'commercial',
    title: 'Restaurant Buildout',
    location: 'East Village, NY',
    year: '2023',
    description: 'Complete restaurant construction with commercial kitchen and dining area.',
    image: '/generated/retail-store.jpg',
    testimonial: {
      client: 'Restaurant Owner',
      rating: 5,
      text: 'They understood our unique restaurant needs perfectly.'
    }
  },
  {
    id: 19,
    category: 'bathroom',
    title: 'Luxury Hotel Bathroom',
    location: 'Midtown, NY',
    year: '2023',
    description: 'High-end hotel bathroom renovation with premium fixtures.',
    image: '/generated/bathroom-before.jpg',
    testimonial: {
      client: 'Hotel Manager',
      rating: 5,
      text: 'Guests consistently comment on the beautiful bathrooms.'
    }
  },
  {
    id: 20,
    category: 'living',
    title: 'Park Avenue Renovation',
    location: 'Upper East Side, NY',
    year: '2023',
    description: 'Elegant living room renovation with classic and modern elements.',
    image: '/generated/living-room.jpg',
    testimonial: {
      client: 'Park Avenue Resident',
      rating: 5,
      text: 'Sophisticated design that matches our lifestyle.'
    }
  },
  {
    id: 21,
    category: 'roofing',
    title: 'Manhattan Roofing',
    location: 'Manhattan, NY',
    year: '2023',
    description: 'Apartment building roof replacement with modern materials.',
    image: '/generated/roofing-project.jpg',
    testimonial: {
      client: 'Building Owner',
      rating: 5,
      text: 'Professional work that solved our leak problems.'
    }
  },
  {
    id: 22,
    category: 'bedroom',
    title: 'Guest Bedroom Makeover',
    location: 'Williamsburg, NY',
    year: '2023',
    description: 'Guest bedroom renovation with modern amenities and comfort.',
    image: '/generated/bedroom-renovation.jpg',
    testimonial: {
      client: 'Homeowner',
      rating: 5,
      text: 'Our guests never want to leave!'
    }
  },
  {
    id: 23,
    category: 'commercial',
    title: 'Medical Office Build',
    location: 'Manhattan, NY',
    year: '2023',
    description: 'Medical office construction with specialized requirements and finishes.',
    image: '/generated/commercial-office.jpg',
    testimonial: {
      client: 'Doctor',
      rating: 5,
      text: 'Perfect medical space for our practice.'
    }
  },
  {
    id: 24,
    category: 'kitchen',
    title: 'Historic Brownstone Kitchen',
    location: 'Park Slope, NY',
    year: '2023',
    description: 'Kitchen renovation in historic brownstone preserving original character.',
    image: '/generated/kitchen-after.jpg',
    testimonial: {
      client: 'Brownstone Owner',
      rating: 5,
      text: 'Beautifully balances historic charm with modern functionality.'
    }
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'kitchen', label: 'Kitchen', count: projects.filter(p => p.category === 'kitchen').length },
  { id: 'bathroom', label: 'Bathroom', count: projects.filter(p => p.category === 'bathroom').length },
  { id: 'living', label: 'Living Room', count: projects.filter(p => p.category === 'living').length },
  { id: 'bedroom', label: 'Bedroom', count: projects.filter(p => p.category === 'bedroom').length },
  { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
  { id: 'basement', label: 'Basement', count: projects.filter(p => p.category === 'basement').length },
  { id: 'roofing', label: 'Roofing', count: projects.filter(p => p.category === 'roofing').length }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const lightboxImages = filteredProjects.map(project => ({
    src: project.image,
    alt: project.title,
    title: project.title,
    description: project.description
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Explore our gallery of completed projects showcasing quality craftsmanship and exceptional results
            across residential and commercial spaces in NYC.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/10"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="lg"
                        className="bg-white/90 text-black hover:bg-white"
                        onClick={() => openLightbox(index)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  {/* Testimonial */}
                  <div className="border-t pt-3">
                    <div className="flex mb-2">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic line-clamp-2">
                      "{project.testimonial.text}"
                    </p>
                    <p className="text-xs font-medium mt-1">
                      — {project.testimonial.client}
                    </p>
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
          <h2 className="font-heading text-4xl font-bold mb-4">Inspired by Our Work?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your next project and create something amazing together
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
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            Start Your Project Today
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
                <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
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

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
}