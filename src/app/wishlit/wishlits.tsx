import Layout from "../../../components/layout"
import styles from './wishlit.module.css'
import { FaCircleArrowLeft, FaCartShopping, FaBars } from "react-icons/fa6"

import Link from 'next/link'
export default function Wishlit() {
  return (
    <>
        <Layout>
          <section>
            <div className="min-h-max xsm:fixed xsm:w-full lg:invisible shadow-lg bg-white top-0">
              <div className={styles.backhome}>
                  <div className="flex flex-row">
                    <div className="xsm:basis-2/12 md:basis-1/6 grid place-content-center">
                      <button>
                        <Link href={'/'} className='block'>
                        <FaCircleArrowLeft className='w-5 h-5'/>
                        </Link>
                      </button>
                    </div>
                    <div className="xsm:basis-6/12 md:basis-9/6">Back</div>
                    <div className="xsm:basis-2/12 md:basis-1/6 grid place-content-center">
                      <Link href={'./cart'}><span><FaCartShopping/></span>
                      </Link>
                    </div>
                    <div className="xsm:basis-2/12 md:basis-1/6 grid place-content-center">
                      <span><FaBars/></span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="min-h-screen min-w-full container xsm:top-0">
              <div>content Wishlit</div>
            </div>
          </section>
        </Layout>
    </>
  )
}
