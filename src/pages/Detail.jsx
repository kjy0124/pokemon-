import { useParams } from "react-router-dom";

export default function Detail() {
  const { pokemonId } = useParams();
  return <div>Detail : {pokemonId}</div>;
}
