import HeroExploreEvCharging from "../../../components/sections/Services/ExploreEvCharging/HeroExploreEvCharging"
import HowChargerWorks from "../../../components/sections/Services/ExploreEvCharging/HowChargerWorks"
import TypesOfEv from "../../../components/sections/Services/ExploreEvCharging/TypesOfEv"
import ServiceCTA from "../../../components/sections/Services/ServiceCTA"


const ExploreEvCharging = () => {
    return (
        <>
            <HeroExploreEvCharging />
            <HowChargerWorks />
            <TypesOfEv />
            <ServiceCTA service="evCharging" />
        </>
    )
}

export default ExploreEvCharging