import React from 'react';
import revenueImg from '../assets/images/webp/ai-evaluation-img.webp';
import RevenueBlurImg from '../assets/images/webp/revenue-forecasting.webp';

const Revenue = () => {
    return (
        <div className="bg-[#EFECE6] py-[120px] max-md:py-14">
            <div className="container mx-auto px-4">
                <div className="flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10">
                    <div className="w-full lg:w-6/12">
                        <div className="relative">
                            <img
                                className="max-w-[480px] w-full mx-auto"
                                src={revenueImg}
                                alt="evaluation"
                            />
                            <img
                                className="max-w-[218px] w-full absolute top-1/4 -left-16 lg:-left-24 max-lg:-top-10 max-lg:max-w-[175px] max-lg:-left-2"
                                src={RevenueBlurImg}
                                alt="Revenue forecasting"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 max-lg:flex flex-col max-lg:items-center justify-center max-lg:text-center max-lg:pb-10">
                        <p className="size-9 px-3 text-[28px] bg-[#0E1122] rounded-full text-white">
                            1
                        </p>
                        <h2 className="text-[39px] max-lg:text-[28px] max-lg:mx-auto font-medium leading-[115%] pt-[14px] max-w-[364px] max-lg:max-w-[306px]">
                            Get an AI evaluation of your supply chain needs
                        </h2>
                        <p className='text-[22px] font-medium max-w-[333px] font-poppins pt-1 leading-[136%] pb-6 max-lg:text-lg max-lg:mx-auto max-lg:max-w-[306px] max-lg:pb-3'>By analyzing your sales velocity and growth potential.</p>
                        <button className='py-1.5 mt-2 px-5 bg-[#4C57FF] text-white text-xs font-medium rounded-3xl leading-[150%] text-center font-poppins border border-transparent max-md:max-w-[129px] max-md:py-[9px] max-md:px-6 hover:text-[#4C57FF] hover:bg-white hover:border-[#4C57FF] duration-300 ease-linear'>Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Revenue;
