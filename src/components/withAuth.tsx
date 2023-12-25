"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function withAuth(Component: any) {
    return function WithAuth(props: any) {
        const session = useSession();
        
        useEffect(() => {
            if(!session.data) {
                redirect("/")
            }   
        }, [])

        if(!session) {
            return null;
        }

        return <Component {...props} />
    }
}