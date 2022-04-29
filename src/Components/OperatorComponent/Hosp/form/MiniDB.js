import React from "react";

export default function MiniDB() {
  return (
    <div className="flex flex-col px-4 mr-2 ">
      <div className="flex justify-start">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="entriesSearch"
            className="block mb-2 form-label  text-sm font-medium text-gray-700"
          >
            Search Patient Name
          </label>
          <input
            type="search"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="entriesSearch"
          />
        </div>
      </div>

      <div className="overflow-auto shadow-md max-h-[1200px] w-96">
        <div className="inline-block min-w-full align-middle dark:bg-gray-800">
          <div >
            <table className="min-w-full divide-y divide-gray-200  ">
                <tr className="sticky top-0 bg-slate-100">
                  <th
                    scope="col"
                    className="py-3 px-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    Patient ID
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    Patient Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    Contact Number
                  </th>
                  <th scope="col"
                   className="py-3 px-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    Status
                  </th>
                </tr>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap ">
                    19003301000
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap ">
                    Patient Singh Yadav
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap ">
                    8182809392
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap ">
                    In
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    20003301000
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    Patient Singh Rajput
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    9892828389
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    In
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    21003301000
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    Patient Singh Mehra
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    7828391283
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Out
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    21003301000
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    Patient Singh Kushwaha
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    7889382719
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Out
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    20003301000
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    Patient Singh Bisht
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    9999293931
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    In
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
