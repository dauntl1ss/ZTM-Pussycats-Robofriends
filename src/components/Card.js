import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div
      className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ph5-ns tc"
      style={{ width: "20rem" }}
    >
      <img
        alt="robot"
        src={`https://robohash.org/${id}?set=set4`}
        style={{ maxWidth: "10rem" }}
      ></img>
      <div className="tc">
        <h3 className="ph1">{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
