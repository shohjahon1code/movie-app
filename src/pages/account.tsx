import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { MemebershipPlan } from '@/components'

const Account = () => {
  return (
    <>
      <Head>
        <title>Account page</title>
        <meta
          name="description"
          content="Sign in our website for watching free new movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <header className='flex justify-between'>
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link href={'/'}>
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={56}
              height={56}
              className="cursor-pointer object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">

          <Link href={"/account"}>
            <VscAccount className="h-6 w-6 cursor-pointer hover:bg-stone-500  rounded-full transition-all" />
          </Link>
        </div>
      </header>
      <main className='mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10'>
        <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
          <h2 className='text-3xl md:text-4xl '>Account</h2>
          <div className='-ml-1 flex gap-x-1.5 items-center '>
            <MdOutlineSubscriptions className='w-5 h-5 text-red-500' />
            <p className='text-md font-semibold text-[#555] '>Member since 20 February 2023</p>
          </div>
        </div>

        <MemebershipPlan />
        <div className='accountpage'>
          <h4 className='text-lg text-[gray]'>Plan Details</h4>
          <div className='col-span-2 font-medium'>Premium</div>
          <p className='cursor-pointer text-blue-500 hover:underline md:text-right'>Change plan</p>
        </div>
        <div className='accountpage'>
        <h4 className='text-lg text-[gray]'>Settings</h4>
        <p className='col-span-3 cursor-pointer text-blue-500 hover:underline'>Sign out all devices</p>
        </div>
      </main>
    </>
  )
}

export default Account
