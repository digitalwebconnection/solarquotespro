import { HowItWorks } from "../components"
import BehindTheProcess from "../components/sections/HowItWorks/BehindTheProcess"
import HeroHowItWorks from "../components/sections/HowItWorks/HeroHowItWorks"

const HowItWorksPage = () => {
    return (
        <main>
            <HeroHowItWorks />
            <HowItWorks />
            <BehindTheProcess />
        </main>
    )
}

export default HowItWorksPage