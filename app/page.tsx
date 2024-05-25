import { FilterSection, HeadSection, Resault, SelectType } from "@/components";
import FilterResults from "@/components/FilterResults";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeadSection />
      <SelectType />
      <FilterSection />
      <FilterResults />
      <Resault />
    </main>
  );
}
