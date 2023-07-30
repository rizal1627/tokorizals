import Bottomnav from "../bottomnav/bottomnav"



export default function Footer() {
    return (
      <>
          <div className=" bg-slate-900 h-40 w-full">
          <div className="text-slate-200 mx-20 py-5">
            <div className="grid grid-cols-2">
            <div className="">
            <h1>Toko Rizal</h1>
            </div>
            <div className="list-page">
              <div className="grid grid-cols-3 grid-rows-4">
              <a href="">1</a>
              <a href="">2</a>
              <a href="">3</a>
              <a href="">1.1</a>
              <a href="">2.1</a>
              <a href="">3.1</a>
              <a href="">1.2</a>
              <a href="">2.2</a>
              <a href="">3.2</a>
              </div>
            </div>
            </div>
          </div>
          <Bottomnav/>
          </div>
          
      </>
    )
  }
  