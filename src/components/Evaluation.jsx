import React from 'react'
import evaluationImg from '../assets/images/webp/ai-evaluation-img.webp'
import evaluationRevenueImg from '../assets/images/webp/revenue-forecasting.webp'

const Evaluation = () => {
    return (
        <div className='bg-[#EFECE6] py-[120px]'>
            <div className="container">
                <div className='flex'>
                    <div className='w-6/12'>
                        <div className='relative'>
                            <img className='max-w-[480px] w-full' src={evaluationImg} alt="evaluation" />
                            <img className='max-w-[218px] w-full absolute top-1/4 -left-24' src={evaluationRevenueImg} alt="evaluation revenue" />
                        </div>
                    </div>
                    <div className='w-6/12'>
                        <p className='px-3 text-[28px] bg-[#0E1122] size-9 rounded-full text-white'>1</p>
                        <h2 className='text-[39px] font-medium leading-[115%] pt-[14px] max-w-[364px]'>Get an AI evaluation of your supply  chain needs</h2>
                    </div>
                </div>
            </div>
        </div>
            )    
    }
export default Evaluation
