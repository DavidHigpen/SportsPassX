import CreateListingField from "../components/CreateListingField";
import NavBar from "../components/NavBar";
import SplitHeader from "../components/SplitHeader";

import { prisma } from "@/lib/db";
export default async function CreateListing() {

  const gamesFromDB: { opponent: string, date: Date}[] = await prisma.games.findMany({
    select: {
        opponent: true,
        date: true,
    }
  });

  return (
    <>
      <NavBar />
      <SplitHeader pageTitle="Create Listing">
        <CreateListingField gameList={gamesFromDB}/>
      </SplitHeader>
    </>
  );
};