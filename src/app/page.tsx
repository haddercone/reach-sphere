import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";


const Home = async () => {
  const session : any = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex items-center justify-between gap-4 m-2">
      <div>Home</div>
      {session ? (
        <div className="flex items-center justify-center gap-4">
          <p>{session?.user?.name}</p>
          <img
            className="w-12 h-12 rounded-full"
            src={session?.user?.image}
          />
          <Link href="api/auth/signout">LogOut</Link>
        </div>
      ) : (
        <div>
          <Link href="api/auth/signin">Login </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
