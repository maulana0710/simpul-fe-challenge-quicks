"use client";
import Image from "next/image";
import { useState } from "react";
import Shape from "@/../public/icons/feather-icon/Shape(Stroke).svg";
import { ButtonLink } from "@/types/ButtonLink"; // Import ButtonLink from your types folder

interface Active {
  show: boolean;
  title: string;
}

const BottomNav: React.FC<{ buttonLinks: ButtonLink[] }> = ({
  buttonLinks,
}) => {
  const [activeState, setActiveState] = useState<Active>({
    show: false,
    title: "",
  });

  const toggleShow = (active: boolean, value: string) => {
    setActiveState((prevState) => ({
      show: value === "Menu" ? !prevState.show : prevState.show,
      title: value,
    }));
  };

  // Sort buttonLinks: move the active one to the end if title matches
  const sortedButtonLinks = buttonLinks.sort((a, b) => {
    if (a.title === activeState.title) return 1;
    if (b.title === activeState.title) return -1;
    return 0;
  });

  console.log("🚀 ~ activeState:", activeState);
  return (
    <nav className="fixed me-5 mb-5 bottom-0 right-0 text-white dark:text-white w-60 flex justify-end">
      <div
        className={`flex items-center transition-transform duration-500 ${
          activeState.show
            ? `${
                activeState.title === "Menu" ? "" : "translate-x-20"
              } animate-fadeIn`
            : `${
                activeState.title === "Menu" ? "" : "translate-x-20"
              } animate-fadeOut`
        }`}
      >
        {activeState.show &&
          sortedButtonLinks.map((value, index) => (
            <div key={index} className="text-center">
              <span>{value.title}</span>
              <button
                onClick={() => toggleShow(!value.active, value.title)}
                className="flex flex-col items-center px-4"
              >
                <div
                  className={`w-16 h-16 flex justify-center items-center p-2 ${
                    activeState.title === value.title ? value.color : "bg-white"
                  } shadow-md rounded-full`}
                >
                  <Image
                    src={
                      activeState.title === value.title
                        ? value.imageActive
                        : value.image
                    }
                    alt={value.title}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </button>
            </div>
          ))}
      </div>
      <button
        onClick={() => {
          setActiveState((prevState) => {
            const newShow = activeState.title === "" ? !prevState.show : false;
            const newTitle = activeState.title === "" ? "Menu" : "";
            return { show: newShow, title: newTitle };
          });
        }}
        className={`flex flex-col items-center justify-end ${
          activeState.title === "Menu" || activeState.title === ""
            ? "opacity-100"
            : ""
        }`}
      >
        <div className="w-16 h-16 flex justify-center items-center p-2 bg-primary shadow-md rounded-full">
          <Image
            src={Shape}
            alt="Menu Icon"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </button>
    </nav>
  );
};

export default BottomNav;
