import React from "react";



const Recents = () => {
  return (
    <>
        <table className="w-full text-sm text-left text-gray-500">
            <tr className=" text-sm text-primary_text font-bold bg-primary_bg sticky top-0">
              <th scope="col" className="px-6 py-3">
                Patient Id
              </th>
              <th scope="col" className="px-6 py-3 ">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Date
              </th>
              <th scope="col" className="px-6 py-3 ">
                Time
              </th>
              <th scope="col" className="px-6 py-3 ">
                Room No.
              </th>
              <th scope="col" className="px-6 py-3 ">
                Contact No.
              </th>
              <th scope="col" className="px-6 py-3">
                Node
              </th>
            </tr>
          <tbody >
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                19003301101
              </th>
              <td className="px-6 py-4">Patient Singh</td>
              <td className="px-6 py-4">31/03/2022</td>
              <td className="px-6 py-4">06:30</td>
              <td className="px-6 py-4">DF-06</td>
              <td className="px-6 py-4">7882377787</td>
              <td className="px-6 py-4">Gate A</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                19003301080
              </th>
              <td className="px-6 py-4">Patient Mehra</td>
              <td className="px-6 py-4">31/03/2022</td>
              <td className="px-6 py-4">10:10</td>
              <td className="px-6 py-4">DS-04</td>
              <td className="px-6 py-4">6319120887</td>
              <td className="px-6 py-4">Gate A</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                19003301080
              </th>
              <td className="px-6 py-4">Patient Kumar</td>
              <td className="px-6 py-4">31/03/2022</td>
              <td className="px-6 py-4">09:30</td>
              <td className="px-6 py-4">DF-10</td>
              <td className="px-6 py-4">9989898882</td>
              <td className="px-6 py-4">Gate A</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                19003301080
              </th>
              <td className="px-6 py-4">Patient Kumar</td>
              <td className="px-6 py-4">31/03/2022</td>
              <td className="px-6 py-4">09:30</td>
              <td className="px-6 py-4">DF-10</td>
              <td className="px-6 py-4">9989898882</td>
              <td className="px-6 py-4">Gate A</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                19003301080
              </th>
              <td className="px-6 py-4">Patient Kumar</td>
              <td className="px-6 py-4">31/03/2022</td>
              <td className="px-6 py-4">09:30</td>
              <td className="px-6 py-4">DF-10</td>
              <td className="px-6 py-4">9989898882</td>
              <td className="px-6 py-4">Gate A</td>
            </tr>
          </tbody>
        </table>
    </>
  );
};
export default Recents;
