
import About from './about'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About',
}

export default function Page() {
  return (
      <>
        <About />
      </>
  );
}