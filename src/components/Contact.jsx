import SectionHeader from "./SectionHeader";
import ContactItem from "./ContactItem";
import {contact} from "../data";
import {v4 as uuidv4} from "uuid";

function Contact(){

	return(
		<div className="h-[70vh]" id="contact">
			<SectionHeader section={"Contact"} />
			<ul >
				
				{contact.map(({icon, link, text}) =>{
					return <li className={"font-inherit mb-4 font-nunito"} key={uuidv4()}>
							<ContactItem  icon={icon} link={link} text={text} />
							</li>
				} )}
			</ul>
		</div>
	)
};

export default Contact;