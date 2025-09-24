'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  title
}: BeforeAfterSliderProps) {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <div className="relative bg-card rounded-lg overflow-hidden shadow-lg">
      <div className="relative aspect-[4/3] w-full">
        <div className="absolute inset-0">
          {isAfter ? (
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              className="object-cover transition-opacity duration-500"
            />
          ) : (
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover transition-opacity duration-500"
            />
          )}
        </div>

        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2 mb-2">
              <Button
                variant={!isAfter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setIsAfter(false)}
                className={!isAfter ? 'bg-primary text-primary-foreground' : 'bg-white/90 text-foreground border-white/50'}
              >
                Before
              </Button>
              <Button
                variant={isAfter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setIsAfter(true)}
                className={isAfter ? 'bg-accent text-accent-foreground' : 'bg-white/90 text-foreground border-white/50'}
              >
                After
              </Button>
            </div>
            <h3 className="font-heading font-semibold text-white text-lg drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}