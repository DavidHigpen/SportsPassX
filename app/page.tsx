import NavBar from "./components/NavBar";
import Toggle from "./components/Toggle";
import HeroTitle from "./components/HeroTitle";
import { getUserSession } from "@/lib/session";

export default async function Home() {
  const user = await getUserSession()

  return (
    <>
      <div>
        <HeroTitle />
      </div>
    </>
  );
}
