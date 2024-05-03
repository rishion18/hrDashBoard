import Activities from "./Activities"
import StaticDateRangePickerDemo from "./DatePicker"
import DatePicker from "./DatePicker"
import Hiring from "./Hiring"
import Meetings from "./Meetings"
import PostedJobs from "./PostedJobs"
import Table from "./Table"
import Upcomings from "./Upcomings"

const OtherInfo = ()  => {
    return(
        <section className="flex w-full gap-7 mt-11 ">
            <div className="flex flex-col w-3/4">
                <Meetings/>
                <PostedJobs/>
                <Table/>
            </div>
            <div className="w-1/4 h-full overflow-x-hidden">
              <StaticDateRangePickerDemo/>
              <Upcomings/>
              <Activities/>
              <Hiring/>
            </div>

        </section>
    )
}

export default OtherInfo