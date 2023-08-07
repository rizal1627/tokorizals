import Link from "next/link"
import Layout from "../../../components/layout"

import Image from 'next/image'
import prodpictelek from '../../assets/kamera.jpg'
import prodpictfash from '../../assets/headset.jpg'
import prodpictbuku from '../../assets/chip.jpg'
import styles from './product.module.css'
import { FaCartShopping, FaHeart } from "react-icons/fa6"
import Mnavbar from "../../../components/mobilenavbar/mnavbar"

export default function Product() {
  return (
    <>
        <Layout>
          <section>
            <Mnavbar/>
            <div className="container min-h-screen min-w-full">
              <div className="font-semibold text-center">
                <h1>Product Page</h1>
              </div>
              <div className="flex lg:flex-col md:flex-col xsm:flex-col">
                <div className="category1">
                  <div className="py-5 font-semibold">
                  <h3>Elektronik</h3>
                  </div>
                  <div className="listprod pb-10">
                    <div className="border border-slate-300 w-72 h-96 p-2 rounded shadow-lg">
                      <div className="flex flex-col h-full">
                        <div className=" grid grid-rows-1 h-52">
                          <Link href={'./detailproduct'}>
                          <Image
                            src={prodpictelek}
                            alt="Picture of the author"
                            className={styles.imageproduct}
                          />
                          </Link>
                        </div>
                        <div className="infoprod grid grid-rows-3 h-20 py-2">
                          <Link href={"./detailproduct"}>
                            <div className="bestseller">badge best-seller</div>
                            <div className="prodprice"> Rp. 20.000</div>
                            <div className="rating">Rating Seller</div>
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 content-center gap-1 py-2">
                            <div className="btn-atc">
                              <button className="btnatc border border-slate-500 rounded shadow-lg px-2 h-10 w-full flex items-center justify-center gap-1">
                                <span><FaCartShopping/></span>
                                <span className="text-sm">Add To Cart</span>
                              </button>
                            </div>
                            <div className="btnwishlit">
                            <button className="btnwishlit border border-slate-500 rounded shadow-lg px-2 h-10 w-full flex items-center justify-center gap-1">
                                <span><FaHeart/></span>
                                <span className="text-sm">Add To Wishlit</span>
                            </button>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category2">
                  <div className="py-5 font-semibold">
                    <h3>Fashion</h3>
                  </div>
                  <div className="listprod pb-10">
                      <div className="border border-slate-300 w-72 h-96 p-2 rounded shadow-lg">
                        <div className="flex flex-col h-full">
                          <div className=" grid grid-rows-1 h-52">
                            <Link href={'./detailproduct'}>
                            <Image
                              src={prodpictfash}
                              alt="Picture of the author"
                              className={styles.imageproduct}
                            />
                            </Link>
                          </div>
                          <div className="infoprod grid grid-rows-3 h-20 py-2">
                            <Link href={"./detailproduct"}>
                              <div className="bestseller">badge best-seller</div>
                              <div className="prodprice"> Rp. 20.000</div>
                              <div className="rating">Rating Seller</div>
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 content-center gap-1 py-2">
                            <div className="btn-atc">
                              <button className="btnatc border border-slate-500 rounded shadow-lg px-2 h-10 w-full flex items-center justify-center gap-1">
                                <span><FaCartShopping/></span>
                                <span className="text-sm">Add To Cart</span>
                              </button>
                            </div>
                            <div className="btnwishlit">
                            <button className="btnwishlit border border-slate-500 rounded shadow-lg px-2 h-10 w-full flex items-center justify-center gap-1">
                                <span><FaHeart/></span>
                                <span className="text-sm">Add To Wishlit</span>
                            </button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="category3">
                  <div className="py-5 font-semibold">
                    <h3>Buku Baca</h3>
                  </div>
                  <div className="listprod pb-10">
                      <div className="border border-slate-300 w-72 h-96 p-2 rounded shadow-lg">
                        <div className="flex flex-col h-full">
                          <div className=" grid grid-rows-1 h-52">
                            <Link href={'./detailproduct'}>
                            <Image
                              src={prodpictbuku}
                              alt="Picture of the author"
                              className={styles.imageproduct}
                            />
                            </Link>
                          </div>
                          <div className="infoprod grid grid-rows-3 h-20 py-2">
                            <Link href={"./detailproduct"}>
                              <div className="bestseller">badge best-seller</div>
                              <div className="prodprice"> Rp. 20.000</div>
                              <div className="rating">Rating Seller</div>
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 content-center gap-1 py-2">
                            <div className="btn-atc">
                              <button className="btnatc border border-slate-500 rounded shadow-lg px-2 h-10 w-full flex items-center justify-center gap-1">
                                <span><FaCartShopping/></span>
                                <span className="text-sm">Add To Cart</span>
                              </button>
                            </div>
                            <div className="btnwishlit">
                            <button className="btnwishlit border border-slate-500 rounded shadow-lg px-2 h-10 w-full flex items-center justify-center gap-1">
                                <span><FaHeart/></span>
                                <span className="text-sm">Add To Wishlit</span>
                            </button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
    </>
  )
}
