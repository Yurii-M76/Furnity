import {
  Advantages,
  Contacts,
  CustomerReviews,
  Header,
  Navigation,
  Products,
  Slider,
} from "@/components";

export default function Home() {
  return (
    <div className="font-sans m-auto grid grid-rows-[981px_auto_113px] items-start justify-items-center gap-[30px] w-(--w-layout) bg-white">
      <Header slider={<Slider />}>
        <Navigation />
      </Header>
      <main className="flex flex-col w-full items-center justify-center gap-[55px] font-family text-(length:--text-size-md-1)">
        <Advantages />
        <Products />
        <CustomerReviews />
        <Contacts />
      </main>
      <footer className="">footer</footer>
    </div>
  );
}
