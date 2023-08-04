
import Orderlist from './orderlist'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Order List',
}

export default function Page() {
  return (
      <>
        <Orderlist />
      </>
  );
}