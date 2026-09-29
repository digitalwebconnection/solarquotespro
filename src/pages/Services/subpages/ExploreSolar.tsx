import HowSolarWorks from "../../../components/sections/Services/ExploreSolar/HowSolarWork"
import ExploreSolar from "../../../components/sections/Services/ExploreSolar/ExploreSolar"
import OurNumbers from "../../../components/sections/About/OurNumbers"
import SolarAnatomy from "../../../components/sections/Services/ExploreSolar/SolarAnatomy"
import ServiceCTA from "../../../components/sections/Services/ServiceCTA"


const ExploreSolarPage = () => {
    return (
        <>
            <ExploreSolar />
            <HowSolarWorks />
            <SolarAnatomy />
            <OurNumbers />
            <ServiceCTA service="solar" />
        </>
    )
}

export default ExploreSolarPage