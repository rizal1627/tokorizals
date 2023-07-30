import Homepage from './hompage'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}


export default function Page() {
  return (
    <Homepage />
  )
}
