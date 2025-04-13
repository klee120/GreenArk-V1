'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function BreadCrumb1() {
    const searchParams = useSearchParams()
    let [type, setType] = useState<string | null | undefined>()
    let [brand, setBrand] = useState<string | null | undefined>()
    let datatype = searchParams.get('type')
    let dataBrand = searchParams.get('brand')

    useEffect(() => {
        setType(datatype);
    }, [datatype]);

    useEffect(() => {
        setBrand(dataBrand);
    }, [dataBrand]);
    

    return (
        <>
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>
            <ShopBreadCrumb1 data={productData} productPerPage={9} dataType={type} dataBrand={brand}/>
            <Footer />      
        </>
    )
}
