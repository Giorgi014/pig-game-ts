import { useState } from "react";
import type { GameProps } from "../Type";
import { Dice } from "./Dice/Dice";

export const Game = ({
  playerOneScore,
  setPlayerOneScore,
  playerTwoScore,
  setPlayerTwoScore,
  playerOneCurrent,
  setPlayerOneCurrent,
  playerTwoCurrent,
  setPlayerTwoCurrent,
  currentPlayer,
  setCurrentPlayer,
  winner,
  setWinner,
  maxScore = 100,
}: GameProps) => {
  const [diceValue, setDiceValue] = useState<number | null>(null);

  const rollDice = () => {
    if (winner) return;
    const value = Math.floor(Math.random() * 6) + 1;
    setDiceValue(value);

    if (value === 1) {
      if (currentPlayer === 1) {
        setPlayerOneCurrent(0);
        setCurrentPlayer(2);
      } else {
        setPlayerTwoCurrent(0);
        setCurrentPlayer(1);
      }
    } else {
      if (currentPlayer === 1) {
        setPlayerOneCurrent((prev) => prev + value);
      } else {
        setPlayerTwoCurrent((prev) => prev + value);
      }
    }
  };

  const hold = () => {
    if (winner) return;

    if (currentPlayer === 1) {
      const newScore = playerOneScore + playerOneCurrent;
      setPlayerOneScore(newScore);
      setPlayerOneCurrent(0);

      if (newScore >= maxScore) {
        setWinner(1);
      } else {
        setCurrentPlayer(2);
      }
    } else {
      const newScore = playerTwoScore + playerTwoCurrent;
      setPlayerTwoScore(newScore);
      setPlayerTwoCurrent(0);
      if (newScore >= maxScore) {
        setWinner(2);
      } else {
        setCurrentPlayer(1);
      }
    }
  };

  const resetGame = () => {
    setCurrentPlayer(1);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setPlayerOneCurrent(0);
    setPlayerTwoCurrent(0);
    setDiceValue(null);
    setWinner(null);
  };

  return (
    <div className="absolute center h-[100%] flex flex-col justify-between items-center pt-10 pb-20">
      <button
        onClick={resetGame}
        className="cursor-pointer w-[120px] h-10 rounded-[30px] outline-none border-none btn_bg font-light text-[14px]"
      >
        🔄 NEW GAME
      </button>
      <Dice value={diceValue} />
      <div className="flex flex-col gap-5 justify-center items-center">
        <button
          onClick={rollDice}
          disabled={!!winner}
          className="cursor-pointer w-[120px] h-10 rounded-[30px] outline-none border-none btn_bg font-light text-[14px]"
        >
          🎲 ROLL DICE
        </button>
        <button
          onClick={hold}
          disabled={!!winner}
          className="cursor-pointer w-[90px] h-10 rounded-[30px] outline-none border-none btn_bg font-light text-[14px]"
        >
          HOLD
        </button>
      </div>
    </div>
  );
};
