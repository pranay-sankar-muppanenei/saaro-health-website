import React from "react";

const surgeries = [
  { title: "Piles Surgery", icon: "/piles.png" },
  { title: "Circumcision", icon: "/peni.png" },
  { title: "Hernia Surgery", icon: "/hernia.png" },
  { title: "Hernia Surgery", icon: "/hernia.png" },
  { title: "Hernia Surgery", icon: "/hernia.png" },
  { title: "Hernia Surgery", icon: "/hernia.png" },
];

const TopSurgeries = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-[40px] text-500 font-dm  mb-10">Top Surgeries</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {surgeries.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl border border-gray-200 px-6 py-6 flex flex-col items-center justify-between transition hover:shadow-md"
          >
            <img
              src={`${item.icon}`}
              alt={item.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-dm  text-[22px] text-500 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              Involves the surgical repair of a defect or weakness in the abdominal wall through open or laparoscopic techniques.
            </p>
            <p className="text-[11px] text-purple-600 mb-4">Trusted by 5000+ patients</p>
            <button className="px-6 py-1.5 text-purple-600 border border-purple-500 rounded-full hover:bg-purple-50 transition text-sm">
              View Doctors
            </button>
          </div>
        ))}
      </div>

      <button className="mt-10 h-[50px] w-[290px] px-8 py-2 text-purple-600 border border-purple-500 rounded-full hover:bg-purple-50 transition text-sm">
        View All
      </button>
    </section>
  );
};

export default TopSurgeries;
