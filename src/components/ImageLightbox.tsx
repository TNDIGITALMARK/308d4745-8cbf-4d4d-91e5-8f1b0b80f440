'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext
}: ImageLightboxProps) {
  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-20 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-20 text-white hover:bg-white/20"
                onClick={onPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-20 text-white hover:bg-white/20"
                onClick={onNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center p-16">
            <div className="relative max-w-full max-h-full">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-2xl font-heading font-bold mb-2">
              {currentImage.title}
            </h3>
            <p className="text-white/80 text-lg">
              {currentImage.description}
            </p>
            {images.length > 1 && (
              <p className="text-white/60 text-sm mt-2">
                {currentIndex + 1} of {images.length}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}