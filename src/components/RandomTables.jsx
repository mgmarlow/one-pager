import React from 'react'
import gameData from '../data/gameData.json'
import styles from './RandomTables.module.scss'

const Table = ({ header, children, colSpan = '2' }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan={colSpan}>{header}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

const Suits = () => {
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

const Values = () => {
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

const RandomTables = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Suits />
      </div>
      <div className={styles.section}>
        <Values />
      </div>
      <div className={styles.section}>
        <Meditations />
      </div>
    </div>
  )
}

export default RandomTables
