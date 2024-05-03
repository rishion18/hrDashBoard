import { BsThreeDotsVertical } from "react-icons/bs";
import arrow from '../../assets/arrow.png'

const JobCard = ({name ,  logo}) => {
    return(
       <div className="flex flex-none flex-col items-center w-[250px] shadow-2xl mt-5 mb-5">
          <div className="flex justify-between gap-2 items-center w-full border-b-2 border-slate-200 mx-1">
             <div className="flex mb-2">
                <img src={logo} alt={name} className="mx-5"/>
                <p>{name}</p>
             </div>
             <BsThreeDotsVertical className="mx-5"/>
          </div>
          <div className="flex flex-col w-full gap-5 items-center">
             <p className="mt-5">senior developer</p>
             <div className="w-14 h-14 bg-customBlue text-white flex justify-center items-center text-2xl">
                250
             </div>
             <p className="mb-5">Total applicants</p>
          </div>
          <div className="flex justify-between w-full border-t-2 border-slate-200 mx-1">
             <div className="flex items-center gap-3 mx-5 my-3">
                 <img src={arrow} alt="'arrow"/>
                 <p className="text-xs">28% vs last year</p>
             </div>
             <p className="mx-5 mt-3 text-xs">6 mins ago</p>
          </div>
       </div>
    )
}

export default JobCard