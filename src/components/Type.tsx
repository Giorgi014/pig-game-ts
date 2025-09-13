export type Player = 1 | 2;

export type Winner = Player | null;

export type DiceProps = {
  value: number | null;
};

export type GameProps = {
  playerOneScore: number;
  setPlayerOneScore: React.Dispatch<React.SetStateAction<number>>;
  playerTwoScore: number;
  setPlayerTwoScore: React.Dispatch<React.SetStateAction<number>>;
  playerOneCurrent: number;
  setPlayerOneCurrent: React.Dispatch<React.SetStateAction<number>>;
  playerTwoCurrent: number;
  setPlayerTwoCurrent: React.Dispatch<React.SetStateAction<number>>;
  winner: Winner;
  currentPlayer: Player;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player>>;
  setWinner: React.Dispatch<React.SetStateAction<Winner>>;
  maxScore?: number;
};

export type PlayerProps = {
  score: number;
  current: number;
  isActive?: boolean;
  isWinner?: boolean;
};
