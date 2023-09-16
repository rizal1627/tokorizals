import { Metadata } from 'next'
import Navbar from '../../../components/navbar/navbar'
import Mnavbar from '../../../components/mobile/mobilenavbar/mnavbar'
import styles from './seller.module.css'
import Layout from '../../../components/layout'
 
export const metadata: Metadata = {
  title: 'Products',
}

export default function Page() {
  return (
    <>
        <main>
          <Layout>
            <Mnavbar/>
            <div className="shopPage flex flex-col min-h-screen min-w-full xsm:container md:container lg:container">
              <div className={`${styles.shopInfo}`}>
                <div className="border rounded shadow-md w-full h-32">
                  <h1>Rizal Toko</h1>
                </div>
              </div>
              <div className={`${styles.shopTabList} flex flex-row gap-3 my-5 p-5 h-20 rounded shadow-md items-center font-bold text-neutral-500`}>
                <div className="productTab">
                  <a href="#">Product</a>
                </div>
                <div className="ulasanTab">
                  <a href="#">Ulasan</a>
                </div>
              </div>
              <div className={`${styles.shopDataProduct} flex flex-row`}>
                <aside className='basis-2/12'>
                  <div className='rounded-md shadow-md h-52 p-5'>
                    <h4>Etalase</h4>
                  </div>
                </aside>
                <div className={`${styles.allProduct} basis-10/12 flex flex-col pl-5`}>
                  <div className={`${styles.filterProduct} flex  items-center justify-end h-14 gap-5 px-10`}>
                    <div className='items-center flex font-bold text-neutral-700'>
                      <h4>Urutkan</h4>
                    </div>
                    <div className="drpdwnfilter border rounded-md shadow-md w-32 h-10 items-center justify-center flex">Terbaru</div>
                  </div>
                  <div className='text-lg items-center flex font-bold text-neutral-700 h-14'>
                    <h1>Semua Product</h1>
                  </div>
                  <div className="dataProduct">
                    <div className="emptyProduct flex flex-row gap-10 items-center">
                      <div className="imgEmptyProd font-bold text-neutral-700">
                        <div>
                          <h1>Toko Anda Belum Memiliki Produk</h1>
                        </div>
                      </div>
                      <div className="addProduct bg-lime-300 text-neutral-700 rounded shadow-md h-10 p-2">
                        <button>
                          <a href="/seller/addproduct">Tambah Produk</a>
                        </button>
                      </div>
                    </div>
                    <div className="product">Product</div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </main>
    </>
  )
}
