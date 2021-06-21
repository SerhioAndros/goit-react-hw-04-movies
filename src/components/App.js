import React from "react";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";
import Movies from "./movies/Movies";
import Navigation from "./navigation/Navigation";
import NotFound from "./notFound/NotFound";

class App extends Component {
  state = {
    filmsList: [],
  };
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:movieID" component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
