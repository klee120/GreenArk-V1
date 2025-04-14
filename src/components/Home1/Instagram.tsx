'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const Instagram = () => {
    return (
        <>
          <div className="instagram-block md:pt-20 pt-10">
            <div className="container">
                <div className="heading">
                <div className="heading3 text-center">GreenArk Supply On Instagram</div>
                <div className="text-center mt-3">#GreenArkSupply</div>
                </div>

                <div className="list-instagram md:mt-10 mt-6 flex justify-center gap-6 flex-wrap">
                <Link href="https://www.instagram.com/p/DIZq65cTIPe/" target="_blank" className="item relative block rounded-[32px] overflow-hidden w-[300px]">
                    <Image
                    src="/images/instagram/insta1.png"
                    width={300}
                    height={300}
                    alt="1"
                    className="h-full w-full duration-500 relative"
                    />
                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                    <div className="icon-instagram text-2xl text-black"></div>
                    </div>
                </Link>

                <Link href="https://www.instagram.com/p/DIZwkZJzCO1/" target="_blank" className="item relative block rounded-[32px] overflow-hidden w-[300px]">
                    <Image
                    src="/images/instagram/insta2.png"
                    width={300}
                    height={300}
                    alt="2"
                    className="h-full w-full duration-500 relative"
                    />
                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                    <div className="icon-instagram text-2xl text-black"></div>
                    </div>
                </Link>

                <Link href="https://www.instagram.com/p/DIZvgO5zWgX/" target="_blank" className="item relative block rounded-[32px] overflow-hidden w-[300px]">
                    <Image
                    src="/images/instagram/insta3.png"
                    width={300}
                    height={300}
                    alt="3"
                    className="h-full w-full duration-500 relative"
                    />
                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                    <div className="icon-instagram text-2xl text-black"></div>
                    </div>
                </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default Instagram