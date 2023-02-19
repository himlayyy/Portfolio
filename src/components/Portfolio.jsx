import {useState} from "react";
import {projects} from "../data.js";
import PortfolioItemList from "./PortfolioItemList";
import PortfolioItemDetails from "./PortfolioItemDetails";
import PortfolioImg from "./PortfolioImg";
import PortfolioTitle from "./PortfolioTitle";
import SectionHeader from "./SectionHeader.jsx";
import { v4 as uuidv4 } from "uuid";

function Portfolio(){
	const [clicked, setClicked] = useState(projects[0]);
	
	const callback = (index) => {
		setClicked(projects[index]);
	}


	return(

			<div id="portfolio" className={"mb-14"}>
				<SectionHeader  section={"Portfolio"} />
				<ul className="flex gap-6 justify-start py-1 max-w-lg">
		          {projects.map((project, index) => {
		          	return <button className={`flex items-start justify-center font-nunito px-2 py-1 border text-white align-start text-left rounded shadow-md border border-pink-500 hover:shadow-lg hover:bg-pink-600  focus:shadow-lg  transition duration-150 ease-in-out ${clicked.title === project.title ? `bg-pink-800` : `` }`} onClick={() => callback(index)} key={uuidv4()}>
					          	<PortfolioTitle classes={"text-start"} title={project.title} />
							</button>
		          })}
			    </ul>
		        <PortfolioItemDetails classes={"text-white"} details={clicked}/>
			</div>


	)
};

export default Portfolio;

