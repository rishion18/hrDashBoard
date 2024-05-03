const Upcomings = () => {
    return(
      <div className="flex flex-col w-full my-5">
         <div className="flex w-full justify-between mt-5 items-center">
            <h1 className="mx-2 text-xl">Upcomings</h1>
            <a className="text-customBlue underline mx-2 text-xs font-semibold">View All</a>
         </div>
            <div className="flex w-full justify-between items-center my-10 ml-2">
                <div className="flex flex-col items-center w-12 h-12 rounded-md bg-blue-300 px-2 py-2 text-xs">
                7th<br/>Feb
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">interview with Designer<br/>created by Stella</p>
                    <p className=" text-xs">10am to 11pm</p>
                </div>
                <button className="bg-customBlue py-1 h-8 text-white w-20 flex justify-center">Details</button>
            </div>
            <div className="flex w-full justify-between items-center my-10 ml-2">
                <div className="flex flex-col items-center w-12 h-12 rounded-md bg-slate-400 px-2 py-2 text-xs">
                7th<br/>Feb
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">interview with Designer<br/>created by Stella</p>
                    <p className=" text-xs">10am to 11pm</p>
                </div>
                <button className="bg-customBlue py-1 h-8 text-white w-20 flex justify-center">Details</button>
            </div>
            <div className="flex w-full justify-between items-center my-10 ml-2">
                <div className="flex flex-col items-center w-12 h-12 rounded-md bg-slate-200 px-2 py-2 text-xs">
                7th<br/>Feb
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">interview with Designer<br/>created by Stella</p>
                    <p className=" text-xs">10am to 11pm</p>
                </div>
                <button className="bg-customBlue py-1 h-8 text-white w-20 flex justify-center">Details</button>
            </div>
         <div className="flex"></div>
      </div>
    )
}
export default Upcomings