import PortfolioIcon from "./PortfolioIcons";

function ContactItem({classes="", icon, link,text}){
	return(


		<div className="w-fit hover:fill-pink-600 text-purple-400" >
			<a className="flex flex-row  gap-4 " href={link} target="_blank" rel="noopener noreferrer">

			<PortfolioIcon item={icon} classes={"my-auto  fill-gray-200"} />
			{text}
			</a>
		</div>
	)
};

export default ContactItem;