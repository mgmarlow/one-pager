import React from 'react'
import gameData from '../data/gameData.json'
import Table from './Table'

const Discoveries = () => {
  return (
    <Table header="Discoveries (suits)">
      {Object.entries(gameData.suits).map(([k, v]) => (
        <tr>
          <td>{k}</td>
          <td>{v.name}</td>
        </tr>
      ))}
    </Table>
  )
}

export default Discoveries
