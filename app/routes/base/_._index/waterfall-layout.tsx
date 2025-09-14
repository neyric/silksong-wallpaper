import { useMemo } from "react";
import { useBreakpoint } from "~/hooks/dom/use-breakpoint";

export interface WallpaperItem {
  src: string;
  alt: string;
  dimensions: {
    width: number;
    height: number;
  };
  aspectRatio: string;
}

interface WaterfallLayoutProps {
  items: WallpaperItem[];
}

export function WaterfallLayout({ items }: WaterfallLayoutProps) {
  const columnCount = useColumnCount();

  const columns = useMemo(() => {
    const columns: WallpaperItem[][] = Array.from(
      { length: columnCount },
      () => []
    );
    const columnHeights = Array.from({ length: columnCount }, () => 0);

    items.forEach((item) => {
      const aspectRatio = item.aspectRatio || "1:1";
      const [w, h] = aspectRatio.split(":").map(Number);
      const itemHeight = h / w;

      const min = Math.min(...columnHeights);
      const bestColumn = columnHeights.indexOf(min);

      columns[bestColumn].push(item);
      columnHeights[bestColumn] += itemHeight;
    });

    return columns;
  }, [items, columnCount]);

  return (
    <div className="w-full">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-4">
            {column.map((wallpaper, index) => (
              <WallpaperCard
                wallpaper={wallpaper}
                key={`${columnIndex}-${index}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function useColumnCount() {
  const [breakpoint] = useBreakpoint();

  const columnCount = useMemo(() => {
    switch (breakpoint) {
      case "xs":
        return 1;
      case "sm":
        return 2;
      case "md":
        return 2;
      case "lg":
        return 3;
      case "xl":
        return 3;
      default:
        return 1;
    }
  }, [breakpoint]);

  return columnCount;
}

interface WallpaperCardProps {
  wallpaper: WallpaperItem;
}

function WallpaperCard({ wallpaper }: WallpaperCardProps) {
  const imageUrl = `/assets/download/${wallpaper.src}`;

  return (
    <div className="group relative overflow-hidden rounded-lg bg-base-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative">
        <img
          src={imageUrl}
          alt={wallpaper.alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium line-clamp-2">{wallpaper.alt}</p>
          <p className="text-xs opacity-80 mt-1">
            {wallpaper.dimensions.width} × {wallpaper.dimensions.height}
          </p>
        </div>
      </div>

      <a
        href={imageUrl}
        download={wallpaper.src}
        className="absolute top-2 right-2 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        onClick={(e) => e.stopPropagation()}
        aria-label="Download wallpaper"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </a>
    </div>
  );
}
