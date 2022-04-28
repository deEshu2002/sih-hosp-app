import React from 'react'

export default function MedQuery() {
  return (
    <div className='mt-14 mx-4'>
        <div className="relative overflow-x-auto  max-w-fit max-h-[550px]">
        <table className=" text-xs text-left text-gray-500 ">
          <thead className="text-xm text-primary_text font-extrabold bg-primary_bg">
            <tr>
              <th scope="col" className="px-6 py-2">
                Location
              </th>
              <th scope="col" className="px-6 py-2 ">
                Requirement Specified
              </th>
              <th scope="col" className="px-6 py-2 ">
                Date
              </th>
              <th scope="col" className="px-6 py-2 ">
                Time
              </th>
              <th scope="col" className="px-6 py-2 ">
                Run Search
              </th>
              <th scope="col" className="px-6 py-2 ">
                Response
              </th>
            </tr>
          </thead>
          <tbody className="relative overflow-y-scroll">
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Shayam Park
              </th>
              <td className="px-6 py-2">Amlovas 2.5</td>
              <td className="px-6 py-4">31/03/2022</td>
              <td className="px-6 py-2">06:30 PM</td>
              <td className="px-6 py-4 grid place-items-center">
              <button
                  className="bg-primary_text hover: text-white font-bold w-[66px] h-[27px] rounded shadow-md"
                
                >
                  Run
                </button>
              </td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Shayam Park
              </th>
              <td className="px-6 py-2">Novonorm 2.5</td>
              <td className="px-6 py-2">31/03/2022</td>
              <td className="px-6 py-2">10:10 AM</td>
              <td className="px-6 py-4 grid place-items-center">
              <button
                  className="bg-secondary_bg hover: text-gray-900 font-bold w-[66px] h-[27px] rounded shadow-inner"
                
                >
                  Found
                </button>
              </td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Shayam Park
              </th>
              <td className="px-6 py-2">Telma 80</td>
              <td className="px-6 py-2">25/03/2022</td>
              <td className="px-6 py-2">12:30 PM</td>
              <td className="px-6 py-4 grid place-items-center">
              <button
                  className="bg-secondary_bg hover: text-gray-900 font-bold w-[66px] h-[27px] rounded shadow-inner"
                
                >
                  N/A
                </button>
              </td>
              <td className="px-6 py-4"></td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
