
import { WhyChooseUs } from "../components"
import Testimonials from "../components/sections/Testimonials"
import CTAWhyUs from "../components/sections/WhyChoose/CTAWhyUs"
import HeroWhyChooseUs from "../components/sections/WhyChoose/HeroWhyChooseUs"
import SolarDesicion from "../components/sections/WhyChoose/SolarDecision"
import WhyNumbers from "../components/sections/WhyChoose/WhyNumbers"

const WhyChooseUsPage = () => {
    return (
        <main>
            <HeroWhyChooseUs />
            <SolarDesicion />
            <WhyNumbers />
            <WhyChooseUs />
            <CTAWhyUs />
            <Testimonials />
        </main>
    )
}

export default WhyChooseUsPage