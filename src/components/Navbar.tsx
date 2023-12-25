import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between items-center  bg-gray-900 text-white p-4">
      <ul className="flex items-center justify-center gap-6">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/clientside">
          <li>Client Side</li>
        </Link>
        <Link href="/clientsidehoc">
          <li>Client Side HOC</li>
        </Link>
        <Link href="/serverside">
          <li>Server Side</li>
        </Link>
        <Link href="/middlewareside">
          <li>Middleware Side</li>
        </Link>
      </ul>
      <div>
        {session ? (
          <div className="flex items-center justify-center gap-4">
            <p>{session?.user?.name}</p>
            <img
              className="w-12 h-12 rounded-full"
              src={session?.user?.image as string}
            />
            <Link href="api/auth/signout">LogOut</Link>
          </div>
        ) : (
          <div>
            <Link href="api/auth/signin">Login </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
