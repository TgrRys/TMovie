import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ selectId, movie }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const takeId = () => {
    selectId(movie.id);
  };

  return (
    <div className="card text-center bg-white m-2" >
      <div className="card-body">
        <img
          className="card-img-top"
          onClick={handleShow}
          src={API_IMG + movie.poster_path}
          alt=""
        ></img>

        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>
              <h3>{movie.title}</h3>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <img
              className="card-img-top"
              src={API_IMG + movie.poster_path}
              alt=""
            ></img>
          </ModalBody>
          <ModalBody>
            <h5>IMDB Rating: {movie.vote_average}</h5>
            <h5>Release Date: {movie.release_date}</h5>
            <h6>{movie.overview}</h6>
          </ModalBody>
          <ModalFooter>
            <Button variant="dark" onClick={takeId} >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/details"
              >
                More Details
              </Link>
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default MovieBox;