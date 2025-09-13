import type { DiceProps } from "../../Type";
import { Five } from "./Five";
import { Four } from "./Four";
import { One } from "./One";
import { Six } from "./Six";
import { Three } from "./Three";
import { Two } from "./Two";

export const Dice = ({ value }: DiceProps) => {
  return (
    <div className="bg-amber-50 w-[100px] h-[100px] relative flex justify-center items-center">
      {value === 1 && <One />}
      {value === 2 && <Two />}
      {value === 3 && <Three />}
      {value === 4 && <Four />}
      {value === 5 && <Five />}
      {value === 6 && <Six />}
    </div>
  );
};
