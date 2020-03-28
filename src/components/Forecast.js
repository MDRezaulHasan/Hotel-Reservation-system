import React, { Component } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

class Forcast extends Component {
  state = {
    suggestions: [],
    term: []
  };

  getForcast = async () => {
    const locationName = document.getElementById("locationName").value;
    // e.preventDefault();
    const data = await fetch(
      `https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${locationName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key": "ffd30b4aecmshebc72ac36f6a2b1p16ee13jsn2c5864f12f9a"
        }
      }
    )
      .then(response => response.json())
      .catch(err => {
        console.log(err);
      });
    this.setState({
      suggestions: data.suggestions,
      term: data.term
    });
    console.log(locationName);
  };

  render() {
    //JSX code will go here
    return (
      <div>
        <Form getForcast={this.getForcast} />
        <h3>{this.state.term}</h3>
        {this.state.suggestions.map(suggestion => {
          return (
            <div key={suggestion.group}>
              <table class="table">
                <tr key={suggestion.group}>
                  <td>{suggestion.group}</td>
                  <td>
                    <p>{suggestion.entities[0].type}</p>
                  </td>
                  <td>
                    <p>{suggestion.entities[0].destinationId}</p>
                  </td>
                  <td>
                    <Link to="/hoteldetails">Go</Link>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Forcast;
