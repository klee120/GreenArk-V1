'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType, AllBrands, AllCategories, OtherBrands } from '@/type/ProductType'
import Product from '../Product/Product';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import HandlePagination from '../Other/HandlePagination';

interface Props {
    data: Array<ProductType>
    productPerPage: number
    dataType: string | null | undefined
    dataBrand: string | null | undefined
}

const ShopBreadCrumb1: React.FC<Props> = ({ data, productPerPage, dataType, dataBrand }) => {
    const [sortOption, setSortOption] = useState('');
    const [type, setType] = useState<string | null | undefined>(dataType)
    const [brands, setBrands] = useState<string[]>(dataBrand ? [dataBrand] : []);
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = productPerPage;
    const offset = currentPage * productsPerPage;

    const handleSortChange = (option: string) => {
        setSortOption(option);
        setCurrentPage(0);
    };

    const handleType = (type: string | null) => {
        setType((prevType) => (prevType === type ? null : type))
        setCurrentPage(0);
    }

    const handleBrand = (item: string) => {
        if (brands.includes(item)) {
          setBrands(brands.filter((brand) => brand !== item));
        } else {
          setBrands([...brands, item]);
        }
      };
      
    useEffect(() => {
    if (dataBrand === 'other') {
        setBrands(OtherBrands);
    } else if (dataBrand) {
        setBrands([dataBrand]);
    } else {
        setBrands([]);
    }
    }, [dataBrand]);
      

    // Filter product
    let filteredData = data.filter(product => {
        let isDataTypeMatched = true;
        if (dataType) {
            isDataTypeMatched = product.category === dataType
        }

        let isTypeMatched = true;
        if (type) {
            dataType = type
            isTypeMatched = product.category === type;
        }

        let isBrandMatched = true;
        if (brands.length > 0) {
            isBrandMatched = brands.includes(product.brand);
        }          

        return isTypeMatched && isDataTypeMatched && isBrandMatched
    })


    // Create a copy array filtered to sort
    // TODO DELETE THIS I THINK
    let sortedData = [...filteredData];

    const totalProducts = filteredData.length
    const selectedType = type
    // const selectedBrand = brand


    if (filteredData.length === 0) {
        filteredData = [{
            id: 'no-data',
            category: 'no-data',
            name: 'no-data',
            brand: 'no-data',
            variation: [],
            images: 'no-data',
            description: 'no-data',
        }];
    }


    // Find page number base on filteredData
    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    // Get product data for current page
    let currentProducts: ProductType[];

    if (filteredData.length > 0) {
        currentProducts = filteredData.slice(offset, offset + productsPerPage);
    } else {
        currentProducts = []
    }

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    const handleClearAll = () => {
        dataType = null
        setSortOption('');
        setType(null);
        setBrands([]);
        setCurrentPage(0);
        handleType(null)
    };

    return (
        <>
            <div className="breadcrumb-block style-img">
                <div className="breadcrumb-main bg-linear overflow-hidden">
                    <div className="container lg:pt-[134px] pt-24 pb-10 relative">
                        <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
                            <div className="text-content">
                                <div className="heading2 text-center">{dataType === null ? 'Products' : dataType}</div>
                                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                                    <Link href={'/'}>Homepage</Link>
                                    <Icon.CaretRight size={14} className='text-secondary2' />
                                    <div className='text-secondary2 capitalize'>{dataType === null ? 'Products' : dataType}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
                <div className="container">
                    <div className="flex max-md:flex-wrap max-md:flex-col-reverse gap-y-8">
                        <div className="sidebar lg:w-1/4 md:w-1/3 w-full md:pr-12">
                            <div className="filter-type pb-8 border-b border-line">
                                <div className="heading6">Product Type</div>
                                <div className="list-type mt-4">
                                    {AllCategories.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`item flex items-center justify-between cursor-pointer ${dataType === item ? 'active' : ''}`}
                                            onClick={() => handleType(item)}
                                        >
                                            <div className='text-secondary has-line-before hover:text-black capitalize'>{item}</div>
                                            <div className='text-secondary2'>
                                                ({data.filter(dataItem => dataItem.category === AllCategories[idx]).length})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="filter-brand mt-8">
                                <div className="heading6">Brand</div>
                                <div className="list-brand mt-4">
                                    {AllBrands.map((item, index) => (
                                        <div key={index} className="brand-item flex items-center justify-between">
                                            <div className="left flex items-center cursor-pointer">
                                                <div className="block-input">
                                                    <input
                                                        type="checkbox"
                                                        name={item}
                                                        id={item}
                                                        checked={brands.includes(item)}
                                                        onChange={() => handleBrand(item)} />
                                                    <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                                                </div>
                                                <label htmlFor={item} className="brand-name capitalize pl-2 cursor-pointer">{item}</label>
                                            </div>
                                            <div className='text-secondary2'>
                                                ({data.filter(dataItem => dataItem.brand === item).length})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="list-product-block lg:w-3/4 md:w-2/3 w-full md:pl-3">

                            <div className="list-filtered flex items-center gap-3 mt-4">
                                <div className="total-product">
                                    {totalProducts}
                                    <span className='text-secondary pl-1'>Products Found</span>
                                </div>
                                {
                                    (selectedType || brands.length > 0) && (
                                        <>
                                            <div className="list flex items-center gap-3">
                                                <div className='w-px h-4 bg-line'></div>
                                                {selectedType && (
                                                    <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setType(null) }}>
                                                        <Icon.X className='cursor-pointer' />
                                                        <span>{selectedType}</span>
                                                    </div>
                                                )}
                                                <div className="flex flex-wrap gap-2 items-center">
                                                {brands.map((brand) => (
                                                    <div
                                                    key={brand}
                                                    className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize"
                                                    onClick={() => setBrands(brands.filter((b) => b !== brand))}
                                                    >
                                                    <Icon.X className="cursor-pointer" />
                                                    <span>{brand}</span>
                                                    </div>
                                                ))}

                                                <div
                                                    className={`clear-btn flex items-center px-2 py-1 gap-1 rounded-full border cursor-pointer ${
                                                    'border-red'
                                                    }`}
                                                    onClick={handleClearAll}
                                                >
                                                    <Icon.X
                                                    color={'rgb(219, 68, 68)'}
                                                    className="cursor-pointer"
                                                    />
                                                    <span
                                                    className={`text-button-uppercase ${'text-red'
                                                    }`}
                                                    >
                                                    Clear All
                                                    </span>
                                                </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>

                            <div className="list-product hide-product-sold grid lg:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7">
                                {currentProducts.map((item) => (
                                    item.id === 'no-data' ? (
                                        <div key={item.id} className="no-data-product">No products match the selected criteria.</div>
                                    ) : (
                                        <Product key={item.id} data={item} type='grid' />
                                    )
                                ))}
                            </div>

                            {pageCount > 1 && (
                                <div className="list-pagination flex items-center md:mt-10 mt-7">
                                    <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ShopBreadCrumb1