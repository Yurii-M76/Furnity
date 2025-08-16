import { Header, Navigation, Slider } from "@/components";

export default function Home() {
  return (
    <div className="font-sans m-auto grid grid-rows-[981px_auto_113px] items-start justify-items-center w-(--w-layout)">
      <Header slider={<Slider />}>
        <Navigation />
      </Header>
      <main className="text-(length:--text-size-xxl)">main</main>
      <footer className="">footer</footer>
    </div>
  );
}
