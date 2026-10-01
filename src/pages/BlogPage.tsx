// import { CTA } from "../../components";
import Blog from "../components/sections/Blogs/Blogs";
import CTABlog from "../components/sections/Blogs/CTABlog";
import HeroBlog from "../components/sections/Blogs/HeroBlog";


export default function BlogPage() {
    return (
        <main>
            <HeroBlog />
            <Blog />
            <CTABlog />
        </main>
    )
}