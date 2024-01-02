import Loginbutton from "@/components/Loginbutton";
import NavBar from "@/components/Navbar";
import {MdKeyboardArrowRight} from 'react-icons/md'
function Home() {
  return (
    <>
      <NavBar/>
      <div className=" min-h-[80vh] flex flex-col gap-5 justify-center items-center md:text-center m-auto lg:w-3/5 ">
      <h1 className="text-5xl lg:font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-pink-600 p-4">Elevate Your Online Presence with Cutting-Edge Solutions</h1>
      <h3 className="p-4 text-2xl text-white">Empowering Individuals and Businesses to Thrive in the Digital Landscape Through Innovative Tools and Strategies</h3>
      <Loginbutton style={"text-2xl px-4 py-2 my-4 mx-2 flex gap-1 justify-center items-center rounded text-gray-950 bg-white hover:translate-x-1  transition-transform"} text={"Get Started"}>
        <MdKeyboardArrowRight/>
      </Loginbutton>
      </div>
    </>
  )
}

export default Home;