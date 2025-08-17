import { Advantages, Header, Navigation, Slider } from "@/components";

export default function Home() {
  return (
    <div className="font-sans m-auto grid grid-rows-[981px_auto_113px] items-start justify-items-center gap-[30px] w-(--w-layout) bg-white">
      <Header slider={<Slider />}>
        <Navigation />
      </Header>
      <main className="flex items-start justify-center w-full h-[700px] font-family text-(length:--text-size-xxl)">
        <Advantages />
      </main>
      <footer className="">footer</footer>
    </div>
  );
}
