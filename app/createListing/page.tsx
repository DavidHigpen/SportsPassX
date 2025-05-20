import DropdownButton from "../components/DropdownButton";
import Button from "../components/Button";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function CreateListing() {

  const gamesFromDB: { opponent: string }[] = await prisma.games.findMany({
    select: {
        opponent: true
    }
  });

  const gameList: string[] = gamesFromDB.map((game) => game.opponent)
//   const gameList: string[] = ['UTSA', 'Utah State'];

  return (
    <>
      <h1>Create Listing</h1>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <label className="label">Requested Price</label>
        <input type="text" className="input" placeholder="My awesome page" />

        <DropdownButton games={gameList} />
        <Button>Add Listing</Button>

      </fieldset>
    </>
  );
};