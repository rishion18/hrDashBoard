import logo from '../../assets/logo-1 1.png'
import { CiSearch } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import userHeader from '../../assets/user_header.png'

const HeaderSection = () => {
    return(
        <header className="flex justify-between h-[100px] shadow-lg bg-white overflow-hidden">
           <div className="flex mx-5 gap-16 items-center">
              <img src={logo} alt="logo" className='w-[180px]'/>
              <div className='flex w-[350px] h-11 shadow-lg items-center justify-between'>
              <input type='text' placeholder='search' className='ml-3'/>
              <CiSearch className=" w-7 h-7 mx-3"  />
              </div>
           </div>
           <div className='flex gap-[90px] mx-5 items-center'>
              <GoSun className=' w-5 h-5'/>
              <FaWhatsapp className=' w-5 h-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/>
              <IoIosNotificationsOutline className=' w-5 h-5'/>
              <IoSettingsOutline className=' w-5 h-5'/>
              <img src={userHeader} alt='user-header' className=' w-6 h-6'/>
           </div>
        </header>
    )
}

export default HeaderSection