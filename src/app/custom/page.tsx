'use client'
import React, { useState } from 'react'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const Faqs = () => {
    const [activeQuestions, setActiveQuestions] = useState<string[]>([])

    const handleActiveQuestion = (question: string) => {
        setActiveQuestions(prevActive => 
            prevActive.includes(question)
                ? prevActive.filter(q => q !== question) 
                : [...prevActive, question] 
        )
    }

    return (
        <>
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Custom Orders' subHeading='Custom Orders' />
            </div>
            <div className='faqs-block md:py-20 py-10'>
                <div className="container">
                    <div className="text flex items-center justify-center">
                        <div className="content md:w-5/6 w-full">
                            <div className="heading3 text-center">Customizable Products</div>
                            <div className="body1 text-center md:mt-5 mt-3">Elevate your brand with our premium custom printing services.</div>
                            <div className="body1 text-center">Showcase your designs with precision and care on Karat and Karat Earth paper and plastic products.</div>
                            <div className="body1 text-center">We pay close attention to every detail to ensure your branding looks its absolute best.</div>
                        </div>
                    </div>
                    <div className="text flex items-center justify-center">
                        <div className="list-img grid sm:grid-cols-4 gap-[30px] pt-10">
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
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
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
                        </div>
                    </div>
                    <div className="text flex items-center justify-center">
                        <div className="content md:w-5/6 w-full mt-10">
                            <div className="heading3 text-center">FAQs</div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="right">
                            <div className="tab-question flex flex-col gap-5 active">
                                {[
                                    { id: '1', question: 'What are the benefits of custom printing?', answer: 'At LollicupStore, we strive to help your business succeed with our high-quality printing options. Our custom services with your logo establishes brand awareness and advertises a strong and consistent image which increases customer loyalty.' },
                                    { id: '2', question: 'What is the turnaround time for my custom prints?', answer: 'For optimal service, turnaround time ranges between 10 to 15 weeks after all approval to begin production.' },
                                    { id: '3', question: 'What types of products does LollicupStore print?', answer: 'We have a wide selection of products for you to choose from that is right for your business!  These include cups, paper food containers, napkins, food trays & buckets, deli wrap/paper liners, tissue roll wrappers, reusable non-woven PP shopping bags, and much more. To browse all our offerings, please download the Custom Print Guidelines and Karat 2025/2026 Product Catalog below.' },
                                    { id: '4', question: 'What are your custom printing artwork requirements? What if I do not have a logo file, but have an idea of what I want?', answer: 'Refer to our Custom Print Guidelines for software/file format requirements. If you do not have a file, we can provide you with in-house design services. Minimal design fees may be applicable.' },
                                    { id: '5', question: 'How can I request more information?', answer: 'Submit an order form with a message about your Custom printing inquiry and we will get back to you!' }
                                ].map(({ id, question, answer }) => (
                                    <div
                                        key={id}
                                        className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestions.includes(id) ? 'open' : ''}`}
                                        onClick={() => handleActiveQuestion(id)}
                                    >
                                        <div className="heading flex items-center justify-between gap-6">
                                            <div className="heading6">{question}</div>
                                            <Icon.CaretRight size={24} />
                                        </div>
                                        {activeQuestions.includes(id) && (
                                            <div className="content body1 text-secondary mt-3">{answer}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faqs
