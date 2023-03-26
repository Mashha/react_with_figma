import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <Container>
        <LogoIcon />
        <Burger>
          <span></span>
          <span></span>
          <span></span>
        </Burger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="">Search</MenuLink>
            <MenuLink href="">Login</MenuLink>
            <Button>Join Now</Button>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 2rem;

  svg {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.5rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background-color: #e7e9fc;
    }
  }
`;

const Menu = styled.div`
display flex;
justify-content: space-between; 
align-items: center;
position: relative;

@media (max-width: 670px) {
flex-direction: column;
overflow: hidden;
border-radius: 1rem;
margin-top: 1rem;
box-shadow: -4px 8px 18px 1 rgba(0,0,0,0.7);
max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
width: 100%;
transition: max-height 0.3s ease-in;
}

`;
const LinkWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position relative;
padding: 1.5rem 0;

@media (max-width: 670px) {
flex-direction: column;
}
`;
const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  background: #f774c5;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }

  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3rem;
  }
`;
const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 670px) {
    display: flex;
  }
`;
