
import BehindTheProcess from "../components/sections/HowItWorks/BehindTheProcess"
import CTAHowItWorks from "../components/sections/HowItWorks/CTAHowItWorks"
import HeroHowItWorks from "../components/sections/HowItWorks/HeroHowItWorks"
import WhatYouNeed from "../components/sections/HowItWorks/WhatYouNeed"
import HowWorks from "../components/sections/HowItWorks/HowWorks"

const HowItWorksPage = () => {
    return (
        <main>
            <HeroHowItWorks />

            <BehindTheProcess />
            <HowWorks />
            <CTAHowItWorks />
            <WhatYouNeed />
        </main>
    )
}

export default HowItWorksPage