import Navbar from "@/components/NavBar";
import ButtomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-quaternary dark:bg-secondary h-screen">
      <div className="flex">
        <section style={{ width: "288px" }} className="border-e-2 h-screen md:">
          <Sidebar />
        </section>
        <section className="w-full">
          <Navbar />
          <ButtomNav />
        </section>
      </div>
    </main>
  );
}
