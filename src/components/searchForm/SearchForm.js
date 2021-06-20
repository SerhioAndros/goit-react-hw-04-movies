import React, { Component } from "react";
// import styles from "./Form.module.css";
import PropTypes from "prop-types";

class SearchForm extends Component {
  state = {
    search: "",
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { search } = this.state;
    if (!search.trim()) return alert("Please, enter your request");

    this.props.onSubmit(search);
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
