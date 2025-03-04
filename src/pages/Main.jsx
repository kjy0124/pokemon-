import { useSelector } from "react-redux";
import { Card } from "../component/Card.jsx";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon);

  // console.log(pokemonData);
  return (
    <>
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
