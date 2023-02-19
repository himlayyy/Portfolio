import {useState} from "react";
import PortfolioImg from "./PortfolioImg";
import PortfolioIcons from "./PortfolioIcons";
import PortfolioLink from "./PortfolioLink";
import PortfolioTitle from "./PortfolioTitle";
import { v4 as uuidv4 } from "uuid";

function PortfolioItemDetails({classes="", details}){
	const [clicked, setClicked] =  useState(0);

	const setImage = (index) => {
		setClicked(index);
	}

	return(
		<div className="flex py-5 w-full flex-col-reverse sm:flex-row ">
			<div className="sm:w-4/12 font-nunito ">
				<PortfolioTitle classes={"font-inherit font-semibold "} title={details.title} />
				<PortfolioLink link={details.link} classes={"flex justify-start align-center font-inherit text-sm mb-4"} linkClasses={"flex align-start text-purple-400"} iconClasses={"my-auto"}/>
				
				<ul className="flex mt-2 mb-4">{details.stack.map((item, index) => {
						return <PortfolioIcons item={item} classes={"fill-gray-200"}  key={uuidv4()} />
						}
					)}
				</ul>
				
				<div className="text-sm">{details.details}</div>
			</div>
			<div className="flex-1 gap-6  sm:w-8/12 h-full">
				<PortfolioImg url={details.imgUrl[clicked]} alt={`${details.title} main`} index={clicked}/>
				<div className="flex py-3  gap-3">
					{details.imgUrl.map((img, index) => {
						return <PortfolioImg classes={"w-12 h-auto"} url={img} index={index} key={uuidv4()} alt={`${details.title}-${index}`} callback={setImage} />
					})}
				</div>
			</div>
		</div>
	)
};

export default PortfolioItemDetails;