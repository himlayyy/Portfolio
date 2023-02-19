import { contact } from "../data";
import PortfolioIcon from "./PortfolioIcons";

function CallToAction({classes, children, cta}){
	return(
		<button className={classes}>{cta}{children}</button>
		
	)
};

export default CallToAction;