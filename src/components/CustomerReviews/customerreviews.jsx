"use client";
import { StarIcon, HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

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
    <section className="w-full py-20 bg-white">
      <div className="Mycontainer text-center">
        {/* Small Top Label with Heart Icon INSIDE the box */}
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-purple-50 rounded-full border border-purple-200 text-black font-semibold text-sm">
          <HeartOutline className="w-4 h-4 text-[#7d4fe0]" />
          <span>Customer’s Reviews</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
          What our customers are <br /> saying
        </h2>

        {/* Purple Line */}
        <div className="w-20 h-1 bg-[#7d4fe0] rounded-full mx-auto mt-4"></div>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Hear from our satisfied customers who have transformed their landing
          pages with sApp, and discover why they love using our platform.
        </p>

        {/* Reviews Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 relative min-h-[320px] 
                         transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>

              {/* Title */}
              <h3 className=" text-2xl font-bold text-[#6e45de] mb-3">
                {review.title}
              </h3>

              {/* Review Text */}
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>

              {/* User Info */}
              <div className="flex items-center gap-3 border-t pt-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              {/* Quote Icon (Background - Bigger now) */}
              <span className="absolute top-6 right-6 text-gray-200 text-8xl font-serif leading-none">
                “
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
