import NavBar from "./components/NavBar";
import Toggle from "./components/Toggle";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Toggle />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
