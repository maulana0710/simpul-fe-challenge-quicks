"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Shape from "@/../public/icons/feather-icon/Shape(Stroke).svg";
import { ButtonLink } from "@/types/ButtonLink"; // Import ButtonLink from your types folder

interface Active {
  show: boolean;
  title: string;
}
interface BottomNavProps {
  buttonLinks: ButtonLink[];
  setActiveCard: Dispatch<SetStateAction<string>>; // Add this line
}

const BottomNav: React.FC<BottomNavProps> = ({
  buttonLinks,
  setActiveCard,
}) => {
  const [activeState, setActiveState] = useState<Active>({
    show: false,
    title: "",
  });
  console.log("🚀 ~ activeState:", activeState);

  const toggleShow = (active: boolean, value: string) => {
    setActiveCard(value);
    if (active) {
      setActiveState(() => ({
        show: true,
        title: value,
      }));
    } else {
      setActiveState((prevState) => ({
        show: value === "Menu" ? !prevState.show : prevState.show,
        title: value,
      }));
    }
  };

  // Sort buttonLinks: move the active one to the end if title matches
  const sortedButtonLinks = buttonLinks.sort((a, b) => {
    if (a.title === activeState.title) return 1;
    if (b.title === activeState.title) return -1;
    return 0;
  });

  return (
    <nav className="fixed me-5 mb-5 bottom-0 right-0 text-white dark:text-white w-60 flex justify-end">
      <div
        className={`flex items-center transition-transform duration-500 ${
          activeState.show
            ? `${
                activeState.title === "Menu" ? "" : "translate-x-20"
              } animate-fadeIn`
            : `${
                activeState.title === "Menu" ? "translate-x-20" : "translate-x-20"
              } animate-fadeOut`
        }`}
      >
        {activeState.show &&
          sortedButtonLinks.map((value, index) => (
            <div key={index} className="text-center relative">
              {activeState.title === "Menu" && <span>{value.title}</span>}
              {/* Quicks */}
              <div className="flex flex-col items-center mx-4 relative z-40">
                <button
                  onClick={() => toggleShow(!value.active, value.title)}
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
                </button>
              </div>
              {/* Close Quicks Tab */}
              {activeState.title === value.title && (
                <div className="flex flex-col items-center px-4 absolute top-0 right-5 z-30">
                  <button
                    onClick={() => toggleShow(true, "Menu")}
                    className={`w-16 h-16 flex justify-center items-center p-2 
                      bg-secondary
                    shadow-md rounded-full`}
                  ></button>
                </div>
              )}
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
