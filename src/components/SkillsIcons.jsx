import PortfolioIcons from "./PortfolioIcons";
import {skills} from "../data";
import {v4 as uuidv4} from "uuid";

function SkillsIcons({classes}){
	return(
		<ul className={classes}>{skills.map((item, index) => {
				return <PortfolioIcons item={item} classes={"fill-gray-200"}  key={uuidv4()} />
				}
			)}
		</ul>
	)
};

export default SkillsIcons;