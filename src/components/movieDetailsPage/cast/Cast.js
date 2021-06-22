import React from "react";
import PropTypes from "prop-types";
import styles from "./Cast.module.css";

import { withRouter } from "react-router-dom";

const Cast = ({ movieActors }) => {
  return (
    <>
      {!movieActors.length && (
        <p className={styles.Unexpected}>Hmmm... No actors. That's strange.</p>
      )}
      {!!movieActors.length && (
        <ul className={styles.CastGallery}>
          {movieActors.map((actor) => (
            <li key={actor.id} className={styles.CastGalleryItem}>
              {!actor.profile_path && (
                <img
                  className={styles.CastGalleryItem_image}
                  src="https://html5css.ru/w3css/img_avatar3.png"
                  alt={actor.name}
                  width="200"
                />
              )}
              {!!actor.profile_path && (
                <img
                  className={styles.CastGalleryItem_image}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <div className={styles.DescrWrapper}>
                <p className={styles.Name}>{actor.name}</p>
                <p>Character:</p>
                <p className={styles.Character}>{actor.character}</p>
                {/* </p> */}
              </div>
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
