
import Blog from './blog'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blog',
}

export default function Page() {
  return (
      <>
        <Blog />
      </>
  );
}