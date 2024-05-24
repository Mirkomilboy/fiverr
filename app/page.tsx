import { FilterSection, HeadSection, Resault, SelectType } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeadSection />
      <SelectType />
      <FilterSection />
      <Resault />
    </main>
  );
}
