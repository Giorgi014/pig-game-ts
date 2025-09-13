import type { PlayerProps } from "../Type";

const PlayerTwo = ({ score, current, isActive, isWinner }: PlayerProps) => {
  return (
    <div
      className={`w-[100%] flex justify-center items-center flex-col rounded-br-[10px] rounded-tr-[10px] 
      ${isWinner ? "bg-black" : isActive ? "bg_one" : "bg_two"}`}
    >
      <h1 className="text-[40px] mt-[70px] mb-5">PLAYER 2</h1>
      <p className="text-6xl red_txt font-medium mb-[120px]">{score}</p>
      <div className="w-[140px] h-[100px] flex justify-evenly items-center flex-col red_bg mb-20 rounded-[10px]">
        <p className="text-[18px] text-amber-50">CURRENT</p>
        <p className="text-3xl text-amber-50">{current}</p>
      </div>
    </div>
  );
};

export default PlayerTwo;
