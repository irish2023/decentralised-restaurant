import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className='px-6 py-1 rounded-full text-brightcolor border-2 border-brightcolor
         bg-white hover:text-white hover:bg-brightcolor transition-all'>
            {title}
        </button>
    </div>
  )
}

export default Button