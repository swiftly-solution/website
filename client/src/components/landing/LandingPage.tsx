import { Navbar } from "@/elements/Navbar";
import PageContentBlock from "@/elements/PageContentBlock";
import Intro from "./Intro";
import Features from "./Features";
import Community from "./Community";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <PageContentBlock title={"Home Page"}>
            <Navbar />
            <Intro />
            <Features />
            <Community />
            <Footer />
        </PageContentBlock>
    )
}