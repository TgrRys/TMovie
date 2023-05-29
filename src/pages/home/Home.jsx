// import React, {} from "react";
// import MovieBox from "../../components/MovieBox";
// import GenreList from "../components/GenreList";
// import Navi from "../components/Navi";
// import Footer from "../components/Footer";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import MovieBox from "../../components/MovieBox";
import GenreList from "../../components/GenreList";
import Header from "../../components/Navbar";

const Home = ({
  genres,
  movies,
  genreChangeHandler,
  selectId,
  getPopular,
  getTrending,
  searchMovie,
  changeHandler,
  query,
}) => {
  return (
    <div className="home">
      <Header
        getPopular={getPopular}
        getTrending={getTrending}
        searchMovie={searchMovie}
        changeHandler={changeHandler}
        query={query}
      ></Header>
      <Container fluid>
        <Row>
          <Col xs="auto">
            {genres.map((genreReq) => (
              <GenreList
                genreChangeHandler={genreChangeHandler}
                key={genreReq.id}
                {...genreReq}
              ></GenreList>
            ))}
          </Col>
          <Col>
            {movies.length > 0 ? (
              <div>
                <div className="grid">
                  {movies.map((movie, movieReq) => (
                    <MovieBox
                      selectId={selectId}
                      movie={movie}
                      key={movieReq}
                      {...movieReq}
                    ></MovieBox>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="mt-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h2>Database don't contain movies related to your search!</h2>
              </div>
            )}
          </Col>
        </Row>
      </Container>    
    </div>
    
  );
};

export default Home;