import {useState} from "react";

import JobTitle from "./JobTitle";
import JobDuration from "./JobDuration";
import JobCompany from "./JobCompany";

function Job({classes, job}){
	const [clicked, setClicked] = useState(false);

	return(
		<div className={classes}>
			<div className={"sm:w-4/12 "}>
				<JobDuration classes={"text-xs "} duration={job.duration} />
			</div>
			<div className="flex flex-col justify-between sm:w-8/12 ">
				<JobTitle classes={"font-semibold"} title={job.jobTitle}/>
				<JobCompany company={job.company} />
				<button type="button"
    					data-mdb-ripple="true"
    					data-mdb-ripple-color="light" 
    					
    					className={`w-fit px-2 py-1 border border-pink-500 text-white align-start text-left text-xs rounded shadow-md hover:shadow-lg hover:bg-pink-600  focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out
    					
    					    ${clicked && "bg-pink-800"}`}

    					onClick={() => setClicked(!clicked)}>
    					{!clicked ? "Show details" : "Hide details"}
    			</button>
				{clicked && (
						<ul className="pl-4 py-2">{job.duties.map((duty) => {
							return <li className="list-disc text-sm">{duty}</li>
							})}
						</ul>
					)
				}
			</div>

		</div>
	)
};

export default Job;

