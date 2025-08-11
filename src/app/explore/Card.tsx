import React from "react";

const Card = ({
  img,
  title,
  head,
  para,
}: {
  img: string;
  title: string;
  head: string;
  para: string;
}) => {
  return (
    <div className="flex flex-col border border-gray-400/50 rounded-xl shadow-md shadow-gray-300 items-center bg-gray-50">
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="translate-y-10 h-80 w-120 hover:scale-107 transition duration-150"
        />
      </div>
      <div className="mt-5 flex flex-col space-y-2 p-4">
        <p className="flex justify-start pl-6 text-gray-500">{title}</p>
        <h1 className="flex justify-start pl-6 text-2xl font-semibold">
          {head}
        </h1>
        <p className="flex justify-start pl-6 pb-8">{para}</p>
      </div>
    </div>
  );
};

export default Card;
