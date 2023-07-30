import Cart from './cart'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cart',
}

export default function Page() {
  return (
    <Cart />
  )
}
