

import { Metadata } from 'next'
import MNavbar from '../components/mobile/mnavbar'
import Avatar from '../components/avatar/avatar'
import Button from '../components/button/button'
import { title } from 'process'
import { useState } from 'react'
// import MobileNavbar from '../../../components/mobile/mobilenavbar/mnavbar'
 
export const metadata: Metadata = {
  title: 'test',
}


export default function Test() {
  return (
    <>
      {/* <Backbutton> */}
      {/* <MobileNavbar/> */}
      <Avatar/>
      <Button title='makan' color='red'>
        Send
      </Button>
    </>
  )
}
