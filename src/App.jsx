import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movie from "./components/movie";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notfound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movie} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/notfound" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
