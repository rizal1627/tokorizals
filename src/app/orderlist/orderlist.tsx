import { FaCircleArrowLeft, FaMagnifyingGlass, FaChevronDown } from "react-icons/fa6"
import Layout from "../../../components/layout"
import styles from './orderlist.module.css'

import Link from 'next/link'

export default function Orderlist() {


  return (
    <>
      <Layout>
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
                <div className="flex flex-col border-b-2 border-slate-600">
                  <div className={`border-2 border-slate-400 rounded mb-5 flex flex-row`}>
                    <input type="text" placeholder="Cari Transaksi mu ..." className="m-1 pl-2 outline-none basis-10/12">
                    </input>
                    <div className="basis-2/12 grid place-content-center bg-slate-200">
                      <button>
                        <span><FaMagnifyingGlass/></span>
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-scroll py-5">
                  <div className={`flex flex-row gap-3 w-max`}>
                    <div className="w-7 border border-slate-600 rounded-md px-2 shadow-md">
                      <button>X</button>
                    </div>
                    <div className="w-40 border border-slate-600 rounded-md px-2 shadow-md flex flex-row">
                      <div className="basis-11/12">Semua Status</div>
                      <div className="basis-1/12 grid place-content-center"><FaChevronDown/></div>
                    </div>
                    <div className="w-40 border border-slate-600 rounded-md px-2 shadow-md flex flex-row">
                      <div className="basis-11/12">Semua Produk</div>
                      <div className="basis-1/12 grid place-content-center"><FaChevronDown/></div>
                    </div>
                    <div className="w-40 border border-slate-600 rounded-md px-2 shadow-md flex flex-row">
                      <div className="basis-11/12">Semua Tanggal</div>
                      <div className="basis-1/12 grid place-content-center"><FaChevronDown/></div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="overflow-y-scroll">
                  <div>
                    content
                  </div>
                </div>
              </div>
            </section>
        </Layout>
    </>
  )
}
