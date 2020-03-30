import React, { Component } from "react";
import { Link } from "react-router-dom";

class HotelDetails extends Component {
  state = {
    results: []
    // name: "loading...",
    // img: "loading...",
    // rating: "loading...",
    // address: "loading...",
    // price: "loading..."
  };

  getForcast = async () => {
    //const locationName = document.getElementById("locationName").value;
    

    const data = await fetch(
      `https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&type=CITY&pageNumber=1&pageSize=25&adults1=1`,
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
      results: data.data.body.searchResults.results
      // name: data.data.body.searchResults.results[0].name,
      // img: data.data.body.searchResults.results[0].thumbnailUrl,
      // rating: data.data.body.searchResults.results[0].starRating,
      // address: data.data.body.searchResults.results[0].address,
      // price: data.data.body.searchResults.results[0].ratePlan.price.current
    });
    console.log(data.data.body.searchResults.results);
  };

  render() {
    console.log("props: " + this.props);
    //JSX code will go here
    return (
      <div className="container">
        <h5>Details of searching product</h5>
        <button className="form__button" onClick={this.getForcast}>
          Show Details
        </button>
        <div className="row">
          {this.state.results.map(result => {
            return (
              <div className="col-md-4" style={{ marginBottom: "2rem" }}>
                <div className="recipes__box">
                  <h4 className="active-recipe__title">
                    {result.name.length < 20
                      ? `${result.name}`
                      : `${result.name.substring(0, 25)}...`}
                  </h4>
                  <img
                    className="active-recipe__img"
                    src={result.thumbnailUrl}
                    alt={result.name}
                  />
                  <p>Rating: {result.starRating}</p>
                  <p>
                    <h4>Address:</h4>
                    {result.address.streetAddress},{result.address.locality},
                    {result.address.postalCode},{result.address.region},
                    {result.address.countryCode}
                  </p>
                  <button className="recipe_buttons">
                    <Link to={{ pathname: `/bookingdetails/${result.id}`}}>
                      Booking details
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HotelDetails;
