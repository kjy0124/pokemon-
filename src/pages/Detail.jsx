import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div className="bg-white flex flex-col justify-center items-center border px-[60px] py-[30px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
      <div className="text-[28px] mb-[10px]">
        {pokemon.name}
        {/* 찜목록에 추가했을 때 하트에 색 나오게 */}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon?.front} back={pokemon?.back} />
    </div>
  );
}
