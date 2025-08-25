import { Button } from "../buttons";

const Contacts = () => {
  return (
    <section className="flex flex-row items-center justify-between w-[1200px] mt-[50px] mb-[50px]">
      <h2 className="w-[727px]">
        Contact us if you need anything, we are ready to serve you
      </h2>
      <Button label="Contact us" color="accent" />
    </section>
  );
};

export default Contacts;
