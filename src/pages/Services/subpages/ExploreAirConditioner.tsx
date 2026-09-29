import AcProcess from "../../../components/sections/Services/ExploreAirConditioner/AcProcess"
import HeroExploreAirConditioner from "../../../components/sections/Services/ExploreAirConditioner/HeroExploreAirConditioner"
import HowAcWorks from "../../../components/sections/Services/ExploreAirConditioner/HowAcWorks"
import WhatIsAc from "../../../components/sections/Services/ExploreAirConditioner/WhatIsAc"
import ServiceCTA from "../../../components/sections/Services/ServiceCTA"

const ExploreAirConditionar = () => {
    return (
        <>
            <HeroExploreAirConditioner />
            <WhatIsAc />
            <HowAcWorks />
            <AcProcess />
            <ServiceCTA service="airConditioner" />
        </>
    )
}

export default ExploreAirConditionar