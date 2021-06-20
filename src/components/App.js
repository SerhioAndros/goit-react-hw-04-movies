import React from "react";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Cast from "./cast/Cast";
import HomePage from "./homepage/HomePage";
import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";
import Movies from "./movies/Movies";
import Navigation from "./navigation/Navigation";
import NotFound from "./notFound/NotFound";
import Reviews from "./reviews/Reviews";

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
          <Route path="/movies" component={Movies} />
          <Route path="/movies/:movieID" component={MovieDetailsPage} />
          <Route path="/movies/:movieID/cast" component={Cast} />
          <Route path="/movies/:movieID/reviews" component={Reviews} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
