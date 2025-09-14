import { Monitor, Smartphone, Tablet } from "lucide-react";

const setupGuides = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Desktop (Windows & macOS)",
    platforms: [
      {
        name: "Windows 10/11",
        steps: [
          "Download the wallpaper in your preferred resolution",
          "Right-click on the downloaded image and select 'Set as desktop background'",
          "Or navigate to Settings > Personalization > Background and choose your image",
          "Select 'Fill', 'Fit', or 'Stretch' based on your screen aspect ratio",
        ],
      },
      {
        name: "macOS",
        steps: [
          "Download the wallpaper to your Downloads folder",
          "Open System Settings > Wallpaper (or System Preferences > Desktop & Screen Saver)",
          "Click the '+' button and select your downloaded image",
          "Choose display options: Fill Screen, Fit to Screen, or Stretch to Fill Screen",
        ],
      },
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Devices",
    platforms: [
      {
        name: "iPhone / iPad",
        steps: [
          "Download the wallpaper (tap and hold, then select 'Save Image')",
          "Open Settings > Wallpaper > Choose a New Wallpaper",
          "Select the image from your Photos library",
          "Adjust positioning with pinch and zoom gestures",
          "Tap 'Set' and choose: Lock Screen, Home Screen, or Both",
        ],
      },
      {
        name: "Android",
        steps: [
          "Download the wallpaper to your device gallery",
          "Long press on your home screen and select 'Wallpapers'",
          "Choose 'Gallery' or 'Photos' and select your downloaded image",
          "Crop and adjust the image as needed",
          "Apply to Home screen, Lock screen, or both",
        ],
      },
    ],
  },
  {
    icon: <Tablet className="w-6 h-6" />,
    title: "Additional Tips",
    platforms: [
      {
        name: "Resolution Guide",
        steps: [
          "Desktop: Choose 1920×1080 for Full HD, 3840×2160 for 4K displays",
          "Mobile: Select 9:16 aspect ratio wallpapers for optimal fit",
          "Tablet: Pick wallpapers matching your device's aspect ratio",
          "Always download the highest resolution available for best quality",
        ],
      },
      {
        name: "Pro Tips",
        steps: [
          "Use wallpapers with darker edges for better icon visibility",
          "Match wallpaper mood with your system theme (light/dark)",
          "Consider using different wallpapers for lock and home screens",
          "Enable wallpaper slideshow for automatic rotation (desktop only)",
        ],
      },
    ],
  },
];

export function SetupGuide() {
  return (
    <section className="py-16 bg-base-200/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            How to Set Your New Wallpaper
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Follow these simple steps to apply your Silksong wallpaper on any
            device. Choose your platform below for detailed instructions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {setupGuides.map((guide, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-semibold">{guide.title}</h3>
              </div>

              <div className="space-y-6">
                {guide.platforms.map((platform, pIndex) => (
                  <div key={pIndex}>
                    <h4 className="font-medium text-primary mb-3">
                      {platform.name}
                    </h4>
                    <ol className="space-y-2">
                      {platform.steps.map((step, sIndex) => (
                        <li key={sIndex} className="flex gap-3 text-sm">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-base-200 flex items-center justify-center text-xs font-medium">
                            {sIndex + 1}
                          </span>
                          <span className="text-base-content/80">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
