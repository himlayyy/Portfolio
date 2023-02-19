import SkillsIcons from "./SkillsIcons";
import CallToAction from "./CallToAction";
import { hero } from "../data";

import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero(){
	return(
		<>
			<div className="flex flex-col h-screen flex-shrink justify-around items-center content-between text-slate-500   m-auto max-w-lg" id="home">
				<div className="flex flex-col gap-6">
					<h1 className="font-readex font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">{hero.heading}</h1>
					<div className="text-gray-300 text-center ">
						{hero.subheading}
					</div>
					<div className="flex flex-row justify-center gap-6">
						<AnchorLink href="#contact">
							<CallToAction classes={"w-fit px-2 py-1  text-white rounded shadow-md border border-pink-500 bg-pink-600 hover:bg-pink-500 hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out bg-blue-500"} cta={"Get in touch"} />
							</AnchorLink>
					</div>
				</div>
				<SkillsIcons classes={"flex mt-2 mb-4 justify-self-"}/>
			</div>
			
		</>
	)
}

export default Hero;