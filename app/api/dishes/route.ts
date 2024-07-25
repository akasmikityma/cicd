import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options'; // Adjust the path according to your project structure
import prisma from '@/app/db';

export async function GET() {
    const session = await getServerSession(authOptions);
  
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.log(session.user)
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
  
      return NextResponse.json(dishes, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error fetching dishes' }, { status: 500 });
    }
  }
  

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userEmail = session.user.email;
  const { name, desc,price,available,quantity} = await req.json();

  try {
    const user = await prisma.cook.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const newDish = await prisma.dish.create({
      data: {
        name,
        desc,
        cookid: user.id,
        price,
        available,quantity
      },
    });

    return NextResponse.json(newDish, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating dish' }, { status: 500 });
  }
}
