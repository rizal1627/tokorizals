import Link from 'next/link'
import styles from './sidebar.module.css'
import { useState } from 'react';

export default function Sidebar() {

  const [isClosed, setIsClosed] = useState(false);
  const toggleDropdownCLosed = () => {
    setIsClosed(!isClosed);
  };
  return (
    <>
        <div className={styles.sidebar} >
            <div className={styles.menuItems} >
                <ul onMouseOut={toggleDropdownCLosed}>
                  <li><Link href={"./profile"}>Profile</Link></li>
                  <li><Link href={"./pembelian"}>Pembelian</Link></li>
                  <li><Link href={"./pengaturan"}>Pengaturan</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
