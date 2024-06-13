import React from 'react'
import DishesCard from '../layouts/DishesCard'
import ima8 from '../assets/ima8.jpg'
import ima1 from '../assets/ima1.jpg'
import ima2 from '../assets/ima2.jpg'
import ima9 from '../assets/ima9.jpg'
import ima6 from '../assets/ima6.jpg'
import ima5 from '../assets/ima5.jpg'
import ima7 from '../assets/ima7.jpg'

const Dishes = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5'>
            <h1 className='text-4xl font-semibold text-center pt-24 pb-10'> Our Dishes</h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                <DishesCard ima={ima8} title='Tasty Dish' price='#2200' />
                <DishesCard ima={ima2} title='Tasty Dish' price='#1800' />
                <DishesCard ima={ima9} title='Tasty Dish' price='#2000' />
                <DishesCard ima={ima6} title='Tasty Dish' price='#1500' />
                <DishesCard ima={ima5} title='Tasty Dish' price='#1500' />
                <DishesCard ima={ima7} title='Tasty Dish' price='#2500' />
                
            </div>
        </div>
    )
}

export default Dishes