import Seller from './seller';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Seller Home Page',
}

export default function Page() {
  return (
    <Seller/>
  )
}
