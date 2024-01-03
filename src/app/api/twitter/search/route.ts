
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import type { NextApiRequest, NextApiResponse } from 'next';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (!session) {
        return NextResponse.json({msg: "You must be logged in"})
    }
    return NextResponse.json({msg: "hello from protected route"})
  } catch (error) {
    console.error('Error fetching session:', error);
  }
}

// export async function GET() { 
  
//     const session = await getServerSession(authOptions);
//     console.log(session);
//     if(!session){
//         return NextResponse.json({msg: "You must be logged in"})
//     }
//     return NextResponse.json({msg: "hello from protected route"})

//   }


export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({
        data
    })
}
