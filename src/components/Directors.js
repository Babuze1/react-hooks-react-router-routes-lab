import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors</h1>
      {directors.map((director) => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
  </div>;
}

export default Directors;
