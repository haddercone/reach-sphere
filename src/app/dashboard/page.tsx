// import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import LogOutButton from '@/components/LogOutButton';

const DashBoard =async  () => {
  const session = await getServerSession(authOptions)
;
  if(!session) {
    redirect("/")
  }

  return (
    <>
      <p className='text-white'>Dashboard</p>
      <div className='text-white'>
        <LogOutButton/>
      </div>
    </>

  )
}

export default DashBoard;