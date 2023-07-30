import Wishlits from "./wishlits"
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  return (
    <Wishlits />
  )
}
