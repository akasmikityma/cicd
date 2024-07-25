

import React,{useEffect, useState} from 'react'
import Appbar from './components/Appbar'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/options'

import prisma from './db'
const getDishes=async()=>{
  const session = await getServerSession(authOptions);
  
    if (!session) {
      console.log(`there is no session`)
      return 
    }
    const userEmail = session.user.email;
  
    try {
      const dishes = await prisma.dish.findMany({
        where: {
          Cook: {
            email: userEmail,
          },
        },select:{
            name:true,
            price:true,
            desc:true
        }
      });
   return dishes
    } catch (error) {
     console.log(error)
    }
}
const page = async() => {
  const dishes=await getDishes()
  return (
    <div>
      <Appbar/>
      
      <div>
        {dishes?(
          <div>
            {JSON.stringify(dishes)}
          </div>
        ):(
          <div>
            bara kono dish nei
          </div>
        )}
      </div>
    </div>
  )
}

export default page