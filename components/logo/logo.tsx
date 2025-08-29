import Link from "next/link";
import { iconLogo } from "../icons";

const Logo = () => {
  return (
    <div className="flex flex-row flex-none">
      <Link href={"/"}>{iconLogo}</Link>
    </div>
  );
};

export default Logo;
