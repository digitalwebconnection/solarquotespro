import HeroExploreHeatPump from "../../../components/sections/Services/ExploreHeatPump/HeroExploreHeatPump"
import HeatPumpType from "../../../components/sections/Services/ExploreHeatPump/HeatPumpType"
import HowPumpsWork from "../../../components/sections/Services/ExploreHeatPump/HowPumpsWork"
import WhatIsPump from "../../../components/sections/Services/ExploreHeatPump/WhatIsPump"
import ServiceCTA from "../../../components/sections/Services/ServiceCTA"



const ExploreHeatPumps = () => {
    return (
        <main>
            <HeroExploreHeatPump />
            <WhatIsPump />
            <HowPumpsWork />
            <HeatPumpType />
            <ServiceCTA service="heatPump" />
        </main>
    )
}

export default ExploreHeatPumps