import React from 'react'
import { EightFigFooterLogo, EightFigLogo, FacebookIcon, InstaIcon, LinkedInIcon, TwitterIcon } from './common/Icons'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='pt-[53px] pb-[62px] max-md:pb-8 bg-[#0E1122]'>
            <div className="container">
                <div className='flex justify-between items-center max-md:hidden'>
                    <div className='flex justify-between gap-16'>
                        <EightFigFooterLogo />
                        <p className='tracking-tighter-[8%] text-sm font-medium font-poppins text-[#76767F] max-w-40'>8fig, 1717 W 6th St, Austin, Texas</p>
                    </div>
                    <div>
                        <p className='text-[#76767F] font-medium font-poppins tracking-tighter-[8%] text-sm flex items-center gap-2'><span className='text-[23px]'>©</span> {year} 8fig - All Rights Reserved</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <a href="https://facebook.com" target='_blank'><FacebookIcon /></a>
                        <a href="https://instagram.com" target='_blank'><InstaIcon /></a>
                        <a href="https://linkedin.com" target='_blank'><LinkedInIcon /></a>
                        <a href="https://x.com" target='_blank'><TwitterIcon /></a>
                    </div>
                </div>
                <div className='md:hidden'>
                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col'>
                            <EightFigFooterLogo />
                            <p className='tracking-tighter-[8%] text-xs font-medium font-poppins text-[#76767F] max-w-36 pt-[14px] uppercase'>8fig, 1717 W 6th St, Austin, Texas</p>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <a href="https://facebook.com" target='_blank' className="facebook-icon"><FacebookIcon /></a>
                            <a href="https://instagram.com" target='_blank' className="insta-icon"><InstaIcon /></a>
                            <a href="https://linkedin.com" target='_blank' className="linkedin-icon"><LinkedInIcon /></a>
                            <a href="https://x.com" target='_blank' className="twitter-icon"><TwitterIcon /></a>
                        </div>
                    </div>
                    <div className='pt-16'>
                        <p className='text-[#76767F] font-medium font-poppins tracking-tighter-[8%] text-sm flex items-center gap-2 justify-center uppercase'><span className='text-[23px]'>©</span> {year} 8fig - All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
