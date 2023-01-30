import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useState } from 'react'

const Movie = ({item}) => {
    const [like, setLike] = useState(false)
  return (

    <div className='w-[160px] lg:w=[280px] md:w-[240px] inline-block relative cursor-pointer p-2'>
                    <img className='w-full' src="{`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}" alt={item?.title} />
                    <div className='top-0 left-0 w-full h-full absolute hover:bg-black/80 opacity-0 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center'>{item?.title}</p>
                        <p>
                            {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : 
                            <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
                        </p>
                        </div>
                    
                    </div>
  )
}

export default Movie