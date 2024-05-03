import ChartSection from "./ChartSection"
import OtherInfo from "./OtherInfo"
import TextBody from "./TextBody"

const MainBody = () => {
    return(
        <section className="mt-24 ml-10 w-[1350px] overflow-hidden">
          <TextBody/>
          <ChartSection/>
          <OtherInfo/>
        </section>
    )
}
export default MainBody