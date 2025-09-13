import type { PropsWithChildren } from "react";
import { GridSection } from "~/components/ui/grid-section";

interface HeroSectionProps {
  title: string;
  description: string;
}

export function HeroSection({
  title,
  description,
  children,
}: PropsWithChildren<HeroSectionProps>) {
  return (
    <div className="bg-black text-white">
      <div className="relative overflow-hidden container md:h-80 lg:h-120">
        <div className="max-md:w-full md:absolute md:-right-15 lg:-right-20 inset-y-0 pointer-events-none select-none">
          <img className="h-full size-full object-cover" src="/assets/banner.webp" />
        </div>
        <div className="relative h-full flex flex-col items-start justify-center max-md:py-6 md:max-w-80 lg:max-w-100 xl:max-w-120">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium font-logo select-none mb-2 sm:mb-4 lg:mb-6">
            Silksong <br className="hidden md:block" />
            Wallpaper
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Premium Hollow Knight: Silksong Wallpaper Collection</p>
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 flex items-center justify-center gap-6">
            <button className="btn btn-primary">Get Wallpapers</button>
            <p className="text-neutral-300">4K / 8K / Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
