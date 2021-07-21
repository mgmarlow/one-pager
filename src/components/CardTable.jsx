import React from "react";
import cards from "../data/cards.json";

const CardTable = () => {
  return cards.suits.map((suit) => <p>{suit.name}</p>);
};

export default CardTable;
