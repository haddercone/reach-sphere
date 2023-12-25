"use client";
import withAuth from "@/components/withAuth";
const ClientSideHOC = () => {
  return (
    <div>This page is protected by client side HOC..</div>
  )
}

export default withAuth(ClientSideHOC);