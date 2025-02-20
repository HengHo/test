"use client"

import React from 'react'
interface CardProps {
    name: string;
    title: string;
    description: string;
    image: string;
}
const Card: React.FC<CardProps>=({ name,title, description, image})=> {
  return (
    
        <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl'>
            <div className='h-96 w-72'>
                <img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={image} alt={title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-start justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h1 className='text-2xl font-bold text-white'>{name}</h1>
                <h1 className='text-white'>{title}</h1>
                <p className='text-white mb-3 text-lg italic opacity-0 transition-opacity duration-300 group-hover:opacity-100'>{description}</p>
            </div>
        </div>
    
  )
}
export default Card;