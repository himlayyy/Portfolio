import {headerItems, resumeLink} from "../data";
import { v4 as uuidv4 } from 'uuid';
import AnchorLink from "react-anchor-link-smooth-scroll";
import PortfolioItem from "./PortfolioItemList";
import CallToAction from "./CallToAction";
import PortfolioIcon from "./PortfolioIcons";

function Header(){
	return(
			<header className="flex flex-row max-w-5xl flex-shrink justify-between gap-10 items-center sticky top-0 bg-black py-2 m-auto font-nunito " id="#home">
					<div>
						<AnchorLink href={"#home"}>
							<PortfolioIcon classes={"fill-purple-400"} item={"MdQrCode"} size={"1.5rem"}/>
						</AnchorLink>
					</div>
					<div className="flex flex-row gap-2 sm:gap-6">
					{headerItems.map((item) => {
						return <AnchorLink offset="50" href={`#${item.toLowerCase()}`} key={uuidv4()}>
									<p  className="text-sm first:justify-start">{item}</p>
								</AnchorLink>
					})}
					</div>
					<CallToAction classes={"px-2 py-1 text-xs text-slate-50 rounded shadow-md  border border-pink-500 hover:shadow-lg hover:bg-pink-600 focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out"}> 
						{<a href={resumeLink}  target="_blank" rel="noopener noreferrer">Resume</a>}
					</CallToAction>
			</header>
	)
};

export default Header;


// bg-gradient-to-r from-purple-400 to-pink-600 text-center

{/*<AnchorLink href={`#${PortfolioItem}`}>
	<p key={uuidv4()} className="text-green-500 ">{item}</p>
</AnchorLink>*/}