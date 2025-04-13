// 'use client'

// import React, { useState, useEffect } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation';
// import MenuOne from '@/components/Header/Menu/MenuOne'
// import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
// import productData from '@/data/Product.json'
// import Footer from '@/components/Footer/Footer'

// export default function BreadCrumb1() {
//     const searchParams = useSearchParams()
//     let [type, setType] = useState<string | null | undefined>()
//     let [brand, setBrand] = useState<string | null | undefined>()
//     let datatype = searchParams.get('type')
//     let dataBrand = searchParams.get('brand')

//     useEffect(() => {
//         setType(datatype);
//     }, [datatype]);

//     useEffect(() => {
//         setBrand(dataBrand);
//     }, [dataBrand]);
    

//     return (
//         <>
//             <div id="header" className='relative w-full'>
//                 <MenuOne props="bg-transparent" />
//             </div>
//             <ShopBreadCrumb1 data={productData} productPerPage={9} dataType={type} dataBrand={brand}/>
//             <Footer />      
//         </>
//     )
// }

'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

function BreadCrumb1Content() {
    const searchParams = useSearchParams()
    const [type, setType] = useState<string | null | undefined>()
    const [brand, setBrand] = useState<string | null | undefined>()

    const dataType = searchParams.get('type')
    const dataBrand = searchParams.get('brand')

    // useEffect(() => {
    //     setType(datatype);
    // }, [datatype]);

    // useEffect(() => {
    //     setBrand(dataBrand);
    // }, [dataBrand]);

    useEffect(() => {
        setType(dataType);
        setBrand(dataBrand);
    }, [dataType, dataBrand]);
    
    
    return (
        <>
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>
            <ShopBreadCrumb1 
                data={productData} 
                productPerPage={9} 
                dataType={type} 
                dataBrand={brand}
            />
            <Footer />      
        </>
    )
}

export default function BreadCrumb1() {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
                <div className="text-lg font-semibold text-gray-500">Loading products...</div>
            </div>
        }>
            <BreadCrumb1Content />
        </Suspense>
    )
}

