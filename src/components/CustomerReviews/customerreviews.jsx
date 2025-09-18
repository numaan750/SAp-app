"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const reviews = [
  {
    id: 1,
    name: "Michael Turner",
    role: "CEO, WebCraft Solutions",
    text: "The team went above and beyond to assist with every issue. Prompt responses and incredible support made the whole process smooth.",
    title: "Excellent Service & Support!!",
    img: "/avatar-1.png",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Designer, Innovate Labs",
    text: "sApp exceeded our expectations with its ease of use and powerful features. Perfect for anyone looking to create high-quality landing pages.",
    title: "Highly Recommended for Any Project",
    img: "/avatar-2.png",
  },
  {
    id: 3,
    name: "Amanda Clark",
    role: "UX/UI Specialist, Pixel Hive",
    text: "The design is modern and sleek, and the flexibility of the theme allowed us to tailor it perfectly to our needs. Absolutely worth it!",
    title: "Great Design and Flexibility!",
    img: "/avatar-3.png",
  },
];

export default function CustomerReviews() {
  return (
    <section className={`${poppins.className} w-full py-20 bg-white`}>
      <div className="Mycontainer text-center">
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-purple-50 rounded-full border border-[#f7f9fa] text-black font-medium text-[16px]">
          <HeartOutline className="w-5 h-5 text-[#7d4fe0]" />
          <span>Customer’s Reviews</span>
        </div>

        {/* Heading */}
        <h2 className="font-semibold text-[32px] md:text-[48px] leading-tight text-gray-900 mt-4">
          What our customers are <br /> saying
        </h2>

        {/* Purple Line */}
        <div className="w-12 h-[2px] bg-[#7d4fe0] rounded-full mx-auto mt-4"></div>

        {/* Paragraph */}
        <p className="font-normal text-[16px] text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Hear from our satisfied customers who have transformed their landing
          pages with sApp, and discover why they love using our platform.
        </p>

        {/* Reviews Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 relative min-h-[320px] 
                         transition-shadow duration-300 hover:shadow-2xl text-left"
            >
              <div className="p-6 relative z-10">
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-5 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[24px] text-[#6943de] mb-3 relative z-10">
                  {review.title}
                </h3>

                {/* Review Text */}
                <p className="font-normal text-[16px] text-[#212529] italic mb-6 relative z-10">
                  "{review.text}"
                </p>
              </div>

              {/* User Info Section */}
              <div className="bg-[#f8fafd] pt-10 pb-6 relative">
                {/* Decorative triangle just above the image */}
                <div className="absolute -top-3 left-[60px] md:left-[80px] w-6 h-6 bg-[#f8fafd] rotate-45"></div>

                {/* User */}
                <div className="flex items-center gap-3 px-6">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-17 h-17 rounded-full object-cover shadow-md"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-[19px] text-gray-900">
                      {review.name}
                    </h4>
                    <p className="font-medium text-[16px] text-gray-600">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <span className="absolute top-[-4px] right-6 text-[#f5f7fa] text-[200px] font-serif leading-none pointer-events-none select-none">
                ”
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
