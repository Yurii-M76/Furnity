import {
  Advantages,
  Contacts,
  CustomerReviews,
  Footer,
  Header,
  Navigation,
  Products,
  Slider,
} from "@/components";

export default function Home() {
  return (
    <div className="relative font-sans m-auto grid grid-rows-[981px_auto_113px] items-start justify-items-center gap-[30px] w-(--w-layout) bg-white z-0">
      <Header slider={<Slider />}>
        <Navigation />
      </Header>
      <main className="flex flex-col w-full items-center justify-center gap-[55px] font-family text-(length:--text-size-md-1)">
        <Advantages />
        <Products />
        <CustomerReviews />
        <Contacts />
      </main>
      <Footer>
        <Navigation />
      </Footer>
    </div>
  );
}
