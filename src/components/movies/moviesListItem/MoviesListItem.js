import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesListItem = ({ id, title, location }) => (
  <li>
    <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
      {title}
    </Link>
  </li>
);

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default withRouter(MoviesListItem);
