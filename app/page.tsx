import { FilterSection, HeadSection, Resault, SelectType } from "@/components";
import FilterResults from "@/components/FilterResults";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeadSection />
        <SelectType />
        <FilterSection />
        <FilterResults />
        {/* <Resault /> */}
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </main>
    </>
  );
}
