import React from 'react';

const stats = [
  { id: 1, value: '10M', label: 'Users' },
  { id: 2, value: '23K', label: 'Download' },
  { id: 3, value: '9M', label: 'Customer' },
  { id: 4, value: '12K', label: 'Developer' },
];

const State = () => {
  return (
    <section className="Mycontainer w-full bg-white py-12">
      <div className="max-w-9xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8 px-4">
        {stats.map((item, idx) => (
          <div
            key={item.id}
            className={`relative flex flex-col items-center justify-center py-4 ${
              idx !== stats.length - 1 ? 'md:border-r md:border-gray-200' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#5d3ade]">
              {item.value}
            </h2>
            <p className="text-base md:text-lg font-semibold mt-2 text-gray-800">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
