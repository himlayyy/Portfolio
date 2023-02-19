import {DiReact,DiCss3} from "react-icons/di";
import {IoLogoFirebase} from "react-icons/io5";
import {SiTailwindcss,SiVite} from "react-icons/si";
import {FaShopify} from "react-icons/fa";

import PortfolioImg from "./PortfolioImg";
import PortfolioTitle from "./PortfolioTitle";
import PortfolioLink from "./PortfolioLink";

import { v4 as uuidv4 } from "uuid";

const iconNames = [
		"DiReact", 
		"DiCss3",
		"IoLogoFirebase",
		"SiTailwindcss",
		"SiVite",
		"FaShopify"
	]

const icons = [
		DiReact, 
		DiCss3,
		IoLogoFirebase,
		SiTailwindcss,
		SiVite,
		FaShopify
	]

function  PortfolioItem({project, callback, index}){

	const returnIndexOfIcon = (stack) => {
		let index = iconNames.indexOf(iconNames.find(icon => icon.includes(stack)));
		return index;
	}
	// {const Icon = icons[returnIndexOfIcon(item)];

	return(
		<div>
			<PortfolioTitle title={project.title} onClick={callback(index)} />
			<PortfolioLink link={project.link} />
			 <ul className="flex">{project.stack.map((item) => {
					const Icon = icons[returnIndexOfIcon(item)];
					return <Icon key={uuidv4()}/>
				}
			)}
			</ul>
			<PortfolioImg classes={"h-36 md:h-48"} src={project.imgUrl} alt={project.title} />
		</div>
	)
}

export default PortfolioItem;