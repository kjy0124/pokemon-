import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border-bottom: 5px solid black;
  border-right: 5px solid black;

  img {
    width: 120px;
  }
  div {
    text-align: center;
  }
`;

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    //카드 클릭 시 pokemon 상세 페이지로 이동
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front} />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
};
