import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Cast = ({ movieActors }) => {
  return (
    <>
      {!movieActors.length && <p>Hmmm... No actors. That's strange.</p>}
      {!!movieActors.length && (
        <ul>
          {movieActors.map((actor) => (
            <li key={actor.id}>
              {!actor.profile_path && (
                <img
                  src="https://html5css.ru/w3css/img_avatar3.png"
                  alt={actor.name}
                  width="200"
                />
              )}
              {!!actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = {
  movieActors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};

export default withRouter(Cast);
