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




const ProfitLoss = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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

      const data = {
        labels,
        datasets: [
            {
                label: 'Inflow',
                data: [100, 200, 300, 100, 500, 200, 100],
                borderColor: 'rgb(10,240,0)',
                backgroundColor: 'rgba(10,240,0)',
            },
            {
                label: 'Outflow',
                data: [200, 400, 500, 300, 300, 250, 130],
                borderColor: 'rgb(128,0,128)',
                backgroundColor: 'rgb(128,0,128)',
            },
        ]
    }
    
    return (
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
                            <Line options = {options} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfitLoss