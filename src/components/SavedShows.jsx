import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight, MdOutlineViewSidebar } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot} from 'firebase/firestore'

const SavedShows = () => {
const {user} = UserAuth()
const [movies, setMovies] = useState([])

    const slideLeft = () => {
        var slider = document.getElementById('slider') 
        slider.scrollLeft = slider.scroll - 500;
      }
    
      const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollRight = slider.scroll + 500;
      }

      useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email])
    const movieRef = doc(db, 'users', `${user?.email}`)
        const deleteShow = async (passedID) => {
            try {
                const result = movies.filter((item) => item.id !== passedID)
                await updateDoc(movieRef, {
                    savedShows: result
                })
            } catch (error) {
                console.log(error)
            }
        }
        
      
      
  return (
    <>
<h2 className='text-white font-bold'>My Shows</h2>
<div className='flex relative items-center group'>
    <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded absolute opacity-0 hover:opacity-0 cursor-pointer
    z-10 hidden group=hover:block' size={30} />
    <div id={'slider'} className='w-full h-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {MdOutlineViewSidebar.map((item) => (
            <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs font-bold items-center h-full text-center justify-center flex md:text-sm'>
                {item?.title}
            </p>
            <p onClick={() => deleteShow(item.id)} className='absolute top-4 right-4 text-gray'><AiOutlineClose /></p>
            </div></div>
        )
        )}
    </div>
    <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full opacity-0 hover:opacity-0 absolute cursor-pointer hidden group-hover:block' size={30}/>

</div>
    </>
  )
}

export default SavedShows