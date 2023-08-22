import { FaCircleArrowLeft, FaCartShopping, FaBars, FaAngleRight } from "react-icons/fa6"
import Layout from "../../../components/layout"
import styles from './homepage.module.css'
import Link from "next/link"

import Image from 'next/image'
import logoPic from '../../assets/RSALogoShop.png'
import Search from "../../../components/search/search"

export default function Home() {
  return (
    <>
        <Layout>
          <header>
            <div className="min-h-max xsm:fixed xsm:w-full lg:invisible shadow-lg bg-white top-0">
              <div className={styles.backhome}>
                  <div className="flex flex-row">
                    <div className="xsm:basis-2/12 md:basis-2/12">
                      <Link href={"/"}>
                        <Image
                          src={logoPic}
                          alt="rizal tokos"
                          width={60}
                          className={styles.imageLogo}
                        />
                      </Link>
                    </div>
                    <div className="xsm:basis-6/12 md:basis-8/12">
                      {/* <button>
                        <Link href={'/'} className='block'>
                        <FaCircleArrowLeft className='w-5 h-5'/>
                        </Link>
                      </button> */}
                        <Search />
                      <div className="">
                      </div>
                    </div>
                    <div className="xsm:basis-2/12 md:basis-1/12 grid place-content-center">
                      <Link href={'./cart'}><span><FaCartShopping/></span>
                      </Link>
                    </div>
                    <div className="xsm:basis-2/12 md:basis-1/12 grid place-content-center">
                      <span><FaBars/></span>
                    </div>
                  </div>
              </div>
            </div>
          </header>
            <div className="min-h-screen min-w-full xsm:container md:container lg:container xsm:pt-20 lg:pt-2">
              <div className="font-bold xsm:h-10">
                <h1>Home Page</h1>
              </div>
              <div className="allproduct font-medium flex items-center gap-1 py-3">
                <Link href={'./product'}>Lihat Semua Produk</Link>
                <span><FaAngleRight/></span>
              </div>
              <div className="menuhome flex flex-col">
                <div className="xsm:h-32">
                  <h1>menu pilihan</h1>
                </div>
                <div className="xsm:h-32">
                  <h1>Slider Promo</h1>
                </div>
                <div className="xsm:h-32">
                  <h1>Discovery</h1>
                </div>
              </div>
            </div>
        </Layout>
    </>
  )
}
