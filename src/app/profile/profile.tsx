'use client'

import styles from './profile.module.css'
import Layout from "../../../components/layout"
import Link from 'next/link'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useState } from 'react';

export default function Profile() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <>
        <Layout>
        <section>
          <div className="min-h-screen min-w-full xl:container lg:container md:container sm:container xsm:container">
            <div className={styles.backhome}>
              <FaCircleArrowLeft/>
              <Link href={"/"}>Back Home</Link>
              </div>
            <div className="grid xsm:grid-cols-1 md:grid-cols-3">
              <div className="font-bold grid justify-items-center pb-5">
                <h1 >Profile</h1>
              </div>
              <div className="h-40">
                <h3>Info Profile</h3>
              </div>
              <div className="h-40">
                <h3>Info Pribadi</h3>
              </div>
            </div>
          </div>
          
        </section>
        </Layout>
    </>
  )
}
