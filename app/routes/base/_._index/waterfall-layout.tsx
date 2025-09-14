import { Download } from "lucide-react";
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
    <div>
      <div className="relative hover:scale-105 transition-transform duration-300">
        <div className="absolute top-2 left-2">
          <div className="px-2 py-0.5 text-xs rounded-full bg-neutral/50 text-neutral-content">
            {wallpaper.dimensions.width} × {wallpaper.dimensions.height}
          </div>
        </div>
        <img
          src={imageUrl}
          alt={wallpaper.alt}
          className="w-full h-auto object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="p-2 bg-base-100">
        <div className="flex items-center justify-between gap-4 mb-2">
          <p className="flex-1 min-w-0 text-sm font-medium truncate">
            {wallpaper.alt}
          </p>
          <a
            href={imageUrl}
            download={wallpaper.src}
            className="btn btn-xs btn-primary"
            onClick={(e) => e.stopPropagation()}
            aria-label="Download wallpaper"
          >
            <Download className="size-4" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
