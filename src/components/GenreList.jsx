import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

const GenreList = ({ name, id, genreChangeHandler }) => {
  const [isHovering, setIsHovering] = useState(false);  // After redux, this will be used upon actions

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const selectGenre = () => {
    genreChangeHandler(id);
  };

  return (
    <ListGroup className="mt-2">
      <ListGroup.Item
        style={{
          textAlign: "left",
          backgroundColor: isHovering ? "black" : "",
          color: isHovering ? "white" : "",
          border: isHovering ? "1px solid white" : ""
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="btn"
        onClick={selectGenre}
      >
        {name}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default GenreList;