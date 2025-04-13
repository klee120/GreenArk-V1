'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ProductType } from '@/type/ProductType'
import Product from '../Product'
import 'swiper/css/bundle';
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'

interface Props {
    data: Array<ProductType>
    productId: string | number | null
}

const Default: React.FC<Props> = ({ data, productId }) => {
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist()
    const { openModalWishlist } = useModalWishlistContext()
    const { addToCompare, removeFromCompare, compareState } = useCompare();
    const { openModalCompare } = useModalCompareContext()
    let productMain = data.find(product => product.id === productId) as ProductType
    if (productMain === undefined) {
        productMain = data[0]
    }

    // const handleAddToCart = () => {
    //     if (!cartState.cartArray.find(item => item.id === productMain.id)) {
    //         addToCart({ ...productMain });
    //         updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
    //     } else {
    //         updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
    //     }
    //     openModalCart()
    // };

    // const handleAddToWishlist = () => {
    //     // if product existed in wishlit, remove from wishlist and set state to false
    //     if (wishlistState.wishlistArray.some(item => item.id === productMain.id)) {
    //         removeFromWishlist(productMain.id);
    //     } else {
    //         // else, add to wishlist and set state to true
    //         addToWishlist(productMain);
    //     }
    //     openModalWishlist();
    // };

    // const handleAddToCompare = () => {
    //     // if product existed in wishlit, remove from wishlist and set state to false
    //     if (compareState.compareArray.length < 3) {
    //         if (compareState.compareArray.some(item => item.id === productMain.id)) {
    //             removeFromCompare(productMain.id);
    //         } else {
    //             // else, add to wishlist and set state to true
    //             addToCompare(productMain);
    //         }
    //     } else {
    //         alert('Compare up to 3 products')
    //     }

    //     openModalCompare();
    // };


    return (
        <>
            <div className="product-detail default">
            <div className="featured-product underwear md:py-20 py-10">
            <div className="container">
                {/* Title aligned to the left */}
                <div className="mb-10">
                    <div className="caption2 text-secondary font-semibold uppercase">{productMain.category}</div>
                    <div className="heading4 mt-1">{productMain.name}</div>
                    <div className="flex items-center pb-6 border-b border-line"/>
                </div>

                {/* Image and table/info side by side */}
                <div className="flex flex-wrap md:flex-nowrap gap-y-6 justify-between">
                    {/* Image on the left */}
                    <div className="list-img md:w-2/5 w-full md:pr-[45px]">
                        <Image
                            src={productMain.images}
                            width={1000}
                            height={1000}
                            alt='prd-img'
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Table and description on the right */}
                    <div className="product-info md:w-3/5 w-full lg:pl-[15px] md:pl-2">
                        {/* Description */}
                        {productMain.description !== "" && (
                            <div className="desc text-secondary mb-6">
                                {productMain.description}
                            </div>
                        )}

                        {/* Specifications Table */}
                        <div className="spec-chart w-full">
                            <div className="text-title mb-3">Specifications</div>
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="text-sm">
                                    <tr className="bg-gray-200 text-center">
                                        <th className="p-2 border border-gray-300 w-32">Item Code</th>
                                        <th className="p-2 border border-gray-300">Description</th>
                                        <th className="p-2 border border-gray-300 w-32">Packaging</th>
                                        <th className="p-2 border border-gray-300 w-20">Sold By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productMain.variation.map((item, index) => (
                                        <tr key={index} className="border border-gray-300">
                                            <td className="p-2 border border-gray-300">{item.itemCode}</td>
                                            <td className="p-2 border border-gray-300">{item.itemName}</td>
                                            <td className="p-2 border border-gray-300">{item.packaging}</td>
                                            <td className="p-2 border border-gray-300">{item.soldBy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Brand (optional) */}
                        {productMain.brand !== "" && (
                            <div className="more-infor mt-6 flex items-center gap-1">
                                <div className="text-title">Brand:</div>
                                <div className="text-secondary">{productMain.brand}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
                <div className="related-product md:py-20 py-10">
                    <div className="container">
                        <div className="heading3 text-center">Related Products</div>
                        <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
                            {data.slice(Number(productId), Number(productId) + 4).map((item, index) => (
                                <Product key={index} data={item} type='grid' />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Default