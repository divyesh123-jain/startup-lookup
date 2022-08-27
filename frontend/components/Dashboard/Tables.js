import { data } from 'autoprefixer'
import React from 'react'

const Tables = ({data}) => {
  return (
    data &&
    <div className='flex-[1] flex flex-col'>
      <h2 className='text-2xl font-prosansbold'>
        Net income
      </h2>

      <div className='mt-4 flex-[1]'>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Metrics
                </th>
                <th scope="col" className="py-3 px-6">
                  Observation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Average Revenue
                </th>
                <td className="py-4 px-6">{data?.startup?.AvgRev}</td>
                

              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Revenue Against Goal
                </th>
                <td className="py-4 px-6">{data?.startup?.RevAgainstGoal} %</td>
 

              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Customers
                </th>
                <td className="py-4 px-6">{data?.startup?.Users} </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Tables