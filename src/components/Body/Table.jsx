import { CiSearch } from "react-icons/ci";
import TableCard from "./TableCard";


const Table = () => {
    return (
        <div className="flex flex-col bg-white shadow-xl mt-12">
            <div className="flex justify-between items-center my-5">
                <div className="flex gap-10 justify-between items-center mx-5">
                   <h1 className="text-2xl font-semibold">Candidate status</h1>
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
            <div className="overflow-x-scroll">
              <TableCard/>
            </div>
        </div>        
    )
}

export default Table