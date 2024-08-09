"use client";
import Image from "next/image";
import Shape from "@/../public/icons/feather-icon/Shape(Stroke).svg";
import { useState } from "react";

const BottomNav = () => {
  const [show, setShow] = useState(false);
  console.log("🚀 ~ BottomNav ~ show:", show);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <nav className="fixed me-5 mb-5 bottom-0 right-0 border border-white w-60 flex justify-end">
      {show && (
        <button
          onClick={toggleShow}
          className="flex flex-col items-center px-4"
        >
          <div className="w-16 h-16 flex justify-center items-center p-2 bg-primary text-white shadow-md rounded-full">
            <Image
              src={Shape}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="Home Icon"
              width={24}
              height={24}
            />
          </div>
        </button>
      )}

      <button onClick={toggleShow} className="flex flex-col items-center">
        <div className="w-16 h-16 flex justify-center items-center p-2 bg-primary text-white shadow-md rounded-full">
          <Image
            src={Shape}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="Home Icon"
            width={24}
            height={24}
          />
        </div>
      </button>
    </nav>
  );
};

export default BottomNav;
