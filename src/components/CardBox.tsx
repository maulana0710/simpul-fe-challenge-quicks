// components/CardBox.tsx
import React from "react";
import { CardBoxProps } from "@/types/Cardbox";
import LoadingIndicator from "@/components/LoadingIndicator"; // Import the LoadingIndicator

const CardBox: React.FC<CardBoxProps & { loading?: boolean }> = ({ children, userData, loading }) => {
  const getFirstAlphabet = (userData: string) => {
    const match = userData.match(/[A-Za-z]/);
    return match ? match[0].toUpperCase() : "";
  };

  return (
    <div
      style={{ maxWidth: "734px", height: "737px" }}
      className="card-box block bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white py-6 px-8 overflow-y-auto relative"
    >
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-opacity-75 z-10">
          <LoadingIndicator />
        </div>
      )}
      <div className={loading ? "opacity-50" : ""}>
        {children}
        {userData?.map((value: any, key: number) => (
          <div
            key={key}
            style={{ paddingTop: "22px", paddingBottom: "22px" }}
            className="border-b-2 border-tertiary w-full"
          >
            <div className="grid grid-cols-8 gap-2">
              {/* Initial Name */}
              <div className="col-auto">
                <p className="w-16 h-16 text-base flex justify-center items-center p-2 bg-primary shadow-md rounded-full">
                  {getFirstAlphabet(value.name)}
                </p>
              </div>

              <div className="col-span-7">
                {/* title */}
                <div className="flex gap-4">
                  <h1 className="font-bold text-primary dark:text-primary">
                    {value.name}
                  </h1>
                  <p className="font-normal text-tertiary dark:text-tertiary">
                    January 10, 2024 10:00
                  </p>
                </div>
                {/* content */}
                <h1 className="font-semibold text-secondary dark:text-secondary">
                  Merry Around :
                </h1>
                <p className="font-light text-secondary dark:text-secondary">
                  Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBox;
