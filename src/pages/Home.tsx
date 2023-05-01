import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { Col, Row, Container } from "../styles/GlobalComponents";
import Carousel from "../components/Carousel";

export interface Slide {
  url: string;
  title: string;
}
const Home = () => {
  const slides: Slide[] = [
    {
      url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "jeans",
    },
    {
      url: "https://images.unsplash.com/photo-1499202977705-65f436dac18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      title: "chinos",
    },
    {
      url: "https://images.unsplash.com/photo-1584302052177-2e90841dad6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      title: "cargos",
    },
  ];

  const ImageContainer = styled.div`
    width: 500px;
    height: 280px;
    margin: 2rem auto;
    padding: 0.2rem;
  `;

  const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0.4rem;
  `;
  const FlexImage = styled.img`
    opacity: 100%;
    transition: opacity 500ms ease;

    &:hover {
      opacity: 50%;
    }
  `;
  const FlexImageWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin: 0.2rem;

    &:hover .text-overlay {
      opacity: 1;
    }
  `;
  return (
    <Container>
      <Row>
        <Col size={1}>
          <ImageContainer>
            <Carousel slides={slides} />
          </ImageContainer>
        </Col>
      </Row>
      <Row>
        <Col size={1} style={{ padding: "1rem" }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Clothing that remains.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            placeat.
          </p>
        </Col>
        <Col size={2}>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Image address"
            />
          </ImageContainer>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
            <h1>Browse by Category</h1>
          <FlexBox>
            <FlexImageWrapper>
              <FlexImage
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Image address"
              />
            </FlexImageWrapper>
            <FlexImageWrapper>
              <FlexImage
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Image address"
              />
            </FlexImageWrapper>
            <FlexImageWrapper>
              <FlexImage
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Image address"
              />
            </FlexImageWrapper>
            <FlexImageWrapper>
              <FlexImage
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Image address"
              />
            </FlexImageWrapper>
          </FlexBox>
        </Col>
      </Row>
      <Row>
        <Col size={1}>Browse by category/Age/Gender</Col>
      </Row>
      <Row>
        <Col size={1}>Subscribe to Newsletter</Col>
      </Row>
    </Container>
  );
};

export default Home;
