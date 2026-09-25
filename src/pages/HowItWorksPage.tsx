
import { HowItWorks } from "../components"
import BehindTheProcess from "../components/sections/HowItWorks/BehindTheProcess"
import CTAHowItWorks from "../components/sections/HowItWorks/CTAHowItWorks"
import HeroHowItWorks from "../components/sections/HowItWorks/HeroHowItWorks"
import WhatYouNeed from "../components/sections/HowItWorks/WhatYouNeed"

const HowItWorksPage = () => {
    return (
        <main>
            <HeroHowItWorks />
            <HowItWorks />
            <BehindTheProcess />
            <CTAHowItWorks />
            <WhatYouNeed />
        </main>
    )
}

export default HowItWorksPage