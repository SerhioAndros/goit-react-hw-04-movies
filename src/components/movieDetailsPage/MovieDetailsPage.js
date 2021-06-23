import React, { Component } from "react";
import { fetchMovieDetailedInfo } from "../services/movies-api";
import MovieDescr from "./MovieDescr";
import MoviePoster from "./MoviePoster";
import { NavLink, Route } from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";

import Cast from "./cast/Cast";
import Reviews from "./reviews/Reviews";
import Button from "../button/Button";

const style = {
  fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif`,
  fontSize: "20px",
  color: "blue",
  textDecoration: "none",
};
const styleActive = {
  fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif`,
  fontSize: "20px",
  color: "darkblue",
  textDecoration: "none",
};

class MovieDetailsPage extends Component {
  state = { movieInfo: "" };

  componentDidMount() {
    fetchMovieDetailedInfo(this.props.match.params.movieID).then((data) =>
      this.setState({ movieInfo: data })
    );
  }

  handleReturn = () => {
    const { history, location } = this.props;
    if (location.from) {
      return history.push(`${location.from.pathname}${location.from.search}`);
    }
    return history.push(`/`);
  };

  render() {
    const { movieInfo } = this.state;
    return (
      <>
        {!!movieInfo && (
          <>
            <Button btnName={"Go back"} btnFunction={this.handleReturn} />
            <div className={styles.MovieInfoWrapper}>
              <MoviePoster
                poster={movieInfo.poster_path}
                title={movieInfo.title}
              />
              <MovieDescr
                title={movieInfo.title}
                release={movieInfo.release_date}
                originalTitle={movieInfo.original_title}
                score={movieInfo.vote_average}
                overview={movieInfo.overview}
                genres={movieInfo.genres}
              />
            </div>
            <div className={styles.AdditionalWrapper}>
              <p>Additional information</p>
              <ul className={styles.List}>
                <li>
                  <NavLink
                    to={{
                      pathname: `${this.props.match.url}/cast`,
                      state: { from: this.props.location.state?.from },
                    }}
                    style={style}
                    activeStyle={styleActive}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `${this.props.match.url}/reviews`,
                      state: { from: this.props.location.state?.from },
                    }}
                    style={style}
                    activeStyle={styleActive}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Route
                path={`${this.props.match.path}/cast`}
                render={(props) => (
                  <Cast {...props} movieActors={movieInfo.credits.cast} />
                )}
              />

              <Route
                path={`${this.props.match.path}/reviews`}
                render={(props) => (
                  <Reviews {...props} reviews={movieInfo.reviews.results} />
                )}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
