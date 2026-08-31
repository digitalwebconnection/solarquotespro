import { CTA } from "../../components"
import AllProjects from "../../components/sections/Projects/AllProjects"
import HeroProject from "../../components/sections/Projects/HeroProject"

export default function ProjectPage(){
    return(
        <section>

            <HeroProject/>
            <AllProjects/>
            <CTA/>
        </section>
    )
}