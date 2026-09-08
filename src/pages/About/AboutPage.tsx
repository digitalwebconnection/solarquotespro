
import AboutCompany from "../../components/sections/About/AboutCompany";
import  AboutHero from "../../components/sections/About/AboutHero";
import OurNumbers from "../../components/sections/About/OurNumbers";
import OurJourney from "../../components/sections/About/OurJourney"
import OurMission from "../../components/sections/About/OurMission";
import Leadership from "../../components/sections/About/Leadership";
import  CTA  from "../../components/sections/CTA";

export default function AboutPage(){
    return (
        <main>
            <AboutHero/>
            <AboutCompany/>
            <OurJourney/>
            <OurMission/>
            <OurNumbers/>
            <Leadership/>
            <CTA/>
        </main>    
    )

}