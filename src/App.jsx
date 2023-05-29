import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Home from "./pages/home/Home";
import Details from "./pages/detail/Detail";


// import { Routes, Route } from "react-router-dom";

const API_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?api_key=28fed4d2729417b96ec9eac13ba7be85";
const API_TRENDING =
  "https://api.themoviedb.org/3/trending/all/day?api_key=28fed4d2729417b96ec9eac13ba7be85";
const API_GENRE_LIST =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=28fed4d2729417b96ec9eac13ba7be85";
const API_GENRE =
  "https://api.themoviedb.org/3/discover/movie?api_key=28fed4d2729417b96ec9eac13ba7be85&with_genres=";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=28fed4d2729417b96ec9eac13ba7be85&query";
const API_SEARCH_BY_ID = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=28fed4d2729417b96ec9eac13ba7be85";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [current, setCurrent] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_POPULAR)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });

    fetch(API_GENRE_LIST)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGenres(data.genres);
      });
  }, []);

  const successAlert = () => {
    toast.success("Movies Fetched", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const getTrending = async (e) => {
    e.preventDefault();
    try {
      const trending_url = API_TRENDING;
      const res = await fetch(trending_url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
      successAlert();
    } catch (e) {
      // console.log(e);
    }
  };

  const getPopular = async (e) => {
    e.preventDefault();
    try {
      const popular_url = API_POPULAR;
      const res = await fetch(popular_url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
      successAlert();
    } catch (e) {
      // console.log(e);
    }
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    if (query !== "") {
      try {
        const url = API_SEARCH + `=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setMovies(data.results);
        successAlert();
      } catch (e) {
        // console.log(e);
      }
    } else {
      toast.warn("Please enter a movie name!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const searchGenre = (genreId) => {
    fetch(genreId)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
        successAlert();
      });
  };

  const searchById = (movieId) => {
    fetch(API_SEARCH_BY_ID + movieId + API_KEY)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const currentData = [data];
        setCurrent(currentData);
      });
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const genreChangeHandler = (e) => {
    searchGenre(API_GENRE + e);
  };

  const selectId = (e) => {
    searchById(e);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              genres={genres}
              genreChangeHandler={genreChangeHandler}
              selectId={selectId}
              getPopular={getPopular}
              getTrending={getTrending}
              searchMovie={searchMovie}
              changeHandler={changeHandler}
              query={query}
            ></Home>
          }
        ></Route>
        <Route
          path="/details"
          element={<Details current={current}></Details>}
        ></Route>
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;