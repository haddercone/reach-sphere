import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";


const Home = async () => {
  const session : any = await getServerSession(authOptions);
  return (
    <div className="flex items-center justify-between gap-4 m-2">
      <div>Home</div>
    </div>
  );
};

export default Home;
