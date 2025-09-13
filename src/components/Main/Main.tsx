import { useState } from "react";
import { Game } from "../Game/Game";
import PlayerOne from "../Players/PlayerOne";
import PlayerTwo from "../Players/PlayerTwo";
import type { Player, Winner } from "../Type";

const Main = () => {
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
  const [playerOneCurrent, setPlayerOneCurrent] = useState<number>(0);
  const [playerTwoCurrent, setPlayerTwoCurrent] = useState<number>(0);
  const [winner, setWinner] = useState<Winner>(null);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1);

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="flex justify-between items-center w-[70%] relative rounded-[10px] box_shadow p-px">
        <PlayerOne
          score={playerOneScore}
          current={playerOneCurrent}
          isActive={currentPlayer === 1}
          isWinner={winner === 1}
        />
        <PlayerTwo
          score={playerTwoScore}
          current={playerTwoCurrent}
          isActive={currentPlayer === 2}
          isWinner={winner === 2}
        />
        <Game
          playerOneScore={playerOneScore}
          setPlayerOneScore={setPlayerOneScore}
          playerTwoScore={playerTwoScore}
          setPlayerTwoScore={setPlayerTwoScore}
          playerOneCurrent={playerOneCurrent}
          setPlayerOneCurrent={setPlayerOneCurrent}
          playerTwoCurrent={playerTwoCurrent}
          setPlayerTwoCurrent={setPlayerTwoCurrent}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          winner={winner}
          setWinner={setWinner}
        />
      </div>
    </main>
  );
};

export default Main;
