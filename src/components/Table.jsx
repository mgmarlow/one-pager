import React from 'react'
import styles from './Table.module.scss'

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

export default Table
