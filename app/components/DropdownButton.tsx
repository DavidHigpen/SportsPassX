'use client';
// import { useState } from "react";

interface DropdownButtonProps {
    game: string;
    games: string[];
    onClick: (opponent: string) => void;
}

export default function DropdownButton({game, games, onClick}: DropdownButtonProps ) {

//   const [game, setGame] = useState("Select Game");

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
      >
        {game}
      </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {games.map((opponent) => (
            <li key={opponent}>
              <a
                // onClick={() => { setGame(game); }}
                onClick={() => {onClick(opponent)}}
              >
                {opponent}
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
};