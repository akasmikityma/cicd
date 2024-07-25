//put ,delete for a specific id dish

import { NextApiRequest,NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/app/db"


export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    try{
        const {id} =params
        
        // return NextResponse.json({
        //     msg:`this is the id :${id}`
        // })
        const dishFound=await prisma.dish.findUnique({
            where:{
                id:Number(id)
            }
        })
        return NextResponse.json({
            dishFound
        })
    }catch(err){
        console.log(err)
    }
}
export async function PUT(req:NextRequest,{params}:{params:{id:string}}){
    try{
        //basically update with  the new details 
       const {id}=params;
       const {name,price,available,quantity,desc}=await req.json();
        const dishUpdated=await prisma.dish.update({
            where:{
                id:Number(id)
            },
            data:{
                name,price,available,quantity,desc
            }
        })
       if(dishUpdated){
        return NextResponse.json({
            msg:`the dish with ${id} is updated`,
            dishNow:dishUpdated
        })
       }else{
        return NextResponse.json({
            msg:`the dish with ${id} is unable to be updated`
        }) 
       }
    }catch(err){
        console.log(err)
    }
}