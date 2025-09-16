import React from "react";
import { Layers, MessageSquare, Lock } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Fully functional",
    desc: "Enjoy a complete suite of features designed for seamless user experiences.",
    icon: <Layers className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 2,
    title: "Live Chat",
    desc: "Connect with your audience in real-time for instant support and engagement.",
    icon: <MessageSquare className="w-10 h-10 text-orange-500" />,
  },
  {
    id: 3,
    title: "Secure Data",
    desc: "Protect your information with industry-leading security measures and encryption.",
    icon: <Lock className="w-10 h-10 text-purple-500" />,
  },
];

const Features = () => {
  return (
    <section className="Mycontainer w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* small badge */}
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-black bg-purple-100 rounded-full">
          💡 Premium Features
        </span>

        {/* heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          What Makes sApp Different?
        </h2>

        {/* subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover the unique features of sApp that set it apart from the
          competition, designed to deliver unmatched performance and seamless
          user experiences.
        </p>

        {/* feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
