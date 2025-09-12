import PlayerOne from "../Players/PlayerOne";
import PlayerTwo from "../Players/PlayerTwo";

const Main = () => {
  return (
    <main className="flex justify-between items-center w-[70%] relative rounded-[10px] box_shadow margin_auto p-px">
      <PlayerOne />
      <PlayerTwo />
    </main>
  );
};

export default Main;
