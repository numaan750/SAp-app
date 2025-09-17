import React from 'react';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const stats = [
  { id: 1, value: '10M', label: 'Users' },
  { id: 2, value: '23K', label: 'Download' },
  { id: 3, value: '9M', label: 'Customer' },
  { id: 4, value: '12K', label: 'Developer' },
];

const State = () => {
  return (
    <section className="Mycontainer w-full bg-white py-12">
      <div className={`${poppins.className} max-w-9xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center lg:gap-16 md:gap-7 gap-5 px-5`}>
        {stats.map((item, idx) => (
          <div
            key={item.id}
            className={`relative flex flex-col items-center justify-center py-4 ${
              idx !== stats.length - 1 ? 'md:border-r md:border-gray-200' : ''
            }`}
          >
            <h2 className={`${poppins.className} text-5xl md:text-4xl lg:text-5xl font-semibold text-[#5d3ade]`}>
              {item.value}
            </h2>
            <p className={`${poppins.className} md:text-lg lg:text-xl font-bold mt-1 text-gray-800`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
