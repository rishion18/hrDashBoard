import user11 from '../../assets/user11.png'
import user12 from '../../assets/user12.png'
import user13 from '../../assets/user13.svg'

const Activities = () => {
    return(
        <div className="flex flex-col w-full my-5">
        <div className="flex w-full justify-between mt-5 items-center">
           <h1 className="mx-2 text-xl">Activity</h1>
           <a className="text-customBlue underline mx-2 text-xs font-semibold">View All</a>
        </div>
           <div className="flex w-full gap-5 items-center mt-10 mb-8 ml-2">
               <img src={user11} alt='user11'/>
               <div className="flex flex-col">
                   <p className="text-xs">interview with Designer<br/>created by Stella</p>
                   <p className=" text-xs">10am to 11pm</p>
               </div>
           </div>
           <div className="flex w-full gap-5 items-center my-8 ml-2">
               <img src={user12} alt='user11'/>
                <div className="flex flex-col">
                   <p className="text-xs">interview with Designer<br/>created by Stella</p>
                   <p className=" text-xs">10am to 11pm</p>
               </div>
           </div>
           <div className="flex w-full gap-5  items-center my-8 ml-2">
              <img src={user13} alt='user11'/>
              <div className="flex flex-col">
                   <p className="text-xs">interview with Designer<br/>created by Stella</p>
                   <p className=" text-xs">10am to 11pm</p>
               </div>
           </div>
        <div className="flex"></div>
     </div>        
    )
}

export default Activities