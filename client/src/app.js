import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.js";
import Splash from "./components/splash/splash.js";
import Item from "./components/item.js";
import Timeline from "./components/timeline.js";

import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateChildren: 1,
      counter: "",
      itemArray: []
    };
    this.mutateChild = this.mutateChild.bind(this);
  }
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
          const copyrightUrl =
            "http://collectie.wereldculturen.nl/cc/imageproxy.ashx?server=localhost&port=17581&filename=images/CopyRightImage.jpg";
          let results = json.results.bindings;
          let itemArray = [];
          for (let i = 0; i < results.length; i++) {
            results[i].date.value = parseInt(results[i].date.value);
            if (results[i].imgUrl.value == copyrightUrl) {
              delete results[i];
            }
          }

          for (let i = 0; i < 10; i++) {
            var item = results[Math.floor(Math.random() * results.length)];
            itemArray.push(item);
          }
          console.log(itemArray);
          console.log(itemArray.filter(Boolean));
          this.setState({
            itemArray: itemArray.filter(Boolean)
          });
        });
    };
    runQuery(url, query);
  }
  mutateChild(value) {
      console.log(value);
    this.setState({
      stateChildren: value
    });
  }
 
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
                render={this.state.itemArray}
                stage={this.state.stateChildren}
                mutateStage={this.mutateChild}
              />
              <Timeline
                render={this.state.itemArray}
                stage={this.state.stateChildren}
                mutateStage={this.mutateChild}
              />
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
