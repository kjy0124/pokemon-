import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <section>
        <img src={pokemon.front} />
        <div>{pokemon.name}</div>
      </section>
    </CardContainer>
  );
};
