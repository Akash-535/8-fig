import React, { useState } from 'react';
import { ACCORDION_DATA } from './common/Helper';
import { MinusLogo, PlusLogo } from './common/Icons';

const
    Accordion = () => {
        const [open, setOpen] = useState(null);

        const toggleAccordion = (index) => {
            setOpen(open === index ? null : index);
        };

        return (
            <div className='bg-[#EFECE6] pt-[70px] pb-[60px]'>
                <div className="container">
                    <div className='text-center pb-6 max-md:pb-0'>
                        <p className='text-[#76767F] font-medium text-sm'>STILL HAVE QUESTIONS?</p>
                        <h2 className='text-[39px] font-medium pt-5 max-md:text-[28px]'>Learn more with FAQ</h2>
                    </div>
                    <div className="max-w-[1240px] mx-auto pt-[60px] max-md:pt-10">
                        {ACCORDION_DATA.map((obj, i) => (
                            <div key={i} className="mb-4 border-b border-[#DDDDDF] pb-2">
                                <button
                                    onClick={() => toggleAccordion(i)}
                                    className="w-full py-2 flex justify-between items-center font-medium text-lg font-poppins text-start"
                                >
                                    {obj.question}
                                    <span
                                        className={`transform ${open === i ? 'rotate-180' : 'rotate-0'
                                            } duration-300 ease-linear`}
                                    >
                                        {open === i ? <MinusLogo /> : <PlusLogo />}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-700 ease-linear font-normal ${open === i ? 'max-h-[200px]' : 'max-h-0'
                                        }`}
                                >
                                    <p className={`overflow-hidden transition-[max-height] duration-700 ease-linear font-normal text-sm font-poppins ${open === i ? 'max-h-[200px]' : 'max-h-0'
                                        }`}>
                                        {obj.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        );
    };

export default
    Accordion;
