import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scoll from "../components/Scroll";
import { robots } from "../robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading Pussycats</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Pussycats</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scoll>
            <CardList robots={filteredRobots} />;
          </Scoll>
        </div>
      );
    }
  }
}
export default App;
