import { FaCartShopping, FaHeart, FaHouseChimney, FaMoneyBillWave, FaUserLarge } from 'react-icons/fa6'
import { MdPayment } from "react-icons/md";
import styles from './bottomnav.module.css'

import Link from 'next/link'

export default function Bottomnav() {
    return (
      <>
          <div className={styles.bottomnav}>
            <div className="grid min-[320px]:grid-cols-5 h-full place-items-center shadow-innermd">
            <Link href={"/"}>
              <div className='grid place-items-center'><FaHouseChimney className={styles.bnicon}/></div>
              <p className='text-xs'>Home</p>
            </Link>
            <Link href={"./wishlit"}>
              <div className="grid place-items-center">
              <FaHeart className={styles.bnicon}/>
              </div>
              <p className='text-xs'>Wishlit</p>
            </Link>
            <Link href={"./cart"}>
              <div className="grid place-items-center">
              <FaCartShopping className={styles.bnicon}/>
              </div>
              <p className='text-xs'>Keranjang</p>
            </Link>
            <Link href={"./profile"}>
              <div className="grid place-items-center">
                <FaUserLarge className={styles.bnicon}/>
              </div>
              <p className='text-xs'>Profile</p>
            </Link>
            <Link href={"./order-list"}>
              <div className="grid place-items-center">
              <FaMoneyBillWave className={styles.bnicon}/>
              </div>
              <p className='text-xs'>Pembelian</p>
            </Link>
            </div>
          </div>
      </>
    )
  }
  