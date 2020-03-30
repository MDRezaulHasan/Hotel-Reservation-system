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
              <table className="table">
                <tr key={suggestion.group}>
                  <td>{suggestion.group}</td>
                  <td>
                    {suggestion.entities.map(entitie => {
                      return (
                        <div>
                          <p>{entitie.type}</p>
                          <button>
                            <Link
                              to={{
                                pathname: `/hoteldetails/${entitie.destinationId}`,
                               
                              }}
                            >
                              Go
                            </Link>
                          </button>
                        </div>
                      );
                    })}
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
