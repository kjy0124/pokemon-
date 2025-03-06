import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  //3D처럼 보이게 (카드가 뒤집힐 때 반대면도 보이게)
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${(props) =>
    props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden; //뒷면이 보일 때 앞면이 보이면 안되게
  position: absolute;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg); //y축으로 180도 뒤집히게
`;

export default function FlipCard({ front, back }) {
  //카드가 뒤집혔는지 안뒤집혔는지 상태 확인을 위해
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      <FlipImageContainer flipped={flipped ? "flip" : ""}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button onClick={() => setFlipped((prev) => !prev)}>뒤집기</button>
    </>
  );
}
