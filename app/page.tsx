'use client'
import React, { useState } from 'react';
import { Button, Modal } from "antd"
import { CheckCircleOutlined, CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {BsShieldExclamation} from "react-icons/bs"
import {MdOutlineWorkspacePremium} from "react-icons/md"
import {BsRocketTakeoff} from "react-icons/bs"

const Home: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let displayMode = {opacity: 0, pointerEvents: "none" }
  if(isModalOpen){
    displayMode.opacity = 1,
    displayMode.pointerEvents = "auto"

  }else{
    displayMode.opacity = 0,
    displayMode.pointerEvents = "none"


  }
  console.log(isModalOpen)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
       <div className="m-auto">
        <Button className='bg-blue-300' type="primary" onClick={showModal}>
          open Modal
      </Button>
       </div>
       <div 
       style={displayMode}
       
       className={ 'absolute w-full min-h-screen transition ease-linear duration-300'}>
        <div className=' text-end p-5 absolute w-full top-0 z-10 '><CloseCircleOutlined className='w-8 text-gray-600 text-4xl' onClick={handleCancel} /></div>
        <div className='flex justify-center min-h-screen absolute w-full'>

        

      
       <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl m-auto px-2' >
          <div className='bg-white hover:shadow-lg p-6 rounded-lg border border-orange-500 transition ease-out duration-500'>
            <h2 className='font-bold text-2xl my-4 flex'><BsShieldExclamation  className='mr-2 w-8 h-8 text-orange-400 border-4 rounded-full p-1 border-orange-400'/> 
          <span>Basic</span>
 
            </h2>
            <ul>
              <li className='my-5 flex items-center text-gray-700 text-sm'><CheckOutlined className='bg-orange-100 text-orange-700 mr-4 rounded-full p-1' /> <span className='font-semibold my-5' >Ideal to Discover basic services. get started with basic package</span></li>
              <li className='my-5 items-center'><CheckOutlined className='bg-orange-100 text-orange-700 mr-4 rounded-full p-1' /><span className='text-sm font-medium my-5'>250 Leads</span></li>
              <li className='my-5 flex items-center'><CheckOutlined className='bg-orange-100 text-orange-700 mr-4 rounded-full p-1' /><span className='text-sm '>Monthly: $190/month ($0.76 per lead)</span> </li>
            </ul>

            <span className='block text-center font-bold text-2xl text-orange-500'>$2280</span>
            <p className='text-center text-sm my-3'>Annually: Save 15%</p>
            
            <Button className='bg-orange-100 text-orange-600 font-bold w-full hover:border hover:border-orange-400 hover:bg-white'  onClick={showModal}> Purchase  </Button>

                        
          </div>
          <div className='bg-white hover:shadow-md p-6 transition ease-out duration-500 rounded-lg border  border-purple-500'>
            <h2 className='font-bold text-2xl my-4 flex'><BsRocketTakeoff  className='mr-2 w-8 h-8 text-purple-400 border-4 rounded-full p-1 border-purple-400'/> 
          <span>Advanced</span>
 
            </h2>
            <ul>
              <li className='my-5 flex items-center text-gray-700 text-sm'><CheckOutlined className='bg-purple-100 text-purple-700 mr-4 rounded-full p-1' /> <span className='font-semibold my-5' >Ideal to Discover upgraded services. get started with basic package</span></li>
              <li className='my-5 items-center'><CheckOutlined className='bg-purple-100 text-purple-700 mr-4 rounded-full p-1' /><span className='text-sm font-medium my-5'>500 Leads</span></li>
              <li className='my-5 flex items-center'><CheckOutlined className='bg-purple-100 text-purple-700 mr-4 rounded-full p-1' /><span className='text-sm '>Monthly: $190/month ($0.76 per lead)</span> </li>
            </ul>

            <span className='block text-center font-bold text-2xl text-purple-500'>$3780</span>
            <p className='text-center text-sm my-3'>Annually: Save 15%</p>
            
            <Button className='bg-purple-100 text-purple-600 font-bold w-full hover:text-white hover:bg-white' onClick={showModal}> Purchase  </Button>

                        
          </div>
          <div className='bg-white hover:shadow-md transition ease-out duration-500 p-6 rounded-lg border border-teal-500'>
            <h2 className='font-bold text-2xl my-4 flex'><MdOutlineWorkspacePremium  className='mr-2 w-8 h-8 text-teal-400 border-4 rounded-full p-1 border-teal-400'/> 
          <span>Premium</span>
 
            </h2>
            <ul>
              <li className='my-5 flex items-center text-gray-700 text-sm'><CheckOutlined className='bg-teal-100 text-teal-700 mr-4 rounded-full p-1' /> <span className='font-semibold my-5' >Ideal to Discover Premium services. get started with basic package</span></li>
              <li className='my-5 items-center'><CheckOutlined className='bg-teal-100 text-teal-700 mr-4 rounded-full p-1' /><span className='text-sm font-medium my-5'>1000 Leads</span></li>
              <li className='my-5 flex items-center'><CheckOutlined className='bg-teal-100 text-teal-700 mr-4 rounded-full p-1' /><span className='text-sm '>Monthly: $190/month ($0.76 per lead)</span> </li>
            </ul>

            <span className='block text-center font-bold text-2xl text-teal-500'>$6630</span>
            <p className='text-center text-sm my-3'>Annually: Save 15%</p>
            
            <Button className='bg-teal-100 text-teal-600 font-bold w-full'  onClick={showModal}> Purchase  </Button>

                        
          </div>
          
       </div>
       </div>
       </div>
    </main>
  )
}
export default Home