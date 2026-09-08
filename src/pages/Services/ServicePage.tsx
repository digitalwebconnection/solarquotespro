import { CTA } from "../../components";
import AllServices from "../../components/sections/Services/AllServices";
import HeroService from "../../components/sections/Services/HeroService";
import WhyTrueSolar from "../../components/sections/Services/WhyTrueSolar";
// import ExploreSolar from "../../components/sections/Services/Sections/exploresolar/ExploreSolar";
// import HowSolarWork from "../../components/sections/Services/Sections/exploresolar/sections/HowSolarWork";


export default function ServicePage(){
    return(
        <main>
            <HeroService/>
            <AllServices/>
            <WhyTrueSolar/>
            <CTA/>
        </main>
    )
}