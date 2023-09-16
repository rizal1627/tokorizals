import Layout from "../../../components/layout"
import styles from './cart.module.css'
import { FaCircleArrowLeft, FaHeart, FaBars } from "react-icons/fa6"

import Link from 'next/link'
import Mnavbar from "../components/mobile/mnavbar"
import Bottomnav from "../../../components/bottomnav/bottomnav"


export default function Cart() {
  return (
    <>
        <Layout>
          <section>
            <Mnavbar/>
            {/* <Link href={'./wishlit'}><span><h1>Shearch</h1></span></Link> */}
            {/* <Link href={'./wishlit'}><span><FaHeart/></span></Link> */}
            {/* </Mnavbar> */}
              <div className="min-h-max xsm:fixed xsm:w-full lg:invisible shadow-lg bg-white top-0">
              {/* <div className={styles.backhome}>
                  <div className="flex flex-row">
                    <div className="xsm:basis-2/12 md:basis-1/6 grid place-content-center">
                      <button>
                        <Link href={'/'} className='block'>
                        <FaCircleArrowLeft className='w-5 h-5'/>
                        </Link>
                      </button>
                    </div>
                    <div className="xsm:basis-6/12 md:basis-9/6">Back</div>
                    <div className="xsm:basis-2/12 md:basis-1/6 grid place-content-center"><Link href={'./wishlit'}><span><FaHeart/></span></Link></div>
                    <div className="xsm:basis-2/12 md:basis-1/6 grid place-content-center"><span><FaBars/></span></div>
                  </div>
              </div> */}
              </div>
              <div className="min-h-screen min-w-full container top-0 xsm:pt-20 lg:pt-2">
                <div>Halaman Cart</div>
              </div>
            <Bottomnav/>
          </section>
        </Layout>
    </>
  )
}
