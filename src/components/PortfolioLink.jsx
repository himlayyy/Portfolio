import {BiLinkAlt} from "react-icons/bi";

function PortfolioLink({classes="", linkClasses="", iconClasses="", link}){
	return(
		<div className={classes}>	
			<BiLinkAlt className={iconClasses}/>
			<a className={linkClasses} href={link}> 
				{link} 
			</a>
			
		</div>
	)
};

export default PortfolioLink;