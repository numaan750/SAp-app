import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20  bg-[#f9fbff]">
      {/* Container andar rakhna hai */}
      <div className="Mycontainer max-w-7xl mx-auto px-6">
        
        {/* Top Heading Center */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stay Tuned
          </h2>
          <div className="w-20 h-1 bg-[#6840de] rounded-full mt-3 mb-6 mx-auto"></div>
          <p className="text-gray-600">
            Keep an eye out for exciting news and updates from the app, as we
            continue to enhance your experience and introduce new features.
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Schedule a call with us to see if we can help
            </h3>
            <p className="text-gray-600 mb-8">
              Whether you’re looking to start a new project or simply want to chat,
              feel free to reach out to us!
            </p>

            {/* Contact Info */}
            <ul className="space-y-6">
              <li className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6840de] text-white rounded-lg">
                  <FaPhoneAlt />
                </div>
                <span className="text-gray-800 font-medium">
                  +1.890.473.5102
                </span>
              </li>

              <li className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6840de] text-white rounded-lg">
                  <FaEnvelope />
                </div>
                <span className="text-gray-800 font-medium">
                  hello@yourmail.com
                </span>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#6840de] text-white rounded-lg">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-gray-800 font-medium">
                  912 Park Ave, Ketchikan, Alaska 99901, USA
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6840de]"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-medium hover:opacity-90 transition"
            >
              Submit Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
