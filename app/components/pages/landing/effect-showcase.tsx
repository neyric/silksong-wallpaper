import { GridSection } from "~/components/ui/grid-section";

interface Step {
  title: string;
  subtitle: string;
  description: string;
}

interface ShowCaseItem {
  poster: string;
  video: string;
  description: string;
}

interface EffectShowcaseSectionProps {
  title: string;
  description: string;
  showcaseItems: ShowCaseItem[];
  howItWorkTitle: string;
  howItWorkDescription: string;
  steps: Step[];
}

export function EffectShowcaseSection({
  title,
  description,
  showcaseItems,
  howItWorkTitle,
  howItWorkDescription,
  steps,
}: EffectShowcaseSectionProps) {
  return (
    <GridSection withPadding={false}>
      <div className="relative border-b border-grid-border px-4 py-8 sm:px-8">
        <div className="relative">
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <h2 className="text-center font-bold text-2xl text-base-content sm:text-3xl sm:leading-[1.15] animate-slide-up-fade [--offset:20px] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in text-pretty [animation-delay:100ms]">
              {title}
            </h2>
            <p className="text-pretty text-sm text-base-content/70 sm:text-lg animate-slide-up-fade [--offset:10px] [animation-delay:200ms] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in mb-8">
              {description}
            </p>

            {/* Effect Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {showcaseItems.map((item, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <video
                    className="w-full aspect-video bg-base-300 rounded-lg"
                    poster={item.poster}
                    src={item.video}
                    muted
                    playsInline
                    autoPlay
                    loop
                  />
                  <p className="text-sm text-base-content/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 py-8 sm:px-8">
        <div className="absolute inset-0">
          <DotSVG className="pointer-events-none absolute inset-0 text-grid-border/50" />
        </div>
        <div className="relative">
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <h2 className="text-center font-bold text-2xl text-base-content sm:text-3xl sm:leading-[1.15] animate-slide-up-fade [--offset:20px] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in text-pretty [animation-delay:100ms]">
              {howItWorkTitle}
            </h2>
            <p className="text-pretty text-sm text-base-content/70 sm:text-lg animate-slide-up-fade [--offset:10px] [animation-delay:200ms] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in">
              {howItWorkDescription}
            </p>

            {/* How It Work Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6 w-full">
              {steps.map((item, i) => (
                <div key={i} className="flex flex-col text-left">
                  <div className="mb-4 flex md:flex-col gap-y-2 gap-x-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm border border-grid-border bg-base-100 text-base-content font-bold text-lg">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xl">{item.title}</h3>
                      <p className="text-sm font-medium opacity-70">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}

function DotSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="100%" height="100%" {...props}>
      <defs>
        <pattern
          id="dots-«rj»"
          x="-1"
          y="-1"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <rect x="1" y="1" width="2" height="2" fill="currentColor"></rect>
        </pattern>
      </defs>
      <rect fill="url(#dots-«rj»)" width="100%" height="100%"></rect>
    </svg>
  );
}
