"use client"

import React from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const Page = () => {
  const [name,setName]=useState('')
  const [username,setusername]=useState('')
  const [password,setPassword]=useState('')
  const [regUser,setReguser]=useState(false);
  const router=useRouter();
  return (
    <div>
       {regUser? (
         <div>
         <input type="email" placeholder='bishalmaity90@gmail.com' className='border-4' value={username} onChange={(e)=>{
           setusername(e.target.value)
         }}/>
         <input type="password" placeholder='xxxxx' value={password} className='border-4' onChange={(e)=>{
           setPassword(e.target.value)
         }}/>
 
         <button onClick={async () => {
             const res = await signIn("credentials", {
                 username: username,
                 password: password,
                 redirect: false,
             });
             console.log(res);
             router.push("/")
         }}>Login</button>
         <button onClick={()=>setReguser(prev=>!prev)}>SignUP</button>
     </div>
       ):(
        <div className='flex flex-col justify-center items-center gap-4'>
          <input type="name" placeholder='john' value={name} className='border-4' onChange={(e)=>{
           setName(e.target.value)
         }}/>
         <input type="email" placeholder='bishalmaity90@gmail.com' className='border-4' value={username} onChange={(e)=>{
           setusername(e.target.value)
         }}/>
         <input type="password" placeholder='xxxxx' className='border-4' value={password} onChange={(e)=>{
           setPassword(e.target.value)
         }}/>
 
         <button onClick={async () => {
             const res = await signIn("credentials", {
                 name:name,
                 username: username,
                 password: password,
                 redirect: false,
             });
             console.log(res);
             router.push("/")
         }}>SignUp</button>
         <button onClick={()=>setReguser(prev=>!prev)}>signIn</button>
     </div>
       )}
    </div>
  )
}

export default Page