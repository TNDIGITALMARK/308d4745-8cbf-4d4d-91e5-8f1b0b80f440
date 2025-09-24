'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Building2, Phone } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-heading font-bold text-xl">
            <Building2 className="h-8 w-8 text-accent" />
            <span>Roofus Inc.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              size="sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-foreground/10 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}