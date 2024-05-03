import { BsThreeDotsVertical } from "react-icons/bs";
import user1 from '../../assets/user1.png'
import calender from '../../assets/calender.png'
import clock from '../../assets/clock.png'

const Meetings = () => {
  return(
      <div className="flex flex-col shadow-xl">
          <div className="flex items-center justify-between mx-1 mb-2 border-b-2 border-slate-500">
              <h2 className="mx-2 mt-5 mb-2">Today interviews meeting info</h2>
              <BsThreeDotsVertical className="mx-2 mt-5"/>
          </div>
            <div className="w-full overflow-x-scroll mb-5">
                <div className="flex w-full mb-5">
                    <div className="w-[800px] flex flex-none border border-black border-solid mt-5 ml-3 box-border border-collapse">
                        <div className="flex flex-col w-1/3 h-full">
                            <div className="box-border flex flex-col items-center justify-center border border-collapse border-black border-solid">
                                <img src={user1} alt="user1" className="w-24 h-24 mt-5"/>
                                <p className="text-sm">John Smith</p>
                                <p className="mb-3 text-sm">Python developer</p>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col items-center justify-center w-1/2 py-2 border border-collapse border-black border-solid">
                                    <img src={calender} alt="calender"/>
                                    <p className="mt-1 text-xs">19th feb 2024</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/2 py-2 border border-collapse border-black border-solid">
                                    <img src={clock} alt="clock"/>
                                    <p className="mt-1 text-xs">10:30 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-2/3 h-full">
                            <div className="grid w-full grid-cols-2 grid-rows-4 h-2/3">
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                            </div>
                            <div className="flex items-center justify-center w-full gap-5 h-1/3">
                                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium p-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-[150px] text-xs">Reschedule meeting</button>
                                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium p-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-[150px] text-xs">Join meeting</button>
                            </div>
                        </div>                         
                    </div>
                    <div className="w-[800px] flex flex-none border border-black border-solid mt-5 ml-3 box-border border-collapse">
                        <div className="flex flex-col w-1/3 h-full">
                            <div className="box-border flex flex-col items-center justify-center border border-collapse border-black border-solid">
                                <img src={user1} alt="user1" className="w-24 h-24 mt-5"/>
                                <p className="text-sm">John Smith</p>
                                <p className="mb-3 text-sm">Python developer</p>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col items-center justify-center w-1/2 py-2 border border-collapse border-black border-solid">
                                    <img src={calender} alt="calender"/>
                                    <p className="mt-1 text-xs">19th feb 2024</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/2 py-2 border border-collapse border-black border-solid">
                                    <img src={clock} alt="clock"/>
                                    <p className="mt-1 text-xs">10:30 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-2/3 h-full">
                            <div className="grid w-full grid-cols-2 grid-rows-4 h-2/3">
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid">
                                        <p className="mb-1 text-xs">something</p>
                                    </div>
                            </div>
                            <div className="flex items-center justify-center w-full gap-5 h-1/3">
                                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium p-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-[150px] text-xs">Reschedule meeting</button>
                                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium p-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-[150px] text-xs">Join meeting</button>
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Meetings;

{/* <div className="flex flex-col h-2/3">
<div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid h-1/4">
    <p className="mb-1 text-xs">something</p>
</div>
<div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid h-1/4">
    <p className="mb-1 text-xs ">something</p>
</div>
<div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid h-1/4">
    <p className="mb-1 text-xs ">something</p>
</div>
<div className="flex flex-col items-center justify-end w-full border border-collapse border-black border-solid h-1/4">
    <p className="mb-1 text-xs ">something</p>
</div>
</div> */}
