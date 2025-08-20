import { FC } from "react";
import { Button } from "../buttons";

type TTabs = {
  tabs: string[];
};

const Tabs: FC<TTabs> = ({ tabs }) => {
  return (
    <ul className="flex flex-row gap-[2px]">
      {tabs.map((tab, index) => (
        <li key={index}>
          <Button
            label={tab}
            color="transparent"
            size="md"
            active={index === 0 ? true : false}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
