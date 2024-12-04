import React from 'react'
import ratingImg from '../assets/images/svg/rating-logo.svg'
import trustPilot from '../assets/images/svg/trust-pilot.svg'

const Trust = () => {
    return (
        <div className='py-[87px] max-md:py-[52px] bg-[#0E1122] flex items-center justify-center'>
            <div className="container">
                <div className='flex gap-[104px] items-center justify-center flex-wrap max-md:gap-[64px]'>
                    <div className='flex flex-col items-center'>
                        <img src={ratingImg} alt="rating image" />
                        <p className='text-white pt-2.5 text-[50px] max-lg:text-4xl max-md:text-[31px] font-medium'>‘A’ Rating </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-white pt-2.5 text-[19px] font-normal font-poppins max-md:text-xs'>Average store growth</p>
                        <p className='text-white pt-2.5 text-[50px] font-medium max-lg:text-4xl max-md:text-[31px] '>400% </p>
                    </div>
                    <div className='flex gap-[104px] items-center justify-center max-md:flex-row-reverse flex-wrap max-md:gap-[64px]'>
                        <div className='flex flex-col items-center'>
                            <img src={trustPilot} alt="rating image" />
                            <p className='text-white pt-2.5 text-[50px] font-medium max-lg:text-4xl max-md:text-[31px] '>Excellent</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-white pt-2.5 text-[19px] font-normal font-poppins max-md:text-xs'>Funding given</p>
                            <p className='text-white pt-2.5 text-[50px] font-medium max-lg:text-4xl max-md:text-[31px] '>$450M+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust
