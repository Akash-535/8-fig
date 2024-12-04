import React from 'react'
import { EightFigLogo } from './common/Icons'
import GroupImg from '../assets/images/webp/hero-group-img.webp'
import GroupImgResponsive from '../assets/images/webp/hero-img-responsive.webp'
const Hero = () => {
    return (
        <div className='bg-hero-bg bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center relative overflow-hidden'>
            <div className='absolute top-6 left-6'>
                <a href="#"><EightFigLogo /></a>
            </div>
            <div className="max-w-[1140px] w-full mx-auto max-xl:container">
                <div className='flex max-md:flex-col-reverse max-md:justify-center max-md:gap-14'>
                    <div className='w-8/12 max-md:w-full justify-center max-md:flex flex-col max-md:max-w-[318px] max-md:mx-auto'>
                        <h2 className='text-[62px] max-lg:text-6xl max-md:text-5xl font-bold leading-[106%] text-white max-w-[478px] max-md:mx-auto max-md:max-w-[335px]'>Get AI funding for your store</h2>
                        <p className='text-[22px] max-lg:text-xl max-md:text-lg max-md:mx-auto font-medium leading-[136%] text-white font-poppins max-w-[408px] py-6 max-md:py-3 max-md:max-w-[335px]'>AI technology that predicts, plans, and protects your cash flow.</p>
                        <button className='py-2.5 px-11 bg-[#4C57FF] text-white text-base font-medium rounded-3xl leading-[150%] text-center font-poppins border border-transparent  max-md:text-sm max-md:max-w-[129px] max-md:py-[9px] max-md:px-6 hover:text-[#4C57FF] hover:bg-white hover:border-[#4C57FF] duration-300 ease-linear'>Get funded</button>
                    </div>
                    <div className='flex justify-end w-4/12 max-md:w-full'>
                        <img className='w-full max-w-[327px] max-md:hidden' src={GroupImg} alt="hero img" />
                        <img className='w-full md:hidden translate-x-36 max-w-[303px]' src={GroupImgResponsive} alt="hero img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
