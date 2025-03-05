import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import { Card } from "../component/Card.jsx";

export default function Favorite() {
  //찜했던 목록 불러오기
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
