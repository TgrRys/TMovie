
import { Container } from "react-bootstrap";
import MovieDetails from "../../components/MovieDetail";
import Header from "../../components/Navbar";


const Details = ({
  current,
  getPopular,
  getTrending,
  searchMovie,
  changeHandler,
  query,
}) => {
  return (
    <Container fluid>
      <Header
        getPopular={getPopular}
        getTrending={getTrending}
        searchMovie={searchMovie}
        changeHandler={changeHandler}
        query={query}
      ></Header>

      {current.map((current, currentReq) => (
        <div>
          <MovieDetails
            current={current}
            key={currentReq}
            {...currentReq}
          ></MovieDetails>
        </div>
      ))}
    </Container>
  );
};

export default Details;