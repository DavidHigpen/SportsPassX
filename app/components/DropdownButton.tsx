'use client';
import { useState } from "react";

interface DropdownButtonProps {
    games: string[];
}

// const DropdownButton = () => {
export default function DropdownButton({games}: DropdownButtonProps ) {

  const [game, setGame] = useState("Select Game");

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {game}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {games.map((game) => (
          <li key={game}>
            <a
              onClick={() => {
                setGame(game);
              }}
            >
              {game}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};