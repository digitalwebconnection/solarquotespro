import { CTA } from "../../components";
import AllServices from "../../components/sections/Services/AllServices";
import HeroService from "../../components/sections/Services/HeroService";
import WhyTrueSolar from "../../components/sections/Services/WhyTrueSolar";
import ExploreSolar from "../../components/sections/Services/Sections/ExploreSolar";


export default function ServicePage(){
    return(
        <section>
            <HeroService/>
            <AllServices/>
            <WhyTrueSolar/>
            {/* <ExploreSolar/> */}
            <CTA/>
        </section>
    )
}