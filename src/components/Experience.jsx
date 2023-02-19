import Job from "./Job";
import SectionHeader from "./SectionHeader";
import { experience } from "../data.js";
import { v4 as uuidv4 } from "uuid";

function Experience(){
	return(
		<div id="experience" className={"mb-14"}>
			<SectionHeader section={"Experience"} />
			{experience.map((exp) => {
				return <Job classes={"flex flex-col font-nunito py-4 sm:flex-row border-gray-900 odd:border-b even:border-b last:border-none" } job={exp} key={uuidv4()}/>
			})}
		</div>
	)
}

export default Experience; 