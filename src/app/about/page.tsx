'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home6/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

const AboutUs = () => {
    return (
        <>
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='About Us' subHeading='About Us' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Sustainable Packaging. Flavorful Possibilities.</div>
                                <div className="body1 text-center md:mt-5 mt-5">At GreenArk Supply, we believe sustainability should be as refreshing as the drinks you serve. We specialize in eco-friendly packaging solutions for cafes, restaurants, and boba shops — offering compostable cups, lids, straws, food containers, and more.</div>
                                <div className="body1 text-center md:mt-5 mt-5">Our mission is simple: deliver high-quality, earth-conscious products that help you craft unforgettable flavors while protecting the planet. With GreenArk, your possibilities are as endless as they are sustainable.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="right">
                            <div className="item">
                                <div className="heading4">Our Store</div>
                                <p className="mt-1">Address: <span className='whitespace'>23663 Foley Street, Hayward, CA, USA</span></p>
                                <p className="mt-1">Phone: <span className='whitespace-nowrap'>(510) 475-1116</span></p>
                                <p className="mt-1">Email: <span className='whitespace-nowrap'>michael@egpak.com, isaac@egpak.com</span></p>
                            </div>
                            <div className="item mt-10">
                                <div className="heading4">Open Hours</div>
                                <p className="mt-3">Mon - Fri: <span className='whitespace-nowrap'>9:00am - 5:00pm PST</span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Instagram /> */}
            <Brand />
            <Footer />
        </>
    )
}

export default AboutUs