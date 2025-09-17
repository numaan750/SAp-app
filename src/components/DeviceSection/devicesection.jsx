import Image from "next/image";
import { Calendar, Settings, Activity, Clock } from "lucide-react"; // lucide-react icons
import thumb from "@/Assets/thumb-1.png";
import { Poppins } from "next/font/google";
import { TbBoxMultiple } from "react-icons/tb";
import { RiRouteLine } from "react-icons/ri";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AvailableSection() {
  return (
    <section className="w-full bg-[#f7faff] py-20">
      <div className="Mycontainer mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          {/* Heading */}
          <h2
            className={`${poppins.className} 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-semibold text-gray-900 
              leading-snug md:leading-tight text-left w-full`}
          >
            Make your
            <span className="block md:inline"> Device Manage</span>
            <span className="block md:inline"> Everything For</span>
            <span className="block md:inline"> you</span>
          </h2>

          {/* Features */}
          <div className="flex flex-col space-y-6 text-gray-700">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ffffff] text-[#7d4fe0] flex-shrink-0 shadow-sm">
                <TbBoxMultiple size={30} />
              </div>
              <p className={`${poppins.className} leading-relaxed`}>
                Automate routine tasks to boost your efficiency and productivity
                while saving valuable time for other activities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ffffff] text-[#7d4fe0] flex-shrink-0 shadow-sm">
                <Settings size={30} />
              </div>
              <p className={`${poppins.className} leading-relaxed`}>
                Seamlessly synchronize data across all your devices, ensuring
                effortless access to information.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ffffff] text-[#7d4fe0] flex-shrink-0 shadow-sm">
                <RiRouteLine size={30} />
              </div>
              <p className={`${poppins.className} leading-relaxed`}>
                Control and monitor your smart home devices from a single,
                intuitive interface, simplifying your daily interactions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ffffff] text-[#7d4fe0] flex-shrink-0 shadow-sm">
                <Clock size={30} />
              </div>
              <p className={`${poppins.className} leading-relaxed`}>
                Receive personalized notifications and reminders tailored to
                your schedule, keeping you organized and on track.
              </p>
            </div>
          </div>

          {/* Button */}
          <div>
            <a
              href="#"
              className={`${poppins.className} inline-flex items-center gap-3 px-8 py-4 text-lg 
    text-black font-semibold rounded-full border-2 border-[#7d4fe0] 
    bg-white transition-all duration-300 
    hover:text-white hover:bg-gradient-to-r hover:from-[#7a4fe0] hover:to-[#5131de]`}
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
            width={320}
            height={520}
            className="drop-shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
