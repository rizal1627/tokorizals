'use client'

import styles from './profile.module.css'
import Layout from '../../../components/layout'
import BottomNav from '../../../components/bottomnav/bottomnav'
import Link from 'next/link'
import { FaCircleArrowLeft, FaInfo, FaAngleRight, FaCopy } from 'react-icons/fa6'
import { useState } from 'react'
import Image from 'next/image'
import profilePic from '../../assets/christopher.jpg'
import Navbar from '../../../components/navbar/navbar'

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
        <Navbar/>
        <section>
            <div className={styles.backhome}>
              <button>
                <Link href={'/'} className='block'>
                <FaCircleArrowLeft className='w-5 h-5'/>
              </Link>
              </button>
              <span>Back</span>
            </div>
          <div className="min-h-screen min-w-full xl:container lg:container md:container sm:container xsm:container">
            <div className="flex flex-col xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
              <div className="grid xsm:grid-cols-1 justify-items-center pb-5 xl:basis-1/4 lg:basis-1/4">
                  <div className='w-full flex xsm:justify-center'>
                    <Image
                      src={profilePic}
                      alt="Picture of the author"
                      width={100}
                      className={styles.imagep}
                    />
                  </div>
                  <div className="p-2 font-bold">
                    <h1 >Profile</h1>
                  </div>
                  <div className="p-2">
                    <hr className='linep xl:invisible lg:invisible'></hr>
                  </div>
              </div>
              <div className="flex gap-3 xsm:flex-col xsm:h-auto py-5 pb-5 xl:basis-1/3 lg:basis-1/3">
                  <div className="font-bold flex flex-row gap-2 pb-2">
                    <h3>Info Profile</h3>
                    <div className="grid place-content-center border border-black rounded-full w-6 h-6">
                      <span><FaInfo className='w-3 h-3'/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">Nama</div>
                      <div className="name xsm:basis-52 md:basis-9/12">Rizal</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaAngleRight/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">User Name</div>
                      <div className="name xsm:basis-52 md:basis-9/12">Buat User Name Yang Unik</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaAngleRight/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">Bio</div>
                      <div className="name xsm:basis-52 md:basis-9/12">Tulis Bio tentangmu</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaAngleRight/></span>
                    </div>
                  </div>
              </div>
              <div className="flex gap-3 xsm:flex-col xsm:h-auto py-5 pb-5 xl:basis-1/3 lg:basis-1/3">
                  <div className="font-bold flex flex-row gap-2 pb-2">
                    <h3>Info Pribadi</h3>
                    <div className="grid place-content-center border border-black rounded-full w-6 h-6">
                      <span><FaInfo className='w-3 h-3'/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">User ID</div>
                      <div className="name xsm:basis-52 md:basis-9/12">1122334455</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaCopy/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">Email</div>
                      <div className="name xsm:basis-52 md:basis-9/12">RizalSetioAji123@gmail.com</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaAngleRight/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">Nomor Hp</div>
                      <div className="name xsm:basis-52 md:basis-9/12">081908973170</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaAngleRight/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">Jenis Kelamin</div>
                      <div className="name xsm:basis-52 md:basis-9/12">Laki-Lakir</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaAngleRight/></span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center xsm:text-sm md:text-lg">
                    <div className="xsm:basis-96 md:basis-11/12 flex flex-row">
                      <div className="name xsm:basis-28 md:basis-3/12">Tanggal Lahir</div>
                      <div className="name xsm:basis-52 md:basis-9/12">29 November 2019</div>
                    </div>
                    <div className="xsm:basis-4 md:basis-1/12">
                      <span><FaAngleRight/></span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          
        </section>
        <BottomNav/>
        {/* <Layout>
        </Layout> */}
    </>
  )
}
