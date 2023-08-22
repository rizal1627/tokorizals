'use client'

import Link from 'next/link'
import styles from './navbar.module.css'
import Search from '../search/search'
import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Image from 'next/image'
import logoPic from '../../src/assets/RSALogoShop.png'
import profilePic from '../../src/assets/christopher.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // const toggleDropdownCLosed = () => {
  //   setIsClosed(isClosed);
  // };
  
  return (
    <>
        <div className={styles.navbar}>
          <div className="flex flex-row text-base font-semibold items-center">
              <div className={`${styles.logo} lg:basis-1/12 md:basis-2/12`}>
                <Link href={"/"}>
                  <Image
                    src={logoPic}
                    alt="rizal tokos"
                    width={100}
                    className={styles.imageLogo}
                  />
                </Link>
              </div>
              <div className={`lg:col-span-2 md:col-span-2 lg:basis-6/12 md:basis-8/12`}>
                  <div className={styles.hsearch}>
                    <Search />
                  </div>
              </div>
              <div className={`${styles.navItems} lg:basis-4/12 md:basis-1/12 flex justify-center`}>
                <Link className='px-5' href={"/"}>Home</Link>
                <Link className='px-5' href={"./product"}>Product</Link>
                <Link className='px-5' href={"./wishlit"}>Wishlit</Link>
                <Link className='px-5' href={"./cart"}>Cart</Link>
              </div>
              <div className={`${styles.dprofile} lg:basis-1/12 md:basis-1/12`}>
                <div className={styles.profile} onMouseEnter={toggleDropdown}>
                    <Image 
                    src={profilePic}
                    alt="Picture of the author"
                    // width={100}
                    className={styles.imagep}
                    />
                </div>
                  {isOpen && (
                    <Sidebar />
                    )}
              </div>
          </div>
        </div>
    </>
  )
}
