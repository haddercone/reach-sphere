
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from 'next';
import Twitter from "twitter-lite";


export async function GET(req: NextApiRequest, res: NextApiResponse) {

    const token = await getToken({
      req, 
      secret: process.env.NEXTAUTH_SECRET
    })
    
    if(token === null) {
      return NextResponse.json({message: "Unauthorised"})
    }
    console.log(token);
    
    const client = new Twitter({
      consumer_key: process.env.API_KEY as string, 
      consumer_secret: process.env.API_KEY_SECRET as string, 
      access_token_key: token.accessToken as string,
      access_token_secret: token.refreshToken as string,
    });

    try {
      const result = await client.get()
      console.log(result);
      
      return NextResponse.json({data: result})
    } catch (error) {
      return NextResponse.json({error: error})
    }
}

export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({
        data
    })
}
