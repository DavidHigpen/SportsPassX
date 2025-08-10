'use client'

import Button from "./Button";
import DropdownButton from "./DropdownButton";
import { useState } from "react";
import { createListing } from "../actions";
import { useSession } from "next-auth/react";

interface Game {
  opponent: string;
  date: Date;
}

interface CreateListingFieldProps {
  gameList: Game[];
}


export default function CreateListingField( { gameList }: CreateListingFieldProps ) {

  const { data: session, status, update } = useSession();

  const refreshSession = async () => {
    await update();
  }

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
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" style={{ transform: "scale(1.4)", transformOrigin: "top left" }}>
      <DropdownButton
        label="Game"
        selected={selectedGame?.opponent || "Select"}
        options={gameList.map((game) => game.opponent)}
        setFunction={(opponent) => {
          const selected = gameList.find((game) => game.opponent === opponent);
          setSelectedGame(selected || null);
        }}
      />

      <label className="label">Requested Price</label>
      <input
        type="text"
        className="input"
        placeholder="Enter Price Here"
        value={price}
        onChange={handlePriceChange}
      />

      <Button
        onClick={() => {
          refreshSession();
          if (!selectedGame) {
            console.log("No game selected");
            alert("Please select a game");
          } else if (!price || isNaN(parseFloat(price))) {
            console.log("Invalid price");
            alert("Please enter a valid price");
          } else if (session?.user?.id === undefined) {
            console.log("You must be logged in to create a listing");
            alert("You must be logged in to create a listing");
          } else if (
            session?.user?.classification === null ||
            session?.user?.classification === undefined
          ) {
            console.log("Classification: ", session?.user?.classification);
            console.log("You must have a classification to create a listing");
            alert("You must have a classification to create a listing");
          } else {
            console.log("Selected Game:", selectedGame.opponent);
            console.log("Game Date:", selectedGame.date);
            console.log("Price:", price);
            createListing(
              session.user.id,
              selectedGame.date,
              parseFloat(price)
            );
          }
        }}
      >
        Add Listing
      </Button>
    </fieldset>
  );
}