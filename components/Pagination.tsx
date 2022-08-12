import { Dispatch, SetStateAction } from 'react'
import styles from '../styles/Pagination.module.css'

type Props = {
  total: number,
  itemsPerPage: number,
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export default function Pagination({total, itemsPerPage, currentPage, setCurrentPage}: Props) {

  const NUM_PAGES = Math.ceil(total / itemsPerPage)

  return (
    <ul className={styles.list}>
      {Array.from({length: NUM_PAGES})
        .map((_, index) =>
          <li key={index} className={styles.item}>
            <button
              className={currentPage == index ? styles.active : styles.inactive}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          </li>
        )}
    </ul>
  )
}