import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar';
import ListingsTable from '../components/ListingsTable';
import { prisma } from "@/lib/db";

type Listing = {
    opponent: string;
    date: Date;
    price: number;
    classification: string;
    name: string;
}

async function ListingsPage() {
  const listings: Listing[] = await prisma.$queryRaw`SELECT * FROM listings`;
  const gameOptions: string[] = await prisma.games.findMany({
    select: {
      opponent: true,
    }
  }).then(games => games.map(game => game.opponent));

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <ListingsTable passedData={listings} gameOptions={gameOptions} />
      </div>
    </>
  );
}

export default ListingsPage;