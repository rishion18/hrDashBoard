import girl_big from '../../assets/girl_big.png'
import checkListBox from '../../assets/checkListBox.png'
import girl_small from '../../assets/girl_small.png'
import BarChart from './BarChart'

const ChartSection = () => {
    return(
        <section className="flex gap-10 mt-11">
          <div className=" w-[755px] h-[300px] flex justify-center bg-white shadow-2xl pl-10">
            <BarChart/>
          </div>
          <div className="w-[554px] h-[300px] bg-gradient-to-r from-customBlue to-customGreen relative">
          <div className='flex flex-col ml-7 mt-12 gap-5'>
            <div className=' w-20 h-20 bg-white flex justify-center items-center'>
                <img src={checkListBox} alt='checkListBox' className='w-10'/>
            </div>
            <p className=' text-[40px] font-semibold text-white w-20'>0033</p>
            <div className='flex gap-[180px] items-center'>
                <p className='text-white'>New Assessments</p>
                <button className='w-[140px] bg-white p-3 flex justify-center items-center'>View Details</button>
            </div>
          </div>
            <img src={girl_big} alt='girl' 
                 className='absolute w-[210px] right-0 -top-10'
            />
            <img src={girl_small} alt='girl' 
                 className='absolute right-40 top-11 w-[100px]'
            />
          </div>
        </section>
    )
}

export default ChartSection