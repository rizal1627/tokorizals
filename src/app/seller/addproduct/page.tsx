import Addproduct from './addproduct';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Add Product',
}

export default function Page() {
  return (
    <Addproduct/>
  )
}