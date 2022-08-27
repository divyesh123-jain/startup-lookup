import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




const ProfitLoss = ({data}) => {
    const labels = ['APR 21 - JUN 21','JUL 21 - SEP 21','OCT 21 - DEC 21','JAN 22 - MAR 22'];
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Inflow & Outflow chart',
          },
        },
      };

      const dataSets = {
        labels,
        datasets: [
            {
                label: 'Inflow',
                data: [
                    1000,5660,1100,4506,2140
                ],
                borderColor: 'rgb(10,240,0)',
                backgroundColor: 'rgba(10,240,0)',
            },
            {
                label: 'Outflow',
                data: [
                    1000,2000,4000,5000
                ],
                borderColor: 'rgb(128,0,128)',
                backgroundColor: 'rgb(128,0,128)',
            },
        ]
    }
    
    return (
        data&&
        <>
            <div className='flex flex-col gap-3 flex-[1]'>
                <div className='flex flex-col gap-3 flex-wrap'>
                    <div className='flex justify-between'>
                        <h2 className='font-prosansbold text-2xl'>Profit and loss</h2>
                        <span className='rounded-xl border-2 transitionall px-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.6)] text-[.7rem] flex justify-center items-center dark-shadows'>1<sup>st</sup>Apr 2021 - 31<sup>st</sup>March 2022</span>
                    </div>
                    <p className='text-md'>income and expenses on</p>
                    <div className='mt-4 p-4 rounded-xl transition-all w-full h-[230px] bg-black light-shadows'>
                        <div className='relative h-full w-full overflow-hidden'>
                            <Line options = {options} data={dataSets} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfitLoss