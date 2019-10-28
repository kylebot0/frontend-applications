import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.js";
import Splash from "./components/splash/splash.js";
import Item from "./components/item.js";
import Timeline from "./components/timeline.js";

import "./style.css";

class App extends React.Component {
  state = {
    stage: 0,
    render: {
      img: "",
      title: "",
      date: ""
    }
  };
  componentDidMount() {
    const url =
      "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-40/sparql";
    const query = `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>

        SELECT ?title ?date ?imgUrl WHERE {
        ?cho dct:created ?date ;
        edm:isShownBy ?imgUrl ;
        dc:title ?title .
        FILTER (xsd:integer(?date)) .
        FILTER langMatches(lang(?title), "ned") .
        } 
        LIMIT 100
        `;
    const runQuery = (url, query) => {
      // Call the url with the query attached, output data
      fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
        .then(res => res.json())
        .then(json => {
          let results = json.results.bindings;
          let itemArray = [];
          for(let i = 0; i < 10; i++){
            var item = results[Math.floor(Math.random() * results.length)];
            itemArray.push(item);
          }
          console.log(itemArray);
          this.setState({
            render: {
              img: item.imgUrl.value,
              title: item.title.value,
              date: item.date.value
            }
          });
        });
    }
    runQuery(url, query);
  };
  render() {
    return (
      <Router>
        <Navbar />

        <Route exact path="/">
          <Splash />
        </Route>

        <Route
          path="/start"
          render={props => (
            <div className="start-container">
            <Item
            render={this.state.render}
            />
            <Timeline 
            />
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
