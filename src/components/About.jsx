import React from 'react'
import ima1 from '../assets/ima1.jpg'
import Button from '../layouts/button'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-12'>
            <img src={ima1} alt="img" />
            <div className='space-y-4 lg:pt-14'>
                <h1 className='font-semibold text-4xl text-center md:text-start'> Why Choose Us</h1>
                <p>Indulge in a symphony of a flavour, where each plate is a canvas for culinary excellence.
                    Lorem ipsum dolor sit amet consequences adipose tissue of parlior. loficcial voluptatme</p>
                <p>Indulge in a symphony of a flavour, where each plate is a canvas for culinary excellence.
                    Lorem ipsum dolor sit amet consequences adipose tissue of parlior. loficcial voluptatme</p>
                <div className='flex justify-center lg:justify-start'>
                    <Button title='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default About