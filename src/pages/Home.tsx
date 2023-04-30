import React, {HTMLAttributes} from 'react'
import styled from 'styled-components';
import { Col, Row, Container } from '../styles/GlobalComponents';
import Carousel from '../components/Carousel';

export interface Slide {
    url: string;
    title: string
}
const Home = () => {
    
    const slides: Slide[] = [
        {url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 
        title: 'jeans'
    }, { 
        url: 'https://images.unsplash.com/photo-1499202977705-65f436dac18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        title: 'chinos'
    },
    {
        url: 'https://images.unsplash.com/photo-1584302052177-2e90841dad6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        title: 'cargos'
    }
    ]

 const CarouselContainer = styled.div`
    width: 500px;
    height: 280px;
    margin: 2rem auto;
    padding: 0.2rem;
 `

  return (
    <Container>
        <Row>
            <Col size={1}>
            <CarouselContainer>
                <Carousel slides={slides}/>
            </CarouselContainer>
            </Col>
        </Row>
        <Row>
            <Col size={1}>Hello</Col>
            <Col size={2}>World</Col>
        </Row>
        <Row>
            <Col size={1}>Grid layout of popular items</Col>
        </Row>
        <Row>
            <Col size={1}>Browse by category/Age/Gender</Col>
        </Row>
        <Row>
            <Col size={1}>Subscribe to Newsletter</Col>
        </Row>
    </Container>
    )
}

export default Home