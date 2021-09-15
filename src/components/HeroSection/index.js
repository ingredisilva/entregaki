import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../video/videohero.mp4";
import { Button } from "../ButtomElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" />
        <HeroContent>
          <HeroH1>Entregas em áreas antes Inacessíveis</HeroH1>
          <HeroP>
            Assine Hoje, Comece a Entregar ou Distribuir Água e Gás na Sua
            Comunidade.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signin"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Comece Agora {hover ? <ArrowFoward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
