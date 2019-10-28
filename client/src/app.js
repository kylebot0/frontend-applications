import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.js";
import Splash from "./components/splash/splash.js";
import "./style.css";

class App extends React.Component {
  state = {
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
        FILTER (?date < "2000" && ?date > "1900") .
        FILTER langMatches(lang(?title), "ned") .
        } LIMIT 10
        `;
    const runQuery = (url, query) => {
      //Test if the endpoint is up and print result to page
      // Call the url with the query attached, output data
      fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
        .then(res => res.json())
        .then(json => {
          let results = json.results.bindings[0];
          console.log(results);
          this.setState({
            render: {
              img: results.imgUrl.value,
              title: results.title.value,
              date: results.date.value
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
        <Route exact path="/start">
          <Splash />
        </Route>
      </Router>
    );
  }
}

export default App;
