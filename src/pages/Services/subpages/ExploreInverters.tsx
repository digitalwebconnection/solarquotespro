import HeroExploreInverters from "../../../components/sections/Services/ExploreInverters/HeroExploreInverters"
import HowInverterWork from "../../../components/sections/Services/ExploreInverters/HowInverterWork"
import InverterCapacity from "../../../components/sections/Services/ExploreInverters/InverterCapacity"
import InverterTypes from "../../../components/sections/Services/ExploreInverters/InverterTypes"
import ServiceCTA from "../../../components/sections/Services/ServiceCTA"

const ExploreInverters = () => {
    return (
        <main>
            <HeroExploreInverters />
            <InverterCapacity />
            <HowInverterWork />
            <InverterTypes />
            <ServiceCTA service="inverters" />
        </main>
    )
}
export default ExploreInverters