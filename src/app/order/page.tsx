'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import { useState } from 'react';
import { AllCategories } from '@/type/ProductType'
import productData from '@/data/Product.json'

const Order = () => {
  const [customerInfo, setCustomerInfo] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [currentItem, setCurrentItem] = useState({
    category: '',
    product: '',
    variation: '',
    quantity: 1,
  });

  const [cart, setCart] = useState<{ category: string; product: string; variation: string; quantity: number }[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const fabformUrl = 'https://fabform.io/f/dVn1hrc';

  const categories = AllCategories;

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setCustomerInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target as HTMLInputElement | HTMLSelectElement;
  
    if (id === 'variation') {
      setCurrentItem((prev) => ({
        ...prev,
        [id]: value,
        quantity: 1, // Autofill quantity
      }));
    } else if (id === 'category') {
      setCurrentItem({
        category: value,
        product: '',
        variation: '',
        quantity: 1,
      });
    } else if (id === 'product') {
      // 🛒 Find product in products list
      const selectedProduct = products.find((p) => p.name === value);
  
      if (selectedProduct) {
        setCurrentItem((prev) => ({
          ...prev,
          category: selectedProduct.category, // <-- Auto-set category
          product: value,
          variation: '',
          quantity: 1,
        }));
      } else {
        setCurrentItem((prev) => ({
          ...prev,
          product: value,
          quantity: 1,
        }));
      }
    } else {
      setCurrentItem((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };
  

  const addToCart = () => {
    if (currentItem.category && currentItem.product && currentItem.variation && currentItem.quantity > 0) {
      setCart((prev) => [...prev, currentItem]);
      // Reset current item to select more
      setCurrentItem({
        category: '',
        product: '',
        variation: '',
        quantity: 1,
      });
    }
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...customerInfo,
      cart,
    };

    try {
      const response = await fetch(fabformUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setSubmitted(true);
        setCustomerInfo({ username: '', email: '', message: '' });
        setCart([]);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const products = productData;

  const filteredProducts = currentItem.category
  ? products.filter((p) => p.category === currentItem.category)
  : products; // Show all products if no category selected

  const selectedProduct = filteredProducts.find((p) => p.name === currentItem.product);

  return (
    <>
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading='Order Here' subHeading='Order Here' />
      </div>

      <div className='contact-us md:py-20 py-10'>
        <div className="container">
          <div className="flex justify-between max-lg:flex-col gap-x-10 gap-y-10">
            <div className="left lg:w-1/2 w-full">
              <div className="heading3">Add Items</div>
              <div className="body1 text-secondary2 mt-3">Select products and add them to your cart.</div>
              {/* Product Selection */}
              <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5 mt-6'>
                {/* Category */}
                <div className="border border-line rounded-lg px-4 py-3 w-full relative">
                    <select
                    id="category"
                    className="appearance-none w-full bg-transparent focus:outline-none"
                    required
                    value={currentItem.category}
                    onChange={handleItemChange}
                    >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                    ))}
                    </select>
                    {!currentItem.category && <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                        ▼
                    </div>}
                </div>
                {/* Product */}
                <div className="border border-line rounded-lg px-4 py-3 w-full relative">
                    <select
                    id="product"
                    className="appearance-none w-full bg-transparent focus:outline-none"
                    required
                    value={currentItem.product}
                    onChange={handleItemChange}
                    >
                    <option value="">Select Product</option>
                    {filteredProducts.map((product) => (
                    <option key={product.id} value={product.name}>
                        {product.name}
                    </option>
                    ))}
                    </select>
                    {!currentItem.product && <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                        ▼
                    </div>}
                </div>
                {/* Variation */}
                <div className="border border-line rounded-lg px-4 py-3 w-full relative">
                    <select
                    id="variation"
                    className="appearance-none w-full bg-transparent focus:outline-none"
                    required
                    value={currentItem.variation}
                    onChange={handleItemChange}
                    disabled={!currentItem.product}
                    >
                    <option value="">Select Item</option>
                    {selectedProduct?.variation.map((v) => (
                    <option key={v.itemCode} value={v.itemName}>
                        {v.itemName}
                    </option>
                    ))}
                    </select>
                    {!currentItem.variation && currentItem.product && <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                        ▼
                    </div>}
                </div>
                {/* Quantity */}
                <input
                id="quantity"
                className="border-line px-4 py-3 w-full rounded-lg"
                type="number"
                min="1"
                placeholder="Quantity"
                value={currentItem.quantity}
                onChange={handleItemChange}
                required
                />
            </div>

            <div className="block-button md:mt-6 mt-4">
            <button onClick={addToCart} className="button-main">Add to Cart</button>
            </div>
            </div>
            <div className="right lg:w-1/2 w-full">
            {/* Cart Display */}
              <div className="heading3">Your cart</div>

                {cart.length === 0 ? (
                    // 🛒 Empty Cart State
                    <div className="body1 text-secondary2 mt-3">Your cart is empty.</div>
                ) : (
                    // 🛒 Cart Items List
                    <ul className="space-y-2 mt-3">
                    {cart.map((item, index) => (
                        <li key={index} className="flex justify-between items-center border-b pb-2">
                        <div>
                            <div className="font-bold">{item.product}</div>
                            <div className="text-sm text-secondary2">{item.variation}</div>
                            <div className="text-sm">Quantity: {item.quantity}</div>
                        </div>
                        <button className="text-red-500" onClick={() => removeFromCart(index)}>
                            Remove
                        </button>
                        </li>
                    ))}
                    </ul>
                )}

              {submitted ? (
                <div className="text-center mt-10">
                  <h2 className="heading3 mb-4">Thank you!</h2>
                  <p className="body1 text-secondary2">We&#39;ve received your order and will be in touch soon.</p>
                </div>
              ) : (
                <form className="md:mt-6 mt-4" onSubmit={handleSubmit}>
                  {/* Customer Info */}
                  <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5'>
                    <input
                      className="border-line px-4 py-3 w-full rounded-lg"
                      id="username"
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={customerInfo.username}
                      onChange={handleCustomerChange}
                    />
                    <input
                      className="border-line px-4 py-3 w-full rounded-lg"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                      value={customerInfo.email}
                      onChange={handleCustomerChange}
                    />
                  </div>


                  {/* Additional Message */}
                  <textarea
                    id="message"
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg mt-6"
                    rows={3}
                    placeholder="Additional notes (optional)"
                    value={customerInfo.message}
                    onChange={handleCustomerChange}
                  />

                  {/* Final Submit */}
                  <div className="block-button md:mt-6 mt-4">
                    <button className="button-main">Submit Order</button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Order;

