'use client'

import Button from "./Button";
import DropdownButton from "./DropdownButton";
import { useState } from "react";
import { createListing } from "../actions";

interface Game {
  opponent: string;
  date: Date;
}

interface CreateListingFieldProps {
  gameList: Game[];
}

export default function CreateListingField( { gameList }: CreateListingFieldProps ) {

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [price, setPrice] = useState<string>("");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers with up to two decimal places
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <label className="label">Requested Price</label>
      <input type="text" className="input" placeholder="Enter Price Here" value={price} onChange={handlePriceChange}/>

      <DropdownButton
        game={selectedGame?.opponent || "Select Game"}
        games={gameList.map((game) => game.opponent)}
        onClick={(opponent) => {
          const selected = gameList.find( (game) => game.opponent === opponent);
          setSelectedGame(selected || null);
        }}
      />

      <Button 
        onClick={() => {
          if (selectedGame) {
            console.log("Selected Game:", selectedGame.opponent);
            console.log("Game Date:", selectedGame.date);
            console.log("Price:", price);
            createListing(selectedGame.date, parseFloat(price))
          } else {
            console.log("No game selected");
          }
        }}>
        Add Listing
      </Button>
    </fieldset>
  );
}