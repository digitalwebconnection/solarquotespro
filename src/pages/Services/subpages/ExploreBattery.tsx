// import { CTA } from "../../../components"

import WhyBattery from "../../../components/sections/Services/ExploreBattery/WhyBattery"
import HowBatteryWorks from "../../../components/sections/Services/ExploreBattery/HowBatteryWorks"
// import PowerVsEnergy from "../../../components/sections/Services/Sections/explorebattery/PowerVsEnergy"
import BatteryTechnologies from "../../../components/sections/Services/ExploreBattery/BatteryTechnologies"
import HeroExploreBattery from "../../../components/sections/Services/ExploreBattery/HeroExploreBattery";
const ExploreBattery = () => {
    return (
        <>
            <HeroExploreBattery />
            <WhyBattery />
            <HowBatteryWorks />
            {/* <PowerVsEnergy/> */}
            <BatteryTechnologies />
            {/* <CTA/> */}
        </>
    )
}

export default ExploreBattery