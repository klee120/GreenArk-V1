'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const MainLand = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
                <div className="slider-main h-full w-full overflow-hidden">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative dots-white overflow-hidden'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="container w-full h-full">
                                    <div className="text-content w-full h-full flex flex-col items-center justify-center">
                                        <div className="text-sub-display text-white text-center">GreenArk Supply</div>
                                        <div className="text-display text-white text-center font-bold md:mt-5 mt-2">Sustainable Packaging. <br />Flavorful Possibilities.</div>
                                        <Link href='/products' className="button-main bg-white text-black hover:bg-black hover:text-white md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                    <Image
                                        src={'/images/site/LANDING PAGE.png'}
                                        width={1000}
                                        height={1000}
                                        alt='outerwear'
                                        priority={true}
                                        className='w-full object-cover'
                                    />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default MainLand