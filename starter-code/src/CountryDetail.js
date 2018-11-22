import React from 'react'
import jsonCountries from './countries.json'
import {Link, Redirect} from 'react-router-dom'

export default function CountryDetail(props) {
  // cca3FromUrl is the value from the URL because of <Route path="/:cca3" component={CountryDetail} />
  // Example: URL="http://localhost:3003/AFG" ===> cca3="AFG" 
  let cca3FromUrl = props.match.params.cca3

  // Find the first country from jsonCountries where its cca3 is cca3FromUrl
  // ".find" is the same as ".filter", except that ".find" returns only 1 elements (and ".filter" an array of elements)
  let currentCountry = jsonCountries.find(country => country.cca3 === cca3FromUrl)

  // If no country was found, we redirect to the home page
  if (!currentCountry) {
    // // Method 1
    // props.history.push('/')
    // return <div>Redirect</div>

    // Method 2
    return <Redirect to="/" />
  }
  
  return (
    <div>
      <h1>{currentCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            {/* currentCountry.capital is an array, and ".join" converts into a string, separated by ", " */}
            <td>{currentCountry.capital.join(', ')}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{currentCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {currentCountry.borders.map(borderCca3 => (
                  <li key={borderCca3}>
                    <Link to={"/"+borderCca3}>
                      {jsonCountries.find(c => c.cca3===borderCca3).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
