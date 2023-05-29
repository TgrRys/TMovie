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
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">TMovie</Navbar.Brand>
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

          <Form className="d-flex" onSubmit={searchMovie}>
            <FormControl
              type="search"
              placeholder="Movie Name"
              className="me-2"
              aria-label="search"
              name="query"
              value={query}
              onChange={changeHandler}
            ></FormControl>
            <Button variant="light" type="submit">
              Search
            </Button>
          </Form>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;