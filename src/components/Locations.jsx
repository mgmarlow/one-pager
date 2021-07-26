import React from 'react'
import gameData from '../data/gameData.json'
import Table from './Table'

const Locations = () => {
  return (
    <Table header="Locations (values)">
      {Object.entries(gameData.values).map(([k, v]) => (
        <tr>
          <td>{k}</td>
          <td>{v.name}</td>
        </tr>
      ))}
    </Table>
  )
}

export default Locations
