import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

// import HomePage from "./homepage/HomePage";
// import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";
// import Movies from "./movies/Movies";
// import Navigation from "./navigation/Navigation";
import NotFound from "./notFound/NotFound";

const HomePage = lazy(() =>
  import("./homepage/HomePage.js" /* webpackChunkName: 'home-page' */)
);
const Movies = lazy(() =>
  import("./movies/Movies.js" /* webpackChunkName: 'movie-page' */)
);
const Navigation = lazy(() =>
  import("./navigation/Navigation.js" /* webpackChunkName: 'navigation-page' */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./movieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: 'movie-deatils-page' */
  )
);

class App extends Component {
  state = {
    filmsList: [],
  };
  render() {
    return (
      <>
        <Suspense fallback="Loading...">
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={Movies} />
            <Route path="/movies/:movieID" component={MovieDetailsPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
