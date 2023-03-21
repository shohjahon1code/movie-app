import React from 'react'

const MemebershipPlan = () => {
  return (
    <div className='accountpage'>
      <div className='space-y-2 py-2'>
        <h4 className='text-lg text-[gray]'>Membership and Billing</h4>
        <button className='h-10 w-3/5 whitespace-nowrap py-2 text-sm font-medium text-black shadow-md bg-red-600 hover:bg-[#e10856] md:w-4/5 transition-all'>Cancel memebership</button>
      </div>
      <div className='col-span-3 '>
        <div className='flex flex-col justify-between border-b border-white/10 py-4 md:flex-row'>
          <div>
            <p className='font-medium '>Soh@gmail.com</p>
            <p className='text-[gray]'>Password: *****</p>
          </div>
          <div className='md:text-right'>
            <p className='membershipLink'>Change email</p>
            <p className='membershipLink'>Change password</p>
          </div>
        </div>
      <div className='flex flex-col justify-between pt-4 pb-4 md:flex-row md;pb-0'>
        <div>
          <p>
            Your membership will end 14 mar 2023
          </p>
        </div>
        <div className='md:text-right '>
          <p className='membershipLink'>Manage payment info</p>
          <p className='membershipLink'>Add backup payment method</p>
          <p className='membershipLink'>Billing detail</p>
          <p className='membershipLink'>Change billing day</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MemebershipPlan
