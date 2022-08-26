import React from 'react'

const ProfitLoss = () => {
    return (
        <>
            <div className='flex flex-col gap-3 flex-wrap'>
                <div className='flex justify-between'>
                    <h2 className='font-prosansbold text-2xl'>Profit and loss</h2>
                    <span className='rounded-xl border-2 transitionall px-2 dark-shadows'>1-6 months</span>
                </div>
                <p className='text-md'>income and expenses on</p>
                <div className='mt-4 rounded-xl transition-all w-full h-[230px] bg-black light-shadows'>
                </div>
            </div>
        </>
    )
}

export default ProfitLoss