
import { FaCartShopping, FaBars } from "react-icons/fa6"
import logoPic from '../../src/assets/RSALogoShop.png'

import styles from './mnavbar.module.css'
import Link from "next/link"
import Image from 'next/image'

export default function Mnavbar() {
    return(
        <>
            <div className={`${styles.mnavbar} bg-lime-300 fixed top-0 xsm:h-16 md:h-20 w-full`}>
                <div className="flex flex-row items-center h-full">
                    <div className="basis-2/12">
                        <Link href={"/"}>
                            <Image
                            src={logoPic}
                            alt="rizal tokos"
                            width={100}
                            className={styles.imageLogo}
                            />
                        </Link>
                    </div>
                    <div className="basis-8/12">
                        <h1>Search</h1>
                    </div>
                    <div className="basis-1/12">
                        <span><FaCartShopping/></span>
                    </div>
                    <div className="basis-1/12">
                        <span><FaBars/></span>
                    </div>
                </div>
            </div>
        </>
    )
}