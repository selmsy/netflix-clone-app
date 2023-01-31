import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [ signUp] = UserAuth()
    const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await signUp(email, password);
    
    navigate('/')
  } catch (error) {
    console.log(error);
    setError(error.message);
  }
}
  
  return (
    <div className='w-full h-screen'>

<img className='' src='' alt='' />
<div className='w-full h-screen bg-black fixed top-0 left-0'></div>
<div className='w-full fixed px-4 py-24'>
  <div className='bg-black mx-auto text-white'>
    <div className='mx-auto py-16 '>
      <h1 className='text-3xl font-bold'>Sign In</h1>
      {error ? <p className='bg-red'>{error}</p> : null}
      <form onSubmit={handleSubmit} className='w-full flex'>
        <input onChange={(e) => setEmail(e.target.value)} className='bg-gray rounded' type='email'
        placeholder='email' autoComplete='email' />
        <input onChange={(e) => setPassword(e.target.value)} className='bg-gray rounded' type='password' placeholder='Password' autoComplete='current-password' />
        <button className='bg-red py-3 rounded font-bold my-6'>Sign In</button>
        <div className='flex justify-between text-sm text-gray-600 items-center'>
          <p>
<input className='mr-2' type='checkbox'/>
Remember me</p>
          <p>Need help?</p>
        </div>
        <p className='py-8'>
        <span className='text-gray-600'>New to Netflix?</span>
        <Link to='/signup'>Sign Up</Link>
        </p>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login