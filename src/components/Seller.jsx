import React from 'react'
import sellerImg from '../assets/images/webp/ai-funding-img.webp'
const Seller = () => {
    return (
        <div className='py-12 flex items-center justify-center max-md:pt-14 max-md:pb-[90px]'>
            <div className="container">
                <div className='flex justify-between items-center max-md:flex-col max-md:gap-11'>
                    <div className='max-w-[401px] max-md:mx-auto max-md:text-center max-md:max-w-[284px]'>
                        <p className='text-[39px] max-md:text-[28px] font-semibold pb-5 max-md:pb-3'>Become an 8 figure seller with AI funding</p>
                        <button className='py-2.5 px-11 bg-[#4C57FF] text-white text-base font-medium rounded-3xl leading-[150%] text-center font-poppins border border-transparent max-md:max-w-[129px] max-md:py-[9px] max-md:text-sm max-md:px-6 hover:text-[#4C57FF] hover:bg-white hover:border-[#4C57FF] duration-300 ease-linear'>Apply now</button>
                    </div>
                    <div>
                        <img className='max-w-[440px] w-full' src={sellerImg} alt="seller img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seller
