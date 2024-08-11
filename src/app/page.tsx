// pages/page.tsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/NavBar";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import QuestionAnsw from "@/../public/icons/action/question_answer_24px.svg";
import ChromeReader from "@/../public/icons/action/chrome_reader_mode_24px.svg";
import QuestionAnswActive from "@/../public/icons/action/question_answer_24px-1.svg";
import ChromeReaderActive from "@/../public/icons/action/chrome_reader_mode_24px-1.svg";
import SearchBarIcon from "@/../public/icons/action/search_24px-black.svg";
import { ButtonLink } from "@/types/ButtonLink";
import CardBox from "@/components/CardBox";
import Image from "next/image";
import { FetchUserData } from "@/utils/GetUsersAPI"; // Import the new fetch functions
import { FetchTodosData } from "@/utils/GetUsersTodosAPI"; // Import the new fetch functions
import LoadingIndicator from "@/components/LoadingIndicator"; // Import the LoadingIndicator

const SearchBar = () => {
  return (
    <form className="w-full mx-auto">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 ps-10 w-full z-20 text-sm text-secondary bg-white rounded-e-lg border-s-gray-50 border-e-0 border border-tertiary focus:ring-tertiary focus:border-tertiary dark:bg-white dark:border-s-terborder-tertiary dark:border-tertiary dark:placeholder-tertiary dark:text-black dark:focus:border-secondary"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 pe-10 text-sm font-medium h-full text-white rounded-e-lg border border-s-0 border-tertiary focus:ring-4 focus:outline-none focus:ring-tertiary dark:focus:ring-terborder-tertiary"
          >
            <Image
              src={SearchBarIcon}
              alt={"Search Bar"}
              style={{ width: "auto", height: "auto" }}
            />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default function Home() {
  const [activeCard, setActiveCard] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadUserData = async () => {
      if (activeCard === "Inbox" || activeCard === "Task") {
        setLoading(true);
        try {
          const data =
            activeCard === "Inbox"
              ? await FetchUserData()
              : await FetchTodosData();
          setUserData(data);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      }
    };

    loadUserData();
  }, [activeCard]);

  const buttonLinks: ButtonLink[] = [
    {
      title: "Task",
      color: "bg-indicator-primary",
      image: ChromeReader,
      imageActive: ChromeReaderActive,
      active: false,
    },
    {
      title: "Inbox",
      color: "bg-indicator-secondary",
      image: QuestionAnsw,
      imageActive: QuestionAnswActive,
      active: false,
    },
  ];

  return (
    <div>
      <main style={{ backgroundColor: "#333333"}} className=" h-screen">
        <div className="flex">
          <section
            style={{ width: "288px" }}
            className="border-e-2 h-screen hidden md:block"
          >
            <Sidebar />
          </section>
          <section className="w-full">
            <Navbar />

            {/* Cardbox task and inbox handler */}
            {activeCard === "Inbox" && (
              <div className="fixed me-5 mb-5 bottom-20 right-0 text-white dark:text-white flex justify-end">
                <CardBox loading={loading} userData={userData}>
                  {/* Send POST API with props */}
                  <SearchBar />
                </CardBox>
              </div>
            )}
            {activeCard === "Task" && (
              <div className="fixed me-5 mb-5 bottom-20 right-0 text-white dark:text-white flex justify-end">
                <CardBox loading={loading} userData={userData}></CardBox>
              </div>
            )}

            {/* Bottom Navigation */}
            <BottomNav
              buttonLinks={buttonLinks}
              setActiveCard={setActiveCard}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
