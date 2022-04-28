import React from 'react'
import JoinNav from './SharingComponents/JoinNav';
import BottomLine from './SharingComponents/BottomLine';
import Form from './JoinForm/Form';


export default function JoinForm() {

  return (
    <div className='grid grid-row-2 content-between h-screen bg-primary_bg overflow-auto'>
      <div className=" flex flex-col"> 
        <div className="sticky top-0">
          <JoinNav bg="bg-white py-4 shadow-sm"/>
        </div>
        <div className="h-full bg-primary_bg">
            <Form/>
        </div>
      </div>
      <div className="py-4 bg-primary_bg">
           <BottomLine/>
      </div>
    </div>
  )
}
