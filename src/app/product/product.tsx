import Link from "next/link"
import Layout from "../../../components/layout"


export default function Product() {
  return (
    <>
        <Layout>
          <section>
            <div className="container min-h-screen min-w-full">
              <div className="font-semibold text-center">
                <h1>Product Page</h1>
              </div>
              <div className="category min-h-screen">
                <div className="py-5 font-semibold">
                <h3>Fashion</h3>
                </div>
                <div className="listprod pb-10">
                  <div className="border border-slate-300 w-72 h-96 p-3 rounded shadow-xl">
                    <div className="flex flex-col h-full">
                      <div className=" grid grid-rows-1 h-52">
                        <Link href={'./detailproduct'}><img src="" alt="image" /></Link>
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
                          <button className="btnatc border border-slate-500 rounded shadow px-3 h-10 w-full">Add Cart</button>
                        </div>
                        <div className="btnwishlit">
                        <button className="btnwishlit border border-slate-500 rounded shadow px-3 h-10 w-full">Add Wishlit</button>
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
