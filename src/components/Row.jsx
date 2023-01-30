import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie'

const Row = ({title, fetchURL, rowID}) => {
  const [movies,setMovie] = useState([])


  useEffect(()=>{
    axios.get(fetchURL).then((response) => {
        setMovie(response.data.results)
    })
  }, [fetchURL])
  

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID) 
    slider.scrollLeft = slider.scroll - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollRight = slider.scroll + 500;
  }

    return (
    <>
       <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1> 
       <div className='flex relative items-center group'>
        <MdChevronLeft onClick={slideLeft}
        className='rounded-full bg-white absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block ' size={30}/>
        <div id={'slider' + rowID} className='w-full h-full scroll-smooth scrollbar-hide relative whitespace-nowrap'>
            {movies.map((item, id) => {
                <Movie key={id} item={item}/>

            })}

        </div>
        <MdChevronRight onClick={slideRight}
        className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block ' size={30}/>
       </div>
    </>
  )
}

export default Row