"use client"

import React, { useState } from 'react';
import axios from 'axios'; 
import { useRouter } from 'next/navigation';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/api/users', {
        name,
        email,
        password
      });
      alert(response.statusText);
      const userID=response.data.cookid;
      localStorage.setItem('cookid',userID)
      router.push('/');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-500'>
      <div className='flex-col items-center flex bg-white/30 p-6 gap-4 shadow-xl'>
        <div className='gap-1 flex flex-col'>
          <span>Name</span>
          <input
            type="text"
            placeholder='bishal maity'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='p-2 rounded-md'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <span>Email</span>
          <input
            type="email"
            placeholder='bishalmaity@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 rounded-md'
          />
        </div>
        <div className='gap-1 flex flex-col'>
          <span>Password</span>
          <input
            type="password"
            placeholder='akasmik'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 rounded-md'
          />
        </div>
        <button onClick={handleSignUp} className='p-2 rounded-md bg-blue-500 text-white'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Page;
