import NavBar from "../components/NavBar";
import SplitHeader from "../components/SplitHeader";

// import { prisma } from "@/lib/db";
export default async function CreateListing() {

  return (
    <>
      <NavBar />
      <SplitHeader pageTitle="Help and FAQ">
        Child
      </SplitHeader>
    </>
  );
};