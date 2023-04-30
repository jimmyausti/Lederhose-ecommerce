import React, { useState } from "react";
import { Slide } from "../pages/Home";
import styled from "styled-components";

interface CarouselProps {
  slides: Slide[];
}

const SliderStyles = styled.div`
  height: 100%;
  position: relative;
`;

const LeftArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 45px;
  color: white;
  z-index: 1;
  cursor: pointer;
`;
const RightArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 45px;
  color: white;
  z-index: 1;
  cursor: pointer;
`;

const DotContainer = styled.div`
display: flex;
justify-content: center;
`

const Dot = styled.div`
    margin: 0 3px;
    cursor: pointer;
    font-size: 1.4rem;
`
const Carousel = ({ slides }: CarouselProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  const SlideStyles = styled.div`
    background-image: url(${slides[currIndex].url});
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
  `;
  const goPrev = () => {
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrIndex(slideIndex)
  }

  return (
    <SliderStyles>
      <LeftArrowStyles onClick={goPrev}>🡠</LeftArrowStyles>
      <RightArrowStyles onClick={goNext}>🡢</RightArrowStyles>
      <SlideStyles />
      <DotContainer>
        {slides.map((slide, slideIndex) => (
            <Dot key={slideIndex} onClick={() => goToSlide(slideIndex)}>◉</Dot>
        ))}
      </DotContainer>
    </SliderStyles>
  );
};

export default Carousel;
