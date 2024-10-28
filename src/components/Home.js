import React from "react";
import User from "./../data/user"

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}


export const username = "Liza";
export const city = "New York";
export const image = "https://i.imgur.com/mV8PQxj.gif";

export default Home;
