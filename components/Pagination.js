import styles from '../styles/Pagination.module.css'

export default function Pagination({total, itemsPerPage, currentPage, setCurrentPage}) {

  const NUM_PAGES = Math.ceil(total / itemsPerPage)

  return (
    <ul className={styles.list}>
      {Array.from({length: NUM_PAGES})
        .map((_, index) =>
          <li key={index} className={styles.item}>
            <button className={currentPage == index ? styles.active : styles.inactive} value={index} onClick={(e) => setCurrentPage(e.target.value)}>
              {index + 1}
            </button>
          </li>
        )}
    </ul>
  )
}