import React, { useContext, useState } from 'react'
import { PlanCardProps } from './plan-card.props'
import { FcVip } from 'react-icons/fc'
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { AuthContext } from '@/context/auth.context'

const PlanCard = ({ product }: PlanCardProps) => {
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState<boolean>(false)

  const onSubscriptionSubmit = async (priceId: string) => {
    setLoading(true)
    const payload = { email: user?.email, priceId }
    try {
      const response = await fetch("api/subscription", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      window.open(data.subscription.url)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-[#e10856]">{product.name}</h3>
      <div className="relative">
        {/* eslint-disable-next-line */}
        <img
          src={product.images[0]}
          alt="img"
          className="w-full rounded-lg"
        />
        <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tr-lg">
          {(product.default_price.unit_amount / 100).toLocaleString('en-Us', { style: 'currency', currency: 'USD' })}
        </p>
        <div className="absolute w-full h-full top-0 right-0 left-0 bg-black/20" />
      </div>
      <div className="border-[1px] border-white/20 mt-4" />
      <button onClick={() => onSubscriptionSubmit(product.default_price.id)} className="mt-4 w-full py-4 rounded hover:opacity-80 bg-[#e10856]">{loading ? 'Loading...' : 'BUY PLAN'}</button>
      <div className="my-4 flex flex-col space-y-2">
        {product.metadata.adv.split(", ").map((c, id) => (
          <div key={id} className="flex space-x-4">
            {id === 0 && <FcVip className="w-7 h-7" />}
            {id === 1 && <AiOutlineHourglass className="w-7 h-7" />}
            {id === 2 && <AiOutlineVideoCameraAdd className="w-7 h-7" />}
            <p>{c}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanCard
