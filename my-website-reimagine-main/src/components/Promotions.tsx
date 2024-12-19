import React from 'react';
import { Card } from '@/components/ui/card';

const Promotions: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FF0000]" aria-label="Promotions">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-8 text-center">
          {[
            {
              src: "https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20text%201.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogdGV4dCAxLnN2ZyIsImlhdCI6MTczNDM0NTMyMCwiZXhwIjoyMDQ5NzA1MzIwfQ.-zF0PoUNcIVkmAWKE9KUTeuuVKRGKEP9SAFPX7oPIkM",
              alt: "First Text Section"
            },
            {
              src: "https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20text%202.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogdGV4dCAyLnN2ZyIsImlhdCI6MTczNDM0NTM5MiwiZXhwIjoyMDQ5NzA1MzkyfQ.O-WtotR2CKpw_JWyLbdg-LoT_OiHyr7kePAdtH6_57c",
              alt: "Second Text Section"
            }
          ].map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className="max-w-full h-auto mx-auto animate-fade-in"
              loading="lazy"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              src: "https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20Telegram.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogVGVsZWdyYW0ucG5nIiwiaWF0IjoxNzM0MzQ1NTAyLCJleHAiOjIwNDk3MDU1MDJ9.iVqGC8EDBKspYGxPExdnMtnA2LalanPQ2pd9UrFiHUQ",
              alt: "Telegram Promotion"
            },
            {
              src: "https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20X.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogWC5zdmciLCJpYXQiOjE3MzQzNDU1NDksImV4cCI6MjA0OTcwNTU0OX0.kHDB-D4IqoC79LgGfQ9NOCCvvehVNHjlxIwIzeVqBJ4",
              alt: "X Promotion"
            }
          ].map((promo, index) => (
            <Card key={index} className="p-6 bg-[#FF0000] border-none hover:scale-105 transition-transform duration-300">
              <img 
                src={promo.src}
                alt={promo.alt}
                className="w-full max-w-[300px] mx-auto h-auto animate-fade-in"
                loading="lazy"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;