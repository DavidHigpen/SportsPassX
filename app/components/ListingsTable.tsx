'use client'

import { useState, useEffect, useMemo } from "react";
import FilterPopup from "./FilterPopup";
import GameCard from "./GameCard";
import Carousel from "./Carousel";
import { prisma } from "@/lib/db";

type Listing = {
    opponent: string;
    date: Date;
    price: number;
    classification: string;
    name: string;
}

type ListingsTableProps = {
    passedData: Listing[];
    gameOptions: string[];
}

function ListingsTable({ passedData, gameOptions }: ListingsTableProps) {
  const [data, setData] = useState<Listing[]>([]);
  const [filteredData, setFilteredData] = useState<Listing[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("date");
  const [selectedGameFilter, setSelectedGameFilters] = useState<string[]>([]);
  const [selectedClassFilter, setSelectedClassFilters] = useState<string[]>([]);
  const classOptions: string[] = ["Senior", "Junior", "Sophomore", "Freshman"];

  useEffect(() => {
    if(Array.isArray(passedData)) {
        setData(passedData);
        console.log("data set from passedData", passedData);
    }
  }, [passedData]);

  useEffect(() => {
    let filteredData = data;
    if(selectedGameFilter.length !== 0) {
      filteredData = filteredData.filter((item) => {
        return selectedGameFilter.includes(item.opponent.toUpperCase());
      });
    }
    if(selectedClassFilter.length !== 0) {
      filteredData = filteredData.filter((item) => {
        return selectedClassFilter.includes(item.classification.toUpperCase());
      })
    }
    setFilteredData(filteredData);
  }, [selectedGameFilter, selectedClassFilter, data]);

  const handleSort = (column: "opponent" | "date" | "price" | "classification" | "name") => {
    console.log("Sorting by " + column)
    setOrder(sortColumn === column && order === "asc" ? "desc" : "asc");
    setSortColumn(column);
    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  }

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-4 items-center justify-start mb-4 px-2 py-2 bg-transparent rounded-md shadow-sm text-sm">
          {/* Game Filter */}
          <div className="flex items-center gap-2">
            <label className="font-medium">Game:</label>
            <FilterPopup
              options={gameOptions}
              selectedFilters={selectedGameFilter}
              setFilters={setSelectedGameFilters}
            />
          </div>

          {/* Classification Filter */}
          <div className="flex items-center gap-2">
            <label className="font-medium">Classification:</label>
            <FilterPopup
              options={classOptions}
              selectedFilters={selectedClassFilter}
              setFilters={setSelectedClassFilters}
            />
          </div>

          {/* Optional Sort Display */}
          <div className="ml-auto text-gray-500 hidden sm:block">
            Click table headers to sort
          </div>
        </div>
      </div>
      {/* <div className="overflow-x-auto" style={{ height: "500px", overflow: "visible" }} > */}
      <Carousel />
      {/* </div> */}
    </>
  );
}

export default ListingsTable;