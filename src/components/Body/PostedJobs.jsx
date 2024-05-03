import { CiSearch } from "react-icons/ci";
import JobCard from "./JobCard";
import python from '../../assets/python.png'
import angular from '../../assets/angular.png'
import java from '../../assets/java 1.png'
import ui from '../../assets/ui.png'

const PostedJobs = () => {

const jobs = [{name: 'python' , logo: python} , {name: 'Angular' , logo: angular} , {name: 'Java' , logo: java} , {name: 'UI/UX Designer' , logo: ui}]

    return(
        <div className="flex flex-col bg-white shadow-xl mt-12">
            <div className="flex justify-between items-center my-5">
                <div className="flex gap-10 justify-between items-center mx-5">
                   <h1 className="text-2xl font-semibold">Posted Jobs</h1>
                   <a className="text-customBlue underline cursor-pointer">View all</a>
                </div>
                <div className="flex gap-3 justify-between items-center mx-5">
                    <div className='flex w-[350px] bg-white h-11 shadow-lg items-center justify-between'>
                        <input type='text' placeholder='search' className='ml-3'/>
                        <CiSearch className=" w-7 h-7 mx-3"  />
                    </div>
                    <div className='flex justify-center items-center w-[150px] bg-white h-11 shadow-lg'>
                        Filters
                    </div>
                </div>
            </div>
            <div className="flex gap-20 border-b-2 border-slate-500 mx-5">
               <a>Active jobs</a>
               <a>Pending jobs</a>
            </div>
            <div className="flex gap-3 mx-5 overflow-x-scroll">
               {
                jobs?.map(item => <JobCard name={item.name} logo={item.logo}/>)
               }
            </div>
        </div>
    )
}

export default PostedJobs