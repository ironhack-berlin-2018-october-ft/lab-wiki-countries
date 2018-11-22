import React, { Component } from 'react';
import jsonCountries from './countries.json'
import {Link, NavLink,Route} from 'react-router-dom'
import CountryDetail from './CountryDetail'


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
              <div className="list-group">
                {jsonCountries.map((country) => (
                  // The NavLink display a link and add the class "active" if the URL is the same as the "to" value
                  <NavLink key={country.cca3} className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
                    {country.flag} {country.name.common}
                  </NavLink>))}
              </div>
            </div>
            <div className="col-7">
              {/* Render the component CountryDetail when the URL starts with "/whatever"
              - Examples that work: "/FRA", "/carrot",
              - Examples that don't work: "/"
               */}
              <Route path="/:cca3" component={CountryDetail} />

              {/* Render the component CountryDetail when the URL is exaclty "/whatever" 
              - Examples that work: "/FRA", "/carrot"
              - Examples that don't work: "/", "/FRA/a/b"
              */}
              {/* <Route exact path="/:cca3" component={CountryDetail} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
