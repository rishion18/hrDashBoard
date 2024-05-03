import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'



const Hiring = () => {
    return (
        <div className="flex flex-col w-full my-5">
        <div className="flex w-full justify-between mt-5 items-center">
           <h1 className="mx-2 text-xl">Hiring Candidates</h1>
           <a className="text-customBlue underline mx-2 text-xs font-semibold">View All</a>
        </div>
           <div className="flex w-full justify-between items-center my-10 mx-2">
               <img src={pic1} alt='pic1'/>
               <div className="flex flex-col">
                   <p className="text-xs">John Doe<br/>python developer</p>
                   <p className=" text-xs">11 mins ago</p>
               </div>
               <button className="hover:bg-customBlue bg-white  py-1 h-8 text-customBlue hover:text-white w-20 flex justify-center border border-customBlue border-solid">Details</button>
           </div>
           <div className="flex w-full justify-between items-center my-10 ml-2">
           <img src={pic2} alt='pic1'/>

               <div className="flex flex-col">
                   <p className="text-xs">Simon Doe<br/>Senior python developer</p>
                   <p className=" text-xs">10 mins ago</p>
               </div>
               <button className="hover:bg-customBlue bg-white  py-1 h-8 text-customBlue hover:text-white w-20 flex justify-center border border-customBlue border-solid">Details</button>
           </div>
           <div className="flex w-full justify-between items-center my-10 ml-2">
           <img src={pic3} alt='pic1'/>

               <div className="flex flex-col">
                   <p className="text-xs">Jonathan Doe<br/>react developer</p>
                   <p className=" text-xs">10 mins ago</p>
               </div>
               <button className="hover:bg-customBlue bg-white  py-1 h-8 text-customBlue hover:text-white w-20 flex justify-center border border-customBlue border-solid">Details</button>
           </div>
        <div className="flex"></div>
     </div>       
    )
}

export default Hiring