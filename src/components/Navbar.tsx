import {FaXTwitter} from "react-icons/fa6"
import Loginbutton from "./Loginbutton";

const NavBar =  () => {
  return (
      <nav className="p-4 text-white flex justify-between items-center">
      <div className="grow">
        <img src="" alt="some image" />
      </div>
      <div className="grow flex gap-2 justify-end ">
          <Loginbutton style={"bg-black py-2 px-4 rounded flex justify-center items-center gap-2 flex-row-reverse"} text={"Login"}>
            <FaXTwitter/>
          </Loginbutton>
        </div>
    </nav>
  );
};

export default NavBar;
