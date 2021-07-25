import React from 'react'
import gameData from '../data/gameData.json'

// tables instead
const Suits = () => {
  return (
    <ul>
      {gameData.suits.map((suit) => (
        <li>{suit.name}</li>
      ))}
    </ul>
  )
}

const CardTable = () => {
  return <Suits />
}

export default CardTable
