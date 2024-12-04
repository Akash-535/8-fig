import React from 'react'
import amazon from '../assets/images/svg/amazon.svg'
import shopify from '../assets/images/svg/shopify.svg'
import ebay from '../assets/images/svg/ebay.svg'
import bigCommerce from '../assets/images/svg/big-commerce.svg'
const Platforms = () => {
    return (
        <div className='pt-[46px] pb-[54px] max-md:py-[60px] bg-[#0E1122] flex justify-center items-center'>
            <div className='flex gap-[52px] items-center justify-center max-md:flex-col'>
                <div>
                    <p className='text-sm font-medium tracking-tighter-[8%] text-white font-poppins text-center'>MAIN SUPPORTED PLATFORMS</p>
                </div>
                <div className='flex gap-[52px] max-md:ga-[70px] items-center justify-center max-md:flex-wrap'>
                    <a href="https://amazon.com" target='_blank'><img className='max-md:w-[88px]' src={amazon} alt="amazon" /></a>
                    <a href="https://shopify.com" target='_blank'><img className='max-md:w-[134px]' src={shopify} alt="amazon" /></a>
                    <a href="https://ebay.com" target='_blank'><img className='max-md:w-[73px]' src={ebay} alt="amazon" /></a>
                    <a href="https://bigcommerce.com" target='_blank'><img className='max-md:w-[101px]' src={bigCommerce} alt="amazon" /></a>
                </div>
            </div>
        </div>
    )
}

export default Platforms
