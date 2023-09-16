

import { Metadata } from 'next'
import MNavbar from '../components/mobile/mnavbar'
// import MobileNavbar from '../../../components/mobile/mobilenavbar/mnavbar'
 
export const metadata: Metadata = {
  title: 'test',
}


export default function Test() {
  return (
    <>
      {/* <Backbutton> */}
      {/* <MobileNavbar/> */}
      <MNavbar/>
    </>
  )
}
