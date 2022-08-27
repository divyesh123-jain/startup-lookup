import React from 'react'

const Tables = () => {
  return (
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
                  Fiscal Year ?
                </th>
                <th scope="col" className="py-3 px-6">
                  2020
                </th>
                <th scope="col" className="py-3 px-6">
                  2021
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Income
                </th>
                <td className="py-4 px-6">12200</td>
                <td className="py-4 px-6">120000</td>

              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Expense
                </th>
                <td className="py-4 px-6">13402</td>
                <td className="py-4 px-6">134560</td>

              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Net Income
                </th>
                <td className="py-4 px-6">11323</td>
                <td className="py-4 px-6">123124</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Tables