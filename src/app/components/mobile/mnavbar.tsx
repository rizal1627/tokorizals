
'use client'

import { FaCartShopping, FaBars, FaHeart } from "react-icons/fa6"
import logoPic from './RSALogoShop.png'

import styles from './mnavbar.module.css'
import { useState } from 'react';
import Link from "next/link"
import Image from 'next/image'

export default function Mnavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
    }
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
                            {/* {children} */}
                        <Link href={'./wishlit'}>
                            <span><FaHeart/></span>
                        </Link>
                    </div>
                    <div className="basis-1/12">
                        <Link href={'./cart'}>
                            <span><FaCartShopping/></span>
                        </Link>
                    </div>
                    <div className="basis-1/12">
                        <FaBars onClick={ToggleSidebar}/>
                    </div>
                </div>
            </div>
            <div className={`${styles.sidebar} ${isOpen == true ? `${styles.active}` : ''}`}>
                <div className={`${styles.sdheader}`}>
                    <h1 className={`text-md font-bold`}>Menu Utama</h1>
                    <div className={`bg-slate-700 rounded-xl text-slate-100 p-2`} onClick={ToggleSidebar}>
                        <i className="fa fa-times">Close</i>
                    </div>
                </div>
                <div className={`${styles.sdbody}`}>
                    <ul>
                        <li><a className={`${styles.sdlink}`}>Menu Item 1</a></li>
                        <li><a className={`${styles.sdlink}`}>Menu Item 2</a></li>
                        <li><a className={`${styles.sdlink}`}>Menu Item 3</a></li>
                        <li><a className={`${styles.sdlink}`}>Menu Item 4</a></li>
                        <li><a className={`${styles.sdlink}`}>Menu Item 5</a></li>
                        <li><a className={`${styles.sdlink}`}>Menu Item 6</a></li>
                        <li><a className={`${styles.sdlink}`}>Menu Item 7</a></li>
                        <li><a className={`${styles.sdlink}`}>Menu Item 8</a></li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.sidebaroverlay} ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
        </>
    )
}