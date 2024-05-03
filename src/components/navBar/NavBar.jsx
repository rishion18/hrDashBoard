import checklist from '../../assets/checklist.svg'
import notepad from '../../assets/notepad.svg'
import notepad2 from '../../assets/notepad2.svg'
import notepad3 from '../../assets/notepad3.svg'
import { GrAppsRounded } from "react-icons/gr";
import bag from '../../assets/bag.svg'
import handShake from '../../assets/handshake.svg'
import call from '../../assets/call.svg'
import apps from '../../assets/apps.svg'


const NavBar = () => {
    return (
        <nav className=" rounded-tr-2xl w-24 mt-24 h-[1900px] flex gap-20 flex-col items-center shadow-2xl bg-white">
           <img src={apps} alt='apps' className='w-5 h-5 mt-10'/>
           <img src={notepad} alt='notepad' className=' w-5 h-5'/>
           <img src={notepad} alt='notepad' className=' w-5 h-5'/>
           <img src={notepad2} alt='notepad' className='w-5 h-5'/>
           <img src={notepad3} alt='notepad' className='w-5 h-5'/>
           <img src={bag} alt='notepad' className='w-5 h-5'/>
           <img src={checklist} alt='notepad' className='w-5 h-5'/>
           <img src={handShake} alt='notepad' className='w-5 h-5'/>
           <img src={call} alt='notepad' className='w-5 h-5'/> 


        </nav>
    )
}

export default NavBar