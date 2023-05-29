import React from "react";

import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = ({
  getPopular,
  getTrending,
  searchMovie,
  changeHandler,
  query,
}) => {
  return (
    <Navbar bg="warning" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">TMovieDB APP</Navbar.Brand>
        <Navbar.Brand href="/" onClick={getPopular}>
          Popular
        </Navbar.Brand>
        <Navbar.Brand href="/" onClick={getTrending}>
          Trending
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <NavbarCollapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;