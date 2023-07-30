import Products from './product'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Products',
}

export default function Page() {
  return (
    <Products />
  )
}
