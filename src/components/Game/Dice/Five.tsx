export const Five = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-between items-center flex-col">
      <div className="w-[100%] h-[50%] flex justify-around items-center">
        <div className="rounded-[50%] w-[10px] h-[10px] red_bg"></div>
        <div className="rounded-[50%] w-[10px] h-[10px] red_bg"></div>
      </div>
      <div className="rounded-[50%] w-[10px] h-[10px] red_bg"></div>
      <div className="w-[100%] h-[50%] flex justify-around items-center">
        <div className="rounded-[50%] w-[10px] h-[10px] red_bg"></div>
        <div className="rounded-[50%] w-[10px] h-[10px] red_bg"></div>
      </div>
    </div>
  );
};
