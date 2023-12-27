'use client'

import Layout from "../../../components/layout"
import styles from './cart.module.css'
import { FaCircleArrowLeft, FaHeart, FaBars } from "react-icons/fa6"

import Link from 'next/link'
import Mnavbar from "../components/mobile/mnavbar"
import Bottomnav from "../../../components/bottomnav/bottomnav"
import { useState } from 'react'
// import Button from "../components/button/button"


export default function Cart() {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    if(count <= 0) {
      alert('minimal 1 item')
    } else {
      setCount((c) => c - 1);
    }
  };
  return (
    <>
        <Layout>
            <Mnavbar/>
            <section>
              <div className="min-h-screen min-w-full container top-0 xsm:pt-20 lg:pt-2">
                <div className="lg:container">Keranjang Belanja</div>
                <div className="flex flex-row gap-5 ">
                  <div className="border border-slate-900 rounded p-2">
                  <button onClick={increment}>Tambah</button>
                  </div>
                    
                  <div className="font-bold flex justify-center items-center">
                  <span>Total Belanja : {count}</span>
                  </div>
                  <div className="border border-slate-900 rounded p-2">
                  <button onClick={decrement}>Kurang</button>
                  </div>
                </div>
              </div>
            </section>
            <Bottomnav/>
        </Layout>
    </>
  )
}
