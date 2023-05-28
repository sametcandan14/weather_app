import React from "react";

function City({ city }) {
  console.log(city);
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-5xl">{city.main.temp}&deg;C</h1>
        <h1 className="text-3xl">{city.name}</h1>
        <h1 className="text-2xl">{city.weather[0].main}</h1>
      </div>
    </div>
  );
}

export default City;
