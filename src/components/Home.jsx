import React from 'react'
import ima3 from '../assets/ima3.jpg'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 
    bg-[url('./assets/ima3.jpg')] bg-cover bg-no-repeat">
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-backgroundcolor font-semibold text-6xl'>
          Elevate Your inner Foodie with Every Bite.
        </h1>
        <p className='text-backgroundcolor'>
          Indulge in a symphony of a flavour, where each plate is a canvas for culinary excellence.
          Lorem ipsum dolor sit amet consequences adipose tissue of parlior. loficcial voluptatme
        </p>
        <div className='lg:pl-44'>
          <Button title='Order Now' />
        </div>

      </div>
    </div>
  )
}

export default Home
