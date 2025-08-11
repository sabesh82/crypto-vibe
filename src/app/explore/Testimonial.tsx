import React from "react";

const Testimonial = ({
  img,
  message,
  name,
  position,
}: {
  img: string;
  message: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="flex flex-col">
      <img
        src={img}
        alt=""
        className="w-full h-70 object-cover rounded-xl mb-2.5"
      />
      <p className="p-3 text-lg font-semibold">&quot;{message}&quot;</p>
      <div className="mt-3 flex flex-col space-y-0.5 p-3">
        <p className="text-[#CECECE] text-lg">{name}</p>
        <p className="bg-gradient-to-br from-purple-500 to-blue-300 text-transparent bg-clip-text">
          {position}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
