import Profile from './profile'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Profile',
}

export default function Page() {
  return (
    <Profile />
  )
}
