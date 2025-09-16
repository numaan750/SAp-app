import Image from "next/image";
import { Calendar, Settings, Activity, Clock } from "lucide-react"; // lucide-react icons
import thumb from "@/Assets/thumb-1.png"

export default function AvailableSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="Mycontainer  mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Make your Device <br /> Manage Everything For you
          </h2>

          {/* Features */}
          <div className="space-y-6 text-gray-700">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 shadow-sm">
                <Calendar size={24} />
              </div>
              <p>
                Automate routine tasks to boost your efficiency and productivity
                while saving valuable time for other activities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 shadow-sm">
                <Settings size={24} />
              </div>
              <p>
                Seamlessly synchronize data across all your devices, ensuring
                effortless access to information.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 shadow-sm">
                <Activity size={24} />
              </div>
              <p>
                Control and monitor your smart home devices from a single,
                intuitive interface, simplifying your daily interactions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 shadow-sm">
                <Clock size={24} />
              </div>
              <p>
                Receive personalized notifications and reminders tailored to your
                schedule, keeping you organized and on track.
              </p>
            </div>
          </div>

          {/* Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#7d4fe0] text-black rounded-full font-semibold hover:bg-purple-600 hover:text-white transition"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={thumb}
            alt="App Screenshot"
            width={300}
            height={500}
            className="drop-shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
