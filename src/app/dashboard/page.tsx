import Homepage from './hompage'
import Eror from './erorr'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}


export default function Page() {
  return (
    <>
      <Homepage />
    </>
  )
}
