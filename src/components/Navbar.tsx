import React from "react";
import styled from "styled-components";
import { Row, Col } from "../styles/GlobalComponents"; 

const Header = styled.header`
  max-width: 800px;
  margin: 0 auto;
`;

const Banner = styled.div`
  font-size: 3rem;
  text-align: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem auto;
  border-bottom: 0.1rem solid white;
`;

const P = styled.p`
  margin-right: 1rem;
`;

const NavbarRow = styled(Col)`
    display: flex;
    justify-content: flex-end;
`

const Navbar = () => {
  return (
    <Header>
        <Row>
            <NavbarRow size={1}>Shopping</NavbarRow>
        </Row>
      <Banner>
        <h3>Lederhose</h3>
        <h5>Classic styles</h5>
      </Banner>
      <Links>
        <P>Jeans</P>
        <P>Chinos</P>
        <P>Cargos</P>
        <P>Pants</P>
      </Links>
    </Header>
  );
};

export default Navbar;
