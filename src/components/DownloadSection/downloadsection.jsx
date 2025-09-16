export function DownloadSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20 bg-fixed"
      style={{ backgroundImage: "url('download-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 Mycontainer text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          sApp is available for all devices
        </h2>

        {/* Purple Line */}
        <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto mt-4"></div>

        {/* Paragraph */}
        <p className="mt-6 max-w-2xl mx-auto">
          Enjoy the versatility of sApp, designed to seamlessly function on all
          devices. Whether you’re using a smartphone, tablet, or desktop,
          download the app now and experience its powerful features anytime,
          anywhere!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <img src="/google-play.png" alt="Google Play" className="h-12" />
          <img src="/app-store.png" alt="App Store" className="h-12" />
        </div>

        {/* Small Text Under Buttons */}
        <p className="mt-6 text-sm text-gray-200 italic">
          * Available on iPhone, iPad and all Android devices
        </p>
      </div>
    </section>
  );
}
