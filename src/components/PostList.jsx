import React from 'react'
import logo from '../bolt.png'

const PostList = () => {
  return (
    <div>
        <div className='flex justify-between p-1 bg-[#F1F7ED] shadow-md'>
            <img src={logo} className='h-12 w-12 mx-3 my-1' alt="" />
            <button className='py-2 px-5 rounded-md bg-[#522BFF] m-2 text-white'>Create Post</button>
        </div>
        <div className='items-center justify-center text-center mx-auto'>
            <h3 className='text-[#2D0320] text-3xl py-5 font-semibold'>Write And Let Your Voice <br /> Be Heard.</h3>
            <form action="" className='bg-gray-100/80 border border-gray-300 shadow-md  text-left mx-auto w-[35rem] px-5 rounded-full py-2'>
                <input className='bg-transparent text-left text-[#522BFF] outline-none w-[32rem]' type="text" placeholder='Search By category...' name="" id="" />
            </form>
            
        </div>
    </div>
  )
}

export default PostList