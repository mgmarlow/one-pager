import React from 'react'
import gameData from '../data/gameData.json'
import Table from './Table'

const Meditations = () => {
  return (
    <Table header="Meditations (d12)">
      {gameData.meditations.map((v, i) => (
        <tr>
          <td>{i + 1}</td>
          <td>{v}</td>
        </tr>
      ))}
    </Table>
  )
}

export default Meditations
