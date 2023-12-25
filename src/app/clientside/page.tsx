"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const ClientSide = () => {
    
    const session = useSession();
    useEffect( () => {
        if(!session.data) {
            redirect("/")
        }
    }, [])

    return (
        <div>This page is a client side protected route</div>
    )
}

export default ClientSide;