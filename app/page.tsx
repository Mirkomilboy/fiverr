import { FilterSection, HeadSection, Resault, SelectType } from "@/components";
import BrowserHistory from "@/components/BrowserHistory";
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
        <Resault />
        <BrowserHistory />
      </main>
    </>
  );
}
