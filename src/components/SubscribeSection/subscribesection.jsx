export function SubscribeSection() {
  return (
    <section className="relative w-full bg-white py-20">
      {/* Background world map */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-10"
        style={{
          backgroundImage: "url('/images/world-map.png')", // apna path lagao
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 Mycontainer text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Subscribe to get updates
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay in the loop! Subscribe now to receive the latest news, updates,
          and exclusive offers from sApp directly to your inbox.
        </p>

        {/* Input + Button */}
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Subscribe →
          </button>
        </form>
      </div>
    </section>
  );
}
