import { prisma } from "@/lib/db";
import CreateUserButton from "../components/CreateUserButton";
export default async function Account() {

  const gamesFromDB: { opponent: string }[] = await prisma.games.findMany({
    select: {
        opponent: true
    }
  });

  const gameList: string[] = gamesFromDB.map((game) => game.opponent)

  return (
    <>
      {/* <h1></h1> */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <CreateUserButton />

      </fieldset>
    </>
  );
};