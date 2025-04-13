import React from 'react'
import Banner from '@/components/Home1/Banner'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import MainMenu from '@/components/Header/Menu/MainMenu'
import MainLand from '@/components/Slider/MainLand'
import TrendingNow from '@/components/Home7/TrendingNow'

export default function Home() {
  return (
    <>
    <div id="header" className='relative w-full'>
        <MainMenu props="bg-white" />
        <MainLand />
    </div>
    <TrendingNow />
    <Banner />
    <Instagram />
    <Brand />
    <Footer /></>
  )
}
