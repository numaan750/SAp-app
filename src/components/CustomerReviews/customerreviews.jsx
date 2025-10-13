"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { Poppins } from "next/font/google";
import { useContext } from "react";
import { appContext } from "@/context/appcontext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function CustomerReviews() {

  const {reviews} = useContext(appContext);
  if (!reviews)
    return <p className="text-center py-10">Loading reviews...</p>;

  return (
    <section className={`${poppins.className} w-full py-20 bg-white`}>
      <div className="Mycontainer text-center">
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-purple-50 rounded-full border border-[#f7f9fa] text-black font-medium text-[16px]">
          <HeartOutline className="w-5 h-5 text-[#7d4fe0]" />
          <span>{reviews.toptext}</span>
        </div>

        {/* Heading */}
        <h2 className="font-semibold text-[32px] md:text-[48px] leading-tight text-gray-900 mt-4">
          {reviews.heading} <br /> 
        </h2>

        {/* Purple Line */}
        <div className="w-12 h-[2px] bg-[#7d4fe0] rounded-full mx-auto mt-4"></div>

        {/* Paragraph */}
        <p className="font-normal text-[16px] text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          {reviews.paragraph}
        </p>

        {/* Reviews Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {/* Review 1 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 relative min-h-[320px] transition-shadow duration-300 hover:shadow-2xl text-left">
            <div className="p-6 relative z-10">
              <div className="flex gap-1 text-yellow-400 mb-5 relative z-10">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-[24px] text-[#6943de] mb-3 relative z-10">
                {reviews.text1}
              </h3>
              <p className="font-normal text-[16px] text-[#212529] italic mb-6 relative z-10">
                {reviews.discription1}
              </p>
            </div>
            <div className="bg-[#f8fafd] pt-10 pb-6 relative">
              <div className="absolute -top-3 left-[60px] md:left-[80px] w-6 h-6 bg-[#f8fafd] rotate-45"></div>
              <div className="flex items-center gap-3 px-6">
                <img
                  src={reviews.img1}
                  alt="Michael Turner"
                  className="w-17 h-17 rounded-full object-cover shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-[19px] text-gray-900">
                    {reviews.name1}
                  </h4>
                  <p className="font-medium text-[16px] text-gray-600">
                    {reviews.role1}
                  </p>
                </div>
              </div>
            </div>
            <span className="absolute top-[-4px] right-6 text-[#f5f7fa] text-[200px] font-serif leading-none pointer-events-none select-none">”</span>
          </div>

          {/* Review 2 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 relative min-h-[320px] transition-shadow duration-300 hover:shadow-2xl text-left">
            <div className="p-6 relative z-10">
              <div className="flex gap-1 text-yellow-400 mb-5 relative z-10">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-[24px] text-[#6943de] mb-3 relative z-10">
                {reviews.text2}
              </h3>
              <p className="font-normal text-[16px] text-[#212529] italic mb-6 relative z-10">
                {reviews.discription2}
              </p>
            </div>
            <div className="bg-[#f8fafd] pt-10 pb-6 relative">
              <div className="absolute -top-3 left-[60px] md:left-[80px] w-6 h-6 bg-[#f8fafd] rotate-45"></div>
              <div className="flex items-center gap-3 px-6">
                <img
                  src={reviews.img2}
                  alt="Sarah Jenkins"
                  className="w-17 h-17 rounded-full object-cover shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-[19px] text-gray-900">
                    {reviews.name2}
                  </h4>
                  <p className="font-medium text-[16px] text-gray-600">
                    {reviews.role2}
                  </p>
                </div>
              </div>
            </div>
            <span className="absolute top-[-4px] right-6 text-[#f5f7fa] text-[200px] font-serif leading-none pointer-events-none select-none">”</span>
          </div>

          {/* Review 3 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 relative min-h-[320px] transition-shadow duration-300 hover:shadow-2xl text-left">
            <div className="p-6 relative z-10">
              <div className="flex gap-1 text-yellow-400 mb-5 relative z-10">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-[24px] text-[#6943de] mb-3 relative z-10">
                {reviews.text3}
              </h3>
              <p className="font-normal text-[16px] text-[#212529] italic mb-6 relative z-10">
                {reviews.discription3}
              </p>
            </div>
            <div className="bg-[#f8fafd] pt-10 pb-6 relative">
              <div className="absolute -top-3 left-[60px] md:left-[80px] w-6 h-6 bg-[#f8fafd] rotate-45"></div>
              <div className="flex items-center gap-3 px-6">
                <img
                  src={reviews.img3}
                  alt="Amanda Clark"
                  className="w-17 h-17 rounded-full object-cover shadow-md"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-[19px] text-gray-900">
                    {reviews.name3}
                  </h4>
                  <p className="font-medium text-[16px] text-gray-600">
                    {reviews.role3}
                  </p>
                </div>
              </div>
            </div>
            <span className="absolute top-[-4px] right-6 text-[#f5f7fa] text-[200px] font-serif leading-none pointer-events-none select-none">”</span>
          </div>
        </div>
      </div>
    </section>
  );
}
