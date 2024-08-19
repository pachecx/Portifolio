import { styled } from "@mui/material";
import Avatar from "../../../../assets/img/img.jpg";

export const Hero = () => {

  const StyledHero = styled("div")(() => ({
    background: "black",
  }));

  const StyledImg = styled("img")(() => ({
    width: "30%",
    borderRadius: "50%"
  }));

  return (
    <>
      <StyledHero>
        ola
        <StyledImg src={Avatar}  />
      </StyledHero>
    </>
  );
};
