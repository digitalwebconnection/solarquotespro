import { CTA } from "../../../components"
import HeroBattery from "../../../components/sections/Services/Sections/explorebattery/HeroBattery"
import WhyBattery from "../../../components/sections/Services/Sections/explorebattery/WhyBattery"
import HowBatteryWorks from "../../../components/sections/Services/Sections/explorebattery/HowBatteryWorks"
import PowerVsEnergy from "../../../components/sections/Services/Sections/explorebattery/PowerVsEnergy"
import BatteryTechnologies from "../../../components/sections/Services/Sections/explorebattery/BatteryTechnologies"

const ExploreBattery = () => {
    return(
        <>
        <HeroBattery/>
        <WhyBattery/>
        <HowBatteryWorks/>
        <PowerVsEnergy/>
        <BatteryTechnologies/>
        <CTA/>
        </>
    )
}

export default ExploreBattery