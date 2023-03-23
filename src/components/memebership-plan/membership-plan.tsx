import React, { useState } from 'react'
import { MemebershipPlanProps } from './membership-plan.props'
import moment from 'moment'

const MemebershipPlan = ({ subscription }: MemebershipPlanProps) => {
  const [loading, setLoading] = useState(false)
  const openPortal = async () => {
    setLoading(true)
    const payload = { user_id: subscription.customer.metadata.user_id }
    const response = await fetch('api/subscription/manage', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    window.open(data.portal)
    setLoading(false)
  }

  console.log(subscription)
  return (
    <div className='accountpage'>
      <div className='space-y-2 py-2'>
        <h4 className='text-lg text-[gray]'>Membership and Billing</h4>
        <button onClick={openPortal} className='h-10 w-3/5 whitespace-nowrap py-2 text-sm font-medium text-black shadow-md bg-red-600 hover:bg-[#e10856] md:w-4/5 transition-all'>{loading ? 'Loading...' : 'Cancel memebership'}</button>
      </div>
      <div className='col-span-3 '>
        <div className='flex flex-col justify-between border-b border-white/10 py-4 md:flex-row'>
          <div>
            <p className='font-medium '>{subscription.customer.email}</p>
            <p className='text-[gray]'>Password: *****</p>
          </div>
          <div className='md:text-right'>
            <p className='membershipLink'>Change email</p>
            <p className='membershipLink'>Change password</p>
          </div>
        </div>
        <div className='flex flex-col justify-between pt-4 pb-4 md:flex-row md;pb-0'>
          <div>
            <p className='space-x-2 mb-2'>
              <span className='p-1 bg-white/20 rounded uppercase'>{subscription.default_payment_method.card.brand}</span>{' '}
              **** **** **** {subscription.default_payment_method.card.last4}
            </p>
            <p>
              Your next billing date is  {moment(subscription.current_period_end * 1000).format('DD MMM YYYY')}
            </p>
          </div>
          <div className='md:text-right '>
            {loading ? 'Loading...' : (
              <>
                <p onClick={openPortal} className='membershipLink'>Manage payment info</p>
                <p onClick={openPortal} className='membershipLink'>Add backup payment method</p>
                <p onClick={openPortal} className='membershipLink'>Billing detail</p>
                <p onClick={openPortal} className='membershipLink'>Change billing day</p>
              </>

            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemebershipPlan
