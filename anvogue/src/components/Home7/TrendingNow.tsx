'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css/bundle';
import { AllCategories, CategoryImagePaths } from '@/type/ProductType'

const TrendingNow = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/products?type=${type}`);
    };

    return (
        <>
            <div className="trending-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Category
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 7,
                                    spaceBetween: 20,
                                },
                            }}
                            className='h-full'
                        >
                            {AllCategories.map((category) => (
                            <SwiperSlide key={category}>
                                <div 
                                className="trending-item block relative cursor-pointer" 
                                onClick={() => handleTypeClick(category)}
                                >
                                <div className="bg-img rounded-full overflow-hidden">
                                    <Image
                                    src={CategoryImagePaths[category] || `/images/category/${category}.png`}
                                    width={1000}
                                    height={1000}
                                    alt={category}
                                    priority={true}
                                    className="w-full"
                                    />
                                </div>
                                <div className="trending-name text-center mt-5 duration-500">
                                    <span className="heading6">{category}</span>
                                </div>
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingNow