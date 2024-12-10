// import React from 'react'

import { Gauge, Notebook, Timer } from "lucide-react"

const CpatianDetails = () => {
  return (
    <div>
         <div className=" flex items-center justify-between">
          <div className="flex items-center justify-start gap-5">
            <img className="w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1707396172424-f3293f788364?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="">
              <h4 className="text-xl font-semibold">kunal Singh</h4>
              <p className="text-sm text-gray-600">Delhi</p>
            </div>
          </div>
          <div className="">
            <h4 className="text-xl font-bold">₹299</h4>
            <p className="font-medium text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex items-start gap-5 justify-between mt-10">
          <div className="text-center flex flex-col items-center">
            <Timer size={34} className="text-xl mb-2 font-extralight"/>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">hours online</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Gauge size={34} className="text-xl mb-2 font-extralight"/>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">hours online</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Notebook size={34} className="text-xl mb-2 font-extralight"/>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">hours online</p>
          </div>
        </div>
    </div>
  )
}

export default CpatianDetails