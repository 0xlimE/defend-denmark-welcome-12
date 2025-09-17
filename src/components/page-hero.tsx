import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: {
    src: string;
    alt: string;
    maxHeight?: string;
  };
  children?: ReactNode;
}

export const PageHero = ({ title, subtitle, image, children }: PageHeroProps) => {
  return (
    <section className="pt-12 md:pt-16 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden h-[350px] md:h-[300px] lg:h-[320px]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 max-w-5xl relative h-full">
        <div className="flex flex-col gap-0 md:grid md:grid-cols-2 md:gap-4 md:gap-6 lg:gap-8 xl:gap-12 h-full">
          <div className="flex flex-col justify-center order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-blue leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue/80 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
              {subtitle}
            </p>
            {children}
          </div>
          {image && (
            <div className="flex justify-center items-end md:items-end md:relative order-2 flex-1">
              <div className="w-full h-48 md:h-auto flex justify-center items-end md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-contain object-bottom md:w-auto md:h-auto ${image.maxHeight || 'md:max-h-40 lg:max-h-48 xl:max-h-54'}`}
                  style={{
                    width: '100% !important',
                    height: '100% !important',
                    objectFit: 'contain',
                    objectPosition: 'bottom'
                  } as React.CSSProperties}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
