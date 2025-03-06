import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

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

export const Card = memo(({ pokemon }) => {
  const [isImageLoading, setIsImageLoading] = useState(true); //이미지 업로드 로딩 상태
  const navigate = useNavigate();
  return (
    //카드 클릭 시 pokemon 상세 페이지로 이동
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
