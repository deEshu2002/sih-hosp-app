import React,{useState} from "react";


export default function AdmissionKind() {
 
  const [checkboxItem1, setcheckboxItem1] = useState(false);
  const [checkboxItem2, setcheckboxItem2] = useState(false);

  
  
  return (

    <fieldset>
      <legend className="sr-only">Admission Kind</legend>

      <div className="flex items-center mb-4">
        <input
          id="checkbox-1"
          aria-describedby="checkbox-1"
          type={"checkbox"}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e)=>setcheckboxItem1(e.target.checked)}
        />
        <label
          htmlFor="checkbox-1"
          className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        > Routine Admission
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="checkbox-2"
          aria-describedby="checkbox-2"
          type={"checkbox"}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e)=>setcheckboxItem2(e.target.checked)}
        />
        <label
          htmlFor="checkbox-2"
          className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
         Transfer In    
    </label>
      </div>
    </fieldset>
  );
}
