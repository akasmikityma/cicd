import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/db';
export async function GET(req: NextRequest) {
  try {
    //get all the users from the db and pass them >>
    const users=await prisma.cook.findMany({});
    if(users){
      return NextResponse.json({
        msg: "these are all the Users",
        cooks:users
      });
    }else{
      return NextResponse.json({
        msg: "for now there are no cooks"
      });
    }
    
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}

export async function POST(req: NextRequest) {
  try {
    return NextResponse.json({
      msg: "lets create another user"
    });
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
