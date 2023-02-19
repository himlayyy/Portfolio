import {AiOutlineCodepenCircle} from "react-icons/ai";
import {DiReact,DiCss3} from "react-icons/di";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {IoLogoFirebase} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import {SiTailwindcss,SiVite} from "react-icons/si";
import {FaShopify, FaPython} from "react-icons/fa";
import {MdQrCode} from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const iconNames = [
		"DiReact", 
		"DiCss3",
		"IoLogoFirebase",
		"SiTailwindcss",
		"SiVite",
		"FaShopify",
		"FaPython",
		"BsGithub",
		"BsLinkedin",
		"MdEmail",
		"AiOutlineCodepenCircle",
		"MdQrCode"

	]

const icons = [
		DiReact, 
		DiCss3,
		IoLogoFirebase,
		SiTailwindcss,
		SiVite,
		FaShopify,
		FaPython,
		BsGithub,
		BsLinkedin,
		MdEmail,
		AiOutlineCodepenCircle,
		MdQrCode
	]

function PortfolioIcon({item, classes, size=""}){

	const returnIndexOfIcon = (stack) => {
		let index = iconNames.indexOf(iconNames.find(icon => icon.includes(stack)));
		return index;
	}

	let Icon = icons[returnIndexOfIcon(item)];

	return(
			<Icon className={classes} size={size} key={uuidv4()}/>
	)
};

export default PortfolioIcon;