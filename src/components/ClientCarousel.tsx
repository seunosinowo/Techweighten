import React from 'react';

const slides = [
  { image: '/slide/hrmOffice.png', alt: 'HRM Office' },
  { image: '/slide/moversLogo.webp', alt: 'Movers Logo' },
];

const ClientCarousel = () => {

  return (
    <section className="py-2">
      {/* Inline keyframes for simple marquee without Tailwind config */}
      <style>{`
        @keyframes tw-marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="container-custom">
        <div className="overflow-hidden">
          {/** duplicate items for seamless repeat **/}
          {(() => {
            const loopSlides = [...slides, ...slides];
            return (
              <div
                className="flex items-center gap-8 whitespace-nowrap"
                style={{
                  animation: 'tw-marquee-left 12s linear infinite',
                  willChange: 'transform',
                }}
              >
                {loopSlides.map((slide, index) => (
                  <img
                    key={`${slide.alt}-${index}`}
                    src={slide.image}
                    alt={slide.alt}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
