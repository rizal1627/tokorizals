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
  const [isClosed, setIsClosed] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
        <div className={styles.navbar}>
          <div className="grid xl:grid-cols-5 md:grid-cols-4 min-[320px]:grid-cols-3 min-[320px]:grid-row-0 py-2 text-base font-semibold justify-items-center">
              <div className={styles.logo}>
                <Link href={"/"}>
                  <Image
                    src={logoPic}
                    alt="rizal tokos"
                    width={100}
                    className={styles.imageLogo}
                  />
                </Link>
              </div>
              <div className="lg:col-span-2 md:col-span-2">
                  <div className={styles.hsearch}>
                    <Search />
                  </div>
              </div>
              <div className={styles.navItems}>
                <Link className='px-5' href={"/"}>Home</Link>
                <Link className='px-5' href={"./product"}>Product</Link>
                <Link className='px-5' href={"./wishlit"}>Wishlit</Link>
                <Link className='px-5' href={"./cart"}>Cart</Link>
              </div>
              <div className={styles.dprofile}>
                <div className={styles.profile} onMouseEnter={toggleDropdown} >
                  <button className={styles.iprofile}>
                    <Image 
                    src={profilePic}
                    alt="Picture of the author"
                    width={100}
                    className={styles.imagep}
                    />
                  </button>
                  {isOpen && (
                    <Sidebar/>
                    )}
                </div>
                  <div className="sideprofile">
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}
