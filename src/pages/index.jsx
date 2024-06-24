// src/pages/index.js
import { useRouter } from "next/router";
import WorldMap from "../components/WorldMap";

export default function Home() {
  const router = useRouter();

  const handleCountryClick = (countryName) => {
    // Redirige a la página de entradas de blog para el país seleccionado
    router.push(`/blogs/${countryName}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">World Map</h1>
      <div className="flex w-full">
        <WorldMap onCountryClick={handleCountryClick} />
      </div>
    </div>
  );
}
