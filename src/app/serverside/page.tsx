import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation"

const ServerSide = async  ({props} : any) => {
    const session = await getServerSession(authOptions);
    if(!session) {
        redirect("/")
    }
    return (
        <div>This is a serevr component</div>
    )
}

export default ServerSide;
