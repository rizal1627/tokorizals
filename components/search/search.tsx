import Link from 'next/link'
import styles from './search.module.css'

export default function Search() {
  return (
    <>
        <div className={styles.search}>
            <input type="search" placeholder='search'/>
        </div>
    </>
  )
}
