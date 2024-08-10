// pages/index.tsx
import Navbar from "@/components/NavBar";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import QuestionAnsw from "@/../public/icons/action/question_answer_24px.svg";
import ChromeReader from "@/../public/icons/action/chrome_reader_mode_24px.svg";
import QuestionAnswActive from "@/../public/icons/action/question_answer_24px-1.svg";
import ChromeReaderActive from "@/../public/icons/action/chrome_reader_mode_24px-1.svg";
import { ButtonLink } from "@/types/ButtonLink"; // Import ButtonLink type if you have a separate types file

export default function Home() {
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
      <main className="bg-secondary dark:bg-secondary h-screen">
        <div className="flex">
          <section
            style={{ width: "288px" }}
            className="border-e-2 h-screen hidden md:block"
          >
            <Sidebar />
          </section>
          <section className="w-full">
            <Navbar />
            {}
            <BottomNav buttonLinks={buttonLinks} />
          </section>
        </div>
      </main>
    </div>
  );
}
