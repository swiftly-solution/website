import Community from "@/components/landing/Community";
import Footer from "@/components/landing/Footer";
import Intro from "@/components/landing/Intro";
import Navbar from "@/components/landing/Navbar";
import PageContentBlock from "@/elements/PageContentBlock";
import dynamic from "next/dynamic";
import Snowfall from "react-snowfall";

const Features = dynamic(() => import("@/components/landing/Features"), { ssr: false })

export default function Home() {
	return (
		<PageContentBlock title={"Home Page"}>
			<Snowfall />
			<Navbar />
			<Intro />
			<Features />
			<Community />
			<Footer />
		</PageContentBlock>
	)
}