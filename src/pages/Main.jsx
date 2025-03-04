import { useSelector } from "react-redux";
import { Card } from "../component/Card.jsx";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data);

  // console.log(pokemonData);
  return (
    <>
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
