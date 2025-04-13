// 'use client'
// import React, { useState } from 'react'
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link'
// import TopNavOne from '@/components/Header/TopNav/TopNavOne'
// import MenuOne from '@/components/Header/Menu/MenuOne'
// import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
// import Default from '@/components/Product/Detail/Default';
// import Footer from '@/components/Footer/Footer'
// import { ProductType } from '@/type/ProductType'
// import productData from '@/data/Product.json'

// const ProductDefault = () => {
//     const searchParams = useSearchParams()
//     let productId = searchParams.get('id')

//     if (productId === null) {
//         productId = '1'
//     }
//     const productName = productData.find(product => product.id === productId)?.name ?? '';

//     return (
//         <>
//             <div id="header" className='relative w-full'>
//                 <MenuOne props="bg-white" />
//                 <BreadcrumbProduct data={productData} productPage={productName} productId={productId} />
//             </div>
//             <Default data={productData} productId={productId} />
//             <Footer />
//         </>
//     )
// }

// export default ProductDefault


'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Default from '@/components/Product/Detail/Default';
import Footer from '@/components/Footer/Footer'
import { ProductType } from '@/type/ProductType'
import productData from '@/data/Product.json'

const ProductDefaultContent = () => {
    const searchParams = useSearchParams();
    let productId = searchParams.get('id');

    if (productId === null) {
        productId = '1'
    }
    const productName = productData.find(product => product.id === productId)?.name ?? '';

    return (
        <>
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
                <BreadcrumbProduct data={productData} productPage={productName} productId={productId} />
            </div>
            <Default data={productData} productId={productId} />
            <Footer />
        </>
    )
}

const ProductDefault = () => {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
                <div className="text-lg font-semibold text-gray-500">Loading product details...</div>
            </div>
        }>
            <ProductDefaultContent />
        </Suspense>
    );
}

export default ProductDefault
